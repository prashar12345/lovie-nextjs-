import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "react-ionicons";
import SuperTitle from "../Typography/SuperTitle";

const Cart2 = ({ cartItems }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-sm my-2">
          <th className="pb-3 ">Item</th>
          <th className="pb-3 text-right">Size</th>
          <th className="pb-3 text-right">From</th>
          <th className="pb-3 text-right">Quantity</th>
          <th className="pb-3 text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems !== undefined &&
          cartItems.map((item) => (
            <tr
              key={item.id}
              className="border-t border-borderColor text-coolBlack text-sm"
            >
              <td className="py-5 flex items-center font-medium">
                <div className="relative h-16 w-14 mr-4">
                  <Image
                    src={item.supporting_images[0].url}
                    objectFit="cover"
                    alt=""
                    layout="fill"
                  />
                </div>
                <div>
                  <SuperTitle size="text-xs" text={item.store.store_name} />
                  <p className="text-lg tracking-tight">{item.name}</p>
                </div>
              </td>
              <td className="py-5 text-right text-coolBlack">M (Medium)</td>
              <td className="py-5 text-right text-coolBlack">
                {item.store.from}
              </td>
              <td className="py-5 text-center">
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => handleQuantity(item.id)}
                    className="border border-borderColor rounded p-1 hover:border-coolBlack transition duration-150"
                  >
                    <ChevronDown height="14px" width="14px" color="#5C5C5C" />
                  </button>
                  <p className="mx-3">{quantity}</p>
                  <button
                    onClick={() => handleQuantity(item.id)}
                    className="border border-borderColor rounded p-1 hover:border-coolBlack transition duration-150"
                  >
                    <ChevronUp height="14px" width="14px" color="#5C5C5C" />
                  </button>
                </div>
              </td>
              <td className="py-5 text-right font-medium text-base text-coolDarkGreen">{`$${
                item.price * quantity
              }`}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Cart2;
