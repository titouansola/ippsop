import clsx from 'clsx';
import Image from 'next/image';
import { urlFor } from '@ippsop/lib/sanity-image-loader';
import { fetchCarouselImages } from '@ippsop/lib/queries/carousel';

// Use const array to trigger tailwind class generation
const animations = [
  'animate-carousel-1',
  'animate-carousel-2',
  'animate-carousel-3',
  'animate-carousel-4',
  'animate-carousel-5',
] as const;

export async function Carousel() {
  const images = await fetchCarouselImages();

  if (!images) {
    return null;
  }

  return (
    <section className={'display-on-scroll h-[70vh]'}>
      <div className={'relative mx-auto h-full w-full lg:w-2/3'}>
        {images.map((image, index) => (
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
