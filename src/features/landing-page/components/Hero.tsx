import Image from 'next/image';
import { urlFor } from '@ippsop/lib/sanity-image-loader';
import { fetchHeroData } from '@ippsop/lib/queries/hero';

export async function Hero() {
  const { title, subtitle, background } = await fetchHeroData();

  return (
    <section
      className={
        'block-shadow relative mb-28 mt-20 animate-fade-in py-52 text-center text-white lg:mt-28'
      }
    >
      <Image
        src={urlFor(background).url()}
        alt={'Hero Background'}
        className={'-z-10 object-cover brightness-50 filter'}
        fill
      />
      <h1 className={'m-0 text-5xl drop-shadow-lg sm:text-9xl'}>{title}</h1>
      <p className={'text-2xl'}>{subtitle}</p>
    </section>
  );
}
