import { PropsWithChildren } from 'react';
import { Header } from '@ippsop/features/common/components/header/Header';
import { Footer } from '@ippsop/features/common/components/Footer';
import { fetchLightServiceList } from '@ippsop/lib/queries/services';

export default async function Layout({ children }: PropsWithChildren) {
  const services = await fetchLightServiceList();
  return (
    <>
      <Header services={services} />
      {children}
      <Footer services={services} />
    </>
  );
}
