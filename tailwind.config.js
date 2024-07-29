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
      customTextColor: '#89939A',
      customAvailableColor1: '#FCDBC1',
      customAvailableColor2: '#5F7170',
      customAvailableColor3: '#4C4C4C',
      customAvailableColor4: '#F0F0F0',
    },
    boxShadow: {
      custom: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
    },
    transitionDuration: {
      300: '300ms',
    },
    borderWidth: {
      3: '3px',
    },
    screens: {
      'custom-sm': '320px',
      'custom-md': '640px',
      'custom-lg': '1200px',
      'custom-xl': '1600px',
    },
  },
};
export const plugins = [];
