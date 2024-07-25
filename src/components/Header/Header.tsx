import { Link, NavLink } from 'react-router-dom';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { useContext, useState } from 'react';
import { Menu } from '../Menu/Menu';
import { StateContext } from '../../Store';
import { ThemeIcon } from '../ThemeIcon/ThemeIcon';

const classActiveNavLink = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-black border-b-3 border-black'
    : 'text-customTextColor transition-transform duration-500 hover:scale-110';

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
      <header className="flex border-b border-borderHeader items-center justify-between text-xs font-extrabold leading-3 tracking-wide uppercase">
        <div className="flex items-center justify-between h-full">
          <Link to="/">
            {/* <img
              src="img/icons/nice-gadgets-logo.svg"
              alt="Logo"
              className="ml-6 sm:ml-4 block w-16 h-6 my-4 sm:w-20 sm:h-7 sm:my-4.5 transition-transform duration-500 hover:scale-110"
            /> */}
            <ThemeIcon />
          </Link>

          <nav className="hidden sm:flex h-full ml-8">
            <ul className="flex ml-12 sm:ml-2 list-none h-full space-x-8 sm:space-x-8 md:space-x-8 lg:space-x-16">
              <li className="transition-all duration-500 h-full flex items-center">
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
          <div className="flex items-center justify-center p-4 border-l border-borderHeader relative cursor-pointer">
            <Link to="/favorites">
              <div className="flex items-center justify-center h-7 w-7 transition-all duration-500 hover:scale-110">
                <img src="img/icons/favourites-logo.svg" alt="Favorites" />
              </div>
            </Link>
            {favorites.length !== 0 && (
              <span className="flex items-center justify-center text-xs absolute top-3 left-7 h-4 w-4 bg-red-500 text-white rounded-full">
                {favorites.length}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center p-4 border-l border-borderHeader relative cursor-pointer">
            <Link to="/card">
              <div className="flex items-center justify-center h-7 w-7 transition-all duration-500 hover:scale-110">
                <img src="img/icons/basket-logo.svg" alt="Cart" />
              </div>
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
