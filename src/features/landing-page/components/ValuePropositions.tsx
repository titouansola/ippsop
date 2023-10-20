const content = [
  {
    title: 'Santé',
    description:
      'Il est aujourd’hui largement démontré que l’activité physique est une thérapie non médicamenteuse. 20 à 30 % des cancers, maladies cardio-vasculaires, diabète ou AVC pourrait être évités en pratiquant plus de sport ! Venez pratiquer en toute sécurité et de façon adaptée avec un enseignant en Activités Physiques Adaptées.',
  },
  {
    title: 'Coaching',
    description:
      'Vous recherchez un programme sur mesure et un accompagnement de qualité pour vous remettre en forme et faire le plein d’énergie ? Alors n’hésitez pas à venir vous entraîner dans une salle à taille humaine de façon personnalisée et dans la bonne humeur avec votre entraîneur toujours là pour vous motiver !',
  },
  {
    title: 'Préparation',
    description:
      'Vous souhaitez optimiser vos performances sportives, courir votre 1 er marathon, réussir vos épreuves physiques lors d’un concours, retrouver votre niveau après blessures ? Que vous soyez un sportif amateur ou de haut niveau, de sport individuel ou collectif, venez vous préparer comme un vrai pro avec les méthodes d’entraînement qui ont fait leurs preuves.',
  },
];

export function ValuePropositions() {
  return (
    <section
      className={
        'animate-fade-in-slide-up flex flex-col gap-9 text-white lg:flex-row'
      }
    >
      {content.map(({ title, description }) => (
        <div
          key={title}
          className={
            'block-shadow duration-base hover:bg-primary-dark grow origin-center bg-primary p-9 transition-all hover:scale-105'
          }
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
      <div
        className={
          'hidden flex-col justify-between text-right text-2xl font-light text-secondary lg:flex'
        }
      >
        <a
          className={'duration-base transition-all hover:text-primary'}
          href="https://www.facebook.com/preparation.ippsop"
        >
          Facebook
        </a>
        <a
          className={'duration-base transition-all hover:text-primary'}
          href="https://www.youtube.com/@gaelguenec2315"
        >
          YouTube
        </a>
        <a
          className={'duration-base transition-all hover:text-primary'}
          href="https://www.instagram.com/gaelguenec/"
        >
          Instagram
        </a>
        <a
          className={'duration-base transition-all hover:text-primary'}
          href="https://www.linkedin.com/company/ippsop/about/"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
