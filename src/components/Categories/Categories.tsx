import React, { useEffect, useState, useContext } from 'react';
import styles from './Categories.module.scss';
import { Device } from '../../types/Device';
import { useLocation, useNavigate } from 'react-router-dom';
import { colorNameToRgb } from './categoriesColors';
import cn from 'classnames';
import { DispatchContext, StateContext } from '../../Store';
import { useTheme } from '../../contexts/ThemeContext';
import { StrokeIcon } from '../ThemeIcons/StrokeIcon';

const {
  categories,
  categories__wrap,
  categories__colors,
  categories__colors_wrap,
  categories__colors_title,
  categories__colors_vers,
  categories__colors_option,
  categories__colors_input,
  categories__colors_circle,
  categories__colors_id,
  categories__memory,
  categories__memory_title,
  categories__memory_vers,
  categories__memory_option,
  categories__memory_input,
  categories__memory_btn,
  categories__info,
  categories__info_price,
  categories__info_main,
  categories__info_price_value,
  categories__info_price_discount,
  categories__info_list,
  categories__info_list_item,
  categories__info_list_item_name,
  categories__info_list_item_value,
} = styles;

type Props = {
  device: Device | null;
};

export const Categories: React.FC<Props> = ({ device }) => {
  const [currColor, setCurrColor] = useState(device?.color);
  const [currCapacity, setCurrCapacity] = useState(device?.capacity);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { theme } = useTheme();

  if (!device) {
    return null;
  }

  useEffect(() => {
    if (currColor !== undefined) {
      const lastIndx = pathname.lastIndexOf('-') + 1;
      navigate(`${pathname.slice(0, lastIndx) + currColor}`);
    }
  }, [currColor, pathname, navigate]);

  useEffect(() => {
    if (currCapacity !== undefined) {
      const pathArr = pathname.split('-');
      if (currCapacity) {
        pathArr[pathArr.length - 2] = currCapacity.toLowerCase();
      }
      navigate(`${pathArr.join('-')}`);
    }
  }, [currCapacity, pathname, navigate]);

  const handleCurrColor = (chosenColor: string) => {
    setCurrColor(chosenColor);
  };

  const handleCurrCapacity = (chosenCapacity: string) => {
    setCurrCapacity(chosenCapacity);
  };

  const handleAddToCart = () => {
    if (device) {
      const itemInBasket = state.basket.find(item => item.itemId === device.id);

      if (itemInBasket) {
        dispatch({
          type: 'removeFromBasket',
          payload: { itemId: device.id },
        });
      } else {
        dispatch({
          type: 'addToBasket',
          payload: {
            itemId: device.id,
            price: device.priceDiscount,
            name: device.name,
            image: device.images[0],
          },
        });
      }
    }
  };

  const handleAddToFavorites = () => {
    if (device) {
      const isFavorite = state.favorites.includes(device.id);

      if (isFavorite) {
        dispatch({
          type: 'removeFromFavorites',
          payload: { itemId: device.id },
        });
      } else {
        dispatch({
          type: 'addToFavorites',
          payload: { itemId: device.id },
        });
      }
    }
  };

  return (
    <div className={categories}>
      <div className={categories__wrap}>
        <div className={categories__colors}>
          <div className={categories__colors_wrap}>
            <p className={categories__colors_title}>Available colors</p>
            <div className={categories__colors_vers}>
              {device?.colorsAvailable.map(color => {
                const hexColor = colorNameToRgb(color);

                return (
                  <label
                    className={cn(`${categories__colors_option}`, {
                      'border border-black': currColor === color,
                    })}
                    htmlFor={`color-${color}`}
                    key={color}
                  >
                    <input
                      type="radio"
                      name="color"
                      className={categories__colors_input}
                      id={`color-${color}`}
                      value={color}
                      onChange={() => handleCurrColor(color)}
                    />
                    <span
                      style={{ backgroundColor: hexColor }}
                      className={categories__colors_circle}
                    ></span>
                  </label>
                );
              })}
            </div>
          </div>
          <p className={categories__colors_id}>ID:&nbsp;802390</p>
        </div>
        <div className={categories__memory}>
          <p className={categories__memory_title}>Select capacity</p>
          <div className={categories__memory_vers}>
            {device?.capacityAvailable.map(capacity => {
              return (
                <label
                  className={categories__memory_option}
                  htmlFor={`memory${capacity}`}
                  key={capacity}
                >
                  <input
                    type="radio"
                    name="memory"
                    value={capacity.toString()}
                    className={categories__memory_input}
                    id={`memory${capacity}`}
                    onChange={() => handleCurrCapacity(capacity.toString())}
                  />
                  <span
                    className={categories__memory_btn}
                    style={{
                      backgroundColor: `${currCapacity === capacity.toString() && '#313237'}`,
                      color: `${currCapacity === capacity.toString() && 'white'}`,
                    }}
                  >
                    {capacity}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
        <div className={categories__info}>
          <div className={categories__info_price}>
            <p
              className={categories__info_price_value}
            >{`$${device?.priceDiscount}`}</p>
            <p
              className={categories__info_price_discount}
            >{`$${device?.priceRegular}`}</p>
          </div>
          <div className={categories__info_main}>
            {state.basket.some(item => item.itemId === device?.id) ? (
              <button
                className={`flex items-center justify-center h-12 w-full box-border ${
                  theme === 'light' ? 'bg-white' : 'bg-[#905BFF] text-white'
                } text-[#27AE60] border-2 border-color-[#E2E6E9]`}
                onClick={handleAddToCart}
              >
                Added
              </button>
            ) : (
              <button
                className={`flex items-center justify-center h-12 w-full box-border ${
                  theme === 'light' ? 'bg-[#313237]' : 'bg-[#905BFF]'
                } text-white rounded-none hover:bg-gray-800 transition`}
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            )}
            <button
              onClick={handleAddToFavorites}
              className={`min-h-12 min-w-12 hover:text-white bg-transparent border border-[#E2E6E9] ${
                theme === 'dark' && 'bg-[#323542] border-[#323542]'
              } rounded-none flex items-center justify-center`}
            >
              {state.favorites.includes(device?.id) ? (
                <img
                  src="img/icons/liked-logo.svg"
                  className="h-4 w-4"
                  alt="Icon"
                />
              ) : (
                <StrokeIcon
                  fill={`${theme === 'dark' ? '#F1F2F9' : '#313237'}`}
                  className="h-4 w-4"
                />
              )}
            </button>
          </div>
          <ul className={categories__info_list}>
            <li className={categories__info_list_item}>
              <p className={categories__info_list_item_name}>Screen</p>
              <p
                className={categories__info_list_item_value}
              >{` ${device?.screen}`}</p>
            </li>
            <li className={categories__info_list_item}>
              <p className={categories__info_list_item_name}>Resolution</p>
              <p
                className={categories__info_list_item_value}
              >{`${device?.resolution}`}</p>
            </li>
            <li className={categories__info_list_item}>
              <p className={categories__info_list_item_name}>Processor</p>
              <p
                className={categories__info_list_item_value}
              >{`${device?.processor}`}</p>
            </li>
            <li className={categories__info_list_item}>
              <p className={categories__info_list_item_name}>RAM</p>
              <p
                className={categories__info_list_item_value}
              >{`${device?.ram}`}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
