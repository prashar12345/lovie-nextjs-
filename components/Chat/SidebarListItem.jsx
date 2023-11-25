/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { chatState } from "../../atoms/chat";
import { useRecoilState } from "recoil";

const SidebarListItem = () => {
  const message = "This is a test message";
  const [chat, setChat] = useRecoilState(chatState);

  const OpenAChat = (id) => {
    setChat({ showProfiles: false, chatId: id });
  };
  return (
    <>
      {[
        { id: 1234455 },
        { id: 235667 },
        { id: 455677 },
        { id: 34566 },
        { id: 7788 },
        { id: 1234455 },
        { id: 235667 },
        { id: 455677 },
        { id: 34566 },
        { id: 7788 },
        { id: 1234455 },
        { id: 235667 },
        { id: 455677 },
        { id: 34566 },
        { id: 7788 },
        { id: 1234455 },
        { id: 235667 },
        { id: 455677 },
        { id: 34566 },
        { id: 7788 },
      ].map((chat, index) => (
        <div
          key={index}
          onClick={() => OpenAChat(chat.id)}
          className="w-full cursor-pointer p-2 md:p-2 hover:bg-[#efefef] flex items-center"
        >
          <div className="w-[3rem] h-[3rem]  rounded-full overflow-hidden">
            <img
              className="cursor-pointer"
              src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col pl-3">
            <h1 className="text-md font-semibold text-[#333] truncate">
              Someone Name
            </h1>
            <h1 className="text-sm hidden lg:flex  text-[#666] whitespace-nowrap">
              {message}
            </h1>
            <h1 className="text-sm flex lg:hidden text-[#666] whitespace-nowrap">
              {message.slice(0, 15)}...
            </h1>
          </div>
          <div className="flex items-center justify-center bg-coolDarkGreen text-[11px] text-white ml-auto rounded-full w-[20px] h-[20px]">
            2
          </div>
        </div>
      ))}
    </>
  );
};

export default SidebarListItem;
