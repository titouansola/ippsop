import Image from 'next/image';
import { Navbar } from '@ippsop/features/common/components/header/Navbar';
import { HeaderRightSide } from '@ippsop/features/common/components/header/HeaderRightSide';
import { ServicePageContent } from '@ippsop/lib/models/service-page-content';

export async function Header({ services }: { services: ServicePageContent[] }) {
  return (
    <header
      className={
        'px-main animate-fade-in-slide-down relative flex h-25 items-center justify-between'
      }
    >
      <div className={'relative h-auto min-h-[50px] w-[144px] sm:w-[192px]'}>
        <Image
          src={'/img/logo.png'}
          alt={'IPPSOP Logo'}
          fill
          className={'object-contain'}
        />
      </div>
      <Navbar services={services} />
      <HeaderRightSide />
    </header>
  );
}
