import productsFromServer from '../../api/products.json';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';

export const BrandNewModels = () => {
  const phones: Product[] = productsFromServer.filter(
    product => product.category === 'phones',
  );

  const filetredPhones = phones
    .filter(product => product.category === 'phones')
    .filter(phone => phone.year > 2021 && phone.capacity === '128GB');

  return (
    <div className="lg:mx-[152px] overflow-x-hidden mb-[80px]">
      <div className="mb-[24px] flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">Brand new models</h2>
      </div>
      <div className="flex overflow-hidden w-full gap-5">
        <div className="flex w-max animate-scrollForNewModels gap-5">
          {filetredPhones.map(product => (
            <ProductCard
              key={`${product.id}-duplicate`}
              product={product}
              displayFullPriceOnly
            />
          ))}
        </div>
        <div
          className="flex w-max animate-scrollForNewModels gap-5"
          aria-hidden="true"
        >
          {filetredPhones.map(product => (
            <ProductCard
              key={`${product.id}-duplicate`}
              product={product}
              displayFullPriceOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};
