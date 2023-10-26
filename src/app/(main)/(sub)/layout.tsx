import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className={'px-main max-w-content mx-auto pt-20 lg:pt-28'}>
      {children}
    </main>
  );
}
