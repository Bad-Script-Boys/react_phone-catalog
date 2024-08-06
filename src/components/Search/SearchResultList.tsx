import React from 'react';
import { Product } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

interface SearchResultsListProps {
  results: Product[];
  onResultClick: (product: Product) => void;
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
  onResultClick,
}) => {
  const { theme } = useTheme();

  const handleItemClick = (product: Product, event: React.MouseEvent) => {
    event.stopPropagation();
    onResultClick(product);
  };

  return (
    <div
      className={`w-full flex flex-col shadow-lg rounded-lg mt-4 max-h-[50vh] overflow-y-auto dark:shadow-orange-700 light:shadow-grey-700 br-10 ${theme === 'light' ? 'bg-white' : 'bg-[#0f1121]'}`}
      style={{
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {results.map(result => (
        <div
          key={result.id}
          className="p-2.5 px-5 hover:bg-slate-400 transition-colors duration-200 cursor-pointer"
          onClick={e => handleItemClick(result, e)}
        >
          <Link to={`/${result.category}/${result.itemId}`} className="block">
            <h1
              className={`mt-1 font-medium text-sm leading-5 ${
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              }`}
            >
              {result.name}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
};
