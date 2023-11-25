import React, { useState } from "react";

const Size = ({ selected, setSelected, open, setOpen, item,name }) => {
  console.log({ item });

  return (
    <div className="flex flex-row items-center relative max-w-[28.5rem]">
      <h4 className="text-light font-medium text-base mb-0 text-coolBlack min-w-[20%]">
       {name}
      </h4>
      <div className="bg-white rounded-md w-full select-font">
        <select className="form-select" onChange={e => setSelected(e.target.value)}>
          {
            item?.map((itm, i) => {
              return <option key={i} value={itm.value}>{itm.value}</option>
            })
          }
          {/*         
        <option value="l">l</option>
        <option value="md">md</option> */}
        </select>

      </div>
      {/* <div className="w-full bg-white rounded-md grid grid-cols-5 gap-4">
        {item?.map((size) => (
          <>
            {size?.size?.length && (
              <button
                onClick={() => {
                  setSelected(size.size);
                  setOpen(false);
                }}
                style={{ color: "#000" }}
                key={size.size}
                className={`${
                  selected.toUpperCase() === size?.size
                    ? "border-coolOrange bg-gray-50 text-coolOrange"
                    : "hover:bg-gray-50 border-coolBlack"
                }  w-full text-sm rounded border px-4 py-2`}
              >
                {size.size}
              </button>
            )}
          </>
        ))}
      </div> */}
    </div>
  );
};

export default Size;
