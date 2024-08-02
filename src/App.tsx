import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';
import NotificationProvider from './components/Notification/Notification';

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
      <NotificationProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">{loading ? <Loader /> : <Outlet />}</div>
          <Footer />
        </div>
      </NotificationProvider>
    </ThemeProvider>
  );
}
