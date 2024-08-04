import React from 'react';

import { MainLogo } from '../ThemeIcons/MainLogo';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="border-t-2 border-customTextColor max-w-full mx-auto justify-center h-20 w-full">
      <div className="py-8 px-4 mx-auto sm:flex sm:justify-between items-center max-w-screen-custom-lg h-20">
        <span className="block mb-4 sm:mb-0">
          <MainLogo />
        </span>
        <ul className="block mb-4 w-[378px] sm:flex sm:justify-around md:justify-between sm:mb-0 space-y-4 sm:space-y-0">
          <li className="block space-y-2">
            <a
              href="#"
              className="font-extrabold text-customTextColor hover:text-black dark:text-white transition-all duration-300 dark:hover:text-[#905BFF]"
            >
              Github
            </a>
          </li>
          <li className="block space-y-2">
            <Link
              to="/contacts"
              className="font-extrabold text-customTextColor hover:text-black dark:text-white transition-all duration-300 dark:hover:text-[#905BFF]"
            >
              Contacts
            </Link>
          </li>
          <li className="block space-y-2">
            <a
              href="#"
              className="font-extrabold text-customTextColor hover:text-black dark:text-white transition-all duration-300 dark:hover:text-[#905BFF]"
            >
              Rights
            </a>
          </li>
        </ul>
        <div className=" flex items-center justify-center">
          <p className="mr-6 font-mont text-[#89939A] font-normal text-xs leading-4 text-right">
            Back to top
          </p>
          {theme == 'light' ? (
            <button
              className={`p-2 w-[32px] h-[32px] transition rounded-none bg-transparent hover:shadow-md
                flex items-center justify-center border-[#B4BDC4] border-[1px] text-[#313237] hover:border hover:text-[#E2E6E9]`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="img/icons/to-top-black.svg" alt="to-top-icon" />
            </button>
          ) : (
            <button
              className={`p-2 w-[32px] h-[32px] transition rounded-none bg-transparent hover:shadow-md
              flex items-center justify-center border-[#B4BDC4] border-[1px] text-[#313237]
                hover:border bg-slate-600 dark:bg-[#323542] hover:text-[#E2E6E9]`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="img/icons/to-top-white.svg" alt="to-top-icon" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
