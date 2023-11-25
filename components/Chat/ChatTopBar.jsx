import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { ArrowBack, MoreVertOutlined } from "@material-ui/icons";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { chatState } from "../../atoms/chat";
import { modalState } from "../../atoms/popup";

const ChatTopBar = ({ smallScreen }) => {
  const [type, setType] = useState("conversation");
  const [stateOfChat, setStateOfChat] = useRecoilState(chatState);
  const handleClick = (text) => {
    setType(text);
  };

  const handleChangeState = () => {
    setStateOfChat({ showProfiles: true });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" bg-[#fff] border-b   flex ">
      {smallScreen && (
        <IconButton onClick={handleChangeState}>
          <ArrowBack />
        </IconButton>
      )}
      {smallScreen ? (
        <div
          className="w-[3rem] h-[3rem] m-1 ml-3 mr-3 relative rounded-full overflow-hidden cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image src="/imagefirst.png" layout="fill" objectFit="cover" alt="" />
        </div>
      ) : (
        <div
          className="w-[5.5rem] h-[5.5rem] m-4 mr-8 relative rounded-full overflow-hidden cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image src="/imagefirst.png" layout="fill" objectFit="cover" alt="" />
        </div>
      )}
      <div className="flex-1 flex flex-col justify-center   relative h-inherit ">
        <div
          className={`${
            smallScreen
              ? "flex flex-col h-inherit"
              : "mt-4 mb-auto flex flex-col h-inherit"
          }`}
        >
          <div className="flex items-center justify-between">
            <h1
              className={`${
                smallScreen ? "text-md" : "text-[18px]"
              } font-bold text-coolBlack`}
            >
              Someone Name
            </h1>
            {smallScreen && (
              <div className="pr-2 text-coolBlack">
                <MoreVertOutlined
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleMenuClick}
                />
              </div>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Conversation</MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </div>
          <div
            className={`flex items-center ${
              smallScreen ? "py-0" : "py-2  mb-2"
            } `}
          >
            <p
              className={`${
                smallScreen ? "text-sm" : "text-md"
              } text-coolBlack`}
            >
              someone@gmail.com
            </p>
          </div>
        </div>

        {smallScreen ? (
          ""
        ) : (
          <div className={` flex bottom-0 left-0 absolute bottom-0 `}>
            <button
              onClick={() => handleClick("conversation")}
              className={`${
                type === "conversation"
                  ? "py-3 text-coolDarkerGreen border-coolDarkerGreen font-semibold"
                  : "py-3 text-[#333]  border-[#fff] font-semibold"
              } transition duration-500`}
            >
              Conversation
            </button>
            <button
              onClick={() => handleClick("profile")}
              className={`${
                type === "profile"
                  ? "py-3 px-8 text-coolDarkerGreen border-coolDarkerGreen font-semibold"
                  : "py-3 text-[#333] px-8   border-[#fff]  font-semibold"
              } transition duration-500`}
            >
              Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatTopBar;
