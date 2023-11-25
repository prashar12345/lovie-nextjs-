import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { chatState } from "../../atoms/chat";
import ChatBody from "./ChatBody";
import ChatSidebar from "./ChatSidebar";
const Chat = () => {
  const router = useRouter();
  const [stateOfChat, setStateOfChat] = useRecoilState(chatState);
  return (
    <>
      <div className="overflow-hidden hidden max-w-[1550px] mx-auto md:flex border shadow-md rounded-md h-screen lg:h-[95vh]">
        <div
          className="flex-[0.35] border-r"
          style={{
            height: "inherit",
          }}
        >
          <ChatSidebar />
        </div>
        <div
          className="flex-1"
          style={{
            height: "inherit",
          }}
        >
          <ChatBody />
        </div>
      </div>
      <div style={{ height: "calc(90vh)" }} className="border flex  md:hidden">
        {stateOfChat.showProfiles ? (
          <div
            className="flex md:hidden border w-full shadow-md rounded-md "
            style={{ height: "calc(100vh - 100px)" }}
          >
            <div
              className="flex-[1] border-r"
              style={{
                height: "inherit",
              }}
            >
              <ChatSidebar />
            </div>
          </div>
        ) : (
          <ChatBody smallScreen={true} />
        )}
      </div>
    </>
  );
};

export default Chat;
