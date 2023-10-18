import clsx from 'clsx';
import { getClient } from '@ippsop/lib/sanity.client';

type Pricing = {
  title: string;
  background: string;
  value: number;
  description: string;
  position: number;
};

export async function Pricing() {
  const client = getClient();
  const pricings = await client.fetch<Pricing[]>("*[_type == 'pricing']");
  return (
    <section>
      <div
        className={
          ' mb-14 flex flex-col gap-6 text-center text-white md:grid md:grid-cols-2 lg:grid-cols-4'
        }
      >
        {[...pricings]
          .sort((a, b) => a.position - b.position)
          .map(({ title, background, value, description }) => (
            <div
              key={title}
              className={clsx(
                background,
                'duration-base hover:bg-primary-transparent display-on-scroll flex origin-center flex-col justify-between gap-14 bg-transparent bg-cover bg-center px-6 py-6 bg-blend-overlay transition-all hover:scale-105'
              )}
            >
              <div>
                <h4 className={'mb-6 text-xl font-black'}>{title}</h4>
                <p className={'text-6xl font-black'}>{value}€</p>
              </div>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
          ))}
      </div>
      <p className={'display-on-scroll text-center font-light text-black'}>
        Pour toutes demandes particulières (préparation spécifique, formations,
        conférences, entreprises),
        <br />
        <a
          href=""
          className={
            'duration-base font-medium underline transition-all hover:text-hint'
          }
        >
          contactez-moi pour obtenir un devis.
        </a>
      </p>
    </section>
  );
}
