import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import productsFromServer from '../../api/products.json';
import { Product } from '../../types';

interface SearchBarProps {
  setResults: (results: Product[]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [input, setInput] = useState('');

  const fetchData = (value: string) => {
    const results = productsFromServer.filter(product => {
      return (
        value &&
        product &&
        product.name &&
        product.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="w-full max-w-xs mx-auto flex flex-col items-center relative">
      <div className="relative w-full h-10">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 scale-150 text-gray-500" />
        <input
          placeholder="Type to search..."
          value={input}
          onChange={e => handleChange(e.target.value)}
          className="w-full h-full pl-10 pr-3 border-none rounded-lg shadow-md focus:outline-none dark:text-darkTheme"
        />
      </div>
    </div>
  );
};
