import React, { useContext, useEffect } from 'react';
import { Action, DispatchContext, StateContext } from '../../Store';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import productsFromServer from './../../api/products.json';
import { ProductCard } from '../../components/ProductCard';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import useNotification from '../../components/Notification/useNotification';

const Favorites: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const { favorites, products, basket } = useContext(StateContext);
  const { notifySuccess, notifyInfo } = useNotification();

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
    if (isFavorite) {
      notifyInfo(`${product.name} removed from favorites!`);
    } else {
      notifySuccess(`${product.name} added to favorites!`);
    }
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
    if (alreadyInBasket) {
      notifyInfo(`${product.name} removed from cart!`);
    } else {
      notifySuccess(`${product.name} added to cart!`);
    }
  };

  const favoriteProducts = products.filter(product =>
    favorites.includes(product.itemId),
  );

  return (
    <div className="flex flex-col max-w-screen-2xl m-auto items-center">
      <div className="mt-[100px] w-full px-4 md:px-8"></div>
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col items-start mb-4 md:mb-6 lg:mb-8">
          <Breadcrumbs />
          <h1 className="text-2xl md:text-3xl lg:text-[46px]">Favorites</h1>
        </div>
      </div>

      <div className="w-full px-4 md:px-8">
        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-64  mb-16">
            <img
              src="img/icons/empty-favorite.png"
              alt="Icon"
              className="mb-4 block h-52 w-52"
            />
            <p className="text-xl font-medium text-gray-600">
              Your favorites list is empty.
            </p>
            <Link
              to="/"
              className="bg-[#313237] py-4 px-8 text-white hover:scale-110 transition-transform duration-500 no-underline hover:text-white mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
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
