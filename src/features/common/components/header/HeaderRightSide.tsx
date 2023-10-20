import { getClient } from '@ippsop/lib/sanity.client';
import { Schedule } from '@ippsop/lib/models/schedule';
import { OpeningState } from '@ippsop/features/common/components/header/OpeningState';

export async function HeaderRightSide() {
  const client = getClient();
  const schedules = await client.fetch<Schedule[]>("*[_type == 'schedule']");

  return (
    <div className={'hidden flex-col items-end gap-3 lg:flex'}>
      <OpeningState schedules={schedules} />
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
