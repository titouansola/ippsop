const content = [
  {
    title: 'Préparation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Coaching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Santé',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
          <h2 className={'mb-8'}>{title}</h2>
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
