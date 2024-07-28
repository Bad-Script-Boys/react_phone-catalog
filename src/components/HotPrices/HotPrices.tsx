import { useContext } from 'react';
import { StateContext } from '../../Store';
import { PhonesForHotPrices } from '../PhoneCards/PhonesForHotPrices';

export const HotPrices = () => {
  const state = useContext(StateContext);
  const { products } = state;

  const phones = products
    .filter(product => product.category === 'phones')
    .filter(
      phone =>
        phone.year < 2021 && phone.capacity === '128GB' && phone.price < 1200,
    );

  return (
    <div className="lg:mx-[152px] overflow-x-hidden mb-[80px]">
      <div className="mb-[24px] flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">Hot Prices</h2>
      </div>
      <div className="flex overflow-hidden w-full">
        <div className="flex w-max animate-scrollForHotPrices gap-5">
          {phones.map(product => (
            <PhonesForHotPrices
              key={product.id}
              image={product.image}
              name={product.name}
              fullPrice={product.fullPrice}
              price={product.price}
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
