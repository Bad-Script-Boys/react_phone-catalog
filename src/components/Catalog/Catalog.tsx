import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest');
  const [itemsPerPage, setItemsPerPage] = useState(
    Number(searchParams.get('perPage')) || 8,
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1,
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'price') {
      return a.price - b.price;
    } else if (sort === 'newest') {
      return new Date(b.year).getTime() - new Date(a.year).getTime();
    } else if (sort === 'alphabetical') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const getPaginationGroup = () => {
    let pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, '...', totalPages];
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pages = [
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages,
        ];
      } else {
        pages = [
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      }
    }
    return pages;
  };

  useEffect(() => {
    const params = new URLSearchParams();
    params.append('page', currentPage.toString());
    params.append('perPage', itemsPerPage.toString());
    params.append('sort', sort);
    navigate({ search: params.toString() });
  }, [currentPage, itemsPerPage, sort, navigate]);

  return (
    <div className="px-5 md:px-6 py-[35px] md:py-[100px] max-w-screen-custom-lg m-auto">
      <Breadcrumbs />
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 id="catalog-title" className="text-3xl font-bold">
            {title}
          </h1>
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
              value={sort}
              onChange={handleSortChange}
              className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border border-${theme === 'dark' && '[#323542]'} focus:outline-none focus:border-indigo-500 sm:text-sm rounded-md shadow-sm bg-${theme === 'dark' && '[#323542]'} text-${theme === 'dark' && 'white'}`}
            >
              <option value="newest">Newest</option>
              <option value="price">Cheapest</option>
              <option value="alphabetical">Alphabetically</option>
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
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border border-${theme === 'dark' && '[#323542]'} focus:outline-none focus:border-indigo-500 sm:text-sm rounded-md bg-${theme === 'dark' && '[#323542]'} text-${theme === 'dark' && 'white'}`}
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={products.length}>All</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {paginatedProducts.map(product => (
          <ProductCard
            product={product}
            key={product.id}
            showFullPrice
            isHotPrices
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav aria-label="Page navigation">
          <ul className="inline-flex items-center -space-x-px">
            {currentPage > 1 && (
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="block dark:bg-[#323542] dark:border-none px-3 py-2 mr-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <img
                    src={
                      theme === 'light'
                        ? 'img/icons/banner-arrow-left.svg'
                        : 'img/icons/arrow-left-white.svg'
                    }
                    alt="Previous"
                  />
                </button>
              </li>
            )}
            {getPaginationGroup().map((page, idx) => (
              <li key={idx} className="px-2">
                {page === '...' ? (
                  <span className="px-3 dark:bg-[#323542] dark:text-white dark:border-none py-2 leading-tight text-gray-500 bg-white border border-gray-300">
                    ...
                  </span>
                ) : (
                  <button
                    onClick={() => handlePageChange(Number(page))}
                    className={`px-3 py-2 leading-tight ${
                      currentPage === Number(page)
                        ? 'bg-black dark:bg-[#905BFF] border-none text-white'
                        : 'dark:bg-[#161827] dark:text-white dark:border-none text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                    } border border-gray-300`}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}
            {currentPage < totalPages && (
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="dark:bg-[#323542] dark:text-white ml-10 dark:border-none block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <img
                    src={
                      theme === 'light'
                        ? 'img/icons/banner-arrow-right.svg'
                        : 'img/icons/arrow-right-white.svg'
                    }
                    alt="Next"
                  />
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

