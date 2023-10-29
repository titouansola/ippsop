import { EndOfPageCTA } from '@ippsop/features/common/EndOfPageCTA';
import { fetchQnaElts } from '@ippsop/lib/queries/qna';

export default async function FaQ() {
  const qnaElts = await fetchQnaElts();

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
