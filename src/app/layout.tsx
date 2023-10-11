import { PropsWithChildren } from 'react';

export const metadata = {
  title: 'IPPSOP - Gaël Guenec',
  description: 'Gaël Guenec, préparateur physique',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
