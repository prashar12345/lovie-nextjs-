import React from "react";

const ExpiryDateInput = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex flex-col w-full mr-3">
        <label className="text-xs mb-1">Expiry Date</label>
        <input
          className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
          type="text"
        />
      </div>
      <div className="flex flex-col w-full ml-3">
        <label className="text-xs mb-1">CVC</label>
        <input
          className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
          type="text"
        />
      </div>
    </div>
  );
};

export default ExpiryDateInput;
