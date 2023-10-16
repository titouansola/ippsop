import { GoogleMap } from '@ippsop/features/ui/GoogleMap';
import { Schedule } from '@ippsop/features/landing-page/components/Schedule';
import Image from 'next/image';

export function MainInformation() {
  return (
    <section className={'flex gap-9'}>
      <div className={'flex flex-col gap-9'}>
        <div className={'block-shadow bg-black px-9 py-6 text-white'}>
          <h3 className={'mb-6'}>Espace Coralia</h3>
          <p>
            Salle de sport à la Seyne-sur-Mer tout équipée, adapté à la
            préparation physique, la remise en forme ou l’accompagnement
            thérapeutique.
          </p>
        </div>
        <div className={'flex grow justify-between gap-9'}>
          <Schedule />
          <div
            className={
              'bg-schedule block-shadow h-full w-1/3 bg-cover bg-center bg-no-repeat'
            }
          />
        </div>
      </div>
      <div className={'flex flex-col gap-9'}>
        <GoogleMap />
        <div
          className={'block-shadow relative bg-black px-9 pb-9 pt-6 text-white'}
        >
          <h3 className={'mb-6'}>Foire aux questions</h3>
          <p>
            La FAQ est là pour répondre à toutes les questions récurentes.
            <br />
            Si malgré tout une information vous manque, vous pouvez directement
            me contacter !
          </p>
          <button
            className={'primary absolute -bottom-0 right-9 translate-y-1/2'}
          >
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
}
