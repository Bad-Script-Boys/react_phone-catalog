import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { Menu } from '../Menu/Menu';
import { StateContext } from '../../Store';
import { BasketLogo } from '../ThemeIcons/BasketLogo';
import { FavoriteLogo } from '../ThemeIcons/FavoritesLogo';
import { MainLogo } from '../ThemeIcons/MainLogo';
import { useTheme } from '../../contexts/ThemeContext';
import { BurgerIcon } from '../ThemeIcons/BurgerIcon';
import { SearchBar } from '../Search/SearchBar';
import { SearchResultsList } from '../Search/SearchResultList';
import { Product } from '../../types';

const classActiveNavLink = ({ isActive }: { isActive: boolean }) => {
  const { theme } = useTheme();

  const activeTextColor = theme === 'light' ? 'text-black' : 'text-white';
  const inactiveTextColor = 'transition-transform duration-200 hover:scale-110';

  const flameAnimation =
    theme === 'light' ? 'before:animate-flame' : 'before:animate-flameDark';

  return isActive
    ? `${activeTextColor} relative before:absolute before:top-9 before:left-0 before:w-full before:h-[3px] before:bg-black before:content-[''] before:rounded-full ${flameAnimation}`
    : inactiveTextColor;
};

const classActiveNavIcon = ({ isActive }: { isActive: boolean }) => {
  const { theme } = useTheme();
  const activeTextColor = theme === 'light' ? 'text-black' : 'text-white';
  const inactiveTextColor = 'transition-transform duration-200 hover:scale-110';

  const flameAnimation =
    theme === 'light' ? 'before:animate-flame' : 'before:animate-flameDark';

  return isActive
    ? `${activeTextColor} relative before:absolute before:top-11 before:left-1/2 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-black before:content-[''] before:rounded-full ${flameAnimation}`
    : inactiveTextColor;
};

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useContext(StateContext);
  const { favorites, basket } = state;
  const { theme } = useTheme();
  const [results, setResults] = useState<Product[]>([]);
  const [focused, setFocused] = useState(false);

  let totalQuantity = 0;

  for (const item of basket) {
    totalQuantity += item.quantity;
  }

  const handleResultClick = () => {
    setResults([]);
    setFocused(false);
  };

  return (
    <>
      <header
        className={`header1 z-10 flex border-b-2 dark:border-gray-500 border-[#E2E6E9] items-center justify-between text-xs font-extrabold leading-3 tracking-wide uppercase fixed top-0 left-0 w-screen shadow-md h-16 ${theme === 'light' ? 'bg-white text-[#89939A]' : 'bg-[#0f1121]'}`}
      >
        <div className="flex items-center justify-between h-full ml-6 sm:ml-4">
          <Link to="/">
            <MainLogo />
          </Link>

          <nav className="hidden sm:flex h-full ml-12">
            <ul className="flex ml-12 sm:ml-2 list-none h-full space-x-8 sm:space-x-8 md:space-x-8 lg:space-x-16">
              <li className="transition-all h-full flex items-center ">
                <NavLink to="/" className={classActiveNavLink}>
                  home
                </NavLink>
              </li>
              <li className="transition-all h-full flex items-center">
                <NavLink to="/phones" className={classActiveNavLink}>
                  phones
                </NavLink>
              </li>
              <li className="transition-all h-full flex items-center">
                <NavLink to="/tablets" className={classActiveNavLink}>
                  tablets
                </NavLink>
              </li>
              <li className="transition-all h-full flex items-center">
                <NavLink to="/accessories" className={classActiveNavLink}>
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden h-16 sm:flex items-center justify-between mx-4 pl-3 dark:border-gray-500 border-[#E2E6E9]">
          <div className="hidden mt-auto xl:block p-4 max-w-[300px] mx-0">
            <SearchBar setResults={setResults} setFocused={setFocused} />
            {focused && results.length > 0 && (
              <SearchResultsList
                results={results}
                onResultClick={handleResultClick}
              />
            )}
          </div>
          <div className="flex items-center justify-center p-4 gap-4 dark:border-gray-500 border-[#E2E6E9] relative cursor-pointer">
            <ThemeSwitch />
            <NavLink to="/favourites" className={classActiveNavIcon}>
              <FavoriteLogo />
            </NavLink>
            {favorites.length !== 0 && (
              <span className="flex items-center justify-center text-xs absolute top-3 right-3 h-4 w-4 bg-red-500 text-white rounded-full">
                {favorites.length}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center dark:border-gray-500 border-[#E2E6E9] h-16 p-4 relative cursor-pointer">
            <NavLink to="/cart" className={classActiveNavIcon}>
              <BasketLogo />
            </NavLink>
            {basket.length !== 0 && (
              <span className="flex items-center justify-center text-xs absolute top-3 left-7 h-4 w-4 bg-red-500 text-white rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center p-5 border-l-2 dark:border-gray-500 border-[#E2E6E9] sm:hidden relative h-full">
          <BurgerIcon
            fill={`${theme === 'light' ? 'black' : 'white'}`}
            className="w-6 h-6 mr-4"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
