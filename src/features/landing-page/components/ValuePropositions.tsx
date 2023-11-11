import Image from 'next/image';
import { urlFor } from '@ippsop/lib/sanity-image-loader';
import { fetchUvps } from '@ippsop/lib/queries/uvp';

export async function ValuePropositions() {
  const uvps = await fetchUvps();
  return (
    <section
      className={
        'flex animate-fade-in-slide-up flex-col gap-9 text-white lg:flex-row'
      }
    >
      {uvps.map(({ title, content, background, slug }) => (
        <a
          key={title}
          href={`services/${slug}`}
          className={
            'block-shadow relative block grow origin-center p-9 transition-all duration-base hover:scale-105'
          }
        >
          <div
            className={
              'absolute left-0 top-0 -z-10 h-full w-full bg-primary opacity-70 mix-blend-color'
            }
          />
          <div
            className={
              'absolute left-0 top-0 -z-20 h-full w-full bg-black opacity-80'
            }
          />
          <Image
            src={urlFor(background).url()}
            alt={'background'}
            className={'-z-30 object-cover filter'}
            fill
          />
          <h2 className={'mt-0'}>{title}</h2>
          <p>{content}</p>
        </a>
      ))}

      <div
        className={
          'hidden flex-col justify-between text-right text-2xl font-light text-secondary lg:flex'
        }
      >
        <a
          className={'transition-all duration-base hover:text-primary'}
          href="https://www.facebook.com/preparation.ippsop"
        >
          Facebook
        </a>
        <a
          className={'transition-all duration-base hover:text-primary'}
          href="https://www.youtube.com/@gaelguenec2315"
        >
          YouTube
        </a>
        <a
          className={'transition-all duration-base hover:text-primary'}
          href="https://www.instagram.com/gaelguenec/"
        >
          Instagram
        </a>
        <a
          className={'transition-all duration-base hover:text-primary'}
          href="https://www.linkedin.com/company/ippsop/about/"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
