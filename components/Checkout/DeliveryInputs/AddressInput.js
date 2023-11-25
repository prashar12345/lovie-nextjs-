import React from "react";

const AddressInput = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col w-full mr-3">
        <label className="text-xs mb-1">Address</label>
        <input
          className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
          type="text"
        />
      </div>
      <div className="flex items-start justify-between mt-4">
        <div className="flex flex-col w-full mr-3">
          <label className="text-xs mb-1">City</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
          <label className="text-xs mb-1 mt-4">ZIP / Post Code</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full ml-3">
          <label className="text-xs mb-1">State / County</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInput;
