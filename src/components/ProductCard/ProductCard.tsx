import { Product } from '../../types';
import stroke from '../../assets/img/icons/Vector (Stroke).svg';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    // <div className="w-[272px] h-[506px] bg-white shadow-md md:max-w-2xl">
    //   <div className="">
    //     <div className="md:flex-shrink-0">
    //       <img
    //         className="h-48 w-full object-cover md:w-48"
    //         src={product.image}
    //         alt="Product Image"
    //       />
    //     </div>
    //     <div className="p-8">
    //       <h1 className="block mt-1 font-mont text-sm leading-[21px] text-[#313237] text-left">
    //         {product.name}
    //       </h1>
    //       <div className="mt-4 flex items-center justify-between">
    //         <span className="text-lg font-semibold text-gray-900">
    //           ${product.price}
    //         </span>
    //         <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
    //           Add to Cart
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-72 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
      <img
        className="w-full h-56 object-contain rounded-t-lg"
        src={product.image}
        alt="Product Image"
      />
      <div className="mt-4 w-full">
        <h1 className="block mt-1 font-medium text-[14px] leading-[21px] text-[#313237] text-left">
          {product.name}
        </h1>
        <p className="text-xl font-bold text-gray-900 mt-2 text-left">
          ${product.price}
        </p>
        <div className="mt-4 space-y-2 font-mont text-[12px] font-bold leading-[15px]">
          <div className="flex justify-between">
            <span className="text-[#89939A]">Screen</span>
            <span className="leading-[15px] text-[#313237]">
              {product.screen}
            </span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span className="text-[#89939A]">Capacity</span>
            <span className="text-[#313237]">{product.capacity}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span className="text-[#89939A]">RAM</span>
            <span className="text-[#313237]">{product.ram}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="flex items-center justify-center h-10 w-40 bg-black text-white rounded-none hover:bg-gray-800 transition">
            Add to cart
          </button>
          <button className="h-10 w-14 hover:text-gray-800 bg-transparent border border-gray-500 rounded-none">
            <img src={stroke} className="h-4 w-4" alt="Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
