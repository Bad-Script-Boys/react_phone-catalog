import React from 'react';
import { Product } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

interface SearchResultProps {
  result: Product;
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const { theme } = useTheme();

  return (
    <div className="p-2.5 px-5 hover:bg-slate-400 transition-colors duration-200">
      <Link to={`/${result.category}/${result.itemId}`}>
        <h1
          className={`mt-1 font-medium text-sm leading-5 ${
            theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
          }`}
        >
          {result.name}
        </h1>
      </Link>
    </div>
  );
};
