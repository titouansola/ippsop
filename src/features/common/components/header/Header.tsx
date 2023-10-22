import Image from 'next/image';
import { Navbar } from '@ippsop/features/common/components/header/Navbar';
import { HeaderRightSide } from '@ippsop/features/common/components/header/HeaderRightSide';
import { ServicePageContent } from '@ippsop/lib/models/service-page-content';

export async function Header({ services }: { services: ServicePageContent[] }) {
  return (
    <header
      className={
        'px-main animate-fade-in-slide-down fixed top-0 z-50 flex w-full items-center justify-between bg-black py-4 lg:text-white'
      }
    >
      <div className={'relative h-auto min-h-[50px] w-[144px] sm:w-[192px]'}>
        <Image
          src={'/img/logo.png'}
          alt={'IPPSOP Logo'}
          className={'object-contain'}
          sizes={'192px (max-width: 500px) 144px'}
          priority
          fill
        />
      </div>
      <Navbar services={services} />
      <HeaderRightSide />
    </header>
  );
}
