import React, { useContext } from 'react';
import { DispatchContext, StateContext } from '../../Store';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { basket } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const increaseQuantity = (itemId: string) => {
    dispatch({ type: 'addOneItem', payload: { itemId, quantity: 1 } });
  };

  const decreaseQuantity = (itemId: string) => {
    dispatch({ type: 'deleteOneItem', payload: { itemId, quantity: 1 } });
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'removeFromBasket', payload: { itemId } });
  };

  const clearBasket = () => {
    basket.forEach(item => {
      dispatch({
        type: 'removeAllFromBasket',
        payload: { itemId: item.itemId },
      });
    });
  };

  const totalItems = basket.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  return (
    <div className="flex flex-col items-center">
      <div className="mt-[100px] w-full px-4 md:px-8 lg:px-[152px]"></div>
      <div className="w-full px-4 md:px-8 lg:px-[152px]">
        <div className="flex flex-col items-start mb-4 md:mb-6 lg:mb-8">
          <Link to="/" className="text-gray-700 text-lg font-medium mb-2">
            Back
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-[46px]">Cart</h1>
        </div>
      </div>

      <div className="flex flex-col w-full px-4 md:px-8 lg:px-[152px] lg:flex-row">
        {basket.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-64">
            <p className="text-xl font-medium text-gray-600">
              Your cart is empty.
            </p>
            <Link to="/" className="mt-4 text-blue-500 hover:underline">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col flex-grow mb-8 lg:mb-0 lg:mr-8">
              {basket.map(item => (
                <div
                  key={item.itemId}
                  className="flex items-center border border-solid border-gray-300 mb-4 h-[128px]"
                >
                  <button
                    className="text-red-500 mr-4 ml-4 hover:text-white hover:bg-[#313237] transition duration-200 ease-in-out p-2 rounded-full"
                    onClick={() => removeItem(item.itemId)}
                  >
                    <img src="img/icons/Close.png" alt="Remove" />
                  </button>
                  <Link
                    to={`/phones/${item.itemId}`}
                    className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden"
                  >
                    <img
                      className="object-contain w-full h-full"
                      src={item.image}
                      alt="Product"
                    />
                  </Link>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <Link to={`/phones/${item.itemId}`} className="flex-grow">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.name}
                        </h3>
                      </Link>
                      <div className="flex items-center">
                        <button
                          className="text-lg text-gray-900 border border-solid border-gray-300 w-[32px] h-[32px] mr-2"
                          onClick={() => decreaseQuantity(item.itemId)}
                        >
                          -
                        </button>
                        <p className="text-lg font-medium text-gray-900 w-[40px] text-center">
                          {item.quantity}
                        </p>
                        <button
                          className="text-lg text-gray-900 border border-solid border-gray-300 w-[32px] h-[32px] ml-2"
                          onClick={() => increaseQuantity(item.itemId)}
                        >
                          +
                        </button>
                        <p className="block text-lg font-bold text-gray-900 ml-4 pr-6 text-right">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full md:w-[368px] max-h-[288px] border border-solid border-gray-300 flex flex-col items-center md:ml-8 py-6 overflow-y-auto">
              <p className="text-2xl md:text-3xl lg:text-[32px] font-bold text-gray-900 text-left mb-4">
                ${totalPrice.toFixed(2)}
              </p>
              <p className="block font-medium text-sm md:text-base lg:text-[14px] leading-[21px] text-[#313237] text-left mb-6">
                Total for {totalItems} items
              </p>
              <div className="w-full border border-solid border-gray-300 mb-6"></div>
              <button className="flex items-center justify-center h-12 w-full md:w-[320px] bg-[#313237] text-white rounded-none hover:bg-gray-800 transition py-3 px-6">
                Checkout
              </button>
              <button
                className="mt-4 flex items-center justify-center h-12 w-full md:w-[320px] bg-red-500 text-white rounded-none hover:bg-red-600 transition py-3 px-6"
                onClick={clearBasket}
              >
                Clear Basket
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
