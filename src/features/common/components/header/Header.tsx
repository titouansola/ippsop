import Image from 'next/image';
import { Navbar } from '@ippsop/features/common/components/header/Navbar';
import { OpenState } from '@ippsop/features/common/components/header/OpenState';

export function Header() {
  return (
    <header
      className={
        'px-main animate-fade-in-slide-down relative flex h-25 items-center justify-between'
      }
    >
      <Image
        src={'/logo.png'}
        alt={'IPPSOP Logo'}
        width={192}
        height={55}
        className={'origin-top-left scale-75 sm:scale-100'}
      />
      <Navbar />
      <OpenState />
    </header>
  );
}
