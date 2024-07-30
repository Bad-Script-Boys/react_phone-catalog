import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { AboutSection } from './components/About';
import { ThemeProvider } from './contexts/ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      <AboutSection />
      <Footer />
    </ThemeProvider>
  );
}

