import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import { StateContext } from '../../Store';

export const classActiveNavLink = ({ isActive }: { isActive: boolean }) =>
  classNames('text-black font-bold text-xs uppercase', {
    'border-b-2 border-black': isActive,
  });

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(
    'flex items-center justify-center h-16 w-1/2 relative text-gray-600',
    {
      'border-b-2 border-black': isActive,
    },
  );

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Menu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const state = useContext(StateContext);
  const { favorites, basket } = state;

  const click = () => {
    setIsOpen(false);
  };

  let totalQuantity = 0;

  for (const item of basket) {
    totalQuantity += item.quantity;
  }

  return (
    <div
      className={classNames(
        'fixed z-10 top-0 bg-white transition-transform duration-500 overflow-hidden w-screen h-screen flex flex-col',
        {
          'translate-x-0': isOpen,
          'translate-x-full ': !isOpen,
        },
      )}
    >
      <div className="flex justify-between p-0 shadow-md h-16">
        <Link to="/">
          <img
            src="img/icons/nice-gadgets-logo.svg"
            alt="logo"
            className="ml-6 block w-16 h-6 my-5"
          />
        </Link>
        <div
          className="w-16 flex justify-center items-center border-l"
          onClick={() => setIsOpen(false)}
        >
          <img src="img/icons/close-icon.svg" alt="close" className="w-6 h-6" />
        </div>
      </div>

      <div className="border-b border-gray-300 mb-10"></div>

      <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={classActiveNavLink}
              onClick={() => setIsOpen(false)}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/phones"
              className={classActiveNavLink}
              onClick={() => setIsOpen(false)}
            >
              phones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tablets"
              className={classActiveNavLink}
              onClick={() => setIsOpen(false)}
            >
              tablets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessories"
              className={classActiveNavLink}
              onClick={() => setIsOpen(false)}
            >
              accessories
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-300 h-16 flex justify-between absolute bottom-0 w-full">
        <NavLink to="/favorites" className={getLinkClass} onClick={click}>
          <img
            src="img/icons/favourites-logo.svg"
            alt="favorites"
            className="w-5 h-5"
          />
          {favorites.length !== 0 && (
            <span className="flex items-center justify-center text-xs absolute top-3 left-7 h-4 w-4 bg-red-500 text-white rounded-full">
              {favorites.length}
            </span>
          )}
        </NavLink>

        <div className="border-r border-gray-300"></div>

        <NavLink to="/card" className={getLinkClass} onClick={click}>
          <img src="img/icons/basket-logo.svg" alt="shop" className="w-5 h-5" />
          {basket.length !== 0 && (
            <span className="flex items-center justify-center text-xs absolute top-3 left-7 h-4 w-4 bg-red-500 text-white rounded-full">
              {totalQuantity}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
};
