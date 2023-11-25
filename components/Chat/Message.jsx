/* eslint-disable @next/next/no-img-element */
import React from "react";

const Message = ({ messages }) => {
  const userId = 2;
  return (
    <div className="relative ">
      {messages.map((message, index) => (
        <>
          {message.userId === messages[index + 1]?.userId ? (
            <div
              style={{ borderRadius: `10px` }}
              className={`${
                message.userId === userId
                  ? "bg-coolDarkGreen text-[#fff] ml-auto"
                  : "border bg-gray-100 mr-auto"
              } my-1 px-3 py-2  w-fit text-sm md:text-md max-w-[85%] lg:max-w-[70%]`}
            >
              {message.text}
              {index}
            </div>
          ) : (
            <div
              style={{
                borderRadius: `${
                  message.userId === userId
                    ? "10px 10px 0 10px"
                    : "10px 10px 10px 0px"
                }`,
              }}
              className={`${
                message.userId === userId
                  ? "bg-coolDarkGreen text-[#fff] ml-auto"
                  : "border bg-gray-100 mr-auto"
              } my-1 px-3 py-2  w-fit max-w-[85%] lg:max-w-[70%]`}
            >
              {message.text}
              {index}
            </div>
          )}
          {message.userId === messages[index + 1]?.userId ? (
            ""
          ) : (
            <div
              className={`${
                message.userId === userId
                  ? " ml-auto mr-[-10px]"
                  : "mr-auto ml-[-10px]"
              } w-fit`}
            >
              <div className="w-[1.8rem] h-[1.8rem]  rounded-full overflow-hidden">
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
                  alt=""
                />
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Message;
