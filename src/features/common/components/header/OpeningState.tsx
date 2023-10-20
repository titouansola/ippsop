'use client';

import { Schedule, Timing } from '@ippsop/lib/models/schedule';
import { weekdays } from '@ippsop/lib/models/weekdays';
import clsx from 'clsx';

type Props = {
  schedules: Schedule[];
};

export function OpeningState({ schedules }: Props) {
  const date = new Date();
  console.log(date.toString(), date.getHours());
  const today = weekdays[date.getDay() - 1];
  const currentTiming = date.getHours() + date.getMinutes() / 60;
  const daySchedule = schedules.find(({ day }) => day === today);
  if (!daySchedule) {
    throw new Error("Unable to find today's schedule");
  }
  const opensAt = convertHoursToNumber(daySchedule.opensAt);
  const closesAt = convertHoursToNumber(daySchedule.closesAt);
  const opened = opensAt < currentTiming && currentTiming < closesAt;

  return (
    <>
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
    </>
  );
}

function convertHoursToNumber(timing: Timing) {
  const [hours, minutes] = timing.split('h');
  return parseInt(hours) + parseInt(minutes) / 60;
}
