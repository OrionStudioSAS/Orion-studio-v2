/**
 * Après le build : écrit le HTML de chaque page (contenu, titre, description, données structurées),
 * le sitemap et le robots.txt. Google et les IA lisent ainsi les pages sans exécuter le JavaScript.
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssr = join(root, 'dist-ssr')

const { render, ROUTES, SERVICES, SITE, TITLES, ORG_DESCRIPTION, HOME_DESCRIPTION } = await import(
  pathToFileURL(join(ssr, 'prerender.js')).href
)

const shell = readFileSync(join(dist, 'index.html'), 'utf8')
// la coquille vide sert aux adresses inconnues (page introuvable)
writeFileSync(join(dist, 'spa.html'), shell)

/* ---------- texte ---------- */
const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
const text = (html) =>
  decode(html.replace(/<!--.*?-->/gs, '').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,:;!?…»)])/g, (m, p) => (/[:;!?»]/.test(p) ? '\u202f' + p : p))
    .trim()
const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const cut = (s, n = 160) => {
  if (s.length <= n) return s
  const c = s.slice(0, n)
  return c.slice(0, c.lastIndexOf(' ')).replace(/[,;:]$/, '') + '…'
}
const firstLead = (html) => {
  const m = html.match(/<p class="(?:lead|mo-lead)[^"]*"[^>]*>(.*?)<\/p>/s)
  if (m) return text(m[1])
  // sinon, le premier vrai paragraphe de la page
  for (const p of html.matchAll(/<p(?:\s[^>]*)?>(.*?)<\/p>/gs)) {
    const s = text(p[1])
    if (s.length > 80) return s
  }
  return ''
}
const firstH1 = (html) => {
  const m = html.match(/<h1[^>]*>(.*?)<\/h1>/s)
  return m ? text(m[1]) : ''
}
const short = (title) => title.replace(/ — Orion Studio$/, '').replace(/^Orion Studio — /, '')

/* ---------- données structurées ---------- */
const ORG_ID = `${SITE}/#org`
const ORG = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'Orion Studio',
  url: `${SITE}/`,
  logo: `${SITE}/favicon.svg`,
  image: `${SITE}/images/bc42c16dc85167.png`,
  email: 'hello@orion-studio.io',
  description: ORG_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    postalCode: '75008',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  // basés à Paris, mais on travaille partout en France, à distance
  areaServed: { '@type': 'Country', name: 'France' },
  availableLanguage: ['fr', 'en'],
  knowsAbout: [
    'Création de site internet',
    'Site e-commerce Shopify',
    'Développement d’applications web',
    'SaaS',
    'SEO',
    'GEO',
    'SEA',
    'Automatisation',
  ],
}
const WEBSITE = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: `${SITE}/`,
  name: 'Orion Studio',
  inLanguage: 'fr-FR',
  publisher: { '@id': ORG_ID },
}
const FRANCE = { '@type': 'Country', name: 'France' }

// les étapes du fil d'Ariane qui ont leur propre page
const CRUMB_PARENTS = { 'pour-qui': ['Pour qui ?', '/pour-qui'], realisations: ['Réalisations', '/realisations'], ressources: ['Ressources', '/ressources'] }

function crumbs(path, name) {
  const items = [['Accueil', '/']]
  const first = path.split('/')[1]
  if (CRUMB_PARENTS[first] && path !== CRUMB_PARENTS[first][1]) items.push(CRUMB_PARENTS[first])
  items.push([name, path])
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + p })),
  }
}

const faqPage = (url, pairs) =>
  pairs.length && {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: pairs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

function graph(route, html, title, description) {
  const url = SITE + (route.path === '/' ? '/' : route.path)
  const name = short(title)
  const page = {
    '@type': 'WebPage',
    '@id': url,
    url,
    name: title,
    description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': ORG_ID },
  }
  const out = [ORG, WEBSITE, page]
  if (route.path !== '/') out.push(crumbs(route.path, name))

  const v = route.view
  if (route.path.startsWith('/expertises/')) {
    out.push({
      '@type': 'Service',
      name,
      serviceType: name,
      description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: FRANCE,
    })
    const faq = (SERVICES[v] && SERVICES[v].faq) || []
    const f = faqPage(url, faq.map((x) => [x.q, x.a]))
    if (f) out.push(f)
  } else if (route.path.startsWith('/creation-site-internet/')) {
    const city = name.replace(/^Création de site internet à /, '')
    out.push({
      '@type': 'Service',
      name,
      serviceType: 'Création de site internet',
      description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'City', name: city },
    })
  } else if (route.path.startsWith('/pour-qui/')) {
    out.push({
      '@type': 'Service',
      name,
      serviceType: 'Création de site internet',
      description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: FRANCE,
      audience: { '@type': 'BusinessAudience', name: name.replace(/^Site internet pour |^Boutique en ligne pour /, '') },
    })
  } else if (route.path.startsWith('/realisations/')) {
    out.push({
      '@type': 'CreativeWork',
      name: name.replace(/, étude de cas$/, ''),
      description,
      url,
      creator: { '@id': ORG_ID },
    })
  } else if (route.path.startsWith('/ressources/')) {
    out.push({
      '@type': 'Article',
      headline: firstH1(html) || name,
      description,
      url,
      inLanguage: 'fr-FR',
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
    })
  } else if (route.path === '/faq') {
    const pairs = [...html.matchAll(/<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gs)].map((m) => [text(m[1]), text(m[2])])
    const f = faqPage(url, pairs)
    if (f) out.push(f)
  }
  return { '@context': 'https://schema.org', '@graph': out }
}

/* ---------- pages ---------- */
// le HTML pré-rendu reste caché aux visiteurs : l'application le remplace dès son chargement.
// Ses images et vidéos ne se chargent pas (paresseuses, dans un bloc masqué).
const quiet = (html) =>
  html
    .replace('<div class="stage">', '<div class="stage" data-pre="">')
    .replace(/<img(?![^>]*\bloading=)/g, '<img loading="lazy"')
    .replace(/<(video|source)([^>]*?)\s(src|poster)=/g, '<$1$2 data-$3=')
    .replace(/<(video|source)([^>]*?)\s(src|poster)=/g, '<$1$2 data-$3=')

const today = new Date().toISOString().slice(0, 10)
const urls = []
const pages = ROUTES.filter((r) => r.path !== '*')

for (const route of pages) {
  const html = await render(route.path)
  const title = TITLES[route.view] || `${firstH1(html)} — Orion Studio`
  const description = cut(route.path === '/' ? HOME_DESCRIPTION : firstLead(html) || ORG_DESCRIPTION)
  const url = SITE + (route.path === '/' ? '/' : route.path)
  const head = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Orion Studio" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:title" content="${attr(title)}" />`,
    `<meta property="og:description" content="${attr(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}/images/bc42c16dc85167.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<style>#root>[data-pre]{display:none}</style>`,
    `<script type="application/ld+json">${JSON.stringify(graph(route, html, title, description)).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')

  const page = shell
    .replace(/<title>.*?<\/title>/s, `<title>${attr(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, `$1${attr(description)}$2`)
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${quiet(html)}</div>`)

  const file = route.path === '/' ? join(dist, 'index.html') : join(dist, route.path.slice(1) + '.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, page)
  if (!/^\/(mentions-legales|confidentialite)$/.test(route.path)) urls.push(url)
}

/* ---------- sitemap et robots ---------- */
const prio = (u) => (u === `${SITE}/` ? '1.0' : /\/expertises\/|\/creation-site-internet\//.test(u) ? '0.8' : '0.6')
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod><priority>${prio(u)}</priority></url>`).join('\n')}
</urlset>
`,
)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)

rmSync(ssr, { recursive: true, force: true })
console.log(`pré-rendu : ${pages.length} pages, sitemap de ${urls.length} adresses`)
