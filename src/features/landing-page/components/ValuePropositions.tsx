const content = [
  {
    title: 'Santé',
    description:
      'Vous avez des problèmes articulaires (dos, genoux, hanches...), des pathologies chroniques (cardiaques, obésité, diabète...) ou tout simplement un âge avancé et vous ne savez pas comment pratiquer du sport en toute sécurité ?',
  },
  {
    title: 'Coaching',
    description:
      'Vous recherchez un programme sur mesure et un accompagnement de qualité pour vous remettre en forme, travailler votre silhouette et faire le plein d’énergie ?',
  },
  {
    title: 'Préparation',
    description:
      'Vous souhaitez un préparateur physique personnel afin d’améliorer vos performances, vous remettre d’une blessure, préparer un concours ou évaluer vos capacités ?',
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
