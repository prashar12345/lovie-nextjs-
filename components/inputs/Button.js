import React from "react";

const Button = ({
  margin,
  text,
  textColor,
  onClick,
  color,
  type,
  padding,
  disabledOpacity,
  width,
  size,
  ...other
}) => {
  return (
    <button
      {...other}
      type="submit"
      className={`${margin} ${color ? color : "bg-coolOrange"}  rounded-[7px] ${
        padding ? padding : "py-2 px-3"
      } ${
        disabledOpacity
          ? "opacity-40"
          : "hover:bg-opacity-60 transition duration-150"
      }  text-md truncate ${width ? width : null} ${
        textColor ? textColor : "text-white"
      } ${size ? size : null}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
