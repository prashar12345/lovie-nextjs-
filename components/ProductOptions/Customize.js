/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { ChevronDown } from "react-ionicons";

const Text = () => {
  return (
    <div className="w-full max-w-[50%]">
      <p className="text-xs text-coolBlack">Text</p>
      <input type="text" className="border border-coolBlack rounded-md p-1" />
    </div>
  );
};

const Note = () => {
  return (
    <div className="w-full">
      <p className="text-xs text-coolBlack">Your Note</p>
      <input
        type="text"
        className="border w-full border-coolBlack rounded-md p-1  "
      />
    </div>
  );
};

const TextColor = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Green");
  return (
    <div className="flex  w-full max-w-[23%] relative flex-col">
      <h4 className="text-light text-coolBlack text-xs">Text Color</h4>
      <div
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(!open)}
        className="border border-coolBlack rounded-md p-0.5 flex items-center cursor-pointer"
      >
        <span className=" w-full text-center text-xs ml-3 mr-3.5">
          {value}
        </span>
        <div className="ml-auto border-l border-coolBlack pl-1.5 pr-1.5">
          <ChevronDown height="16px" color="#363638" width="16px" />
        </div>
        {open && (
          <div
            onMouseLeave={() => setOpen(false)}
            className="absolute bg-white border border-coolBlack top-14 z-10 left-0 rounded-md w-full  flex flex-col items-start overflow-hidden"
          >
            <button
              onClick={() => setValue("Black")}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              Black
            </button>
            <button
              onClick={() => setValue("Gray")}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              Gray
            </button>
            <button
              onClick={() => setValue("Blue")}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              Blue
            </button>
            <button
              onClick={() => setValue("Orange")}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              Orange
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Font = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(4);
  return (
    <div className="flex w-full max-w-[23%] relative flex-col">
      <h4 className="text-light text-coolBlack text-xs">Font</h4>
      <div
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(!open)}
        className="border border-coolBlack rounded-md p-0.5 flex items-center cursor-pointer"
      >
        <span className=" w-full text-center text-xs ml-3 mr-3.5">
          {value}
        </span>
        <div className="ml-auto border-l border-coolBlack pl-1.5 pr-1.5">
          <ChevronDown height="16px" color="#363638" width="16px" />
        </div>
        {open && (
          <div
            onMouseLeave={() => setOpen(false)}
            className="absolute bg-white border border-coolBlack top-14 z-10 left-0 rounded-md w-full  flex flex-col items-start overflow-hidden"
          >
            <button
              onClick={() => setValue(6)}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              6
            </button>
            <button
              onClick={() => setValue(8)}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              8
            </button>
            <button
              onClick={() => setValue(10)}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              10
            </button>
            <button
              onClick={() => setValue(12)}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              12
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Customize = () => {
  return (
    <div className="max-w-[29.5rem]">
      <h4 className="text-light text-coolBlack text-xs mt-3 leading-none">
        Add your customisation
      </h4>
      <p className="text-xs text-coolBlack mt-2">
        Include words/name(s) & font here. Signs are based on width only (NOT
        height), the more letters the shorter the sign. Signs aren't refundable.
      </p>
      <p className="text-xs text-coolBlack mt-2">
        Include words/name(s) & font here. Signs are based on width only (NOT
        height), the more letters the shorter the sign. Signs aren't refundable.
      </p>
      <p className="text-xs text-coolBlack mt-2">
        Link to preview fonts (copy/paste link). <br />{" "}
        https://namesignpreview.com
      </p>
      <div className="mt-4 w-full flex items-center flex-wrap gap-2">
        <Text />
        <TextColor />
        <Font />
        <Note />
      </div>
    </div>
  );
};

export default Customize;
