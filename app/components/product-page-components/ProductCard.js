import React, { useContext } from "react";
import { ProductContext } from "@/app/context/productContext";
import { useRouter } from "next/navigation";

const ProductCard = ({
  Id,
  Product,
  Title,
  Desc,
  Url,
  Label,
  Price,
  DiscountedPrice,
}) => {
  // States
  const { setselectedProduct } = useContext(ProductContext);
  const router = useRouter();
  // Functions
  const onSelectProduct = () => {
    setselectedProduct(Product);
    router.push(`/product-details`);
  };
  return (
    <div onClick={onSelectProduct} className="border animate-fade border-black rounded p-4 cursor-pointer hover:-translate-y-1 transition-all duration-500 relative flex flex-col">
      <div className="mb-4 bg-green-100 rounded p-2">
        <img
          className="aspect-[33/25] w-full object-contain"
          alt="Product Image"
          src={Url}
        />
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div className="flex justify-between items-center">
          <h5 className="text-sm font-bold text-gray-800 truncate">{Title}</h5>
          <h6 className="text-base text-gray-800 font-bold">${Price}</h6>
        </div>
        <p className="text-gray-500 text-[13px] mt-2 line-clamp-3">{Desc}</p>
        <div className="flex items-center gap-2 mt-4">
          <div
            className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
            title="Wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              className="fill-pink-600 inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <button
            type="button"
            className="text-sm px-2 h-9 font-semibold w-full bg-primary hover:bg-green-800 text-white tracking-wide ml-auto outline-none border-none rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
