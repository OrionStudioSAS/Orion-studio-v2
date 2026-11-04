import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille4 } from '../../components/shared/MoCommentOnTravaille4'
import { MoFt2 } from '../../components/shared/MoFt2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Site internet</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Création de site internet<span className="serif">qui travaille pour votre entreprise.</span>
      </h1>
      <p className="mo-lead">
        Site vitrine, site dynamique ou site concept : on conçoit, on code et on met en ligne le site qui
        correspond à ce que vous devez faire en ligne, rapide, simple à mettre à jour et pensé pour faire
        venir des demandes.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn">Analyser mon site</a>
        <Link to="/realisations" className="btn btn-ghost mo-btn">
          Voir nos réalisations
        </Link>
      </div>
    </section>
  )
}

function MoMedia() {
  return (
    <div className="mo-media mg-media xp-mmedia">
      <div className="hm-layer">
        <img className="mo-media-bg" src="/images/0d11aa412fec08.jpg" alt="" />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="px omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>Quel site refait-on ce soir ?</span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-site.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Design
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Mobile
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              SEO
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Conversion
            </span>
          </div>
          <div className="mo-cfoot">
            <span className="ib">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1V13M1 7H13" stroke="#0E0E0C" strokeWidth="1.4" />
              </svg>
            </span>
            <span className="ib">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3H15M1 11H15" stroke="#0E0E0C" strokeWidth="1.4" />
                <rect
                  x="4"
                  y="1"
                  width="3"
                  height="4"
                  rx="1"
                  fill="#fff"
                  stroke="#0E0E0C"
                  strokeWidth="1.4"
                />
                <rect
                  x="9"
                  y="9"
                  width="3"
                  height="4"
                  rx="1"
                  fill="#fff"
                  stroke="#0E0E0C"
                  strokeWidth="1.4"
                />
              </svg>
            </span>
            <span className="send mo-send">Analyser mon site</span>
          </div>
        </div>
        <div className="mo-sug">
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire mon site vitrine</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-ca3eed21.svg" alt="" width={10} height={10} />
            <b>Vendre ou réserver en ligne</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
            <b>Être cité par ChatGPT</b>
          </span>
        </div>
        <div className="ch2-note mo-note">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.7" y="5" width="8.6" height="6.3" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M2.6 5V3.4C2.6 2 3.7 0.9 5 0.9C6.3 0.9 7.4 2 7.4 3.4V5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          <span>
            Gratuit. Analyse de votre site et maquette de page d’accueil personnalisée, par e-mail sous
            quelques jours.
          </span>
        </div>
      </div>
      <div className="mo-capt">Une villa sur la Riviera, 18 h 30</div>
    </div>
  )
}

function TroisTypesDeSite() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Trois types de site,<span className="serif">selon ce qu’il doit faire.</span>
        </h2>
        <p className="mo-lead">
          Le même soin dans les trois cas. Ce qui change, c’est ce que le site doit faire pour vous.
        </p>
      </div>
      <div className="xpm-types">
        <article className="xpm-type">
          <div className="sxm-ui">
            <div className="win xp-cwin">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">votre-entreprise.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <div className="xp-vv">
                  <img src="/images/1547cebce5d492.png" alt="" />
                  <div className="xp-vv-b">
                    <b>Votre entreprise</b>
                    <div className="wire" style={{ border: 'none', padding: '0' }}>
                      <i style={{ width: '80%' }} />
                      <i style={{ width: '55%' }} />
                    </div>
                    <span className="shop-cta">Demander un devis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>
            <img className="px picon" src="/px/picon-5d9e4e01.svg" alt="" width={20} height={20} />
            Site vitrine
          </h3>
          <p className="serif">pour présenter et être contacté.</p>
          <p className="xp-type-d">
            Votre activité, vos services, vos réalisations et vos avis présentés clairement, avec un
            formulaire qui pose les bonnes questions. Un site que vous mettez à jour vous-même.
          </p>
          <ul>
            <li>Pages de présentation et de services</li>
            <li>Réalisations et avis clients</li>
            <li>Formulaire de contact ou de devis</li>
            <li>Fiche Google et SEO local</li>
          </ul>
          <span className="xp-type-m">Artisans, cabinets, commerces, indépendants</span>
          <Link
            to="/expertises/site-vitrine"
            className="btn btn-ghost mo-btn mo-btn-full"
            data-exp="site-vitrine"
          >
            Voir plus
          </Link>
        </article>
        <article className="xpm-type">
          <div className="sxm-ui">
            <div className="win win-shot sx-real">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">moulin-de-balme.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/87791a3fdc31ca.jpg"
                  alt="Capture du site du Moulin de Balme"
                />
              </div>
            </div>
          </div>
          <h3>
            <img className="px picon" src="/px/picon-c328b51d.svg" alt="" width={20} height={20} />
            Site dynamique
          </h3>
          <p className="serif">pour vendre, réserver et gérer.</p>
          <p className="xp-type-d">
            Un site relié à un back-office : catalogue, commandes, réservations, actualités ou espace client,
            mis à jour par votre équipe au quotidien.
          </p>
          <ul>
            <li>Boutique en ligne ou click & collect</li>
            <li>Réservation et prise de rendez-vous</li>
            <li>Espace client ou espace membres</li>
            <li>Back-office pour votre équipe</li>
          </ul>
          <span className="xp-type-m">Exemples : Château l’Arc Golf Club, Le Moulin de Balme</span>
          <Link
            to="/expertises/site-dynamique"
            className="btn btn-ghost mo-btn mo-btn-full"
            data-exp="site-dynamique"
          >
            Voir plus
          </Link>
        </article>
        <article className="xpm-type">
          <div className="sxm-ui">
            <div className="win xp-cwin">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">votre-lancement.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <div className="xp-cv">
                  <img src="/images/b665a1ab308a17.png" alt="" />
                  <div className="xp-cv-t">
                    <b>Votre histoire,</b>
                    <span className="serif">scène par scène.</span>
                  </div>
                  <div className="xp-cv-sc">
                    <i className="on" />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>
            <img className="px picon" src="/px/picon-ba26fc59.svg" alt="" width={20} height={20} />
            Site concept
          </h3>
          <p className="serif">pour marquer les esprits.</p>
          <p className="xp-type-d">
            Un site pensé comme une expérience : direction artistique forte, animations et récit qui se
            déroule au scroll. Pour un lancement, une marque ou une campagne, parfois sur une seule page.
          </p>
          <ul>
            <li>Direction artistique poussée</li>
            <li>Animations et transitions</li>
            <li>Récit au fil du scroll</li>
            <li>Page de lancement ou de campagne</li>
          </ul>
          <span className="xp-type-m">Lancements, nouvelles marques, campagnes</span>
          <Link
            to="/expertises/site-concept"
            className="btn btn-ghost mo-btn mo-btn-full"
            data-exp="site-concept"
          >
            Voir plus
          </Link>
        </article>
      </div>
    </section>
  )
}

function CeQuOnLivre() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’on livre<span className="serif">concrètement.</span>
        </h2>
        <p className="mo-lead">
          Chaque projet assemble les briques dont vous avez besoin, pas une de plus. Les écrans ci-dessous
          sont des exemples.
        </p>
      </div>
      <div className="sxm-cards">
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="spec u-bare">
              <span className="spec-aa">Aa</span>
              <span className="spec-it">Aa</span>
              <div className="sw">
                <i style={{ background: '#0E0E0C' }} />
                <i style={{ background: '#77776F' }} />
                <i style={{ background: '#E3E3DE' }} />
                <i style={{ background: '#FF4D1A' }} />
              </div>
            </div>
          </div>
          <h3>Direction artistique & UI</h3>
          <p>Typographies, couleurs, composants : une identité qui se reconnaît en un écran.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="flow u-bare">
              <span className="fl-n">Accueil</span>
              <span className="fl-l" />
              <span className="fl-n">Services</span>
              <span className="fl-l" />
              <span className="fl-n fl-on">Contact</span>
              <div className="wire">
                <i style={{ width: '70%' }} />
                <i style={{ width: '45%' }} />
                <i className="blk" />
              </div>
            </div>
          </div>
          <h3>Maquettes & prototype</h3>
          <p>Chaque page dessinée dans Figma et validée avant la première ligne de code.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ui-sl">
              <div className="ul-h">Version mobile · Page contact</div>
              <div className="rs-s sl-g">
                <span className="">Appeler</span>
                <span className="">Itinéraire</span>
                <span className="on">Devis</span>
                <span className="">Horaires</span>
              </div>
              <div className="shop-cta">Demander un devis</div>
            </div>
          </div>
          <h3>Mobile d’abord</h3>
          <p>Vos clients vous découvrent souvent sur leur téléphone : on dessine d’abord pour lui.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Contenus du site</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Pages</span>
                <b>12</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Actualités</span>
                <b>24</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Équipe</span>
                <b>6</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Témoignages</span>
                <b>Brouillon</b>
              </div>
              <div className="shop-cta ul-btn">Modifier une page</div>
            </div>
          </div>
          <h3>Back-office simple</h3>
          <p>Webflow, WordPress ou CMS sur mesure, selon ce que votre équipe sait déjà utiliser.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Contrôle avant mise en ligne</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Images optimisées</span>
                <b>OK</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Contrastes lisibles</span>
                <b>OK</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Navigation au clavier</span>
                <b>OK</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Temps de chargement</span>
                <b>Rapide</b>
              </div>
            </div>
          </div>
          <h3>Performance & accessibilité</h3>
          <p>Des pages légères, lisibles par tous et bien notées par Google.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="serp u-bare">
              <div className="serp-q">
                <svg
                  className="c-ic"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="9" r="7.4" stroke="#77776F" strokeWidth="1.2" />
                  <path
                    d="M1.6 9H16.4M9 1.6C11 3.6 11.9 6.2 11.9 9C11.9 11.8 11 14.4 9 16.4M9 1.6C7 3.6 6.1 6.2 6.1 9C6.1 11.8 7 14.4 9 16.4"
                    stroke="#77776F"
                    strokeWidth="1.2"
                  />
                </svg>
                <span>menuisier nantes</span>
              </div>
              <div className="serp-r">
                <span className="serp-u">votre-site.fr</span>
                <b>Menuiserie sur mesure à Nantes — Votre entreprise</b>
                <span className="serp-d">Fenêtres, portes et agencement. Devis gratuit sous 48 h.</span>
              </div>
            </div>
          </div>
          <h3>SEO de base inclus</h3>
          <p>Balises, structure, redirections et données structurées dès la mise en ligne.</p>
        </article>
      </div>
    </section>
  )
}

function ExpertisesAssociees() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Expertises<span className="serif">associées.</span>
        </h2>
      </div>
      <div className="xpm-rel">
        <Link
          to="/expertises/developpement-applications"
          className="rl xpm-rl"
          data-exp="developpement-applications"
        >
          <img className="px picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <div>
            <b>Développement d’applications</b>
            <span>Applications web, espaces clients, SaaS.</span>
          </div>
        </Link>
        <Link to="/expertises/seo" className="rl xpm-rl" data-exp="seo">
          <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <div>
            <b>SEO</b>
            <span>Remonter sur Google.</span>
          </div>
        </Link>
        <Link to="/expertises/automatisations" className="rl xpm-rl" data-exp="automatisations">
          <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
          </div>
        </Link>
      </div>
    </section>
  )
}

function VosQuestionsNosReponses() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Vos questions,<span className="serif">nos réponses.</span>
        </h2>
      </div>
      <div className="mo-faq">
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte un site internet ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            Chaque projet est chiffré sur devis après un premier échange. Le prix dépend du nombre de pages,
            des fonctionnalités (réservation, boutique, espace client) et du niveau de sur-mesure. Dans le
            formulaire de contact, vous indiquez une fourchette de budget : on vous oriente vers la bonne
            approche dès le premier appel.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien de temps faut-il pour un site ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges.
            Une boutique ou une application demande davantage : le planning est fixé dans le devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Webflow, Shopify, WordPress ou code sur mesure ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            On choisit selon votre projet et votre équipe : Webflow pour un site vitrine que vous gérez
            facilement, Shopify pour l’e-commerce, du code sur mesure (Next.js, React) pour les applications
            et les besoins spécifiques.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourrai-je modifier mon site seul ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images, pages
            et actualités se modifient sans connaissances techniques.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Reprenez-vous un site existant ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            Oui, après un audit. On vous dit franchement s’il vaut mieux le faire évoluer ou repartir de zéro,
            et pourquoi.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo xp-page">
      <MobileNav />
      <MoHero />
      <MoMedia />
      <TroisTypesDeSite />
      <CeQuOnLivre />
      <MoCommentOnTravaille4 />
      <ExpertisesAssociees />
      <VosQuestionsNosReponses />
      <MoFt2 />
    </section>
  )
}
