import React, { useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-ionicons";

const Quantity = ({ quantity, setQuantity, productquantity }) => {
  const [open, setOpen] = useState(false);
  // let arr = new Array(productquantity ? productquantity : 0, '0')
  const node = useRef();
  const inpRef = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  // const handleChange = (selectedValue) => {
  //   setQuantity(selectedValue);
  //   setOpen(false);
  // };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // useEffect(() => {
  //   inpRef.current.focus()
  // }, [open])
  // const handleInputChange = (e) => {
  //   setQuantity(e.target.value)
  // }

  return (
    <div
      ref={node}
      className="flex flex-row items-center relative max-w-[28.5rem]"
    >
      {/* <input max={20} ref={inpRef} type='number' className="h-[0px] w-[0px]" onChange={handleInputChange} /> */}

      <h4 className="text-light font-medium text-base mb-0 text-coolBlack min-w-[20%]">
        Quantity
      </h4>
      <div className="bg-white rounded-md w-full select-font">
        <select
          className="form-select"
          onChange={e=> setQuantity(e.target.value)}
        >
          {/* {console.log(productquantity,"here we")} */}
          {new Array(Number(productquantity > 0 ? productquantity : 0))
            .fill(null)
            ?.map((itm, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          {/* <option>1</option>
          <option>2</option>
          <option>3</option> */}
        </select>
      </div>
      {/* <div
        onClick={() => setOpen(!open)}
        onMouseLeave={() => setOpen(false)}
        className="border border-coolBlack rounded-md flex items-center px-1.5 h-9 cursor-pointer"
      >
        <div className="text-coolBlack text-sm font-normal pr-2 h-9 w-full flex items-center justify-self-center">-</div>
        <span className=" text-coolBlack text-sm font-normal h-9 w-32 text-center quantity flex items-center content-center">{quantity}</span>
        <div className="text-coolBlack text-sm font-normal pl-2 h-9 w-full flex items-center justify-self-center">+</div>
   
        {open && (
          <div onMouseLeave={() => setOpen(false)} className="bg-white absolute text-center border border-coolBlack top-16 z-10 left-0 rounded-md w-full  flex flex-col items-start overflow-auto h-16">
            {
              productquantity && Array.apply(null, Array(productquantity)).map((itm, i) => {
                return <button
                  onClick={() => handleChange(i)}
                  className="hover:bg-gray-100 px-4 py-1 w-full"
                >
                  {i + 1}
                </button>
              })
            }

            <button
              onClick={() => handleChange(2)}
              className="hover:bg-gray-100 px-4 py-1  w-full"
            >
              2
            </button>
            <button
              onClick={() => handleChange(3)}
              className="hover:bg-gray-100 px-4 py-1  w-full"
            >
              3
            </button>
            <button
              onClick={() => handleChange(4)}
              className="hover:bg-gray-100 px-4 py-1  w-full"
            >
              4
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Quantity;
