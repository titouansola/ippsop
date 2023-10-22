'use client';

import { Schedule, Timing } from '@ippsop/lib/models/schedule';
import { weekdays } from '@ippsop/lib/models/weekdays';
import clsx from 'clsx';

type Props = {
  schedules: Schedule[];
};

export default function OpeningState({ schedules }: Props) {
  const date = new Date();
  const today = weekdays[date.getDay()];
  const currentTiming = date.getHours() + date.getMinutes() / 60;
  const daySchedule = schedules.find(({ day }) => day === today);

  if (!daySchedule) {
    throw new Error("Unable to find today's schedule");
  }

  let opened = false;
  if (daySchedule.opened) {
    const opensAt = convertHoursToNumber(daySchedule.opensAt);
    const closesAt = convertHoursToNumber(daySchedule.closesAt);
    opened = opensAt < currentTiming && currentTiming < closesAt;
  }

  return (
    <>
      <span
        className={clsx(opened ? 'bg-green' : 'bg-red', 'h-3 w-3 rounded-full')}
      />
      <span>{opened ? 'Ouvert' : 'Fermé'}</span>
      {daySchedule.opened && (
        <span>
          {daySchedule.opensAt} - {daySchedule.closesAt}
        </span>
      )}
    </>
  );
}

function convertHoursToNumber(timing: Timing) {
  const [hours, minutes] = timing.split('h');
  return parseInt(hours) + parseInt(minutes) / 60;
}
