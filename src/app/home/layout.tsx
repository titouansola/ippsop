import { PropsWithChildren } from 'react';
import { Header } from '@ippsop/features/common/components/header/Header';
import { Footer } from '@ippsop/features/common/components/Footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={'px-main'}>{children}</main>
      <Footer />
    </>
  );
}
