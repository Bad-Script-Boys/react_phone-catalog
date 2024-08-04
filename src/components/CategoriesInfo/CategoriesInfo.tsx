import React, { useContext } from 'react';
import { Device } from '../../types/Device';
import { StrokeIcon } from '../ThemeIcons/StrokeIcon';
import { DispatchContext, StateContext } from '../../Store';
import { useTheme } from '../../contexts/ThemeContext';
import useNotification from '../Notification/useNotification';

type Props = {
  device: Device | null;
};

export const CategoriesInfo: React.FC<Props> = ({ device }) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { theme } = useTheme();
  const { notifySuccess, notifyInfo } = useNotification();

  if (!device) {
    return null;
  }

  const handleAddToCart = () => {
    if (device) {
      const itemInBasket = state.basket.find(item => item.itemId === device.id);

      if (itemInBasket) {
        dispatch({
          type: 'removeFromBasket',
          payload: { itemId: device.id },
        });
        notifyInfo(`${device.name} removed from cart!`);
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
        notifySuccess(`${device.name} added to cart!`);
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
        notifyInfo(`${device.name} removed from favorites!`);
      } else {
        dispatch({
          type: 'addToFavorites',
          payload: { itemId: device.id },
        });
        notifySuccess(`${device.name} added to favorites!`);
      }
    }
  };
  return (
    <div className="max-w-[320px]">
      <div className="flex items-baseline space-x-2 font-normal">
        <p className="text-5xl font-extrabold text-[32px] leading-[41px] tracking-[-0.01em]">
          {`$${device?.priceDiscount}`}
        </p>
        <p
          className="text-3xl text-gray-400 line-through font-normal font-medium text-[22px] 
          leading-[28px] line-through text-[#89939A]"
        >
          {`$${device?.priceRegular}`}
        </p>
      </div>
      <div className="mt-6 flex justify-around space-x-2 max-w-[320px] mb-6">
        {state.basket.some(item => item.itemId === device?.id) ? (
          <button
            className={`flex items-center justify-center h-12 w-full box-border ${
              theme === 'light' ? 'bg-white' : 'bg-white text-[#27AE60]'
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
      <ul className="flex flex-col max-w-[320px]">
        <li className="flex justify-between w-[100%] space-y-2">
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-[#89939A]">
            Screen
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">{` ${device?.screen}`}</p>
        </li>
        <li className="flex justify-between w-[100%] space-y-2">
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-[#89939A]">
            Resolution
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">{`${device?.resolution}`}</p>
        </li>
        <li className="flex justify-between w-[100%] space-y-2">
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-[#89939A]">
            Processor
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">{`${device?.processor}`}</p>
        </li>
        <li className="flex justify-between w-[100%] space-y-2">
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-[#89939A]">
            RAM
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">{`${device?.ram}`}</p>
        </li>
      </ul>
    </div>
  );
};
