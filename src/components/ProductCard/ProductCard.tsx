import { Product } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import { StrokeIcon } from '../ThemeIcons/StrokeIcon';
import { DispatchContext, StateContext } from '../../Store';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
  showFullPrice?: boolean;
  isHotPrices?: boolean;
  displayFullPriceOnly?: boolean;
  isFavorite: boolean;
  isInBasket: boolean;
  onAddToFavorites: () => void;
  onAddToBasket: () => void;
};

export const ProductCard: React.FC<Props> = ({
  product,
  showFullPrice = false,
  isHotPrices = false,
  displayFullPriceOnly = false,
  // isFavoriteItem,
  // isInBasket,
  // onAddToFavorites,
  // onAddToBasket,
}) => {
  const { theme } = useTheme();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { favorites, basket } = state;

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

  const addToBasket = () => {
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

  return (
    <div
      className={`flex flex-col justify-between w-[272px] h-[506px] border border-transparent ${
        theme === 'light'
          ? 'bg-white hover:shadow-lg border-[#E2E6E9]'
          : 'bg-[#161827] hover:border-[#323542]'
      } rounded-lg p-8 `}
    >
      <Link to={`/${product.category}/${product.itemId}`}>
        <img
          className="w-full h-48 object-contain rounded-t-lg"
          src={product.image}
          alt="Product Image"
        />
      </Link>

      <div className="mt-2 w-full">
        <div className="min-h-[50px]">
          <Link to={`/${product.category}/${product.itemId}`}>
            <h1
              className={`block mt-1 font-medium text-[14px] leading-[21px] ${
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              } text-left`}
            >
              {product.name}
            </h1>
          </Link>
        </div>
        <div className="flex gap-2">
          {displayFullPriceOnly ? (
            <p
              className={`text-xl font-bold ${
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              } mt-2 text-left`}
            >
              ${product.fullPrice}
            </p>
          ) : (
            <>
              <p
                className={`text-xl font-bold ${
                  theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
                } mt-2 text-left`}
              >
                ${product.price}
              </p>
              {showFullPrice && (
                <p
                  className={`text-xl font-bold mt-2 text-left ${
                    isHotPrices && theme === 'dark'
                      ? 'text-[#75767F] line-through'
                      : theme === 'light'
                        ? 'line-through text-[#89939A]'
                        : 'text-[#F1F2F9] line-through'
                  }`}
                >
                  ${product.fullPrice}
                </p>
              )}
            </>
          )}
        </div>

        <hr
          className={`${
            theme === 'light' ? 'border-[#E2E6E9]' : 'border-[#323542]'
          } my-4`}
        />
        <div className="mt-4 space-y-2 font-mont text-[12px] font-bold leading-[15px]">
          <div className="flex justify-between">
            <span className="text-[#89939A]">Screen</span>
            <span
              className={
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              }
            >
              {product.screen}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#89939A]">Capacity</span>
            <span
              className={
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              }
            >
              {product.capacity}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#89939A]">RAM</span>
            <span
              className={
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              }
            >
              {product.ram}
            </span>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          {product.itemId === added?.itemId ? (
            <button
              className={`flex items-center justify-center h-10 w-40 ${
                theme === 'light' ? 'bg-white' : 'bg-[#905BFF] text-white'
              } text-[#27AE60] border-2 border-color-[#E2E6E9]`}
              onClick={addToBasket}
            >
              Added
            </button>
          ) : (
            <button
              className={`flex items-center justify-center h-10 w-40 ${
                theme === 'light' ? 'bg-[#313237]' : 'bg-[#905BFF]'
              } text-white rounded-none hover:bg-gray-800 transition`}
              onClick={addToBasket}
            >
              Add to cart
            </button>
          )}
          <button
            onClick={addToFavorites}
            className={`h-10 w-10 hover:text-white bg-transparent border border-[#E2E6E9] ${
              theme === 'dark' && 'bg-[#323542] border-[#323542]'
            } rounded-none flex items-center justify-center`}
          >
            {favorites.includes(product.itemId) ? (
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
      </div>
    </div>
  );
};
