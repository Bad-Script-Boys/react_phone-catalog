import React from 'react';
import { colorNameToRgb } from './possibleСolors';
import cn from 'classnames';
import { Device } from '../../types/Device';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  afterStyle,
  categoriesColorsStyle,
  visuallyHidden,
} from '../Categories/customStyles';

type Props = {
  device: Device | null;
  currColor: string;
};

export const CategoriesColors: React.FC<Props> = ({ device, currColor }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleCurrColor = (chosenСolor: string) => {
    const pathArr = pathname.split('-');
    let newPath: string[] = [];

    for (let i = 0; i < pathArr.length; i++) {
      if (
        pathArr[i].toLowerCase().includes('gb') ||
        pathArr[i].toLowerCase().includes('tb') ||
        pathArr[i].toLowerCase().includes('mm')
      ) {
        newPath = pathArr.slice(0, i + 1);
        newPath.push(chosenСolor.toLowerCase().replace(/ /g, '-'));
        break;
      }
    }
    navigate(newPath.join('-'));
  };

  return (
    <div
      className={`flex justify-between w-[100%] mb-[24px]`}
      style={categoriesColorsStyle}
    >
      <div style={afterStyle} />
      <div className="box-border pb-6 flex-1 md:text-left w-[320px]">
        <p className="font-normal text-xs leading-[15px] text-[#89939A] whitespace-nowrap mb-2 font-mont">
          Available colors
        </p>
        <div className="flex space-x-2 w-[100%]">
          {device?.colorsAvailable.map(color => {
            const hexColor = colorNameToRgb(color);
            return (
              <label
                className={cn(
                  `inline-block flex items-center justify-center w-8 h-8  border-[1px] rounded-full cursor-pointer bg-white`,
                  {
                    'border border-black': currColor === color,
                  },
                )}
                htmlFor={`color-${color}`}
                key={color}
              >
                <input
                  type="radio"
                  name="color"
                  style={visuallyHidden}
                  id={`color-${color}`}
                  value={color}
                  onChange={() => handleCurrColor(color)}
                />
                <span
                  style={{ backgroundColor: hexColor }}
                  className={`w-[80%] h-[80%] rounded-full ${currColor === color && color === 'white' && 'border'}`}
                ></span>
              </label>
            );
          })}
        </div>
      </div>
      <p className="font-normal text-xs leading-[15px] text-right text-[#B4BDC4] flex-1 md:text-right font-mont">
        ID:&nbsp;802390
      </p>
    </div>
  );
};
