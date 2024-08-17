import productsFromServer from '../../api/products.json';
import { Catalog } from '../../components/Catalog';
import { Product } from '../../types';

const accessories: Product[] = productsFromServer.filter(
  product => product.category === 'accessories',
);

export const Accessories: React.FC = () => {
  return <Catalog title="Accessories" products={accessories} />;
};
