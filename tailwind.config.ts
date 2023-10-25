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
        content: '1720px',
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
        'primary-dark': '#0C3C63',
        'primary-transparent': '#16497999',
        secondary: '#2986DE',
        hint: '#FF7033',
        'hint-dark': '#CE5B2A',
      },
      transitionDuration: {
        base: '100ms',
      },
      backgroundImage: {
        star: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.44 19'><polygon fill='%23fdd663' points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>\")",
      },
      animation: {
        'fade-in': 'fade-in 1s ease',
        'fade-in-slide-down': 'fade-in 1s ease, slide-down 1s ease',
        'fade-in-slide-up': 'fade-in 1s ease, slide-up 1s ease',
        'carousel-1': 'carousel-1 ease 30s infinite',
        'carousel-2': 'carousel-2 ease 30s infinite',
        'carousel-3': 'carousel-3 ease 30s infinite',
        'carousel-4': 'carousel-4 ease 30s infinite',
        'carousel-5': 'carousel-5 ease 30s infinite',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-down': {
          from: { translate: '0 -25%' },
          to: { translate: '0 0' },
        },
        'slide-up': {
          from: { translate: '0 25%' },
          to: { translate: '0 0' },
        },
        'carousel-1': {
          '0%': { opacity: '1' },
          '20%': { opacity: '0' },
          '40%': { opacity: '0' },
          '60%': { opacity: '0' },
          '80%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'carousel-2': {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '40%': { opacity: '0' },
          '60%': { opacity: '0' },
          '80%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        'carousel-3': {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '40%': { opacity: '1' },
          '60%': { opacity: '0' },
          '80%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        'carousel-4': {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '40%': { opacity: '0' },
          '60%': { opacity: '1' },
          '80%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        'carousel-5': {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '40%': { opacity: '0' },
          '60%': { opacity: '0' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
