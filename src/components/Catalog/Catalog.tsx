import { useTheme } from '../../contexts/ThemeContext';
import { Product } from '../../types';
import { Breadcrumbs } from '../Breadcrumbs';
import { ProductCard } from '../ProductCard';

type Props = {
  title: string;
  products: Product[];
};

export const Catalog: React.FC<Props> = ({ title, products }) => {
  const { theme } = useTheme();

  return (
    <div className="px-5 md:px-6 py-[35px] md:py-[100px] max-w-screen-custom-lg m-auto">
      <Breadcrumbs />
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
