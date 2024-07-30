import { Link, NavLink } from 'react-router-dom';
import phonesFromServer from '../../../public/api/phones.json';
import tabletsFromServer from '../../../public/api/tablets.json';
import accessoiredFromServer from '../../../public/api/accessories.json';

export const ShopByCategory = () => {
  const totalPhones = phonesFromServer.length;
  const totalTablets = tabletsFromServer.length;
  const totalAccessoires = accessoiredFromServer.length;

  return (
    <div className="lg:mx-[152px] overflow-x-hidden mb-[80px]">
      <h2 className="text-[32px] font-extrabold mb-[24px]">Shop by category</h2>
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="relative w-[310px] rounded-tl-lg h-[310px] bg-[#6D6474] mb-[24px] overflow-hidden">
            <Link to="/phones">
              <img
                src="img/category-phones.webp"
                alt="phones"
                className="absolute top-14 left-12 transition-transform duration-500 transform hover:scale-125"
              />
            </Link>
          </div>
          <NavLink to="/phones">
            <h3 className="mb-[4px] font-semibold text-[20px]">
              Mobile phones
            </h3>
          </NavLink>
          <p className="font-medium text-[14px] text-[#89939A]">{`${totalPhones} models`}</p>
        </div>
        <div>
          <div className="relative w-[310px] rounded-tl-lg h-[310px] bg-[#89939A] mb-[24px] overflow-hidden">
            <Link to="/tablets">
              <img
                src="img/category-tablets.webp"
                alt="phones"
                className="absolute top-12 left-10 transition-transform duration-500 transform hover:scale-125"
              />
            </Link>
          </div>
          <NavLink to="/tablets">
            <h3 className="mb-[4px] font-semibold text-[20px]">Tablets</h3>
          </NavLink>
          <p className="font-medium text-[14px] text-[#89939A]">{`${totalTablets} models`}</p>
        </div>
        <div>
          <div className="relative rounded-tl-lg w-[310px] h-[310px] bg-[#973d5f] mb-[24px] overflow-hidden">
            <Link to="/accessoires">
              <img
                src="img/category-accessoires.png"
                alt="phones"
                className="absolute object-none top-4 left-2 transition-transform duration-500 transform hover:scale-125"
              />
            </Link>
          </div>
          <NavLink to="/accessoires">
            <h3 className="mb-[4px] font-semibold text-[20px]">Accessories</h3>
          </NavLink>
          <p className="font-medium text-[14px] text-[#89939A]">{`${totalAccessoires} models`}</p>
        </div>
      </div>
    </div>
  );
};
