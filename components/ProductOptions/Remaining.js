import React from "react";

const Remaining = () => {
  return (
    <div className="flex flex-col">
      <h4 className="text-light text-coolBlack text-xs mb-1">Remaining</h4>
      <div className="border border-coolBlack rounded-md flex items-center px-3 py-2 cursor-pointer">
        <span className="text-lg">12</span>
      </div>
    </div>
  );
};

export default Remaining;
