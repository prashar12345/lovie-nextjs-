import React, { useState } from "react";
import { ChevronDown } from "react-ionicons";

const Delivery = () => {
  const [selected, setSelected] = useState("UK");
  return (
    <div className="flex items-center">
      <h4 className="text-light text-coolBlack text-[0.7rem] mr-2">
        Deliver to:
      </h4>
      <div className="border border-coolBlack rounded flex items-center px-1 py-1 cursor-pointer">
        <span className="text-xs pr-2.5">{selected}</span>
        <div className="ml-auto border-l text-coolBlack border-coolBlack pl-1">
          <ChevronDown color='#363638' />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
