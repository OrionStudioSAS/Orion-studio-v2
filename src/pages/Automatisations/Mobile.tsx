import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Automatisations</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Automatisez vos tâches répétitives,<span className="serif">payez sur les heures gagnées.</span>
      </h1>
      <p className="mo-lead">
        On commence par une demi-journée dans vos locaux, offerte, pour observer vos process et repérer ce qui
        peut tourner tout seul. Ensuite, notre rémunération est calculée sur les heures que ces
        automatisations font gagner à vos équipes.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn" data-au="audit">
          Demander un audit sur place
        </a>
        <a className="btn btn-ghost mo-btn" data-au="pay">
          Comment on facture
        </a>
      </div>
    </section>
  )
}

function MoMedia() {
  return (
    <div className="mo-media ax-mmedia">
      <div className="hm-layer">
        <img
          className="mo-media-bg"
          src="/images/71429f3644f5e0.png"
          alt="Moulin à eau en pixel art, qui tourne tout seul"
        />
      </div>
      <div className="ax-notes ax-notes-m">
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
    </div>
  )
}

function VousPayezLesHeures() {
  return (
    <section className="mo-sec" id="ax-mpay">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Vous payez<span className="serif">les heures gagnées.</span>
        </h2>
        <p className="mo-lead">
          Après l’audit, on mesure avec vous le temps que prend chaque tâche. Une fois automatisée, la
          différence devient la base de notre rémunération.
        </p>
      </div>
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
          </div>
        </div>
        <div className="ax-hr ax-hr2">
          <span className="ax-hl">Après</span>
          <div className="ax-cells">
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
      <div className="sxm-ocs" style={{ marginTop: '32px' }}>
        <div className="sxm-oc">
          <h3>Un coût lié au résultat</h3>
          <p>Notre rémunération suit les heures que vos équipes gagnent, tâche par tâche.</p>
        </div>
        <div className="sxm-oc">
          <h3>Le même objectif que vous</h3>
          <p>
            On a tout intérêt à ce que chaque automatisation tienne dans la durée : on la surveille et on la
            corrige.
          </p>
        </div>
        <div className="sxm-oc">
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
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          L’audit,<span className="serif">dans vos locaux.</span>
        </h2>
        <p className="mo-lead">
          Les tâches qui coûtent le plus de temps ne se voient pas en visio. On vient les observer là où elles
          se font.
        </p>
      </div>
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
            On observe le travail tel qu’il se fait, poste par poste, avec les outils que vous utilisez déjà.
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
    </section>
  )
}

function QuEstCeQui() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Qu’est-ce qui revient<span className="serif">chaque semaine chez vous ?</span>
        </h2>
        <p className="mo-lead">Cochez ce que vous reconnaissez : on commencera l’audit par là.</p>
      </div>
      <div className="ax-pick ax-pick-m">
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
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’on automatise<span className="serif">le plus souvent.</span>
        </h2>
        <p className="mo-lead">
          Les écrans ci-dessous sont des exemples. L’audit dit lesquels comptent chez vous.
        </p>
      </div>
      <div className="sxm-cards">
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Formulaires → CRM</h3>
          <p>Chaque demande arrive dans votre CRM, qualifiée et attribuée.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Devis & facturation</h3>
          <p>Devis générés, envoyés, signés puis facturés sans ressaisie.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Relances automatiques</h3>
          <p>Des relances polies, au bon moment, qui s’arrêtent dès que le client répond.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Alertes à l’équipe</h3>
          <p>La bonne personne prévenue au bon moment, là où elle travaille déjà.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Tableaux de bord</h3>
          <p>Vos chiffres clés à jour chaque matin, sans export ni macro.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>No-code ou code</h3>
          <p>Make, Zapier, n8n ou développement sur mesure, selon le volume et la sécurité.</p>
        </article>
      </div>
    </section>
  )
}

function CommentOnTravaille() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Comment<span className="serif">on travaille.</span>
        </h2>
        <p className="mo-lead">Une seule équipe de l’audit au suivi.</p>
      </div>
      <ol className="sxm-steps">
        <li>
          <b>Audit sur place</b>
          <span>Une demi-journée minimum dans vos locaux, offerte.</span>
        </li>
        <li>
          <b>Priorités</b>
          <span>On choisit avec vous par quoi commencer.</span>
        </li>
        <li>
          <b>Mise en place</b>
          <span>Automatisations construites et testées sur vos vraies données.</span>
        </li>
        <li>
          <b>Suivi</b>
          <span>Alertes en cas d’erreur, ajustements au fil de l’eau.</span>
        </li>
      </ol>
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
            <span>L’audit est-il payant ?</span>
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
            Non, il est offert. On passe au moins une demi-journée dans vos locaux pour observer vos process.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte une automatisation ?</span>
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
            Vous payez à l’heure économisée : notre rémunération est calculée sur le temps que les
            automatisations font gagner à vos équipes. Le tarif est fixé avec vous après l’audit.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Quels outils utilisez-vous ?</span>
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
            Make, Zapier ou n8n pour la plupart des automatisations, et du code sur mesure quand le volume, la
            sécurité ou la logique métier l’exigent. On part toujours de vos outils actuels.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Faut-il changer nos logiciels ?</span>
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
            Pas forcément : on part de vos outils actuels et on les relie entre eux quand ils le permettent.
            Si l’un d’eux bloque, on vous le dit pendant l’audit.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Que se passe-t-il si une automatisation tombe en panne ?</span>
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
            Chaque automatisation envoie une alerte en cas d’erreur. On la corrige, et on ajuste au fil de
            l’eau.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Nos données sont-elles en sécurité ?</span>
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
            Pour les données sensibles, l’outil d’automatisation (n8n) peut être installé sur vos propres
            serveurs : vos données restent chez vous.
          </p>
        </div>
      </div>
    </section>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Combien d’heures perdez-vous<span className="serif">chaque semaine ? On vient les compter.</span>
        </h2>
        <a className="btn btn-acc mo-btn" data-au="audit">
          Demander un audit
        </a>{' '}
        <Link to="/realisations" className="btn btn-line mo-btn">
          Voir nos réalisations
        </Link>{' '}
        <span className="mail">
          ou écrivez à <b>hello@orion-studio.io</b>
        </span>
      </div>
      <div className="mo-ft-main">
        <span className="logo">
          <img className="pxsvg logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
          <img className="pxsvg logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
        </span>
        <p>
          Studio de design et de développement web basé à Paris. Sites sur-mesure, e-commerce, applications et
          visibilité.
        </p>
        <div className="mo-fcols">
          <div className="mo-fc">
            <div className="fc-k">Expertises</div>
            <Link to="/expertises/site-internet">Site internet</Link>
            <Link to="/expertises/developpement-applications">Développement d’applications</Link>
            <Link to="/expertises/automatisations">Automatisations</Link>
            <Link to="/expertises/seo">SEO</Link>
            <Link to="/expertises/geo">GEO</Link>
            <Link to="/expertises/google-ads">Google Ads</Link>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Pour qui ?</div>
            <Link to="/pour-qui/tpe-pme">TPE & PME</Link>
            <Link to="/pour-qui/golfs">Golfs</Link>
            <Link to="/pour-qui/independants">Indépendants</Link>
            <Link to="/pour-qui/marques-e-commerce">Marques & e-commerçants</Link>
            <Link to="/pour-qui/start-up">Start-up</Link>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Studio</div>
            <Link to="/realisations">Réalisations</Link>
            <Link to="/le-studio">Le studio</Link>
            <a>Contact</a>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Ressources</div>
            <Link to="/ressources">Articles</Link>
            <Link to="/ressources?cat=guides">Guides</Link>
            <Link to="/faq">Questions fréquentes</Link>
          </div>
        </div>
        <div className="mo-fcards">
          <div className="mo-fcard">
            <div>
              <b>Paris</b>
              <span>60 rue François Ier, 75008</span>
            </div>
            <a>Itinéraire</a>
          </div>
          <div className="mo-fcard">
            <div>
              <b>Partout ailleurs</b>
              <span>France et international, en visio</span>
            </div>
            <a>Réserver</a>
          </div>
          <div className="mo-fcard">
            <div>
              <b>Un appel ?</b>
              <span>30 minutes avec Julien ou Théo</span>
            </div>
            <a>Réserver</a>
          </div>
          <div className="mo-fcard">
            <div>
              <b>Suivre</b>
              <span>LinkedIn · Instagram</span>
            </div>
            <a>Coulisses</a>
          </div>
        </div>
      </div>
      <div className="mo-sky">
        <div className="hm-layer">
          <img src="/images/bf5a322d7f4ded.png" alt="Le ciel et la constellation d’Orion, en pixels" />
          <img
            className="pxsvg bigword"
            src="/px/bigword-a5329b0d.svg"
            alt=""
            width={416}
            height={40}
            style={{ left: '-13px', top: '132px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '193px', top: '88px' }} />
          <span className="orio" style={{ left: '91px', top: '34px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="pxsvg" src="/px/art-c8610941.svg" alt="" width={88} height={92} />
            </span>
          </span>
        </div>
        <div className="mo-legal">
          <div className="ft-lang">
            <span className="on">Français</span>
            <span>English</span>
          </div>
          <div className="mo-legal-l">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
          </div>
          <span>© 2026 Orion Studio SAS — RCS 938 775 368</span>
        </div>
      </div>
    </footer>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo ax-page">
      <MobileNav />
      <MoHero />
      <MoMedia />
      <VousPayezLesHeures />
      <LAuditDansVos />
      <QuEstCeQui />
      <CeQuOnAutomatise />
      <CommentOnTravaille />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
