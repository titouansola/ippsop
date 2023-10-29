import { orderedWeekdays } from '@ippsop/models/weekdays';
import { fetchSchedule } from '@ippsop/lib/queries/schedule';

export async function Schedule() {
  const schedules = await fetchSchedule();

  return (
    <ul
      className={
        'display-on-scroll flex h-72 grow flex-col justify-between text-xl font-normal sm:h-full'
      }
    >
      {orderedWeekdays.map((currentDay) => {
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
