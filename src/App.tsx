import './App.css';
// import productsFromServer from './api/products.json';
// import { ProductCard } from './components/ProductCard/ProductCard';
// import { Product } from './types';
// import { Header } from './components/Header/Header';
// import { ThemeProvider } from './contexts/ThemeContext';
// import { Footer } from './components/footer/Footer';
import { AboutSection } from './components/About';

// const products: Product[] = productsFromServer;

export function App() {
  return (
    // <>
    //   <ThemeProvider>
    //     <Header />
    //   </ThemeProvider>
    //   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    //     {products.map(product => (
    //       <ProductCard product={product} key={product.id} />
    //     ))}
    //   </div>
    //   <Footer />
    // </>
    <AboutSection />
  );
}
