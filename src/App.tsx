import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';

export function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem('firstLoad') !== 'false') {
      setLoading(true);
      sessionStorage.setItem('firstLoad', 'false');
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <Header />
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </ThemeProvider>
  );
}
