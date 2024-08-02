import { useRef } from 'react';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { CardWrapper } from '../../utils/CardWrapper';
import { useLocation } from 'react-router-dom';

const getRandomPhones = (phones: Product[], count: number) => {
  const shuffled = phones.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const MayAlsoLike = () => {
  const { pathname } = useLocation();

  const selectType = pathname.split('-');

  let currentType = '';

  for (let i = 0; i < selectType.length; i++) {
    if (selectType[i].toLowerCase().includes('phones')) {
      currentType = 'phones';
    }
    if (selectType[i].toLowerCase().includes('tablets')) {
      currentType = 'tablets';
    }
    if (selectType[i].toLowerCase().includes('accessories')) {
      currentType = 'accessories';
    }
  }
  const typeDevices: Product[] = productsFromServer.filter(
    product => product.category === currentType,
  );

  const randomDevices = getRandomPhones(typeDevices, 30);

  const firstAnimationRef = useRef<HTMLDivElement | null>(null);
  const secondAnimationRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="overflow-x-hidden mb-[80px]">
      <div className="mb-[24px] flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">You may also like</h2>
      </div>
      <div className="flex overflow-hidden w-full gap-5 min-h-[650px] items-center">
        <div
          className="flex w-max animate-scrollForMayAlsoLike gap-5"
          ref={firstAnimationRef}
        >
          {randomDevices.map(product => (
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
          className="flex w-max animate-scrollForMayAlsoLike gap-5"
          aria-hidden="true"
          ref={secondAnimationRef}
        >
          {randomDevices.map(product => (
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
