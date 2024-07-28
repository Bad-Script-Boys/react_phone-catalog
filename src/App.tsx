import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
// import { Product } from './types';
// import { useContext, useEffect } from 'react';
// import { DispatchContext } from './Store';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
