import clsx from 'clsx';
import { getClient } from '@ippsop/lib/sanity.client';
import { Schedule, Timing } from '@ippsop/lib/models/schedule';
import { weekdays } from '@ippsop/lib/models/weekdays';
import { logger } from '@ippsop/lib/logger';

function convertHoursToNumber(timing: Timing) {
  const [hours, minutes] = timing.split('h');
  return parseInt(hours) + parseInt(minutes) / 60;
}

export async function OpeningState() {
  const client = getClient();
  const schedules = await client.fetch<Schedule[]>("*[_type == 'schedule']");
  const date = new Date();
  const today = weekdays[date.getDay() - 1];
  const currentTiming = date.getHours() + date.getMinutes() / 60;
  const daySchedule = schedules.find(({ day }) => day === today);
  if (!daySchedule) {
    throw new Error("Unable to find today's schedule");
  }
  const opensAt = convertHoursToNumber(daySchedule.opensAt);
  const closesAt = convertHoursToNumber(daySchedule.closesAt);
  const opened = opensAt < currentTiming && currentTiming < closesAt;

  logger.info(date.toUTCString());
  logger.info(date.getHours());

  return (
    <div className={'hidden flex-col items-end gap-3 lg:flex'}>
      <p className={'flex items-center gap-3'}>
        <span
          className={clsx(
            opened ? 'bg-green' : 'bg-red',
            'h-3 w-3 rounded-full'
          )}
        />
        <span>{opened ? 'Ouvert' : 'Fermé'}</span>
        {daySchedule.opened && (
          <span>
            {daySchedule.opensAt} - {daySchedule.closesAt}
          </span>
        )}
      </p>
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
