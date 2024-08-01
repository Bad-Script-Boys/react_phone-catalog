import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const Welcome = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['img/banner-main.jpg', 'img/slide-2.webp', 'img/slide-3.jpg'];

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="overflow-x-hidden mt-[56px] md:mt-[32px] sm:mt-[24px] mb-6">
      <h1 className="text-[48px] font-extrabold pt-12 lg:mx-[152px] mb-[10px]">
        Welcome to Nice Gadgets store!
      </h1>
      <div className="mx-8 mb-4 lg:mx-[152px] gap-4 flex justify-center ">
        <button
          className={`w-8 border-2 ${theme === 'dark' ? 'bg-[#323542] border-none' : ' border-[#B4BDC3]'}`}
          onClick={handlePrev}
        >
          {theme === 'light' ? (
            <img
              src="img/icons/banner-arrow-left.svg"
              alt="arrow left"
              className="mx-1"
            />
          ) : (
            <img
              src="img/icons/arrow-left-white.svg"
              alt="arrow left"
              className="mx-1"
            />
          )}
        </button>

        <div className="relative w-full max-w-[1040px] overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-full h-[400px]">
                <img
                  src={slide}
                  alt={`Slide ${index}`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`w-8 border-2 ${theme === 'dark' ? 'bg-[#323542] border-none' : ' border-[#B4BDC3]'}`}
          onClick={handleNext}
        >
          {theme === 'light' ? (
            <img
              src="img/icons/banner-arrow-right.svg"
              alt="arrow right"
              className="mx-1"
            />
          ) : (
            <img
              src="img/icons/arrow-right-white.svg"
              alt="arrow right"
              className="mx-1"
            />
          )}
        </button>
      </div>
      {theme === 'light' ? (
        <div className="flex items-center justify-center gap-4 mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-5 h-1 ${currentSlide === index ? 'bg-[#313237]' : 'bg-[#E2E6E9]'}`}
            ></div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4 mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-5 h-1 ${currentSlide === index ? 'bg-[#E2E6E9]' : 'bg-[#313237]'}`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};
