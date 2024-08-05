import React from 'react';
import { Device } from '../../types/Device';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  afterStyleDark,
  afterStyleLight,
  categoriesColorsStyle,
  visuallyHidden,
} from '../Categories/customStyles';
import { useTheme } from '../../contexts/ThemeContext';

type Props = {
  device: Device | null;
  currCapacity: string;
};

export const CategoriesMemory: React.FC<Props> = ({ device, currCapacity }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const afterStyle = theme === 'light' ? afterStyleLight : afterStyleDark;

  const handleCurrCapacity = (chosenСapacity: string) => {
    const pathArr = pathname.split('-');
    for (let i = 0; i < pathArr.length; i++) {
      if (
        pathArr[i].toLowerCase().includes('gb') ||
        pathArr[i].toLowerCase().includes('tb') ||
        pathArr[i].toLowerCase().includes('mm')
      ) {
        pathArr[i] = chosenСapacity.toLowerCase();
        break;
      }
    }
    navigate(pathArr.join('-'));
  };
  return (
    <div className="max-w-[320px] pb-6 mb-[24px]" style={categoriesColorsStyle}>
      <div style={afterStyle} />
      <p
        className={`text-xs leading-[15px] whitespace-nowrap mb-2 font-mont 
            ${theme === 'light' ? 'font-semibold text-[#89939A]' : 'font-bold text-[#75767F]'}`}
      >
        Select capacity
      </p>
      <div className="flex space-x-1">
        {device?.capacityAvailable.map(capacity => {
          return (
            <label
              className={`w-[60px] h-[32px] border-[1px] cursor-pointer box-border
                ${theme === 'dark' && 'dark:border-[#4A4D58]'}`}
              htmlFor={`memory${capacity}`}
              key={capacity}
            >
              <input
                type="radio"
                name="memory"
                value={capacity.toString()}
                style={visuallyHidden}
                id={`memory${capacity}`}
                onChange={() =>
                  handleCurrCapacity(capacity.toString().toLowerCase())
                }
              />
              <span
                className={`w-full h-full text-[#313237] font-mont font-medium 
                text-sm leading-5 text-center flex items-center justify-center`}
                style={{
                  backgroundColor: `${currCapacity === capacity.toString() ? '#313237' : 'white'}`,
                  color: `${currCapacity === capacity.toString() ? 'white' : '#313237'}`,
                }}
              >
                {capacity}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
