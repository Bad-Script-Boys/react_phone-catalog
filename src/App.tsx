import { Header } from './components/Header/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { Footer } from './components/footer/Footer';

export function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Footer />
      </ThemeProvider>
    </>
  );
}
