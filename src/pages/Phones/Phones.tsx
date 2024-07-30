import React from 'react';
import '../../App.css';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';
import { ProductCard } from '../../components/ProductCard';

const phones: Product[] = productsFromServer.filter(
  product => product.category === 'phones',
);

export const Phones: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {phones.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
