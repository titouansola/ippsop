import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getClient } from '@ippsop/lib/sanity.client';
import { urlFor } from '@ippsop/lib/sanity-image-loader';

export async function Hero() {
  const client = getClient();
  const hero = (await client.fetch(`*[_type == 'hero']`))?.[0] as {
    title: string;
    subtitle: string;
    background: SanityImageSource;
  };

  return (
    <section
      className={
        'animate-fade-in block-shadow relative mb-28 mt-20 py-52 text-center text-white lg:mt-28'
      }
    >
      <Image
        src={urlFor(hero.background).url()}
        alt={'Hero Background'}
        className={'-z-10 object-cover brightness-50 filter'}
        fill
      />
      <h1 className={'m-0 text-5xl drop-shadow-lg sm:text-9xl'}>
        {hero.title}
      </h1>
      <p className={'text-2xl'}>{hero.subtitle}</p>
    </section>
  );
}
