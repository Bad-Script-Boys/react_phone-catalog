/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  './src/components/footer/Footer.module.scss',
];
export const theme = {
  darkMode: 'class',
  extend: {
    fontFamily: {
      mont: ['Mont', 'sans-serif'],
    },
    colors: {
      customTextColor: '#89939A',
      borderHeader: '#E2E6E9',
      darkTheme: '#0F1121',
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
  },
};
export const plugins = [];
