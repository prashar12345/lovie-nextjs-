import React from "react";

const CardNumber = () => {
  return (
    <div className="flex flex-col w-full mr-3 mt-4">
      <label className="text-xs mb-1">Card Number</label>
      <input
        className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
        type="text"
      />
    </div>
  );
};

export default CardNumber;
