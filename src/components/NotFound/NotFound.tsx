import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="mt-[100px] lg:px-[152px]"></div>
      <h1 className="text-6xl font-bold">404</h1>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 - Сторінку не знайдено."
        className=" h-[300px] object-contain"
      />
      <p className="text-lg">Вибачте, запитувана сторінка не існує.</p>
      <a
        className="bg-[#313237] py-4 px-8 text-white hover:scale-110 transition-transform duration-500 no-underline hover:text-white mt-4"
        href="#"
      >
        Повернутися на Головну
      </a>
    </div>
  );
};

export default NotFound;
