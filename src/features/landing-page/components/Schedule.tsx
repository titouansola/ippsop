import { getClient } from '@ippsop/lib/sanity.client';
import { Schedule } from '@ippsop/lib/models/schedule';
import { weekdays } from '@ippsop/lib/models/weekdays';

export async function Schedule() {
  const client = getClient();
  const schedules = await client.fetch<Schedule[]>("*[_type == 'schedule']");
  return (
    <ul
      className={
        'display-on-scroll flex h-72 grow flex-col justify-between text-xl font-normal sm:h-full'
      }
    >
      {weekdays.map((currentDay) => {
        const daySchedule = schedules.find(({ day }) => currentDay === day);
        if (!daySchedule) {
          throw new Error("Unable to find today's schedule");
        }
        return (
          <li
            className={
              'relative flex justify-between after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-full after:bg-black last:after:hidden sm:after:-bottom-2'
            }
            key={currentDay}
          >
            <span>{currentDay}</span>
            <span>
              {daySchedule.opened
                ? `${daySchedule.opensAt} - ${daySchedule.closesAt}`
                : 'Fermé'}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
