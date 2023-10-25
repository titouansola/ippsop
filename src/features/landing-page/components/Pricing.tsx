import { PortableTextBlock } from 'sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getClient } from '@ippsop/lib/sanity.client';
import { RichText } from '@ippsop/features/common/components/RichText';
import Image from 'next/image';
import { urlFor } from '@ippsop/lib/sanity-image-loader';

type Pricing = {
  title: string;
  value: number;
  description: PortableTextBlock;
  position: number;
  image: SanityImageSource;
};

export async function Pricing() {
  const client = getClient();
  const pricings = await client.fetch<Pricing[]>("*[_type == 'pricing']");
  return (
    <section>
      <div
        className={
          'mb-14 flex flex-col gap-6 text-center text-white md:grid md:grid-cols-2 lg:grid-cols-4'
        }
      >
        {[...pricings]
          .sort((a, b) => a.position - b.position)
          .map(({ title, image, value, description }) => (
            <div
              key={title}
              className={
                'duration-base display-on-scroll relative flex origin-center flex-col justify-between gap-14 px-6 py-6 transition-all hover:scale-105 hover:bg-primary'
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
            'duration-base font-medium underline transition-all hover:text-hint'
          }
        >
          contactez-moi pour obtenir un devis.
        </a>
      </p>
    </section>
  );
}
