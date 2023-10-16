import Image from 'next/image';

const reviews = [
  {
    username: 'Jean-Charles Grillo',
    profilePic: 'jean-charles-grillo.png',
    rate: 5,
    comment:
      'Gaël s occupe de moi depuis plusieurs années. Son approche rigoureuse, attentive aux pathologies associées permet de progresser sans prendre de risque. C est top, je recommande sans hésiter !',
  },
  {
    username: 'Isabelle Huguet',
    profilePic: 'isabelle-huguet.png',
    rate: 5,
    comment:
      'Très bon coach sportif, professionnel, à l’écoute, toujours dans la bonne humeur. Programme personnalisé qui permet de progresser à chaque séance. Résultats visibles.',
  },
  {
    username: 'Bertrand Celma',
    profilePic: 'bertrand-celma.png',
    rate: 5,
    comment:
      "Un coach personnalisé qui a de réelles compétences pratiques et théoriques, patient et à l'écoute, afin de nous accompagner vers une amélioration de notre condition physique. Je compte bien faire appel à ses services sur le long terme !",
  },
  {
    username: 'Sylvain Frt',
    profilePic: 'sylvain-frt.png',
    rate: 5,
    comment: "Très bon coach, donne de bon conseils et est à l'écoute.",
  },
];

export function Reviews() {
  return (
    <section className={'grid grid-cols-4 gap-5'}>
      {reviews.map(({ username, profilePic, rate, comment }) => (
        <div className={'block-shadow rounded-xl bg-white p-9'} key={username}>
          <Image
            src={`/img/${profilePic}`}
            alt={username}
            width={60}
            height={60}
            className={'mb-4'}
          />
          <h5 className={'mb-1 font-bold'}>{username}</h5>
          <div
            className={'bg-star mb-8 block h-5 bg-repeat-x'}
            style={{ width: rate * 24 }}
          />
          <blockquote className={'font-light italic'}>
            &#34;{comment}&#34;
          </blockquote>
        </div>
      ))}
    </section>
  );
}
