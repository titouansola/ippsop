import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className={'px-main mx-auto max-w-content pt-20 lg:pt-28'}>
      {children}
    </main>
  );
}
