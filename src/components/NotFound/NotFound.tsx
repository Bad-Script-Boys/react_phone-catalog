import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-[100px] w-full px-4 md:px-8 lg:px-[152px]"></div>
      <img
        src="img/notfound.png"
        alt="404 - Сторінку не знайдено."
        className="w-full max-w-md"
      />
      <p className="text-lg">Вибачте, запитувана сторінка не існує.</p>
      <a
        className="bg-[#313237] py-4 px-8 font-['Open_Sans'] text-white hover:scale-110 transition-transform duration-500 no-underline hover:text-white mt-4"
        href="#"
      >
        Повернутися на Головну
      </a>
    </div>
  );
};

export default NotFound;
