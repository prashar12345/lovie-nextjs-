import React from "react";

const SuperTitle = ({ margin, text, size, color }) => {
  return (
    <p
      className={`product_badge mr-3 ${margin} ${
        size ? size : "text-[14px]"
      }  text-white  tracking-[-0.05em] font-[400]`}
    > 
      {text}
    </p>

  );
};

export default SuperTitle;
