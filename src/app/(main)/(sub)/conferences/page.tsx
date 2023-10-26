import Image from 'next/image';
import { getClient } from '@ippsop/lib/sanity.client';
import { Article } from '@ippsop/lib/models/article';
import { urlFor } from '@ippsop/lib/sanity-image-loader';

export default async function Conference() {
  const client = getClient();
  const articles = await client.fetch<Article[]>(`*[_type == 'article']`);
  return (
    <>
      <h1>Conférences</h1>
      <div
        className={
          'mx-auto my-32 flex w-full flex-col justify-center gap-14 md:w-10/12 lg:w-2/3'
        }
      >
        {articles
          .sort()
          .map(({ title, description, url, thumbnail, _createdAt }, index) => (
            <a
              key={index}
              href={url}
              target={'_blank'}
              className={'block w-full'}
            >
              <article
                className={
                  'block-shadow duration-base flex w-full flex-col bg-white transition-all md:grid md:h-40 md:grid-cols-3 md:hover:scale-105'
                }
              >
                <div className={'relative max-md:h-56 md:col-span-1'}>
                  <Image
                    src={
                      !!thumbnail
                        ? urlFor(thumbnail).url()
                        : '/img/illustrations/default-thumbnail.jpg'
                    }
                    className={'object-cover'}
                    alt={'Miniature'}
                    fill
                  />
                </div>
                <div className={'p-4 md:col-span-2 md:h-full'}>
                  <h2 className={'m-0 text-lg'}>{title}</h2>
                  <p className={'my-2 text-gray-500'}>
                    Publiée le {new Date(_createdAt).toLocaleDateString()}
                  </p>
                  <p className={'text-sm md:truncate'}>{description}</p>
                </div>
              </article>
            </a>
          ))}
      </div>
    </>
  );
}
