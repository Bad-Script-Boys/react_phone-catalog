import { PhonesForNewModels } from '../PhoneCards/PhonesForNewModels';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';

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
      <div className="flex overflow-hidden w-full">
        <div className="flex w-max animate-scrollForNewModels gap-5">
          {filetredPhones.map(product => (
            <PhonesForNewModels
              key={`${product.id}-duplicate`}
              image={product.image}
              name={product.name}
              fullPrice={product.fullPrice}
              screen={product.screen}
              capacity={product.capacity}
              ram={product.ram}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
