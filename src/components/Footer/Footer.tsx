import React, { useState } from 'react';
import { MainLogo } from '../ThemeIcons/MainLogo';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { BiChevronUp } from 'react-icons/bi';

export const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <footer className="border-t-[1px] border-customTextColor max-w-full mx-auto justify-center h-20 w-full">
      <div className="py-8 px-4 mx-auto sm:flex sm:justify-between items-center max-w-screen-custom-lg">
        <span className="block mb-4 sm:mb-0">
          <Link to="/">
            <MainLogo />
          </Link>
        </span>
        <ul className="block mb-4 w-[378px] sm:flex sm:justify-around md:justify-between sm:mb-0 space-y-4 sm:space-y-0">
          <li className="block space-y-2">
            <a
              href="https://github.com/Bad-Script-Boys/react_phone-catalog"
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
              className={`box-border p-2 w-[34px] h-[34px] transition duration-300 hover:shadow-md hover:bg-[#313237]
              flex items-center justify-center border-[1px] hover:scale-125 hover:border-0 ${
                isHovered ? 'text-white' : 'text-black'
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <BiChevronUp />
            </button>
          ) : (
            <button
              className={`box-border p-2 w-[34px] h-[34px] transition duration-300 hover:shadow-md bg-[#323542]
              flex items-center justify-center hover:border-0 border-[#323542] hover:scale-125 
                 dark:bg-[#323542]${isHovered ? 'text-black' : 'text-white'}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <BiChevronUp />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
