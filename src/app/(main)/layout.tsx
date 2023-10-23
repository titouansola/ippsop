import { PropsWithChildren } from 'react';
import { Header } from '@ippsop/features/common/components/header/Header';
import { Footer } from '@ippsop/features/common/components/Footer';
import { getClient } from '@ippsop/lib/sanity.client';
import { ServicePageContent } from '@ippsop/lib/models/service-page-content';

export default async function Layout({ children }: PropsWithChildren) {
  const client = getClient();
  const services = (
    await client.fetch<ServicePageContent[]>(`*[_type == 'services']`)
  ).sort((a, b) => a.position - b.position);

  return (
    <>
      <Header services={services} />
      <main className={'px-main max-w-content mx-auto pt-20 lg:pt-28'}>
        {children}
      </main>
      <Footer services={services} />
    </>
  );
}
