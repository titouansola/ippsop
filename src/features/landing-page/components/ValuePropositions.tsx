import Image from 'next/image';
import { getClient } from '@ippsop/lib/sanity.client';
import { UVP } from '@ippsop/lib/models/uvp';
import { urlFor } from '@ippsop/lib/sanity-image-loader';

export async function ValuePropositions() {
  const client = getClient();
  const uvps = await client.fetch<UVP[]>(`*[_type == 'uvp']`);
  return (
    <section
      className={
        'animate-fade-in-slide-up flex flex-col gap-9 text-white lg:flex-row'
      }
    >
      {uvps
        .sort((a, b) => a.position - b.position)
        .map(({ title, content, background }) => (
          <div
            key={title}
            className={
              'block-shadow duration-base relative grow origin-center p-9 transition-all hover:scale-105'
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
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        ))}

      <div
        className={
          'hidden flex-col justify-between text-right text-2xl font-light text-secondary lg:flex'
        }
      >
        <a
          className={'duration-base transition-all hover:text-primary'}
          href="https://www.facebook.com/preparation.ippsop"
        >
          Facebook
        </a>
        <a
          className={'duration-base transition-all hover:text-primary'}
          href="https://www.youtube.com/@gaelguenec2315"
        >
          YouTube
        </a>
        <a
          className={'duration-base transition-all hover:text-primary'}
          href="https://www.instagram.com/gaelguenec/"
        >
          Instagram
        </a>
        <a
          className={'duration-base transition-all hover:text-primary'}
          href="https://www.linkedin.com/company/ippsop/about/"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
