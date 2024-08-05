import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import { StateContext } from '../../Store';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { MainLogo } from '../ThemeIcons/MainLogo';
import { CloseIcon } from '../ThemeIcons/CloseIcon';
import { useTheme } from '../../contexts/ThemeContext';
import { BasketLogo } from '../ThemeIcons/BasketLogo';
import { FavoriteLogo } from '../ThemeIcons/FavoritesLogo';

export const classActiveNavLink = ({ isActive }: { isActive: boolean }) =>
  classNames('font-bold text-xs uppercase text-[#89939A]', {
    'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white':
      isActive,
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
  const { theme } = useTheme();
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
        'fixed z-10 top-0 bg-white dark:bg-darkTheme transition-transform duration-500 overflow-hidden w-screen h-screen flex flex-col',
        {
          'translate-x-0': isOpen,
          'translate-x-full ': !isOpen,
        },
      )}
    >
      <div className="flex justify-between shadow-md h-16">
        <Link className="flex items-center ml-6" to="/">
          <MainLogo />
        </Link>
        <div
          className="w-[82px] flex justify-center items-center border-l"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon
            fill={`${theme === 'light' ? 'black' : 'white'}`}
            className="w-6 h-6 mr-4"
          />
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
        <div className="flex w-full">
          <div className="w-1/3 flex justify-center items-center relative">
            <div className="">
              <ThemeSwitch />
            </div>
          </div>

          <div className="w-1/3 flex justify-center items-center relative">
            <NavLink to="/favourites" className={getLinkClass} onClick={click}>
              <FavoriteLogo />
              {favorites.length !== 0 && (
                <span className="flex items-center justify-center text-xs absolute top-3 left-7 h-4 w-4 bg-red-500 text-white rounded-full">
                  {favorites.length}
                </span>
              )}
            </NavLink>
          </div>

          <div className="w-1/3 flex justify-center items-center relative">
            <NavLink to="/cart" className={getLinkClass} onClick={click}>
              <BasketLogo />
              {basket.length !== 0 && (
                <span className="flex items-center justify-center text-xs absolute top-3 left-7 h-4 w-4 bg-red-500 text-white rounded-full">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
