import Image from 'next/image';

export default function SubHero() {
  return (
    <section
      className={
        'animate-fade-in-slide-down flex flex-col gap-14 lg:flex-row-reverse'
      }
    >
      <div
        className={
          'block-shadow relative flex flex-col bg-black px-9 py-6 text-white sm:gap-25 lg:max-w-[40%]'
        }
      >
        <h2 className={'z-10'}>Gaël Guenec</h2>
        <p className={'z-10'}>
          Professionnel diplômé d’un Master et de deux Licences STAPS ainsi que
          du Certificat d’Éducation Thérapeutique du Patient, je suis à la fois
          préparateur physique, enseignant en Activité Physique Adaptée, coach
          sportif, formateur et conférencier
        </p>
        <div className={'absolute -right-6 bottom-0 origin-bottom'}>
          <div
            className={'relative h-[286px] w-[162px] sm:h-[376px] sm:w-[192px]'}
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
          'block-shadow relative flex flex-col gap-5 px-9 py-6 text-white transition-all duration-300'
        }
      >
        <Image
          src={'/img/illustrations/hero.jpg'}
          alt={'Alt Hero Background'}
          className={'-z-10 object-cover'}
          fill
        />
        <h3>Santé et optimisation des performances</h3>
        <p>
          Atteignez vos objectifs grâce à l’accompagnement personnalisé de votre
          coach spécialisé en Sport-Santé et Préparation Physique.
          <br />
          Plus de 10 ans d’expérience au service du plus grand nombre.
        </p>
        <a href="/contact">
          <button className={'primary'}>Obtenir un rendez-vous</button>
        </a>
      </div>
    </section>
  );
}
