import React from "react";

const Card = ({ children, light, title }) => {
  return (
    <div
      className={`${
        light ? "bg-[#EFF4F2]" : "bg-[#EFF4F2]"
      } rounded-lg shadow-lg p-4 h-full relative overflow-hidden`}
    >
      <h2
        className={`text-coolDarkGreen absolute top-4 left-4 ${
          light ? "bg-[#EFF4F2]" : "bg-[#EFF4F2]"
        }  font-semibold text-lg w-full`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Card;
