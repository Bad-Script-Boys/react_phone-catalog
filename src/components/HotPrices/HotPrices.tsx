import { useRef, useState } from 'react';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { CardWrapper } from '../../utils/CardWrapper';
import { useTheme } from '../../contexts/ThemeContext';

export const HotPrices = () => {
  const phones: Product[] = productsFromServer.filter(
    product => product.category === 'phones',
  );

  const { theme } = useTheme();

  const filteredPhones = phones
    .filter(product => product.category === 'phones')
    .filter(
      phone =>
        phone.year < 2021 && phone.capacity === '128GB' && phone.price < 1200,
    );

  const firstAnimationRef = useRef<HTMLDivElement | null>(null);
  const secondAnimationRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % filteredPhones.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? filteredPhones.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="px-4 pb-14 max-w-screen-xl mx-auto md:px-6 lg:px-8 lg:pb-20">
      <div className="mb-[24px] flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">Hot Prices</h2>
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
          className="w-max animate-scrollForHotPrices gap-5 hidden sm:flex"
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
          className="w-max animate-scrollForHotPrices gap-5 hidden sm:flex"
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
        <div className="flex sm:hidden w-full justify-center">
          <CardWrapper
            firstAnimationRef={firstAnimationRef}
            secondAnimationRef={secondAnimationRef}
          >
            <ProductCard
              product={filteredPhones[currentIndex]}
              displayFullPriceOnly
            />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};
