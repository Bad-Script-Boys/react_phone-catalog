import React from 'react';
import '../../App.css';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';
import { Catalog } from '../../components/Catalog';

const phones: Product[] = productsFromServer.filter(
  product => product.category === 'phones',
);

export const Phones: React.FC = () => {
  return <Catalog title="Mobile phones" products={phones} />;
};
