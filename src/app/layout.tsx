import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';

import './global.css';

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Black.otf', weight: '900', style: 'normal' },
    { path: './fonts/Satoshi-BlackItalic.otf', weight: '900', style: 'italic' },
    { path: './fonts/Satoshi-Bold.otf', weight: '600', style: 'normal' },
    { path: './fonts/Satoshi-BoldItalic.otf', weight: '600', style: 'italic' },
    { path: './fonts/Satoshi-Medium.otf', weight: '500', style: 'normal' },
    {
      path: './fonts/Satoshi-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    { path: './fonts/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/Satoshi-Italic.otf', weight: '400', style: 'italic' },
    { path: './fonts/Satoshi-Light.otf', weight: '300', style: 'normal' },
    { path: './fonts/Satoshi-LightItalic.otf', weight: '300', style: 'italic' },
  ],
  variable: '--font-satoshi',
});

const bebas = localFont({
  src: './fonts/BebasNeue-Regular.otf',
  variable: '--font-bebas',
});

export const metadata = {
  title: 'IPPSOP - Gaël Guenec',
  description: 'Gaël Guenec, préparateur physique',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" className={`${satoshi.variable} ${bebas.variable}`}>
      <body
        className={
          'bg-body font-body relative m-0 min-h-screen font-medium text-black'
        }
      >
        {children}
      </body>
    </html>
  );
}
