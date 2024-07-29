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
    keyframes: {
      scrollForNewModels: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      scrollForHotPrices: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
    animation: {
      scrollForNewModels: 'scrollForNewModels 60s linear infinite',
      scrollForHotPrices: 'scrollForHotPrices 180s linear infinite',
    },
  },
};
