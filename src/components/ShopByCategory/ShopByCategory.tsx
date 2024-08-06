import { Link, NavLink } from 'react-router-dom';
import phonesFromServer from '../../../public/api/phones.json';
import tabletsFromServer from '../../../public/api/tablets.json';
import accessoiredFromServer from '../../../public/api/accessories.json';

export const ShopByCategory = () => {
  const totalPhones = phonesFromServer.length;
  const totalTablets = tabletsFromServer.length;
  const totalAccessoires = accessoiredFromServer.length;

  return (
    <div className="px-4 pb-14 max-w-screen-xl mx-auto md:px-6 lg:px-8 lg:pb-20">
      <h2 className="font-mont text-[34px] font-extrabold leading-8 text-left text-black mb-20 md:text-3xl md:leading-10 dark:text-white">
        Shop by category
      </h2>
      <div className="flex flex-col w-full h-auto sm:flex-row sm:gap-6">
        <div className="w-full mb-8">
          <div className="relative overflow-hidden bg-gray-600 w-full aspect-square mb-6">
            <Link to="/phones">
              <img
                src="img/category-phones.webp"
                alt="categoryPhones"
                className="absolute w-full h-auto top-12 left-12 transition-transform duration-500 transform hover:scale-105"
              />
            </Link>
          </div>
          <NavLink
            to="/phones"
            className="font-mont text-xl font-bold leading-6 text-left text-black dark:text-white pb-1"
          >
            Mobile phones
          </NavLink>
          <h4 className="font-mont text-sm font-semibold leading-5 text-left text-gray-500">
            {`${totalPhones} models`}
          </h4>
        </div>
        <div className="w-full mb-8">
          <div className="relative overflow-hidden bg-gray-400 w-full aspect-square mb-6">
            <Link to="/tablets">
              <img
                src="img/category-tablets.webp"
                alt="categoryTablets"
                className="absolute w-full h-auto top-12 left-12 transition-transform duration-500 transform hover:scale-105"
              />
            </Link>
          </div>
          <NavLink
            to="/tablets"
            className="font-mont text-xl font-bold leading-6 text-left text-black dark:text-white pb-1"
          >
            Tablets
          </NavLink>
          <h4 className="font-mont text-sm font-semibold leading-5 text-left text-gray-500">
            {`${totalTablets} models`}
          </h4>
        </div>
        <div className="w-full">
          <div className="relative overflow-hidden w-full aspect-square mb-6 bg-opacity-40 bg-purple-700">
            <Link to="/accessories">
              <img
                src="img/category-accessories.webp"
                alt="categoryAccessories"
                className="absolute w-full h-auto top-12 left-12 transition-transform duration-500 transform hover:scale-105"
              />
            </Link>
          </div>
          <NavLink
            to="/accessories"
            className="font-mont text-xl font-bold leading-6 text-left text-black dark:text-white pb-1"
          >
            Accessories
          </NavLink>
          <h4 className="font-sans text-sm font-semibold leading-5 text-left text-gray-500">
            {`${totalAccessoires} models`}
          </h4>
        </div>
      </div>
    </div>
  );
};
