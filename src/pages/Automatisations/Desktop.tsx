import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Automatisations</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Automatisez vos tâches répétitives,</span>
        <span className="serif">payez sur les heures gagnées.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          On commence par une demi-journée dans vos locaux, offerte, pour observer vos process et repérer ce
          qui peut tourner tout seul. Ensuite, notre rémunération est calculée sur les heures que ces
          automatisations font gagner à vos équipes.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink" data-au="audit">
              Demander un audit sur place
            </a>
            <a className="btn btn-ghost" data-au="pay">
              Comment on facture
            </a>
          </div>
          <div className="proof">
            <svg
              className="pxstar"
              width="13.5"
              height="12"
              viewBox="0 0 13.5 12"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
              <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
              <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            </svg>
            <span>5/5 sur Google · Paris · FR / EN</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media ax-media">
      <div className="hm-layer">
        <img src="/images/71429f3644f5e0.png" alt="Moulin à eau en pixel art, qui tourne tout seul" />
      </div>
      <div className="ax-notes">
        <div className="ax-nh">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <b>Notes de visite</b>
          <span>Audit sur place</span>
        </div>
        <div className="ax-nb">
          <div className="ax-nr" data-auto="1">
            <span className="ax-np">Accueil</span>
            <span className="ax-nt">Les demandes du site recopiées dans le CRM</span>
            <span className="ax-nv">
              <i />
              Automatisable
            </span>
          </div>
          <div className="ax-nr" data-auto="1">
            <span className="ax-np">Commercial</span>
            <span className="ax-nt">Devis refaits à la main depuis un modèle Word</span>
            <span className="ax-nv">
              <i />
              Automatisable
            </span>
          </div>
          <div className="ax-nr" data-auto="1">
            <span className="ax-np">Administratif</span>
            <span className="ax-nt">Relances des factures impayées, une par une</span>
            <span className="ax-nv">
              <i />
              Automatisable
            </span>
          </div>
          <div className="ax-nr" data-auto="0">
            <span className="ax-np">Atelier</span>
            <span className="ax-nt">Conseiller le client au téléphone</span>
            <span className="ax-nv">
              <i />
              Reste humain
            </span>
          </div>
          <div className="ax-nr" data-auto="1">
            <span className="ax-np">Direction</span>
            <span className="ax-nt">Tableau de suivi mis à jour chaque lundi</span>
            <span className="ax-nv">
              <i />
              Automatisable
            </span>
          </div>
        </div>
        <div className="ax-nf">
          <span className="ax-pen" />
          Exemple de notes prises pendant un audit
        </div>
      </div>
      <div className="capt">
        Le moulin tourne tout seul, 11 h — <b>Orion</b> veille
      </div>
    </div>
  )
}

function VousPayezLesHeures() {
  return (
    <section className="sec ax-pay" id="ax-pay" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Vous payez
          <br />
          <span className="serif">les heures gagnées.</span>
        </h2>
        <p className="lead">
          Après l’audit, on mesure avec vous le temps que prend chaque tâche. Une fois automatisée, la
          différence devient la base de notre rémunération.
        </p>
      </div>
      <div className="ax-pay-in">
        <div className="ax-hrs">
          <div className="ax-hr">
            <span className="ax-hl">Avant</span>
            <div className="ax-cells">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="ax-hr ax-hr2">
            <span className="ax-hl">Après</span>
            <div className="ax-cells">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
              <i className="g" />
            </div>
          </div>
          <div className="ax-leg">
            <span>
              <i />
              Temps encore passé à la main
            </span>
            <span>
              <i className="g" />
              Heures gagnées, la base de notre rémunération
            </span>
          </div>
        </div>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Un coût lié au résultat</h3>
          <p>Notre rémunération suit les heures que vos équipes gagnent, tâche par tâche.</p>
        </div>
        <div className="oc">
          <h3>Le même objectif que vous</h3>
          <p>
            On a tout intérêt à ce que chaque automatisation tienne dans la durée : on la surveille et on la
            corrige.
          </p>
        </div>
        <div className="oc">
          <h3>Un tarif fixé après l’audit</h3>
          <p>
            Le montant par heure gagnée se décide avec vous, une fois qu’on sait ce qui est automatisable chez
            vous.
          </p>
        </div>
      </div>
    </section>
  )
}

function LAuditDansVos() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          L’audit,
          <br />
          <span className="serif">dans vos locaux.</span>
        </h2>
        <p className="lead">
          Les tâches qui coûtent le plus de temps ne se voient pas en visio. On vient les observer là où elles
          se font.
        </p>
      </div>
      <div className="ax-audit">
        <div className="ax-fiche">
          <div className="ax-fh">
            <b>Audit sur place</b>
            <span>Fiche d’intervention</span>
          </div>
          <div className="ax-fr">
            <span>Durée</span>
            <b>Une demi-journée minimum</b>
          </div>
          <div className="ax-fr">
            <span>Coût</span>
            <b>Offert</b>
          </div>
          <div className="ax-fr">
            <span>Lieu</span>
            <b>Dans vos locaux</b>
          </div>
          <div className="ax-fr">
            <span>À la fin</span>
            <b>La liste des tâches automatisables, par priorité</b>
          </div>
          <a className="btn btn-ink ax-fb" data-au="audit">
            Réserver l’audit
          </a>
        </div>
        <ol className="ax-visit">
          <li>
            <b>On suit vos équipes</b>
            <span>
              On observe le travail tel qu’il se fait, poste par poste, avec les outils que vous utilisez
              déjà.
            </span>
          </li>
          <li>
            <b>On note chaque tâche qui revient</b>
            <span>
              Ressaisies, copier-coller, relances, exports : tout ce qui se répète chaque jour ou chaque
              semaine.
            </span>
          </li>
          <li>
            <b>On trie</b>
            <span>
              Ce qui peut être automatisé d’un côté, ce qui doit rester entre les mains de vos équipes de
              l’autre.
            </span>
          </li>
          <li>
            <b>On vous restitue</b>
            <span>Vous repartez avec la liste des tâches automatisables, par ordre de priorité.</span>
          </li>
        </ol>
      </div>
    </section>
  )
}

function QuEstCeQui() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Qu’est-ce qui revient
          <br />
          <span className="serif">chaque semaine chez vous ?</span>
        </h2>
        <p className="lead">
          Cochez ce que vous reconnaissez. Votre liste part avec votre demande d’audit, on commencera par là.
        </p>
      </div>
      <div className="ax-pick">
        <div className="ax-gs">
          <fieldset className="ax-g">
            <legend>Ventes & clients</legend>
            <label className="ax-t">
              <input type="checkbox" value="Recopier les demandes du site dans le CRM" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Recopier les demandes du site dans le CRM</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Préparer les devis à partir d’un modèle" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Préparer les devis à partir d’un modèle</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Relancer les devis sans réponse" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Relancer les devis sans réponse</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Répondre aux mêmes questions par e-mail" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Répondre aux mêmes questions par e-mail</span>
            </label>
          </fieldset>
          <fieldset className="ax-g">
            <legend>Administratif</legend>
            <label className="ax-t">
              <input type="checkbox" value="Saisir les factures fournisseurs" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Saisir les factures fournisseurs</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Relancer les factures impayées" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Relancer les factures impayées</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Envoyer les pièces au comptable" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Envoyer les pièces au comptable</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Classer les documents reçus par e-mail" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Classer les documents reçus par e-mail</span>
            </label>
          </fieldset>
          <fieldset className="ax-g">
            <legend>Équipe</legend>
            <label className="ax-t">
              <input type="checkbox" value="Planifier les interventions ou les rendez-vous" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Planifier les interventions ou les rendez-vous</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Faire passer l’information d’un service à l’autre" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Faire passer l’information d’un service à l’autre</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Remplir les mêmes tableaux à plusieurs" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Remplir les mêmes tableaux à plusieurs</span>
            </label>
          </fieldset>
          <fieldset className="ax-g">
            <legend>Pilotage</legend>
            <label className="ax-t">
              <input type="checkbox" value="Compiler les chiffres de la semaine" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Compiler les chiffres de la semaine</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Exporter des données d’un outil à l’autre" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Exporter des données d’un outil à l’autre</span>
            </label>
            <label className="ax-t">
              <input type="checkbox" value="Suivre les stocks à la main" />
              <span className="ax-box">
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span>Suivre les stocks à la main</span>
            </label>
          </fieldset>
        </div>
        <aside className="ax-list" aria-live="polite">
          <div className="ax-lh">
            <b>Votre liste pour l’audit</b>
            <span className="ax-lc">Aucune tâche</span>
          </div>
          <ul className="ax-lu" />
          <p className="ax-le">
            Cochez les tâches que vous reconnaissez : on commencera l’audit par celles-là.
          </p>
          <a className="btn btn-acc ax-lb" data-au="list">
            Demander l’audit avec cette liste
          </a>{' '}
          <span className="ax-ln">Autre chose ? On en parle sur place.</span>
        </aside>
      </div>
    </section>
  )
}

function CeQuOnAutomatise() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on automatise
          <br />
          <span className="serif">le plus souvent.</span>
        </h2>
        <p className="lead">
          Les écrans ci-dessous sont des exemples. L’audit dit lesquels comptent chez vous.
        </p>
      </div>
      <div className="gcells">
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="auto u-bare">
                <div className="au-n">
                  <b>Formulaire de contact</b>
                  <span>Nouvelle demande</span>
                </div>
                <span className="au-l" />
                <div className="au-n">
                  <b>CRM</b>
                  <span>Fiche créée</span>
                </div>
                <span className="au-l" />
                <div className="au-n au-on">
                  <b>Commercial</b>
                  <span>Notifié</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Formulaires → CRM</h3>
            <p>Chaque demande arrive dans votre CRM, qualifiée et attribuée.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Devis D-2026-031</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Généré depuis le CRM</span>
                  <b>Fait</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Envoyé au client</span>
                  <b>Fait</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Signé en ligne</span>
                  <b>Fait</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Facture créée</span>
                  <b>En cours</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Devis & facturation</h3>
            <p>Devis générés, envoyés, signés puis facturés sans ressaisie.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Séquence de relance</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>J+0 · Envoi du devis</span>
                  <b>Envoyé</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>J+3 · Relance douce</span>
                  <b>Envoyée</b>
                </div>
                <div className="ul-r">
                  <i className="sq" />
                  <span>J+7 · Appel planifié</span>
                  <b>À venir</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Relances automatiques</h3>
            <p>Des relances polies, au bon moment, qui s’arrêtent dès que le client répond.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="u-bare um">
                <div className="msg msg-l">
                  <b>Orion · automatisation</b>Nouvelle demande de devis : menuiserie, Paris 11e, budget
                  indiqué.
                </div>
                <div className="msg msg-r">
                  <b>Équipe commerciale</b>Je la prends.
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Alertes à l’équipe</h3>
            <p>La bonne personne prévenue au bon moment, là où elle travaille déjà.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ub">
                <div className="ul-h">Demandes reçues par semaine</div>
                <div className="bars">
                  <i style={{ height: '40px' }} />
                  <i style={{ height: '52px' }} />
                  <i style={{ height: '48px' }} />
                  <i style={{ height: '66px' }} />
                  <i style={{ height: '58px' }} />
                  <i style={{ height: '74px' }} />
                  <i style={{ height: '70px' }} />
                  <i style={{ height: '88px' }} />
                  <i style={{ height: '80px' }} />
                  <i style={{ height: '96px' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Tableaux de bord</h3>
            <p>Vos chiffres clés à jour chaque matin, sans export ni macro.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Outil retenu selon le cas</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Petit volume, outils standards</span>
                  <b>Make</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Données sensibles, hébergé chez vous</span>
                  <b>n8n</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Logique métier complexe</span>
                  <b>Code</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>No-code ou code</h3>
            <p>Make, Zapier, n8n ou développement sur mesure, selon le volume et la sécurité.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function CommentOnTravaille() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Comment
          <br />
          <span className="serif">on travaille.</span>
        </h2>
        <p className="lead">
          Une seule équipe de l’audit au suivi. Vous suivez chaque étape dans Orion Admin.
        </p>
      </div>
      <div className="steps s-steps">
        <div className="pixbar">
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-cur" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
        </div>
        <div className="st-row" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div className="st ">
            <h3>
              <i />
              Audit sur place
            </h3>
            <p>Une demi-journée minimum dans vos locaux, offerte.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Priorités
            </h3>
            <p>On choisit avec vous par quoi commencer.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Mise en place
            </h3>
            <p>Automatisations construites et testées sur vos vraies données.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Suivi
            </h3>
            <p>Alertes en cas d’erreur, ajustements au fil de l’eau.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChezNousAussi() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">Chez nous aussi</h2>
        <Link to="/realisations" className="lnk">
          Toutes les réalisations
        </Link>
      </div>
      <div className="pf">
        <article className="pf-p">
          <div className="p-media">
            <img src="/images/c44f7ec507e0ad.png" alt="" />
            <div className="win win-shot win-adm">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/94f1f7140db692.jpg"
                  alt="Accueil d’Orion Admin pour le Château l’Arc Golf Club"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">Orion Admin</h3>
            <span className="p-tag">Espace client · inclus dans chaque projet</span>
          </div>
          <p className="p-desc">
            Orion Admin automatise le suivi de nos propres projets : étapes, documents et messages au même
            endroit.
          </p>
        </article>
        <div className="rv pf-q">
          <p className="rv-q">
            « Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps. »
          </p>
          <div className="rv-by">
            <div className="q-stars">
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
            </div>
            <b>Thierry Cordier</b>Association des Entrepreneurs du Vexin · Avis Google
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertisesAssociees() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Expertises associées</h2>
      </div>
      <div className="rls">
        <Link to="/expertises/developpement-applications" className="rl">
          <img className="pxsvg picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <div>
            <b>Développement d’applications</b>
            <span>Applications web, espaces clients, SaaS.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/site-internet" className="rl">
          <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Sites vitrines et refontes sur mesure.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/google-ads" className="rl">
          <img className="pxsvg picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <div>
            <b>Google Ads</b>
            <span>Des campagnes qui rapportent des contacts.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
      </div>
    </section>
  )
}

function QuestionsFrequentes() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Questions
            <br />
            <span className="serif">fréquentes.</span>
          </h2>
          <p className="lead">
            L’audit, la facturation, vos outils : les réponses aux questions qu’on nous pose le plus.
          </p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>L’audit est-il payant ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Non, il est offert. On passe au moins une demi-journée dans vos locaux pour observer vos
              process.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien coûte une automatisation ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Vous payez à l’heure économisée : notre rémunération est calculée sur le temps que les
              automatisations font gagner à vos équipes. Le tarif est fixé avec vous après l’audit.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Quels outils utilisez-vous ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Make, Zapier ou n8n pour la plupart des automatisations, et du code sur mesure quand le volume,
              la sécurité ou la logique métier l’exigent. On part toujours de vos outils actuels.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Faut-il changer nos logiciels ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Pas forcément : on part de vos outils actuels et on les relie entre eux quand ils le permettent.
              Si l’un d’eux bloque, on vous le dit pendant l’audit.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Que se passe-t-il si une automatisation tombe en panne ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Chaque automatisation envoie une alerte en cas d’erreur. On la corrige, et on ajuste au fil de
              l’eau.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Nos données sont-elles en sécurité ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Pour les données sensibles, l’outil d’automatisation (n8n) peut être installé sur vos propres
              serveurs : vos données restent chez vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GCta() {
  return (
    <div className="g-cta">
      <Footer>
        <div className="cta">
          <h2>
            Combien d’heures perdez-vous<span className="serif">chaque semaine ? On vient les compter.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <Link to="/realisations" className="btn btn-line">
                Voir nos réalisations
              </Link>
              <a className="btn btn-acc" data-au="audit">
                Demander un audit <span className="kbd">↵</span>
              </a>
            </div>
            <span className="mail">
              ou écrivez à <b>hello@orion-studio.io</b>
            </span>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export function Desktop() {
  return (
    <section className="artboard g-page s-page ax-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <VousPayezLesHeures />
      <LAuditDansVos />
      <QuEstCeQui />
      <CeQuOnAutomatise />
      <CommentOnTravaille />
      <ChezNousAussi />
      <ExpertisesAssociees />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
