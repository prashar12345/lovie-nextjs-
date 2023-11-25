import React, { useState } from "react";
import { ChevronDown } from "react-ionicons";

const Size = ({ sizes, selected, setSelected, open, setOpen }) => {
  return (
    <div className="flex flex-col relative max-w-[14rem]">
      <h4 className="text-light text-coolBlack text-xs mb-1">Size</h4>
      <button
        onClick={() => setOpen(!open)}
        className="border border-coolBlack rounded-md flex items-center px-1.5 py-1.5 cursor-pointer w-[14rem]"
      >
        <span className="text-lg pl-1 capitalize">
          {selected === "s" && "Small"}
          {selected === "m" && "Medium"}
          {selected === "l" && "Large"}
        </span>
        <div className="ml-auto pl-2">
          <ChevronDown height="16px" color='#363638' width="16px" />
        </div>
      </button>

      {open && (
        <div className="absolute top-16 border w-full border-coolBlack bg-white rounded-md">
          {sizes.map((size) => (
            <button
              onClick={() => {
                setSelected(size.size);
                setOpen(false);
              }}
              key={size.id}
              className="flex items-center hover:bg-gray-50 w-full transition duration-150 rounded-md px-2 py-1.5"
            >
              <p className="capitalize text-coolBlack text-left text-sm">
                {size.size === "s" && "Small(S)"}
                {size.size === "m" && "Medium(M)"}
                {size.size === "l" && "Large(L)"}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Size;
