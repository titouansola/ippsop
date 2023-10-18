import { GoogleMap } from '@ippsop/features/ui/GoogleMap';
import { Schedule } from '@ippsop/features/landing-page/components/Schedule';

export function MainInformation() {
  return (
    <section className={'flex flex-col gap-9 sm:flex-row'}>
      <div className={'flex flex-col gap-9 sm:w-1/2'}>
        <div
          className={
            'block-shadow display-on-scroll bg-black px-9 py-6 text-white'
          }
        >
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
              'bg-schedule block-shadow display-on-scroll hidden h-full w-1/3 bg-cover bg-center bg-no-repeat lg:block'
            }
          />
        </div>
      </div>
      <div className={'flex flex-col gap-9 sm:w-1/2'}>
        <GoogleMap />
        <div
          className={
            'block-shadow display-on-scroll relative bg-black px-9 pb-9 pt-6 text-white'
          }
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
