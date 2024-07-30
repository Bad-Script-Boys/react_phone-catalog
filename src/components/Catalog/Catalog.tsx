import { useTheme } from '../../contexts/ThemeContext';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';

type Props = {
  title: string;
  products: Product[];
};

export const Catalog: React.FC<Props> = ({ title, products }) => {
  const { theme } = useTheme();

  return (
    <div className="px-5 md:px-6 py-[35px] md:py-[100px] max-w-screen-2xl m-auto">
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 inline-flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 20a1 1 0 0 1-.707-.293l-9-9A1 1 0 0 1 1.707 9.293L10 17.586l8.293-8.293A1 1 0 1 1 19.707 10.707l-9 9A1 1 0 0 1 10 20zM10 0a1 1 0 0 1 .707.293l9 9a1 1 0 0 1-1.414 1.414L10 1.414 1.707 10.707A1 1 0 1 1 .293 9.293l9-9A1 1 0 0 1 10 0z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" />
              </svg>
              <a
                href="/phones"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
              >
                {title}
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'}`}>
            {products.length} models
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <div>
            <label
              htmlFor="sort"
              className={`block text-sm font-medium text-${theme === 'dark' ? 'gray-400' : 'gray-700'}`}
            >
              Sort by
            </label>
            <select
              id="sort"
              className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border border-${theme === 'dark' && '[#323542]'} focus:outline-none focus:border-indigo-500 sm:text-sm rounded-md shadow-sm bg-${theme === 'dark' && '[#323542]'} text-${theme === 'dark' && 'white'}`}
            >
              <option value="newest">Newest</option>
              {/* Add more sorting options here */}
            </select>
          </div>
          <div>
            <label
              htmlFor="itemsPerPage"
              className={`block text-sm font-medium text-${theme === 'dark' ? 'gray-400' : 'gray-700'}`}
            >
              Items on page
            </label>
            <select
              id="itemsPerPage"
              className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border border-${theme === 'dark' && '[#323542]'} focus:outline-none focus:border-indigo-500 sm:text-sm rounded-md bg-${theme === 'dark' && '[#323542]'} text-${theme === 'dark' && 'white'}`}
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
