import './App.css';
import productsFromServer from './api/products.json';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Product } from './types';

const products: Product[] = productsFromServer;

export function App() {
  return (
    <>
      <h1>phone catalog</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
