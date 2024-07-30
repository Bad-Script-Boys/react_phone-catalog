import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
