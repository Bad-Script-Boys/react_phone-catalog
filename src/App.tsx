import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
import { Product } from './types';
import { useContext, useEffect } from 'react';
import { DispatchContext } from './Store';
import { Outlet } from 'react-router-dom';

export function App() {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('public/api/products.json');
      const products: Product[] = await response.json();
      dispatch({ type: 'setProducts', payload: products });
    };

    fetchProducts();
  }, [dispatch]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
