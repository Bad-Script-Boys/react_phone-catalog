import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';

export const classActiveNavLink = ({ isActive }: { isActive: boolean }) =>
  classNames('text-gray-800 font-bold text-xs uppercase', {
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

export const Menu: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(
        'absolute z-10 top-0 right-[-100vw] bg-white transition-transform duration-500 overflow-hidden w-screen h-screen flex flex-col justify-between',
        {
          'right-0': isOpen,
        },
      )}
    >
      <div className="flex justify-between p-4">
        <Link to="/">
          <img
            src="img/Logo_header_homePage.svg"
            alt="logo"
            className="w-24 h-auto"
          />
        </Link>
        <div
          className="w-12 flex justify-center items-center cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <img src="img/Close.svg" alt="close" className="w-4 h-4" />
        </div>
      </div>

      <div className="border-b border-gray-300 mb-6"></div>

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

      <div className="border-t border-gray-300 h-16 flex justify-between">
        <NavLink
          to="/favorites"
          className={getLinkClass}
          onClick={() => setIsOpen(false)}
        >
          <img
            src="img/HeartLike_Header_default.svg"
            alt="favorites"
            className="w-6 h-6"
          />
        </NavLink>

        <div className="border-r border-gray-300"></div>

        <NavLink
          to="/card"
          className={getLinkClass}
          onClick={() => setIsOpen(false)}
        >
          <img
            src="img/ShoppingBag_header.svg"
            alt="shop"
            className="w-6 h-6"
          />
        </NavLink>
      </div>
    </div>
  );
};
