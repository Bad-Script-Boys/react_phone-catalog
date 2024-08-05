import { useRef, useState } from 'react';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { CardWrapper } from '../../utils/CardWrapper';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const getRandomPhones = (phones: Product[], count: number) => {
  const shuffled = phones.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const MayAlsoLike = () => {
  const { pathname } = useLocation();

  const selectType = pathname.split('-');

  const { theme } = useTheme();

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % randomDevices.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? randomDevices.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="overflow-x-hidden mb-[80px] mt-10">
      <div className="mb-[24px] flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">You may also like</h2>
        <div className="flex sm:hidden gap-6">
          <button
            onClick={handlePrev}
            className="p-2 w-[32px] h-[32px] border border-gray-500 dark:bg-[#323542]"
            style={{
              backgroundImage: `url(${theme === 'dark' ? 'img/icons/arrow-left-white.svg' : 'img/icons/banner-arrow-left.svg'})`,
              backgroundSize: 'cover',
            }}
          ></button>
          <button
            onClick={handleNext}
            className="p-2 w-[32px] h-[32px] border border-gray-500 dark:bg-[#323542]"
            style={{
              backgroundImage: `url(${theme === 'dark' ? 'img/icons/arrow-right-white.svg' : 'img/icons/banner-arrow-right.svg'})`,
              backgroundSize: 'cover',
            }}
          ></button>
        </div>
      </div>
      <div className="flex overflow-hidden w-full gap-5 min-h-[650px] items-center">
        <div
          className="w-max animate-scrollForMayAlsoLike gap-5 hidden sm:flex"
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
          className="w-max animate-scrollForMayAlsoLike gap-5 hidden sm:flex"
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
        <div className="flex sm:hidden w-full justify-center">
          <CardWrapper
            firstAnimationRef={firstAnimationRef}
            secondAnimationRef={secondAnimationRef}
          >
            <ProductCard
              product={randomDevices[currentIndex]}
              displayFullPriceOnly
            />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};
