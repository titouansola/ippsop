import Image from 'next/image';

export function Hero() {
  return (
    <section>
      <h1 className={'my-32 w-full text-center text-8xl'}>
        Préparateur physique spécialisé
      </h1>
      <div className={'flex flex-row-reverse gap-14'}>
        <div
          className={
            'block-shadow relative flex grow flex-col gap-25 bg-black px-9 py-6 text-white'
          }
        >
          <h2 className={'z-10'}>Gaël Guenec</h2>
          <p className={'z-10'}>
            Préparateur physique
            <br />
            <br />
            Formateur en STAPS
            <br />
            <br />
            Enseignant en Activité Physique Adaptée et Santé
          </p>
          <Image
            src={'/img/gael.png'}
            width={192}
            height={376}
            className={'absolute -right-6 bottom-0'}
            alt={
              'Photo de Gaël Guenec, préparateur physique à la Seyne-sur-Mer'
            }
          />
        </div>

        <div
          className={
            'bg-hero block-shadow relative flex max-w-[60%] grow flex-col gap-5 bg-cover bg-no-repeat px-9 py-6 text-white'
          }
        >
          <h3>Accompagnement physique à la Seyne-sur-Mer</h3>
          <p>
            Suivi personnalisé, mon objectif et de vous faire atteindre les
            vôtres ! Spécialisé en préparation physique et activité physique
            adaptée, je souhaite mettre mon savoir au service du plus grand
            nombre.
          </p>
          <button className={'primary'}>Obtenir un rendez-vous</button>
        </div>
      </div>
    </section>
  );
}
