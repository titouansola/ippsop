import clsx from 'clsx';

const pricings = [
  {
    title: 'Individuel',
    background: 'bg-price-individual',
    value: '60€',
    description: `Salle privatisée et cours personnalisés.<br /><b>Prix par séance.</b>`,
  },
  {
    title: 'Groupe',
    background: 'bg-price-group',
    value: '40€',
    description: `Cours personnalisé<br />jusqu’à 3 personnes.<br /><b>Prix par personne par séance.</b>`,
  },
  {
    title: 'Plans',
    background: 'bg-price-plans',
    value: '60€',
    description: `Programme sportifs à distance<br />avec suivi hebdomadaire.<br />Forfait minimum sur 3 mois.<br /><b>Prix par mois.</b>`,
  },
  {
    title: 'Bilan',
    background: 'bg-price-bilan',
    value: '50€',
    description: `Bilan physique et physiologique<br />Consultations et conseils<br />Compte-rendu numérique<br />Durée : environ 1h<br /><b>Prix de départ.</b>`,
  },
];

export function Pricing() {
  return (
    <section>
      <div
        className={
          'display-on-scroll mb-14 flex flex-col gap-6 text-center text-white md:grid md:grid-cols-2 lg:grid-cols-4'
        }
      >
        {pricings.map(({ title, background, value, description }) => (
          <div
            key={title}
            className={clsx(
              background,
              'duration-base hover:bg-primary-transparent flex origin-center flex-col justify-between gap-14 bg-transparent bg-cover bg-center px-6 py-6 bg-blend-overlay transition-all hover:scale-105'
            )}
          >
            <div>
              <h4 className={'mb-6 text-xl font-black'}>{title}</h4>
              <p className={'text-6xl font-black'}>{value}</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        ))}
      </div>
      <p className={'display-on-scroll text-center font-light text-black'}>
        Pour toutes demandes particulières (préparation spécifique, formations,
        conférences, entreprises),
        <br />
        <a
          href=""
          className={
            'duration-base font-medium underline transition-all hover:text-hint'
          }
        >
          contactez-moi pour obtenir un devis.
        </a>
      </p>
    </section>
  );
}
