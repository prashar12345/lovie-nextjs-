import React from "react";
import { ChevronDown } from "react-ionicons";

// const colors = [
//   { colour: "#ffffff", text: "white" },
//   { colour: "#e5e7eb", text: "Gray" },
//   { colour: "#334155", text: "Black" },
// ];

const Colour = ({ selected, setSelected, setOpen, item,name }) => {
  return (
    <div className="flex flex-row items-center relative max-w-[28.5rem]">
      <h4 className="text-light font-medium text-base mb-0 text-coolBlack min-w-[20%]">
  {name}
      </h4>
      <div className="bg-white rounded-md w-full select-font">
        <select className="form-select" onChange={e => setOpen(e.target.value)}>
          {
            item?.map((itm, i) => {
              return <option key={i} value={itm.value}>{itm.value}</option>
            })
          }
          {/* <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option> */}
        </select>

      </div>
      {/* <div className="flex items-center gap-2 mt-1">
        {item?.map((colour, i) => (
          <button
            style={{ background: colour.colour }}
            onClick={() => {
              setSelected(colour.colour);
              setOpen(false);
            }}
            key={colour.colour}
            className={`${colour.text === selected
              ? "ring-1 ring-offset-2 ring-black"
              : "hover:ring-1 hover:ring-offset-2 hover:ring-black border-coolBlack"
              } flex items-center transition duration-150 justify-center h-7 w-7 mr-2 rounded-full border border-gray-200`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Colour;
