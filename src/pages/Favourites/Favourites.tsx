import React, { useContext, useEffect } from 'react';
import { Action, DispatchContext, StateContext } from '../../Store';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import productsFromServer from './../../api/products.json';
import { ProductCard } from '../../components/ProductCard';

const Favorites: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const { favorites, products, basket } = useContext(StateContext);

  useEffect(() => {
    dispatch({
      type: 'setProducts',
      payload: productsFromServer,
    });
  }, [dispatch]);

  const addToFavorites = (product: Product) => {
    const isFavorite = favorites.includes(product.itemId);
    dispatch({
      type: isFavorite ? 'removeFromFavorites' : 'addToFavorites',
      payload: { itemId: product.itemId },
    });
  };

  const addToBasket = (product: Product) => {
    const alreadyInBasket = basket.some(item => item.itemId === product.itemId);
    const action: Action = alreadyInBasket
      ? {
          type: 'removeFromBasket',
          payload: { itemId: product.itemId },
        }
      : {
          type: 'addToBasket',
          payload: {
            itemId: product.itemId,
            price: product.fullPrice,
            name: product.name,
            image: product.image,
          },
        };
    dispatch(action);
  };

  const favoriteProducts = products.filter(product =>
    favorites.includes(product.itemId),
  );

  return (
    <div className="flex flex-col items-center">
      <div className="mt-[100px] w-full px-4 md:px-8 lg:px-[152px]"></div>
      <div className="w-full px-4 md:px-8 lg:px-[152px]">
        <div className="flex flex-col items-start mb-4 md:mb-6 lg:mb-8">
          <Link to="/" className="text-gray-700 text-lg font-medium mb-2">
            Back
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-[46px]">Favorites</h1>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-[152px]">
        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-64">
            <p className="text-xl font-medium text-gray-600">
              Your favorites list is empty.
            </p>
            <Link to="/" className="mt-4 text-blue-500 hover:underline">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {favoriteProducts.map(product => (
              <ProductCard
                key={product.itemId}
                product={product}
                isFavorite={favorites.includes(product.itemId)}
                isInBasket={basket.some(item => item.itemId === product.itemId)}
                onAddToFavorites={() => addToFavorites(product)}
                onAddToBasket={() => addToBasket(product)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
