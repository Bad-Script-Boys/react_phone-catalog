import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../../types';
import { FaSearch } from 'react-icons/fa';
import productsFromServer from '../../api/products.json';
import { SearchResultsList } from './SearchResultList';

interface SearchProps {
  setResults: (results: Product[]) => void;
  setFocused: (focused: boolean) => void;
}

export const SearchBar: React.FC<SearchProps> = ({ setResults, setFocused }) => {
  const [input, setInput] = useState('');
  const [results, setResultsState] = useState<Product[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchData = (value: string) => {
    if (value.trim() === '') {
      setResultsState([]);
      setResults([]);
      return;
    }

    const filteredResults = productsFromServer.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase()),
    );
    setResultsState(filteredResults);
    setResults(filteredResults);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    fetchData(e.target.value);
    setFocused(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setInput('');
      setResultsState([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xs mx-auto" ref={containerRef}>
      <div className="relative w-full h-10">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 scale-150 text-gray-500" />
        <input
          placeholder="Type to search..."
          type="search"
          value={input}
          onChange={handleChange}
          onBlur={() => setFocused(false)}
          className="w-full h-full pl-10 pr-3 border-none rounded-lg shadow-md focus:outline-none dark:text-darkTheme text-base dark:shadow-orange-500"
        />
        {results.length > 0 && (
          <SearchResultsList
            results={results}
            onResultClick={() => {
              setInput('');
              setResults([]);
              setResultsState([]);
              setFocused(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
