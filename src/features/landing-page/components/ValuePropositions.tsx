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
    <section className={'flex gap-9 text-white'}>
      {content.map(({ title, description }) => (
        <div key={title} className={'block-shadow grow bg-primary p-9'}>
          <h2 className={'mb-8'}>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
      <div
        className={
          'flex flex-col justify-between text-right text-2xl font-light text-secondary'
        }
      >
        <a href="https://www.facebook.com/preparation.ippsop">Facebook</a>
        <a href="https://www.youtube.com/@gaelguenec2315">YouTube</a>
        <a href="https://www.instagram.com/gaelguenec/">Instagram</a>
        <a href="https://www.linkedin.com/company/ippsop/about/">LinkedIn</a>
      </div>
    </section>
  );
}
