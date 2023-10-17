import Link from 'next/link';
import { headers } from 'next/headers';
import clsx from 'clsx';

export function Navbar() {
  const headersList = headers();
  const referer = headersList.get('referer');
  const home = !!referer?.match('home') ?? false;
  const conferences = !!referer?.match('conferences') ?? false;
  const contact = !!referer?.match('contact') ?? false;

  return (
    <nav className={'absolute-centered hidden gap-2 lg:flex'}>
      <Link href={'/home'} className={clsx(home && 'selected')}>
        ACCUEIL
      </Link>
      <div className={'services-menu relative'}>
        <span
          className={
            'duration-base services-menu__handle flex items-center gap-2'
          }
        >
          SERVICES
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path
              d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div
          className={
            'services-menu__panel block-shadow absolute hidden w-fit whitespace-nowrap bg-white py-2'
          }
        >
          <ul>
            <li>
              <a>Préparation physique</a>
            </li>
            <li>
              <a>Coaching sportif</a>
            </li>
            <li>
              <a>Accompagnement thérapeutique</a>
            </li>
            <li>
              <a>Entreprises</a>
            </li>
          </ul>
        </div>
      </div>
      <Link href={'/conferences'} className={clsx(conferences && 'selected')}>
        CONFÉRENCES
      </Link>
      <Link href={'/contact'} className={clsx(contact && 'selected')}>
        CONTACT
      </Link>
    </nav>
  );
}
