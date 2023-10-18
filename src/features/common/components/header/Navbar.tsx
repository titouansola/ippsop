'use client';

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export function Navbar() {
  const [navOpened, setNavOpened] = useState(false);
  const [servicesOpened, setServicesOpened] = useState(false);

  const reset = () => {
    setNavOpened(false);
    setServicesOpened(false);
  };

  return (
    <>
      <div className={'p-3 lg:hidden'} onClick={() => setNavOpened(!navOpened)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 448 512"
        >
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            fill="currentColor"
          />
        </svg>
      </div>
      <nav className={clsx(navOpened && 'nav-opened')}>
        <Link onClick={reset} href={'/'} className={'home'}>
          ACCUEIL
        </Link>
        <div className={'services-menu relative'}>
          <span
            className={
              'duration-base services-menu__handle flex items-center gap-2 max-lg:justify-center'
            }
            onClick={() => setServicesOpened(!servicesOpened)}
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
            className={clsx(
              'services-menu__panel lg:block-shadow hidden py-2 lg:absolute lg:w-fit lg:whitespace-nowrap lg:bg-white',
              servicesOpened && 'services-opened'
            )}
          >
            <ul>
              <li>
                <a onClick={reset} href={'/services/preparation-physique'}>
                  Préparation physique
                </a>
              </li>
              <li>
                <a onClick={reset} href={'/services/coaching-sportif'}>
                  Coaching sportif
                </a>
              </li>
              <li>
                <a
                  onClick={reset}
                  href={'/services/accompagnement-therapeutique'}
                >
                  Accompagnement thérapeutique
                </a>
              </li>
              <li>
                <a onClick={reset} href={'/services/entreprises'}>
                  Entreprises
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Link onClick={reset} href={'/conferences'}>
          CONFÉRENCES
        </Link>
        <Link onClick={reset} href={'/contact'}>
          CONTACT
        </Link>
      </nav>
    </>
  );
}
