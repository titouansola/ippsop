import Image from 'next/image';
import { Navbar } from '@ippsop/features/common/components/header/Navbar';
import { OpenState } from '@ippsop/features/common/components/header/OpenState';

export function Header() {
  return (
    <header
      className={'px-main h-25 relative flex items-center justify-between'}
    >
      <Image
        src={'/logo.png'}
        alt={'IPPSOP Logo'}
        width={'192'}
        height={'55'}
      />
      <Navbar />
      <OpenState />
    </header>
  );
}
