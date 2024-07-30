/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
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
    screens: {
      'custom-sm': '500px',
      'custom-md': '900px',
      'custom-lg': '1200px',
      'custom-xl': '1600px',
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
    keyframes: {
      scrollForNewModels: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      scrollForHotPrices: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      scrollForMayAlsoLike: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      flame: {
        '0%, 100%': {
          backgroundColor: '#ff4500',
          boxShadow: '0 0 5px #ff4500, 0 0 15px #ff4500, 0 0 30px #ff4500',
        },
        '50%': {
          backgroundColor: '#ff8c00',
          boxShadow: '0 0 10px #ff8c00, 0 0 20px #ff8c00, 0 0 40px #ff8c00',
        },
      },
      flameDark: {
        '0%, 100%': {
          backgroundColor: '#8a2be2',
          boxShadow: '0 0 5px #8a2be2, 0 0 15px #8a2be2, 0 0 30px #8a2be2',
        },
        '50%': {
          backgroundColor: '#9400d3',
          boxShadow: '0 0 10px #9400d3, 0 0 20px #9400d3, 0 0 40px #9400d3',
        },
      },
    },
    animation: {
      scrollForNewModels: 'scrollForNewModels 50s linear infinite',
      scrollForHotPrices: 'scrollForHotPrices 180s linear infinite',
      scrollForMayAlsoLike: 'scrollForMayAlsoLike 230s linear infinite',
      flame: 'flame 1.5s infinite',
      flameDark: 'flameDark 1.5s infinite',
    },
  },
};
export const variants = {
  animation: ['responsive', 'hover'],
};
export const plugins = [];
