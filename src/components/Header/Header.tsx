import { Link, NavLink } from 'react-router-dom';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { useContext, useState } from 'react';
import { Menu } from '../Menu/Menu';
import { StateContext } from '../../Store';
import { BasketLogo } from '../ThemeIcons/BasketLogo';
import { FavoriteLogo } from '../ThemeIcons/FavoritesLogo';
import { MainLogo } from '../ThemeIcons/MainLogo';

const classActiveNavLink = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-black relative pb-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black'
    : 'text-customTextColor transition-transform duration-500 hover:scale-110 ';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useContext(StateContext);
  const { favorites, basket } = state;

  let totalQuantity = 0;

  for (const item of basket) {
    totalQuantity += item.quantity;
  }

  return (
    <>
      <header className="bg-white dark:bg-gray-900 flex border-b border-borderHeader items-center justify-between text-xs font-extrabold leading-3 tracking-wide uppercase fixed top-0 left-0 w-screen shadow-md h-16">
        <div className="flex items-center justify-between h-full">
          <Link to="/">
            <MainLogo />
          </Link>

          <nav className="hidden sm:flex h-full ml-8">
            <ul className="flex ml-12 sm:ml-2 list-none h-full space-x-8 sm:space-x-8 md:space-x-8 lg:space-x-16">
              <li className="transition-all duration-500 h-full flex items-center ">
                <NavLink to="/" className={classActiveNavLink}>
                  home
                </NavLink>
              </li>
              <li className="transition-all duration-500 h-full flex items-center">
                <NavLink to="/phones" className={classActiveNavLink}>
                  phones
                </NavLink>
              </li>
              <li className="transition-all duration-500 h-full flex items-center">
                <NavLink to="/tablets" className={classActiveNavLink}>
                  tablets
                </NavLink>
              </li>
              <li className="transition-all duration-500 h-full flex items-center">
                <NavLink to="/accessories" className={classActiveNavLink}>
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden sm:flex items-center justify-between">
          <ThemeSwitch />
          <div className="flex items-center justify-center p-4 border-1 border-borderHeader relative cursor-pointer">
            <Link to="/favorites">
              <FavoriteLogo />
            </Link>
            {favorites.length !== 0 && (
              <span className="flex items-center justify-center text-xs absolute top-3 left-7 h-4 w-4 bg-red-500 text-white rounded-full">
                {favorites.length}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center p-4 border-l border-borderHeader relative cursor-pointer">
            <Link to="/card">
              <BasketLogo />
            </Link>
            {basket.length !== 0 && (
              <span className="flex items-center justify-center text-xs absolute top-3 left-7 h-4 w-4 bg-red-500 text-white rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center p-5 border-l border-borderHeader sm:hidden relative h-full">
          <img
            src="img/icons/menu-burger-logo.svg"
            alt="menu"
            className="h-full w-full object-center"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
