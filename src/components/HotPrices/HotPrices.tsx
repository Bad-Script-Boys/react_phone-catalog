import { useRef } from 'react';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { CardWrapper } from '../../utils/CardWrapper';

export const HotPrices = () => {
  const phones: Product[] = productsFromServer.filter(
    product => product.category === 'phones',
  );
  const filteredPhones = phones
    .filter(product => product.category === 'phones')
    .filter(
      phone =>
        phone.year < 2021 && phone.capacity === '128GB' && phone.price < 1200,
    );

  const firstAnimationRef = useRef<HTMLDivElement | null>(null);
  const secondAnimationRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="lg:mx-[152px] overflow-x-hidden mb-[80px]">
      <div className="mb-[24px] flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">Hot Prices</h2>
      </div>
      <div className="flex overflow-hidden w-full gap-5">
        <div
          className="flex w-max animate-scrollForHotPrices gap-5"
          ref={firstAnimationRef}
        >
          {filteredPhones.map(product => (
            <CardWrapper
              key={product.id}
              firstAnimationRef={firstAnimationRef}
              secondAnimationRef={secondAnimationRef}
            >
              <ProductCard product={product} showFullPrice isHotPrices />
            </CardWrapper>
          ))}
        </div>
        <div
          className="flex w-max animate-scrollForHotPrices gap-5"
          aria-hidden="true"
          ref={secondAnimationRef}
        >
          {filteredPhones.map(product => (
            <CardWrapper
              key={product.id}
              firstAnimationRef={firstAnimationRef}
              secondAnimationRef={secondAnimationRef}
            >
              <ProductCard product={product} showFullPrice isHotPrices />
            </CardWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
