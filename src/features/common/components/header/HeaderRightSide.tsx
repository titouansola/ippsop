import { getClient } from '@ippsop/lib/sanity.client';
import { Schedule } from '@ippsop/lib/models/schedule';
import dynamic from 'next/dynamic';

const OpeningState = dynamic(() => import('./OpeningState'), {
  ssr: false,
  loading: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      className={'animate-spin'}
    >
      <path
        d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
        fill="currentColor"
      />
    </svg>
  ),
});

export async function HeaderRightSide() {
  const client = getClient();
  const schedules = await client.fetch<Schedule[]>("*[_type == 'schedule']");

  return (
    <div className={'hidden flex-col items-end gap-1 lg:flex'}>
      <p className={'flex h-6 items-center gap-3'}>
        <OpeningState schedules={schedules} />
      </p>
      <p>Sur rendez-vous</p>
      <a
        href={'https://maps.app.goo.gl/EpTVGaXKd1vXddZVA'}
        target={'_blank'}
        className={'text-secondary underline'}
      >
        424 Rue de Lisbonne,
        <br className={'block lg:hidden'} /> La Seyne-sur-Mer
      </a>
    </div>
  );
}
