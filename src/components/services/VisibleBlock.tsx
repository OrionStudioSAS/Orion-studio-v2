import { Link } from 'react-router-dom'
import type { ServiceId } from './servicesData'

const QUERIES: Partial<Record<ServiceId, [string, string]>> = {
  'site-internet': ['plombier à Lyon', 'Quel plombier me conseilles-tu à Lyon ?'],
  'site-vitrine': ['cabinet comptable à Nantes', 'Quel cabinet comptable me conseilles-tu à Nantes ?'],
  'site-dynamique': ['réserver un restaurant à Bordeaux', 'Où réserver un bon restaurant à Bordeaux ?'],
  'site-concept': ['nouvelle marque de cosmétiques', 'Quelle nouvelle marque de cosmétiques découvrir ?'],
  'e-commerce': ['acheter du thé bio en ligne', 'Où acheter du bon thé bio en ligne ?'],
}

/** Le référencement, mis en avant : la même recherche, sur Google et auprès d'une IA. */
export function VisibleBlock({ id, mobile = false }: { id: ServiceId; mobile?: boolean }) {
  const [query, ask] = QUERIES[id] ?? QUERIES['site-internet']!
  return (
    <section className={mobile ? 'xv xv-m' : 'xv'}>
      <div className="xv-h">
        {mobile ? (
          <h2 className="mo-h2">
            Référencé sur Google,<span className="serif">et par les IA.</span>
          </h2>
        ) : (
          <h2 className="h2">
            Référencé sur Google,
            <br />
            <span className="serif">et par les IA.</span>
          </h2>
        )}
        <div className="xv-t">
          <p>
            Vos clients vous cherchent sur Google, et ils posent aussi la question à ChatGPT. Votre site est
            construit pour répondre aux deux. Un SEO complet et un GEO complet sont inclus dans le devis, pour
            chacun de nos clients.
          </p>
          <div className="xv-l">
            <Link to="/expertises/seo" className="lnk">
              Le SEO
            </Link>
            <Link to="/expertises/geo" className="lnk">
              Le GEO
            </Link>
          </div>
        </div>
      </div>
      <div className="xv-g">
        <div className="xv-c">
          <div className="xv-k">Sur Google</div>
          <div className="xv-w">
            SEO complet : technique, vitesse, contenus, fiche Google, suivi des positions.
          </div>
          <div className="xv-q" data-t={query}>
            {query}
          </div>
          <div className="xv-rows">
            <div className="xv-r xv-you">
              <b>Votre entreprise</b>
              <span>votre-site.fr · Vos services, vos avis, vos coordonnées.</span>
            </div>
            <div className="xv-r xv-o">
              <i />
              <i />
            </div>
            <div className="xv-r xv-o">
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="xv-c">
          <div className="xv-k">Sur les IA</div>
          <div className="xv-w">
            GEO complet : réponses claires, données structurées, sources citées, suivi dans les IA.
          </div>
          <div className="xv-ask">{ask}</div>
          <div
            className="xv-ans"
            data-t="Voici une adresse qui correspond à votre demande : Votre entreprise. Ses services, ses avis et ses coordonnées sont clairement présentés sur son site."
          >
            Voici une adresse qui correspond à votre demande : Votre entreprise. Ses services, ses avis et ses
            coordonnées sont clairement présentés sur son site.
          </div>
          <span className="xv-src">votre-site.fr</span>
        </div>
      </div>
      <p className="xv-n">
        Exemple d’illustration. Personne ne peut garantir une première place : on s’engage sur un travail
        mesurable.
      </p>
    </section>
  )
}
