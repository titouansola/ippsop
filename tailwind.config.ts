import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/features/**/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        wide: ['var(--font-bebas)'],
        body: ['var(--font-satoshi)'],
      },
      spacing: {
        '25': '6.25rem',
      },
      colors: {
        black: '#141414',
        green: '#30DA33',
        red: '#E72121',
        //
        body: '#F3F3F3',
        primary: '#164979',
        secondary: '#2986DE',
        hint: '#FF7033',
      },
    },
  },
  plugins: [],
};
export default config;
