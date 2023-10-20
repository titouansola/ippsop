import Image from 'next/image';
import { Navbar } from '@ippsop/features/common/components/header/Navbar';
import { HeaderRightSide } from '@ippsop/features/common/components/header/HeaderRightSide';

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
        className={'h-auto w-[144px] sm:w-auto'}
      />
      <Navbar />
      <HeaderRightSide />
    </header>
  );
}
