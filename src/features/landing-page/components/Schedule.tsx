const schedule = [
  { day: 'Lundi', time: '9h30 - 19h00' },
  { day: 'Mardi', time: '9h30 - 19h00' },
  { day: 'Mercredi', time: '9h30 - 19h00' },
  { day: 'Jeudi', time: '9h30 - 19h00' },
  { day: 'Vendredi', time: '9h30 - 19h00' },
  { day: 'Samedi', time: 'Fermé' },
  { day: 'Dimanche', time: 'Fermé' },
];

export function Schedule() {
  return (
    <ul
      className={
        'display-on-scroll flex h-72 grow flex-col justify-between text-xl font-normal sm:h-full'
      }
    >
      {schedule.map(({ day, time }) => (
        <li
          className={
            'relative flex justify-between after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-full after:bg-black last:after:hidden sm:after:-bottom-4'
          }
          key={day}
        >
          <span>{day}</span>
          <span>{time}</span>
        </li>
      ))}
    </ul>
  );
}
