import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon } from '../ThemeIcons/HomeIcon';
import { useTheme } from '../../contexts/ThemeContext';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const { theme } = useTheme();

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className={`text-${theme === 'dark' ? '[#F1F2F9] hover:text-gray-200' : 'gray-700 hover:text-gray-900'} inline-flex items-center`}
          >
            <HomeIcon
              fill={`${theme === 'dark' ? '#F1F2F9' : '#313237'}`}
              className="h-4 w-4 mb-1 mr-2"
            />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} className="inline-flex items-center">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" />
                </svg>
                {isLast ? (
                  <span
                    className={`ml-1 text-sm font-medium text-${theme === 'dark' ? '[#75767F]' : 'gray-700'}  md:ml-2 capitalize`}
                  >
                    {value}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className={`ml-1 text-sm font-medium text-${theme === 'dark' ? '[#F1F2F9] hover:text-gray-200' : 'gray-700 hover:text-gray-900'} md:ml-2 capitalize`}
                  >
                    {value}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
