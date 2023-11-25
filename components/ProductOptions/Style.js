import React from "react";
import { ChevronDown } from "react-ionicons";

// const styles = [{ style: "Silk" }, { style: "Cotton" }, { style: "Polyester" }];

// after connecting db make it dynamic

const Style = ({ selected, setSelected, styles, setOpen }) => {
  return (
    <div className="flex flex-row items-center relative max-w-[28.5rem]">
      <h4 className="text-light font-medium text-base mb-0 text-coolBlack min-w-[20%]">
        Style
      </h4>

      <div className="bg-white rounded-md w-full select-font">
        <select className="form-select">
        <option value="Silk">Silk</option>
        <option value="Cotton">Cotton</option>
        <option value="Polyester">Polyester</option>
        </select>
        
      </div>

      {/* <div className="bg-white rounded-md w-full z-20 grid grid-cols-3 gap-4 items-center justify-start mt-1">
        {styles?.map((style) => (
          <button
            onClick={() => {
              setSelected(style.style);
              setOpen(false);
            }}
            key={style.style}
            className={`${
              selected === style.style
                ? "border-coolOrange bg-gray-50 text-coolOrange  font-normal text-sm"
                : "hover:bg-gray-50 border-coolBlack  font-normal text-sm text-coolBlack"
            }  w-full rounded border px-3 py-2`}
          >
            {style.style}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Style;
