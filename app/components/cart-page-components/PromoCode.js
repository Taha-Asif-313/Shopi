import React from "react";

const PromoCode = () => {
  return (
    <>
      <div className="space-y-4 rounded-lg border border-black bg-white p-4 shadow-sm sm:p-6">
        <form className="space-y-4">
          <div>
            <label
              for="voucher"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              {" "}
              Do you have a voucher or gift card?{" "}
            </label>
            <input
              type="text"
              id="voucher"
              className="block w-full rounded border border-black bg-gray-50 p-2.5 text-sm text-gray-900 "
              placeholder="Enter Promo Code"
              required
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Apply Code
          </button>
        </form>
      </div>
    </>
  );
};

export default PromoCode;
