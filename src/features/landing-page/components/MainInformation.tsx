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
          <h3 className={'mb-6'}>Salle de sport</h3>
          <p>
            La salle de sport est située dans l&apos;espace Coralia à La
            Seyne-sur-Mer, à coté du magasin Botanic®. L’espace peut accueillir
            3 personnes maximum pour assurer la personnalisation des exercices
            et garantir un encadrement privilégié.
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
          <h3 className={'mb-6'}>Une question ?</h3>
          <p>
            La foire aux questions est là pour vous répondre !
            <br />
            Si malgré tout une information vous manque, vous pouvez directement
            nous contacter !
          </p>
          <a
            href="/foire-aux-questions"
            className={'absolute -bottom-0 right-9 translate-y-1/2'}
          >
            <button className={'primary'}>Voir la FAQ</button>
          </a>
        </div>
      </div>
    </section>
  );
}
