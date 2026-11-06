import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoFt3 } from '../../components/shared/MoFt3'

function MoHero() {
  return (
    <section className="mo-hero lg-mhero">
      <div className="crumb">
        <Link to="/">
          Orion Studio / <b>Confidentialité</b>
        </Link>
      </div>
      <h1 className="mo-h1">Confidentialité</h1>
      <p className="mo-lead">
        Ce que nous faisons de vos données quand vous nous écrivez, et comment garder la main dessus.
      </p>
      <span className="lg-upd">Dernière mise à jour : 4 novembre 2026</span>
    </section>
  )
}

function LgTxt() {
  return (
    <article className="lg-txt lg-mtxt">
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
          encore de site ; vos prénom, nom, e-mail et, si vous le souhaitez, votre téléphone ; un fichier, si
          vous en joignez un.
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
          L’équipe d’Orion Studio, et les prestataires techniques nécessaires au fonctionnement du site et de
          la messagerie :{' '}
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
          Vous pouvez accéder à vos données, les faire rectifier ou effacer, vous opposer à leur utilisation,
          en demander la limitation ou la portabilité. Écrivez-nous à <b>hello@orion-studio.io</b> : nous
          répondons dans un délai d’un mois.
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
          Les données sont transmises de façon chiffrée (HTTPS) et l’accès en est limité aux personnes qui en
          ont besoin pour traiter votre demande.
        </p>
      </section>
      <section className="lg-s" data-lg="8">
        <h2>Mises à jour</h2>
        <p>Cette politique peut évoluer. Dernière mise à jour : 4 novembre 2026.</p>
      </section>
      <div className="lg-note">
        Prototype : les passages surlignés sont à compléter, et l’ensemble est à faire relire avant la mise en
        ligne.
      </div>
    </article>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo lg-page">
      <MobileNav />
      <MoHero />
      <LgTxt />
      <MoFt3 />
    </section>
  )
}
