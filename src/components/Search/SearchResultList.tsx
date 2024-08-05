import React from 'react';
import { SearchResult } from './SearchResult';
import { Product } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

interface SearchResultsListProps {
  results: Product[];
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
}) => {
  const { theme } = useTheme();

  return (
    <div className="w-full flex flex-col shadow-lg rounded-lg mt-4 pl-4 max-h-[50vh] overflow-y-auto">
      <h1 className={`${theme === 'light' ? 'bg-white' : 'bg-[#0f1121]'}`}>
        {results.map(result => (
          <SearchResult result={result} key={result.id} />
        ))}
      </h1>
    </div>
  );
};
