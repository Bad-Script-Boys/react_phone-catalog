import productsFromServer from '../../api/products.json';
import { Catalog } from '../../components/Catalog';
import { Product } from '../../types';

const tablets: Product[] = productsFromServer.filter(
  product => product.category === 'tablets',
);

export const Tablets: React.FC = () => {
  return <Catalog title="Tablets" products={tablets} />;
};
