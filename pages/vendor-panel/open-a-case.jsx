import { TextareaAutosize } from "@material-ui/core";
import React from "react";
import Button from "../../components/inputs/Button";
import VendorLayout from "../../components/layout/VendorLayout";

const OpenACase = () => {
  const dummy = [
    {
      button: "Leo",
      buttonColor: "coolDarkerGreen",
      desc: `1.2	Why you should read them. Please read these terms carefully before you submit your order to us. These terms tell you who we how we will provide products to you, how you and we may change end the contract, what to do if there is a problem and other information. If you think that there is a mistake in these terms or require any changes, please contact us to discuss.`,
    },
    {
      button: "Lovie Aurora",
      buttonColor: "coolOrange",
      desc: `1.2	Why you should read them. Please read these terms carefully before you submit your order to us. These terms tell you who we how we will provide products to you, how you and we may change end the contract, what to do if there is a problem and other information. If you think that there is a mistake in these terms or require any changes, please contact us to discuss.`,
    },
    {
      button: "Store",
      buttonColor: "coolBlack",
      desc: `1.2	Why you should read them. Please read these terms carefully before you submit your order to us. These terms tell you who we how we will provide products to you, how you and we may change end the contract, what to do if there is a problem and other information. If you think that there is a mistake in these terms or require any changes, please contact us to discuss.`,
    },
  ];
  return (
    <>
      <VendorLayout>
        <div className="flex flex-col mt-6">
          <h1 className="text-xl md:text-4xl text-center font-semibold text-coolDarkerGreen">
            Open a Case
          </h1>
          <div className="rounded-[4px] justify-center items-center flex flex-col shadow-xl bg-white py-4 md:py-20 px-8 mt-10">
            <div className="flex space-y-6 pb-6 border-b border-coolBlack flex-col w-full max-w-[50rem]">
              <div className="space-y-2">
                <label
                  htmlFor="newPass"
                  className=" text-coolDarkerGreen font-semibold"
                >
                  Case Title
                </label>
                <input
                  required
                  min={6}
                  id="newPass"
                  className={`border-coolBlack outline-coolBlack rounded-md border py-2 px-4  uppercase text-coolBlack tracking-tight w-full`}
                  type="password"
                />
              </div>
              <div className="space-y-2 max-w-[14rem] ">
                <label
                  className="text-coolDarkerGreen mb-1 font-semibold  "
                  htmlFor="product"
                >
                  Category
                </label>
                <div className="flex border outline-coolBlack rounded-md border-coolBlack outline-coolBlack">
                  <select
                    required
                    name="qty"
                    className="w-[100] cursor-pointer px-4 rounded-md outline-none py-2 w-full"
                    id="birthday"
                  >
                    {["Return", "Refund", "Exchange", "Service", "Others"].map(
                      (opt) => (
                        <option
                          className="text-center"
                          key={opt}
                          value={`${opt}`}
                        >
                          {opt}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div>
                <label
                  className="text-coolDarkerGreen mb-1 font-semibold "
                  htmlFor="textarea"
                >
                  Content
                </label>
                <div className="mt-2">
                  <TextareaAutosize
                    required
                    name="shippingAddress"
                    className="outline-coolBlack transition duration-300 border rounded-md border-coolBlack outline-coolBlack min-h-[140px] p-2"
                    aria-label="empty textarea"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center w-full justify-between">
                <Button
                  text="Upload Your Proof"
                  padding="py-3 px-4 w-full md:w-fit"
                  color="bg-coolDarkerGreen"
                />
                <Button
                  text="Close This Case"
                  padding="py-3 px-4 w-full mt-2 md:mt-0 md:w-fit"
                  color="bg-coolDarkerGreen"
                />
              </div>
            </div>
            <div className="flex space-y-6 pt-6  flex-col w-full max-w-[50rem]">
              <h1 className="text-coolDarkerGreen font-semibold">
                Case History
              </h1>
              {dummy.map((data, i) => (
                <Meta data={data} key={i} />
              ))}
            </div>
          </div>
        </div>
      </VendorLayout>
    </>
  );
};
const Meta = ({ data }) => {
  return (
    <div className="flex flex-col space-y-6">
      <Button
        text={`${data.button}`}
        padding="py-1 px-3 w-fit"
        color={`bg-${data.buttonColor}`}
      />
      <div className="flex flex-col">
        <div className="border border-coolBlack p-4 rounded-md  text-coolBlack">
          {data.desc}
        </div>
        <div className="py-1 flex w-full justify-end text-sm text-coolBlack">
          23.08.2022
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <div className="rounded-[5px] text-coolBlack flex text-lg md:text-xl items-center justify-center border-2 border-dashed border-gray-400 w-full h-[140px]">
          +
        </div>
      </div>
    </div>
  );
};

export default OpenACase;
