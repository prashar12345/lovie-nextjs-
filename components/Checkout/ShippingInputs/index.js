import React, { useState } from "react";
import { Checkmark } from "react-ionicons";

const shippingOptions = [
  { id: 1, text: "Standard Delivery", delivery: "15-20 days", price: 0.0 },
];

const Index = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div>
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium ">
          Shipping Options
        </h2>
        <p className="text-xs text-coolDarkGreen">Required</p>
      </div>
      <div className="border border-coolBlack p-3 rounded-md mt-6">
        {shippingOptions.map((option, index) => (
          <div key={option.id} className={` flex items-center justify-start`}>
            <button
              type="button"
              onClick={() => setSelected(option.id)}
              className={`${
                option.id === selected
                  ? "bg-coolDarkerGreen border border-white"
                  : "border border-coolDarkerGreen"
              } rounded-md`}
            >
              <Checkmark color="white" />
            </button>
            <div className="ml-6">
              <h3 className="text-sm font-medium">{option.text}</h3>
              <p className="text-xs text-coolDarkGreen">{option.delivery}</p>
            </div>
            <h4 className="font-medium text-sm ml-auto">{`$${option.price}`}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
