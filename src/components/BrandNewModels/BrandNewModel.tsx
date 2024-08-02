import { useRef } from 'react';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { CardWrapper } from '../../utils/CardWrapper';

export const BrandNewModels = () => {
  const phones: Product[] = productsFromServer.filter(
    product => product.category === 'phones',
  );

  const filteredPhones = phones
    .filter(product => product.category === 'phones')
    .filter(phone => phone.year > 2021 && phone.capacity === '128GB');

  const firstAnimationRef = useRef<HTMLDivElement | null>(null);
  const secondAnimationRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto md:px-6 lg:px-8 lg:pb-20">
      <div className="mb-[24px] flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">Brand new models</h2>
      </div>
      <div className="flex overflow-hidden w-full gap-5 min-h-[650px] items-center">
        <div
          className="flex w-max animate-scrollForNewModels gap-5"
          ref={firstAnimationRef}
        >
          {filteredPhones.map(product => (
            <CardWrapper
              key={`${product.id}-duplicate`}
              firstAnimationRef={firstAnimationRef}
              secondAnimationRef={secondAnimationRef}
            >
              <ProductCard product={product} displayFullPriceOnly />
            </CardWrapper>
          ))}
        </div>
        <div
          className="flex w-max animate-scrollForNewModels gap-5"
          aria-hidden="true"
          ref={secondAnimationRef}
        >
          {filteredPhones.map(product => (
            <CardWrapper
              key={`${product.id}-duplicate`}
              firstAnimationRef={firstAnimationRef}
              secondAnimationRef={secondAnimationRef}
            >
              <ProductCard product={product} displayFullPriceOnly />
            </CardWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
