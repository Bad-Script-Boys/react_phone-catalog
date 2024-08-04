import React, { useState } from 'react';
import { Device } from '../../types/Device';
import cn from 'classnames';

type Props = {
  device: Device | null;
};

export const Gallery: React.FC<Props> = ({ device }) => {
  const [selectedPic, setSelectedPic] = useState(device?.images[0] || '');

  const handleWheel = (event: React.WheelEvent<HTMLUListElement>) => {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    event.currentTarget.scrollLeft += scrollAmount;
  };

  const handleMouseEnter = (image: string) => {
    setSelectedPic(image);
  };

  return (
    <div className="flex flex-col h-[100%] w-[100%] col-span-1 md:col-span-1 sm:flex-row-reverse sm:space-y-1">
      <span className="mx-auto flex justify-center w-[288px] h-[288px] md:w-[350px] md:h-[350px] lg:w-[464px] lg:h-[464px] p-[6px] md:p-[11px]">
        <img
          className="object-contain transition-transform duration-300 ease-in-out w-full h-full hover:transform hover:scale-110"
          src={selectedPic}
          alt="Selected"
        />
      </span>
      <ul
        className="flex justify-center sm:justify-start mt-10 sm:mr-2 sm:mb-auto sm:mt-0 space-x-1 sm:space-y-4 sm:flex-col sm:space-x-0 whitespace-nowrap"
        onWheel={handleWheel}
      >
        {device?.images.map(image => (
          <li
            className={cn(
              'border flex cursor-pointer w-[52px] h-[52px] sm:w-[37px] sm:h-[37px] md:w-[52px] md:h-[52px] lg:w-[82px] lg:h-[82px]',
              {
                'border-black ': selectedPic === image,
              },
            )}
            key={image}
            onMouseEnter={() => handleMouseEnter(image)}
          >
            <img
              className="object-contain w-full h-full"
              src={image}
              alt="your_device_picture"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
