import navigation, { RedirectType } from 'next/navigation';
import { getClient } from '@ippsop/lib/sanity.client';
import { ServicePageContent } from '@ippsop/lib/models/service-page-content';
import { RichText } from '@ippsop/features/common/components/RichText';
import { EndOfPageCTA } from '@ippsop/features/common/EndOfPageCTA';

export default async function Service({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient();
  const pageContent =
    (
      await client.fetch<ServicePageContent[]>(
        `*[_type == 'services' && slug.current == '${params.slug}']`
      )
    )?.[0] ?? null;

  if (!pageContent) {
    void navigation.redirect('/', RedirectType.replace);
  }

  return (
    <>
      <section className={'text-lg'}>
        <h1 className={'mt-20 text-center text-6xl'}>{pageContent.title}</h1>
        <article className={'my-25'}>
          <RichText value={pageContent.content} />
        </article>
      </section>
      <EndOfPageCTA />
    </>
  );
}
