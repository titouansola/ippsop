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
    <nav className={'absolute-centered hidden gap-2 md:flex'}>
      <Link href={'/home'} className={clsx(home && 'selected')}>
        ACCUEIL
      </Link>
      <div className={'flex cursor-pointer items-center'}>SERVICES</div>
      <Link href={'/conferences'} className={clsx(conferences && 'selected')}>
        CONFÉRENCES
      </Link>
      <Link href={'/contact'} className={clsx(contact && 'selected')}>
        CONTACT
      </Link>
    </nav>
  );
}
