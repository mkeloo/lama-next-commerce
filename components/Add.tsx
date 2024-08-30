'use client';

import { useEffect, useState } from 'react';

const Add = () => {
  // TEMPORARY
  const stockNumber = 4;

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium">Choose a Quantity</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity('d')}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity('i')}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left! <br />
            {"Don't"} miss out!
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama px-2 py-2 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none duration-200 transition-colors ease-linear">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Add;
