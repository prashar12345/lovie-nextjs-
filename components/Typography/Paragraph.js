import React from "react";

const Paragraph = ({ margin, text, size, fontWeight }) => {
  return (
    <p
      className={`${margin} ${size ? size : "text-sm"} ${fontWeight ? fontWeight : ''
        }  text-coolBlack font-[400]` }
    >
      {text}
    </p>
  );
};

export default Paragraph;
