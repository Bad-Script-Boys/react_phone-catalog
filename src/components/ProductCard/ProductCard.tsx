import { Product } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import { StrokeIcon } from '../ThemeIcons/StrokeIcon';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col justify-between w-[272px] h-[506px] border border-transparent ${theme === 'light' ? 'bg-white hover:shadow-lg border-[#E2E6E9]' : 'bg-[#161827] hover:border-[#323542]'} rounded-lg p-8 `}
    >
      <img
        className="w-full h-48 object-contain rounded-t-lg"
        src={product.image}
        alt="Product Image"
      />
      <div className="mt-2 w-full">
        <div className="min-h-[50px]">
          <h1
            className={`block mt-1 font-medium text-[14px] leading-[21px] ${theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'} text-left`}
          >
            {product.name}
          </h1>
        </div>
        <p
          className={`text-xl font-bold ${
            theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
          }
               mt-2 text-left`}
        >
          ${product.price}
        </p>

        <hr
          className={`${theme === 'light' ? 'border-[#E2E6E9]' : 'border-[#323542]'} my-4`}
        />
        <div className="mt-4 space-y-2 font-mont text-[12px] font-bold leading-[15px]">
          <div className="flex justify-between">
            <span className="text-[#89939A]">Screen</span>
            <span
              className={
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              }
            >
              {product.screen}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#89939A]">Capacity</span>
            <span
              className={
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              }
            >
              {product.capacity}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#89939A]">RAM</span>
            <span
              className={
                theme === 'light' ? 'text-[#313237]' : 'text-[#F1F2F9]'
              }
            >
              {product.ram}
            </span>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            className={`flex items-center justify-center h-10 w-40 ${theme === 'light' ? 'bg-[#313237]' : 'bg-[#905BFF]'} text-white rounded-none hover:bg-gray-800 transition`}
          >
            Add to cart
          </button>
          <button
            className={`h-10 w-10 hover:text-white bg-transparent border border-[#E2E6E9] ${theme === 'dark' && 'bg-[#323542] border-[#323542]'} rounded-none flex items-center justify-center`}
          >
            <StrokeIcon
              fill={`${theme === 'dark' ? '#F1F2F9' : '#313237'}`}
              className="h-4 w-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
