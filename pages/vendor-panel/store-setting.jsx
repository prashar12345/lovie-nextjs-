import React, { useState } from "react";
import VendorBar from "../../components/navigation/VendorBar/VendorBar";
import Image from "next/image";
import image from "../../public/imagefirst.png";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import VendorLayout from "../../components/layout/VendorLayout";
import Button from "../../components/inputs/Button";
import {
  FacebookIcon,
  InstagramIcon,
  TikTok,
  TwitterIcon,
} from "../../components/icons/SocialIcons";
import { EyeOffOutline, EyeOutline } from "react-ionicons";
import SellerPopup from "../../components/popups/SellerPopup";
import { useRecoilState } from "recoil";
import { sellerPopup } from "../../atoms/popup";

const StoreProfile = () => {
  const address = `Clients Meeting
Saturday, May 7 
Google Meet joining info
Video call link: https://meet.google.com/snu-ycoc-dnj`;

  const cardData = [
    { label: "Name on Card:", value: "Suzy Butler" },
    { label: "Card Number:", value: "XXXX XXXX XXXX 1234" },
    { label: "Expiry Date:", value: "01/22" },
    { label: "CVC:", value: "123" },
  ];
  const accountData = [
    { label: "Name:", value: "Suzy Butler" },
    { label: "Account Number:", value: "XXXX XXXX XXXX 1234" },
    { label: "Bank Name:", value: "CCB" },
    { label: "Payment Email:", value: "lorem ipsum dolor sit amet." },
  ];
  const [showPass, setShowPass] = useState(false);
  const [sellerPopupData, setSellerPopupData] = useRecoilState(sellerPopup);
  const handlePopup = (text) => {
    setSellerPopupData({ ...sellerPopupData, open: true, type: text });
  };
  return (
    <VendorLayout>
      <SellerPopup />
      <div className="page w-full grid gap-4 grid-cols-1 my-4 lg:grid-cols-2">
        <div className=" bg-white shadow-lg rounded-md flex flex-col p-2 md:p-4 ">
          <div className="flex my-1">
            <div className="  mr-auto">
              <Heading color="coolDarkerGreen" text="Seller Profile" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-1 flex-1">
            <div className="flex-[0.42]  h-full mt-2">
              <Image
                src={image}
                objectFit="contain"
                className="h-[100%]"
                alt=""
              />
            </div>
            <div className="flex flex-[0.58] h-[98%] justify-between ml-0 md:ml-4 flex-col">
              <div className="flex space-y-2 text-[12px] flex-col">
                <label
                  className="text-coolDarkerGreen font-semibold"
                  htmlFor="storeName"
                >
                  Store Name
                </label>
                <input
                  type="text"
                  defaultValue="MOMOSTALK"
                  className={`rounded-md border border-coolBlack  outline-coolBlack py-2 px-4 text-coolBlack tracking-tight  outline-coolBlack w-full`}
                />
              </div>
              <div className="flex space-y-2 text-[12px] flex-col">
                <label
                  className="text-coolDarkerGreen font-semibold"
                  htmlFor="storeName"
                >
                  Country
                </label>
                <input
                  type="text"
                  defaultValue="MOMOSTALK"
                  className={`rounded-md border border-coolBlack  outline-coolBlack py-2 px-4 text-coolBlack tracking-tight  outline-coolBlack w-full`}
                />
              </div>
              <div className="flex space-y-2 text-[12px] relative flex-col">
                <label
                  className="text-coolDarkerGreen font-semibold mt-4"
                  htmlFor="storeName"
                >
                  Introduction
                </label>
                <textarea
                  defaultValue={address}
                  className="h-[116px] p-2 bg-white outline-coolBlack text-coolBlack w-full border border-coolBlack rounded-lg"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex my-1">
            <div className="flex flex-[0.42] justify-center w-full">
              <Button
                onClick={() => handlePopup("uploadImage")}
                className="w-fit"
                color="text-[12px] w-fit bg-coolDarkerGreen "
                text="Upload a Store Image"
              />
            </div>
            <div className=" ml-0 flex-[0.58] md:ml-4 w-full">
              <Button
                onClick={() => handlePopup("storeDisplay")}
                text="Change"
                color="text-[12px] w-fit mr-auto bg-coolDarkerGreen"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-md h-full flex flex-col p-2 md:p-4">
          <div className="my-2 mr-auto">
            <Heading color="coolDarkerGreen" text="Addresses" />
          </div>
          <div className="flex h-full justify-between flex-col ">
            <div className="flex h-full text-[12px]  justify-between flex-col">
              <div className="flex space-y-2 text-[12px] flex-col">
                <label
                  className="font-semibold text-coolDarkerGreen"
                  htmlFor="storeName"
                >
                  Store Address
                </label>
                <textarea
                  defaultValue="971 Sherman Brock Cir, Newwhisle, ON, CANADA. L3X 0G7"
                  className="h-[100px] p-2 bg-white text-coolBlack w-full border border-coolBlack rounded-lg"
                ></textarea>
              </div>
              <div className="flex space-y-2 text-[12px] flex-col">
                <label
                  className="font-semibold text-coolDarkerGreen"
                  htmlFor="storeName"
                >
                  Send-in-from Address
                </label>
                <textarea
                  defaultValue="971 Sherman Brock Cir, Newwhisle, ON, CANADA. L3X 0G7"
                  className="h-[116px] p-2 bg-white text-coolBlack w-full border border-coolBlack rounded-lg"
                ></textarea>
              </div>
              <div className="flex justify-center w-full items-center">
                <Button
                  onClick={() => handlePopup("editAddress")}
                  text="Edit"
                  color="w-fit mt-auto bg-coolDarkerGreen "
                  padding="px-6 py-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-md h-full flex flex-col p-2 md:p-4">
          <div className="mt-2 mb-6 mr-auto">
            <Heading color="coolDarkerGreen" text="Login Information" />
          </div>
          <div className="flex h-full flex-col">
            <div className="flex max-w-[20rem] text-[12px] h-full flex-col justify-between">
              <div className="flex space-y-2 flex-col">
                <label
                  className="font-semibold text-coolDarkerGreen"
                  htmlFor="storeName"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  defaultValue="example@email.com"
                  className={`rounded-md border border-coolBlack py-2 px-4 text-coolBlack tracking-tight  outline-coolBlack w-full`}
                />
              </div>
              <div className="flex space-y-2 flex-col">
                <div className="flex relative rounded-md  items-center border border-coolBlack">
                  <input
                    className={`flex-1 py-2 px-4 text-center rounded-md text-coolBlack tracking-tight w-full`}
                    type={showPass ? "text" : "password"}
                    defaultValue="password"
                  />
                  <button
                    type="button"
                    className="absolute top-[25%] right-2"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <EyeOffOutline /> : <EyeOutline />}
                  </button>
                </div>
              </div>
              <div className="flex space-y-2 flex-col">
                <label
                  className="font-semibold text-coolDarkerGreen"
                  htmlFor="storeName"
                >
                  Social Media Connection
                </label>
                <div className="flex items-center gap-3">
                  <InstagramIcon size="35" />
                  <FacebookIcon size="35" />
                  <TikTok size="35" />
                  <TwitterIcon size="35" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  text="Edit"
                  onClick={() => handlePopup("changePass")}
                  color=" text-[12px] w-fit bg-coolDarkerGreen "
                  padding="px-6 py-2 "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-md space-y-4 flex flex-col p-2 md:p-4">
          <div className=" mt-2 mr-auto">
            <Heading color="coolDarkerGreen" text="Payment" />
          </div>
          <div className="space-y-2 flex flex-col">
            <Heading
              small={true}
              color="coolDarkerGreen"
              text="Credit Card (Pay)"
            />
            <div className="flex space-y-2 flex-col">
              {cardData.map((data, i) => (
                <div className="grid grid-cols-2" key={i}>
                  <p className="font-semibold text-coolDarkerGreen text-[10px]">
                    {data.label}
                  </p>
                  <p className="text-coolDarkerGreen text-[10px]">
                    {data.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2 flex flex-col">
            <Heading
              small={true}
              color="coolDarkerGreen"
              text="Bank Account (Receive)"
            />
            <div className="flex space-y-2 flex-col">
              {accountData.map((data, i) => (
                <div className="grid grid-cols-2" key={i}>
                  <p className="font-semibold text-coolDarkerGreen text-[10px]">
                    {data.label}
                  </p>
                  <p className="text-coolDarkerGreen text-[10px]">
                    {data.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center w-fit space-x-4">
              <Button
                onClick={() => handlePopup("editCard")}
                text="Edit"
                color=" text-[12px] w-fit mr-auto bg-coolDarkerGreen "
                padding="px-6 py-2"
              />
              <Button
                onClick={() => handlePopup("addCard")}
                text="Add a Card"
                color=" text-[12px] w-fit mr-auto bg-coolDarkerGreen "
                padding="px-6 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};
const Heading = ({ center, small, color, text, font }) => {
  return (
    <h2
      className={`text-[16px] ${center && "text-center"} ${
        small
          ? "md:text-[12px] text-coolBlack font-bold lg:text-[12px]"
          : "md:text-[16px] text-coolBlack font-bold lg:text-[16px]"
      } ${color && `text-${color}`}`}
    >
      {text}
    </h2>
  );
};

export default StoreProfile;
