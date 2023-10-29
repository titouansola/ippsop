import navigation, { RedirectType } from 'next/navigation';
import { RichText } from '@ippsop/features/common/components/RichText';
import { EndOfPageCTA } from '@ippsop/features/common/EndOfPageCTA';
import { fetchServicePage } from '@ippsop/lib/queries/services';

export default async function Service({
  params,
}: {
  params: { slug: string };
}) {
  const pageContent = await fetchServicePage(params.slug);

  if (!pageContent) {
    void navigation.redirect('/', RedirectType.replace);
  }

  return (
    <>
      <section className={'text-lg'}>
        <h1>{pageContent.title}</h1>
        <article className={'my-25'}>
          <RichText value={pageContent.content} />
        </article>
      </section>
      <EndOfPageCTA />
    </>
  );
}
