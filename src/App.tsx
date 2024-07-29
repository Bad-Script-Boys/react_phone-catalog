import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
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
