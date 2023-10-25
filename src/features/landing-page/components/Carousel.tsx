import clsx from 'clsx';
import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getClient } from '@ippsop/lib/sanity.client';
import { urlFor } from '@ippsop/lib/sanity-image-loader';

const animations = [
  'animate-carousel-1',
  'animate-carousel-2',
  'animate-carousel-3',
  'animate-carousel-4',
  'animate-carousel-5',
];

export async function Carousel() {
  const client = getClient();
  const images = (await client.fetch(`*[_type == 'carousel']`))?.[0]
    ?.images as SanityImageSource[];

  if (!images) {
    return null;
  }

  return (
    <section className={'display-on-scroll h-[70vh]'}>
      <div className={'relative mx-auto h-full w-full lg:w-2/3'}>
        {images.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className={clsx(
              animations[index],
              'absolute left-1/2 h-full w-full -translate-x-1/2 opacity-0'
            )}
          >
            <Image
              src={urlFor(image).url()}
              alt={'Image carrousel'}
              className={'object-cover'}
              fill
            />
          </div>
        ))}
      </div>
    </section>
  );
}
