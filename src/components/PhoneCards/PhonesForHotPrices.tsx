import React, { useContext } from 'react';
import { DispatchContext, StateContext } from '../../Store';
import { Product } from '../../types';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { StrokeIcon } from '../ThemeIcons/StrokeIcon';

type Props = {
  image: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  product: Product;
};

export const PhonesForHotPrices: React.FC<Props> = ({
  image,
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
  product,
}) => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { favorites, basket } = state;
  const { theme } = useTheme();

  const isFavorite = !!favorites.find(item => item === product.itemId);
  const added = basket.find(
    (item: { itemId: string }) => item.itemId === product.itemId,
  );

  const addToFavorites = () => {
    if (!isFavorite) {
      dispatch({
        type: 'addToFavorites',
        payload: product,
      });
    }

    if (isFavorite) {
      dispatch({
        type: 'removeFromFavorites',
        payload: { itemId: product.itemId },
      });
    }
  };

  const addToBascket = () => {
    if (!added) {
      dispatch({
        type: 'addToBasket',
        payload: product,
      });
    }

    if (added) {
      dispatch({
        type: 'removeFromBasket',
        payload: { itemId: product.itemId },
      });
    }
  };

  return theme === 'light' ? (
    <div className="w-72 shadow-lg rounded-lg p-8 transition-transform duration-500 transform hover:scale-105">
      <Link to={`/${product.category}/${product.itemId}`}>
        <img
          src={`${image}`}
          alt="img"
          className="w-full h-56 object-contain rounded-t-lg"
        />
      </Link>
      <Link to={`/${product.category}/${product.itemId}`}>
        <h3 className="block mt-1 h-12 mb-[-20px] font-medium text-[14px] leading-[21px] text-black text-left">
          {name}
        </h3>
      </Link>
      <div className="mt-4 w-full flex gap-2">
        <p className="text-xl font-bold text-black mt-2 text-left mb-3">{`$${price}`}</p>
        <p className="text-xl font-semibold text-[22px] text-[#89939A] line-through mt-2 text-left">{`$${fullPrice}`}</p>
      </div>
      <section>
        <div className="flex justify-between text-gray-600">
          <h3 className="text-[#75767F]">{`Screen`} </h3>
          <p className="leading-[15px] text-black">{screen}</p>
        </div>

        <div className="flex justify-between text-gray-600">
          <p className="text-[#75767F]">{`Capacity`}</p>
          <p className="text-black">{capacity}</p>
        </div>
        <div className="flex justify-between text-gray-600">
          <p className="text-[#75767F]">{`RAM`}</p>
          <p className="text-black">{ram}</p>
        </div>
      </section>

      <div className="mt-6 flex justify-between">
        {product.itemId === added?.itemId ? (
          <button
            className="flex items-center justify-center h-10 w-40 border-2 border-color-[#E2E6E9] text-[#27AE60] rounded-none transition"
            onClick={addToBascket}
          >
            Added
          </button>
        ) : (
          <button
            className="flex items-center justify-center h-10 w-40 bg-[#313237] text-white rounded-none hover:bg-gray-800 transition"
            onClick={addToBascket}
          >
            Add to cart
          </button>
        )}
        <button
          className="h-10 w-10 hover:text-gray-800 bg-transparent border border-gray-500 rounded-none flex items-center justify-center"
          onClick={addToFavorites}
        >
          {favorites.includes(product.itemId) ? (
            <img
              src="img/icons/liked-logo.svg"
              className="h-4 w-4"
              alt="Icon"
            />
          ) : (
            <StrokeIcon fill="#F1F2F9" className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  ) : (
    <div className="darkPhoneCard w-72 bg-[#161827] shadow-lg rounded-lg p-8 transition-transform duration-500 transform hover:scale-105">
      <Link to={`/${product.category}/${product.itemId}`}>
        <img
          src={`${image}`}
          alt="img"
          className="w-full h-56 object-contain rounded-t-lg"
        />
      </Link>
      <Link to={`/${product.category}/${product.itemId}`}>
        <h3 className="block mt-1 h-12 mb-[-20px] font-medium text-[14px] leading-[21px] text-white text-left">
          {name}
        </h3>
      </Link>
      <div className="mt-4 w-full flex gap-2">
        <p className="text-xl font-bold text-white mt-2 text-left mb-3">{`$${price}`}</p>
        <p className="text-xl font-semibold text-[22px] text-[#89939A] line-through mt-2 text-left">{`$${fullPrice}`}</p>
      </div>
      <section>
        <div className="flex justify-between text-gray-600">
          <h3 className="text-[#75767F]">{`Screen`} </h3>
          <p className="leading-[15px] text-white">{screen}</p>
        </div>

        <div className="flex justify-between text-gray-600">
          <p className="text-[#75767F]">{`Capacity`}</p>
          <p className="text-white">{capacity}</p>
        </div>
        <div className="flex justify-between text-gray-600">
          <p className="text-[#75767F]">{`RAM`}</p>
          <p className="text-white">{ram}</p>
        </div>
      </section>

      <div className="mt-6 flex justify-between">
        {product.itemId === added?.itemId ? (
          <button
            className="flex items-center justify-center h-10 w-40 border-2 border-color-[#E2E6E9] text-[#27AE60] rounded-none transition"
            onClick={addToBascket}
          >
            Added
          </button>
        ) : (
          <button
            className="flex items-center justify-center h-10 w-40 bg-[#905BFF] text-white rounded-none hover:bg-gray-800 transition"
            onClick={addToBascket}
          >
            Add to cart
          </button>
        )}
        <button
          className="h-10 w-10 hover:text-gray-800 bg-transparent border border-gray-500 rounded-none flex items-center justify-center"
          onClick={addToFavorites}
        >
          {favorites.includes(product.itemId) ? (
            <img
              src="img/icons/liked-logo.svg"
              className="h-4 w-4"
              alt="Icon"
            />
          ) : (
            <img
              src="img/icons/favorites-logo-white.svg"
              className="h-4 w-4"
              alt="Icon"
            />
          )}
        </button>
      </div>
    </div>
  );
};
