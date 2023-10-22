import Image from 'next/image';

export function Hero() {
  return (
    <section>
      <div className={'animate-fade-in mb-52 mt-60 w-full text-center'}>
        <h1 className={'text-5xl sm:text-9xl'}>Salle de sport privée</h1>
        <p className={'text-2xl'}>La Seyne-sur-Mer</p>
      </div>
      <div
        className={
          'animate-fade-in-slide-down flex flex-col gap-14 lg:flex-row-reverse'
        }
      >
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
          <div className={'absolute -right-6 bottom-0 origin-bottom'}>
            <div
              className={
                'relative h-[286px] w-[162px] sm:h-[376px] sm:w-[192px]'
              }
            >
              <Image
                src={'/img/illustrations/gael.png'}
                className={'object-contain'}
                alt={
                  'Photo de Gaël Guenec, préparateur physique à la Seyne-sur-Mer'
                }
                quality={100}
                sizes={'192px, (max-width: 500px) 162px'}
                priority
                fill
              />
            </div>
          </div>
        </div>

        <div
          className={
            'bg-hero block-shadow relative flex grow flex-col gap-5 bg-cover bg-top bg-no-repeat px-9 py-6 text-white transition-all duration-300 hover:bg-center lg:max-w-[60%]'
          }
        >
          <h3>Santé et optimisation des performances</h3>
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
