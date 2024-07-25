/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  './src/components/footer/Footer.module.scss',
];
export const theme = {
  extend: {
    fontFamily: {
      mont: ['Mont', 'sans-serif'],
    },
    colors: {
      customGray: '#89939A',
    },
    boxShadow: {
      custom: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
    },
    transitionDuration: {
      300: '300ms',
    },
    borderWidth: {
      2: '2px',
    },
  },
};
export const plugins = [];
