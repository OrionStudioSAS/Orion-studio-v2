import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { GCta2 } from '../../components/shared/GCta2'

function Hero() {
  return (
    <section className="hero lg-hero">
      <div className="crumb">
        <Link to="/">
          Orion Studio / <b>Confidentialité</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Confidentialité</span>
      </h1>
      <p className="lead lg-lead">
        Ce que nous faisons de vos données quand vous nous écrivez, et comment garder la main dessus.
      </p>
      <span className="lg-upd">Dernière mise à jour : 4 novembre 2026</span>
    </section>
  )
}

function LgBody() {
  return (
    <div className="lg-body">
      <aside className="lg-toc">
        <div className="a-k">Sommaire</div>
        <a data-lg="0" role="button" tabIndex={0}>
          Qui est responsable de vos données
        </a>
        <a data-lg="1" role="button" tabIndex={0}>
          Les données que nous recevons
        </a>
        <a data-lg="2" role="button" tabIndex={0}>
          Pourquoi nous les utilisons
        </a>
        <a data-lg="3" role="button" tabIndex={0}>
          Qui y a accès
        </a>
        <a data-lg="4" role="button" tabIndex={0}>
          Combien de temps nous les gardons
        </a>
        <a data-lg="5" role="button" tabIndex={0}>
          Vos droits
        </a>
        <a data-lg="6" role="button" tabIndex={0}>
          Cookies et traceurs
        </a>
        <a data-lg="7" role="button" tabIndex={0}>
          Sécurité
        </a>
        <a data-lg="8" role="button" tabIndex={0}>
          Mises à jour
        </a>
      </aside>
      <article className="lg-txt">
        <section className="lg-s" data-lg="0">
          <h2>Qui est responsable de vos données</h2>
          <p>
            Le responsable du traitement est <b>Orion Studio</b> (SAS), 60 rue François Ier, 75008 Paris, RCS
            938 775 368. Pour toute question sur vos données : <b>hello@orion-studio.io</b>.
          </p>
        </section>
        <section className="lg-s" data-lg="1">
          <h2>Les données que nous recevons</h2>
          <p>
            <b>Analyse de site</b> : l’adresse du site, ou la description de votre projet si vous n’avez pas
            encore de site ; vos prénom, nom, e-mail et, si vous le souhaitez, votre téléphone ; un fichier,
            si vous en joignez un.
          </p>
          <p>
            <b>Prise de rendez-vous et demande de projet</b> : vos coordonnées, le type de projet, le budget
            indicatif, votre message et le créneau choisi.
          </p>
          <p>
            <b>E-mails</b> : le contenu des messages que vous nous envoyez.
          </p>
        </section>
        <section className="lg-s" data-lg="2">
          <h2>Pourquoi nous les utilisons</h2>
          <p>
            Pour réaliser l’analyse et la maquette demandées, vous répondre, préparer un devis ou un appel :
            c’est la base précontractuelle de votre demande.
          </p>
          <p>Pour suivre votre projet si nous travaillons ensemble : c’est l’exécution du contrat.</p>
          <p>
            Mesure d’audience du site :{' '}
            <span className="lg-todo">
              [outil et base légale à compléter, ou à supprimer si aucun outil n’est installé]
            </span>
            .
          </p>
          <p>Nous ne revendons aucune donnée et n’envoyons pas de prospection sans votre accord.</p>
        </section>
        <section className="lg-s" data-lg="3">
          <h2>Qui y a accès</h2>
          <p>
            L’équipe d’Orion Studio, et les prestataires techniques nécessaires au fonctionnement du site et
            de la messagerie :{' '}
            <span className="lg-todo">
              [liste à compléter : hébergeur, messagerie, outil de prise de rendez-vous…]
            </span>
            .
          </p>
          <p>
            Transferts hors de l’Union européenne :{' '}
            <span className="lg-todo">[à compléter selon les prestataires]</span>.
          </p>
        </section>
        <section className="lg-s" data-lg="4">
          <h2>Combien de temps nous les gardons</h2>
          <p>
            Demandes sans suite :{' '}
            <span className="lg-todo">[durée à valider, par exemple 3 ans après le dernier contact]</span>.
            Clients : pendant la relation, puis <span className="lg-todo">[durée à valider]</span> pour nos
            obligations légales et comptables.
          </p>
        </section>
        <section className="lg-s" data-lg="5">
          <h2>Vos droits</h2>
          <p>
            Vous pouvez accéder à vos données, les faire rectifier ou effacer, vous opposer à leur
            utilisation, en demander la limitation ou la portabilité. Écrivez-nous à{' '}
            <b>hello@orion-studio.io</b> : nous répondons dans un délai d’un mois.
          </p>
          <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (cnil.fr).</p>
        </section>
        <section className="lg-s" data-lg="6">
          <h2>Cookies et traceurs</h2>
          <p>
            <span className="lg-todo">
              [À compléter selon les outils installés sur le site ; sans traceur non essentiel, aucun bandeau
              n’est nécessaire]
            </span>
          </p>
        </section>
        <section className="lg-s" data-lg="7">
          <h2>Sécurité</h2>
          <p>
            Les données sont transmises de façon chiffrée (HTTPS) et l’accès en est limité aux personnes qui
            en ont besoin pour traiter votre demande.
          </p>
        </section>
        <section className="lg-s" data-lg="8">
          <h2>Mises à jour</h2>
          <p>Cette politique peut évoluer. Dernière mise à jour : 4 novembre 2026.</p>
        </section>
        <div className="lg-note">
          Prototype : les passages surlignés sont à compléter, et l’ensemble est à faire relire avant la mise
          en ligne.
        </div>
      </article>
    </div>
  )
}

export function Desktop() {
  return (
    <section className="artboard g-page lg-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <LgBody />
      <GCta2 />
    </section>
  )
}
