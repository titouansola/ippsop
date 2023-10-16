import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/features/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        wide: ['var(--font-bebas)'],
        body: ['var(--font-satoshi)'],
      },
      maxWidth: {
        content: '1440px',
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
      backgroundImage: {
        hero: 'url(/img/hero.jpg)',
        schedule: 'url(/img/main-info-illus.jpg)',
        'price-individual': 'url(/img/price-individual.jpg)',
        'price-group': 'url(/img/price-group.jpg)',
        'price-plans': 'url(/img/price-plans.jpg)',
        'price-bilan': 'url(/img/price-bilan.jpg)',
        star: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.44 19'><polygon fill='%23fdd663' points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>\")",
      },
    },
  },
  plugins: [],
};
export default config;
