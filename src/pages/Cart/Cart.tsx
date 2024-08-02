import React, { useContext, useState } from 'react';
import { DispatchContext, StateContext } from '../../Store';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import useNotification from '../../components/Notification/useNotification';

const Cart: React.FC = () => {
  const { theme } = useTheme();
  const { basket } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { notifySuccess, notifyInfo } = useNotification();

  const increaseQuantity = (itemId: string) => {
    dispatch({ type: 'addOneItem', payload: { itemId, quantity: 1 } });
    notifySuccess('Item quantity increased!');
  };

  const decreaseQuantity = (itemId: string) => {
    dispatch({ type: 'deleteOneItem', payload: { itemId, quantity: 1 } });
    notifySuccess('Item quantity decreaded!');
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'removeFromBasket', payload: { itemId } });
    notifyInfo('Item removed from basket!');
  };

  const clearBasket = () => {
    basket.forEach(item => {
      dispatch({
        type: 'removeAllFromBasket',
        payload: { itemId: item.itemId },
      });
    });
    notifyInfo('All items removed from basket!');
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
    notifySuccess('Checkout completed successfully!');
  };

  const totalItems = basket.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  return (
    <div className="max-w-screen-2xl m-auto flex flex-col items-center">
      <div className="w-full px-4 md:px-8 ">
        <div className="mt-[100px] w-full px-4 md:px-8"></div>
        <div className="flex flex-col items-start mb-4 md:mb-6 lg:mb-8">
          <Breadcrumbs />
          <h1 className="text-2xl md:text-3xl lg:text-[46px]">Cart</h1>
        </div>
      </div>

      <div className="flex flex-col w-full px-4 md:px-8  lg:flex-row">
        {basket.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-64 mb-16">
            <img
              src="img/icons/iconcart.png"
              alt="Icon"
              className="mb-4 block h-52 w-52"
            />
            <p className="text-xl font-medium">Your cart is empty.</p>
            <Link
              to="/"
              className="bg-[#313237] py-4 px-8 text-white hover:scale-110 transition-transform duration-500 no-underline hover:text-white mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col flex-grow mb-8 lg:mb-0 lg:mr-8">
              {basket.map(item => (
                <div
                  key={item.itemId}
                  className={`flex items-center border border-solid mb-4 h-[128px] ${theme === 'light' ? 'border-gray-300 bg-white text-black' : 'border-gray-600 bg-gray-900 text-white'}`}
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
                        <h3
                          className={`text-lg font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
                        >
                          {item.name}
                        </h3>
                      </Link>
                      <div className="flex items-center">
                        <button
                          className={`text-lg ${theme === 'light' ? 'text-gray-900' : 'text-white'} border border-solid ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'} w-[32px] h-[32px] mr-2`}
                          onClick={() => decreaseQuantity(item.itemId)}
                        >
                          -
                        </button>
                        <p
                          className={`text-lg font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'} w-[40px] text-center`}
                        >
                          {item.quantity}
                        </p>
                        <button
                          className={`text-lg ${theme === 'light' ? 'text-gray-900' : 'text-white'} border border-solid ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'} w-[32px] h-[32px] ml-2`}
                          onClick={() => increaseQuantity(item.itemId)}
                        >
                          +
                        </button>
                        <p
                          className={`block text-lg font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'} ml-4 pr-6 text-right`}
                        >
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`w-full md:w-[368px] max-h-[288px] mb-[30px] border border-solid ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'} flex flex-col items-center md:ml-8 py-6 overflow-hidden`}
            >
              <p
                className={`text-2xl md:text-3xl lg:text-[32px] font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'} text-left mb-4`}
              >
                ${totalPrice.toFixed(2)}
              </p>
              <p
                className={`block font-medium text-sm md:text-base lg:text-[14px] leading-[21px] ${theme === 'light' ? 'text-gray-900' : 'text-white'} text-left mb-6`}
              >
                Total for {totalItems} items
              </p>
              <div
                className={`w-full border border-solid ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'} mb-6`}
              ></div>
              <button
                className="flex items-center justify-center h-12 w-full md:w-[320px] bg-[#313237] text-white rounded-none hover:bg-gray-800 transition py-3 px-6"
                onClick={handleCheckout}
              >
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

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div
            className={`bg-white p-8 rounded-lg text-center ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
          >
            <h2 className="text-2xl font-bold mb-4">Purchase Successful!</h2>
            <p className="text-lg mb-6">Thank you for your purchase.</p>
            <button
              className="bg-[#313237] text-white px-4 py-2 hover:bg-red-500 transition"
              onClick={handleCloseModal}
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
