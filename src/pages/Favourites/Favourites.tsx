import React, { useContext } from 'react';
import { DispatchContext, StateContext } from '../../Store';
import { Link } from 'react-router-dom';
import stroke from '../../assets/img/icons/Vector (Stroke).svg';
import { useTheme } from '../../contexts/ThemeContext';
import { Product } from '../../types';

const Favorites: React.FC = () => {
  const { favorites, products, basket } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { theme } = useTheme();

  const addToFavorites = (product: Product) => {
    const isFavorite = favorites.includes(product.itemId);
    dispatch({
      type: isFavorite ? 'removeFromFavorites' : 'addToFavorites',
      payload: isFavorite ? { itemId: product.itemId } : product,
    });
  };

  const addToBasket = (product: Product) => {
    const alreadyInBasket = basket.some(item => item.itemId === product.itemId);
    dispatch({
      type: alreadyInBasket ? 'removeFromBasket' : 'addToBasket',
      payload: alreadyInBasket ? { itemId: product.itemId } : product,
    });
  };

  const favoriteProducts = products.filter(product => favorites.includes(product.itemId));

  return (
    <div className="flex flex-col items-center">
      <div className="w-full px-4 md:px-8 lg:px-[152px]">
        <div className="flex flex-col items-start mb-4 md:mb-6 lg:mb-8">
          <Link to="/shop" className="text-gray-700 text-lg font-medium mb-2">
            Back
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-[46px]">
            Favorites
          </h1>
        </div>
      </div>

      <div className="flex flex-col w-full px-4 md:px-8 lg:px-[152px] lg:flex-row gap-4">
        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-64">
            <p className="text-xl font-medium text-gray-600">Your favorites list is empty.</p>
            <Link to="/shop" className="mt-4 text-blue-500 hover:underline">
              Continue Shopping
            </Link>
          </div>
        ) : (
          favoriteProducts.map(product => (
            <div
              key={product.itemId}
              className={`w-72 ${
                theme === 'light' ? 'bg-white' : 'bg-[#161827]'
              } shadow-lg rounded-lg p-8 mb-4 transition-transform duration-500 transform hover:scale-105`}
            >
              <Link to={`/${product.category}/${product.itemId}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain rounded-t-lg"
                />
              </Link>
              <Link to={`/${product.category}/${product.itemId}`}>
                <h3 className={`block mt-1 h-12 mb-[-20px] font-medium text-[14px] leading-[21px] ${
                  theme === 'light' ? 'text-black' : 'text-white'
                } text-left`}>
                  {product.name}
                </h3>
              </Link>
              <div className="mt-4 w-full">
                <p className={`text-xl font-bold ${
                  theme === 'light' ? 'text-black' : 'text-white'
                } mt-2 text-left mb-3`}>{`$${product.fullPrice}`}</p>
              </div>
              <section>
                <div className="flex justify-between text-gray-600">
                  <h3 className="text-[#75767F]">{`Screen`}</h3>
                  <p className={`leading-[15px] ${
                    theme === 'light' ? 'text-black' : 'text-white'
                  }`}>{product.screen}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p className="text-[#75767F]">{`Capacity`}</p>
                  <p className={`text-black ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>{product.capacity}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p className="text-[#75767F]">{`RAM`}</p>
                  <p className={`text-black ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>{product.ram}</p>
                </div>
              </section>
              <div className="mt-6 flex justify-between">
                {basket.some(item => item.itemId === product.itemId) ? (
                  <button
                    className="flex items-center justify-center h-10 w-40 border-2 border-color-[#E2E6E9] text-[#27AE60] rounded-none transition"
                    onClick={() => addToBasket(product)}
                  >
                    Added
                  </button>
                ) : (
                  <button
                    className={`flex items-center justify-center h-10 w-40 ${
                      theme === 'light' ? 'bg-[#313237] text-white hover:bg-gray-800' : 'bg-[#905BFF] text-white hover:bg-gray-800'
                    } rounded-none transition py-3 px-6`}
                    onClick={() => addToBasket(product)}
                  >
                    Add to cart
                  </button>
                )}
                <button
                  className="h-10 w-10 hover:text-gray-800 bg-transparent border border-gray-500 rounded-none flex items-center justify-center"
                  onClick={() => addToFavorites(product)}
                >
                  {favorites.includes(product.itemId) ? (
                    <img src="img/icons/liked-logo.svg" className="h-4 w-4" alt="Icon" />
                  ) : (
                    <img src={stroke} className="h-4 w-4" alt="Icon" />
                  )}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;

