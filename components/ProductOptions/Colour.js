import React from "react";
import { ChevronDown } from "react-ionicons";

const Colour = ({ colours, selected, setSelected, open, setOpen }) => {
  return (
    <div className="flex flex-col relative max-w-[14rem]">
      <h4 className="text-light text-coolBlack text-xs mb-1">Colour</h4>
      <button
        onClick={() => setOpen(!open)}
        className="border border-coolBlack rounded-md flex items-center px-1.5 py-1.5 cursor-pointer w-[14rem]"
      >
        <div className="opacity-40">
          <div
            style={{ background: selected }}
            className="h-7 w-7 bg-opacity-40 rounded mr-4"
          ></div>
        </div>

        <span className="text-lg capitalize">{selected}</span>
        <div className="ml-auto border-l border-coolBlack pl-1.5">
          <ChevronDown />
        </div>
      </button>
      {open && (
        <div className="absolute top-16 border border-coolBlack bg-white rounded-md px-2 w-full z-20">
          {colours.map((colour) => (
            <button
              onClick={() => {
                setSelected(colour.colour);
                setOpen(false);
              }}
              key={colour.id}
              className="my-2 flex items-center hover:bg-gray-50 w-full transition duration-150 p-1 rounded"
            >
              <div className="opacity-40">
                <div
                  style={{ background: colour.colour }}
                  className="h-5 w-5 mr-4 rounded"
                ></div>
              </div>

              <p className="capitalize text-coolBlack">{colour.colour}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Colour;
