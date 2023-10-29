import Image from 'next/image';
import { RichText } from '@ippsop/features/common/components/RichText';
import { urlFor } from '@ippsop/lib/sanity-image-loader';
import { fetchPricings } from '@ippsop/lib/queries/pricing';

export async function Pricing() {
  const pricings = await fetchPricings();

  return (
    <section>
      <div
        className={
          'mb-14 flex flex-col gap-6 text-center text-white md:grid md:grid-cols-2 lg:grid-cols-4'
        }
      >
        {[...pricings].map(({ title, image, value, description }) => (
          <div
            key={title}
            className={
              'display-on-scroll relative flex origin-center flex-col justify-between gap-14 px-6 py-6 transition-all duration-base hover:scale-105 hover:bg-primary'
            }
          >
            <div
              className={
                'absolute left-0 top-0 -z-10 h-full w-full bg-primary opacity-70 mix-blend-color'
              }
            />
            <Image
              src={urlFor(image).url()}
              alt={'Image Tarif'}
              className={'-z-20 object-cover brightness-50 filter'}
              fill
            />
            <div>
              <h4 className={'mb-6 text-xl font-black'}>{title}</h4>
              <p className={'text-6xl font-black'}>{value}€</p>
            </div>
            <div>
              <RichText value={description} />
            </div>
          </div>
        ))}
      </div>
      <p className={'display-on-scroll text-center font-light text-black'}>
        Pour toutes demandes particulières (préparation spécifique, formations,
        conférences, entreprises),
        <br />
        <a
          href="/contact"
          className={
            'font-medium underline transition-all duration-base hover:text-hint'
          }
        >
          contactez-moi pour obtenir un devis.
        </a>
      </p>
    </section>
  );
}
