import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { ProductContext } from "@/app/context/productContext";
import { Button } from "shadlc";

const ProductCard = ({
  Id,
  Title,
  Url,
  Price,
  Product,
  Reviews,
  Discount,
  DiscountedPrize,
}) => {
  const { setselectedProduct } = useContext(ProductContext);
  const totalStars = 5;
  const router = useRouter();
  // Functions
  const onSelectProduct = () => {
    setselectedProduct(Product);
    router.push(`/shop/products/${Id}`);
  };

  return (
    <>
      <div
        onClick={onSelectProduct}
        className="relative flex justify-between w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <div className="relative w-full p-3 flex max-h-60 overflow-hidden">
          <img
            src={Url}
            alt="High-quality product image - Buy now"
            loading="lazy"
            decoding="async"
            width="300"
            height="250"
            className="object-contain rounded"
          />
          {Discount && (
            <span className="absolute top-0 left-0 p-2 rounded-ee-lg bg-black px-2 text-center text-sm font-medium text-white">
              {Discount}% OFF
            </span>
          )}
        </div>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-sm tracking-tight text-slate-900">{Title}</h5>
          </a>
          <div className="mt-2 mb-2 flex items-start justify-between flex-col">
            <p className="flex items-center gap-1">
              {DiscountedPrize ? (
                <>
                  <span className="text-3xl font-bold text-primary">
                    ${DiscountedPrize}
                  </span>
                  <span className="text-sm text-slate-900 line-through">
                    ${Price}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-primary">
                  ${Price}
                </span>
              )}
            </p>
            {Reviews && (
              <div className="flex items-center my-2">
                {/* Generate stars dynamically */}
                {[...Array(totalStars)].map((_, index) => (
                  <svg
                    key={index}
                    aria-hidden="true"
                    className={`h-5 w-5 ${
                      index < Reviews ? "text-yellow-300" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}

                {/* Display rating value */}
                <span className="ml-1 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  {Reviews}.0
                </span>
              </div>
            )}
          </div>
          <Button
            borderRadius="6px"
            backgroundColor="var(--primary)"
            padding="10px 20px"
            textColor="#fff"
            fontSize="14px"
            fullWidth
          >
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
