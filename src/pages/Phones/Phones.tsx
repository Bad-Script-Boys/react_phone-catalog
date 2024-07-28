import React from 'react';
import '../../App.css';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';

// const products: Product[] = productsFromServer;
const products: Product[] = productsFromServer.filter(
  product => product.category === 'phones',
);

const Phones: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Phones;
