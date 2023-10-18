import Image from 'next/image';
import { Navbar } from '@ippsop/features/common/components/header/Navbar';
import { OpeningState } from '@ippsop/features/common/components/header/OpeningState';

export function Header() {
  return (
    <header
      className={
        'px-main animate-fade-in-slide-down relative flex h-25 items-center justify-between'
      }
    >
      <Image
        src={'/img/logo.png'}
        alt={'IPPSOP Logo'}
        width={192}
        height={55}
        className={'origin-top-left scale-75 sm:scale-100'}
      />
      <Navbar />
      <OpeningState />
    </header>
  );
}
