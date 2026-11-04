import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoFt3 } from '../../components/shared/MoFt3'

function MoHero() {
  return (
    <section className="mo-hero lg-mhero">
      <div className="crumb">
        <Link to="/">
          Orion Studio / <b>Mentions légales</b>
        </Link>
      </div>
      <h1 className="mo-h1">Mentions légales</h1>
      <p className="mo-lead">Qui édite ce site, qui l’héberge, et ce que vous pouvez en faire.</p>
      <span className="lg-upd">Dernière mise à jour : 4 novembre 2026</span>
    </section>
  )
}

function LgTxt() {
  return (
    <article className="lg-txt lg-mtxt">
      <section className="lg-s" data-lg="0">
        <h2>Éditeur du site</h2>
        <p>
          Le site orion-studio.fr est édité par <b>Orion Studio</b>, société par actions simplifiée (SAS) au
          capital de <span className="lg-todo">[capital social à compléter]</span>.
        </p>
        <p>
          Siège social : 60 rue François Ier, 75008 Paris. RCS 938 775 368. Numéro de TVA intracommunautaire :{' '}
          <span className="lg-todo">[à compléter]</span>.
        </p>
        <p>
          Contact : <b>hello@orion-studio.io</b>.
        </p>
      </section>
      <section className="lg-s" data-lg="1">
        <h2>Directeur de la publication</h2>
        <p>
          <span className="lg-todo">[Nom et fonction à compléter]</span>.
        </p>
      </section>
      <section className="lg-s" data-lg="2">
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par{' '}
          <span className="lg-todo">[nom, adresse et téléphone de l’hébergeur à compléter]</span>.
        </p>
      </section>
      <section className="lg-s" data-lg="3">
        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, illustrations, logos, maquettes et le code de ce site sont la propriété d’Orion Studio,
          sauf mention contraire. Toute reproduction, représentation ou adaptation, totale ou partielle, sans
          autorisation écrite préalable est interdite.
        </p>
        <p>
          Les noms, logos et captures des réalisations présentées restent la propriété de leurs titulaires
          respectifs.
        </p>
      </section>
      <section className="lg-s" data-lg="4">
        <h2>Responsabilité</h2>
        <p>
          Orion Studio s’efforce de fournir des informations exactes et à jour, sans pouvoir garantir
          l’absence d’erreur ou d’omission. Le studio ne peut être tenu responsable d’un dommage résultant de
          l’utilisation du site ou d’un site vers lequel il renvoie.
        </p>
      </section>
      <section className="lg-s" data-lg="5">
        <h2>Liens vers d’autres sites</h2>
        <p>
          Le site contient des liens vers des sites tiers, notamment ceux des réalisations présentées. Orion
          Studio n’exerce aucun contrôle sur leur contenu.
        </p>
      </section>
      <section className="lg-s" data-lg="6">
        <h2>Crédits</h2>
        <p>
          Typographies : Geist, Geist Mono, Instrument Serif et Pixelify Sans (licence SIL Open Font License).
          Symboles d’outils : Simple Icons (CC0) et sites officiels des éditeurs.
        </p>
        <p>Illustrations en pixel art : Orion Studio, à partir de peintures générées puis retravaillées.</p>
      </section>
      <section className="lg-s" data-lg="7">
        <h2>Nous écrire</h2>
        <p>
          Pour toute question sur ces mentions : <b>hello@orion-studio.io</b>.
        </p>
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
