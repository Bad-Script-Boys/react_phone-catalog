import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()],
//   server: {
//     open: true,
//   },
//   base:
//     command === 'build' && process.env.DEPLOY_ENV === 'github'
//       ? '/react_phone_catalog/'
//       : '/',
// });
// export default defineConfig(({ command }) => ({
//   plugins: [react()],
//   base:
//     command === 'build' && process.env.DEPLOY_ENV === 'github'
//       ? '/react_phone-catalog/'
//       : '/',
//   server: {
//     open: true,
//   },
// }));

// import { defineConfig } from 'vite';

export default defineConfig({
  base: '/react_phone-catalog/',
  plugins: [react()],
  server: {
    open: true,
  },
});
