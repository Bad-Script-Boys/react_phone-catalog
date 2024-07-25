/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      customTextColor: '#89939A',
      borderHeader: '#E2E6E9',
    },
    borderWidth: {
      3: '3px',
    },
  },
};
export const plugins = [];
