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
      <div className={'mb-14 grid grid-cols-4 gap-6 text-center text-white'}>
        {pricings.map(({ title, background, value, description }) => (
          <div
            key={title}
            className={clsx(
              'flex flex-col justify-between gap-14 px-6 py-6',
              background
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
      <p className={'text-center font-light text-black'}>
        Pour toutes demandes particulières (préparation spécifique, formations,
        conférences, entreprises),
        <br />
        <a href="" className={'font-medium underline'}>
          contactez-moi pour obtenir un devis.
        </a>
      </p>
    </section>
  );
}
