import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const Welcome = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const mobileSlides = [
    'img/banner-small.png',
    'img/slide-2.webp',
    'img/slide-3.jpg',
  ];
  const tabletSlides = [
    'img/banner-middle.png',
    'img/slide-2.webp',
    'img/slide-3.jpg',
  ];
  const desktopSlides = [
    'img/banner-big.png',
    'img/slide-2.webp',
    'img/slide-3.jpg',
  ];

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? mobileSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === mobileSlides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev =>
        prev === mobileSlides.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [mobileSlides.length]);

  return (
    <div className="max-w-screen-xl mx-auto md:px-6 lg:px-8 lg:pb-20 pt-[70px] md:mt-[32px] sm:mt-[24px] mb-4">
      <h1 className="text-[48px] lg:text-[48px] lg:px-0 font-extrabold mb-[30px] px-4 max-w-screen-xl mx-auto md:px-6">
        Welcome to Nice Gadgets store!
      </h1>
      <div className="relative w-full mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <button
          className={`h-[400px] flex items-center justify-center w-8 border-2 ${theme === 'dark' ? 'bg-[#323542] border-none' : 'border-[#B4BDC3]'} hidden sm:flex mr-4`}
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

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {mobileSlides.map((slide, index) => (
              <div
                key={index}
                className={`slide flex-shrink-0 w-full h-[400px] ${currentSlide === index ? 'flip' : ''} relative`}
              >
                <img
                  src={slide}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover object-top sm:hidden"
                />
                <img
                  src={tabletSlides[index]}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover object-top hidden sm:block md:hidden"
                />
                <img
                  src={desktopSlides[index]}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover object-top hidden md:block"
                />
                {index === 0 && (
                  <a
                    href="/react_phone-catalog/#/phones/apple-iphone-14-pro-128gb-spaceblack"
                    className="absolute inset-0 bg-transparent"
                    style={{
                      top: '84%',
                      left: '15%',
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '50px',
                      zIndex: 10,
                    }}
                  >
                    <span className="sr-only">Hidden Button</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          className={`h-[400px] flex items-center justify-center w-8 border-2 ${theme === 'dark' ? 'bg-[#323542] border-none' : 'border-[#B4BDC3]'} hidden sm:flex ml-4`}
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
      <div className="flex items-center justify-center gap-4 mt-4">
        {mobileSlides.map((_, index) => (
          <div
            key={index}
            className={`w-5 h-1 ${currentSlide === index ? (theme === 'light' ? 'bg-[#313237]' : 'bg-[#E2E6E9]') : theme === 'light' ? 'bg-[#E2E6E9]' : 'bg-[#313237]'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
