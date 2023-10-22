import { getClient } from '@ippsop/lib/sanity.client';
import { QnaElement } from '@ippsop/lib/models/qna-element';
import { EndOfPageCTA } from '@ippsop/features/common/EndOfPageCTA';

export default async function FaQ() {
  const client = getClient();
  const qnaElts = (await client.fetch<QnaElement[]>(`*[_type == 'qna']`)).sort(
    (a, b) => a.position - b.position
  );

  return (
    <section>
      <h1>Foire aux questions</h1>
      <div className={'my-25 text-lg'}>
        {qnaElts.map(({ position, question, answer }) => (
          <details
            className={
              'mb-4 rounded border border-gray-300 px-4 py-2 lg:w-3/4 xl:w-1/2'
            }
            key={position}
          >
            <summary className={'cursor-pointer font-light'}>
              {question}
            </summary>
            <p className={'pl-4 font-medium'}>{answer}</p>
          </details>
        ))}
      </div>
      <EndOfPageCTA />
    </section>
  );
}
