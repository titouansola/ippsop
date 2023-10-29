import dynamic from 'next/dynamic';
import { fetchSchedule } from '@ippsop/lib/queries/schedule';
import { SimpleLoader } from '@ippsop/features/common/components/SimpleLoader';

const OpeningState = dynamic(() => import('./OpeningState'), {
  ssr: false,
  loading: () => <SimpleLoader />,
});

export async function HeaderRightSide() {
  const schedules = await fetchSchedule();

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
