import React from "react";
import CheckButton from "../../components/CheckButton";
import Button from "../../components/inputs/Button";
import UniqueInput from "../../components/inputs/UniqueInput";
import VendorLayout from "../../components/layout/VendorLayout";
import VendorBar from "../../components/navigation/VendorBar/VendorBar";

const ProductScore = () => {
  return (
    <div className="flex">
      <div className="hidden sm:flex">
        <VendorBar />
      </div>

      <div className=" text-center  w-screen sm:ml-[45%] lg:ml-[20%]">
        <h1 className="text-coolDarkerGreen  font-bold md:text-[28px] text-md lg:text-[36px]">
          Calculate Product Score
        </h1>
        <div className="flex flex-col items-start px-10 py-10">
          <div className="flex flex-col items-start space-y-1">
            <h2 className="text-coolDarkerGreen text-[16px] font-bold">
              Merchant Score
            </h2>
            <p>30</p>
          </div>

          <div className="flex flex-col items-start space-y-1 mt-4">
            <h2 className="text-coolDarkerGreen text-[16px] font-bold">
              Product Listing Data
            </h2>
            <p>30</p>
          </div>

          <div className="flex flex-col items-start space-y-1 mt-4">
            <h2 className="text-coolDarkerGreen text-[16px] font-bold mb-2">
              Product Fact Data
            </h2>

            <div>
              <div className="space-y-2  max-w-[40rem] mt-1 items-start">
                <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                  Product material quality
                </h1>
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="premium" />
                  <CheckButton green={true} text="ordinary" />
                </div>
              </div>
              <div className="space-y-2  max-w-[40rem] mt-4 items-start">
                <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                  Number of reviews
                </h1>
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="within 100" />
                  <CheckButton green={true} text="more than 100" />
                </div>
              </div>
              <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
                <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                  Number of sales
                </h1>
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="within 100" />
                  <CheckButton green={true} text="more than 100" />
                </div>
              </div>
              <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
                <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                  Negative reviews rate
                </h1>
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="within 1%" />
                  <CheckButton green={true} text="more than 1%" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <h2 className="text-coolDarkerGreen  text-[16px] font-bold">
              Lovie Aurora Platform Data
            </h2>
            <div className="flex flex-col items-start w-full mt-6">
              <label className="text-sm mb-1 text-coolDarkerGreen">
                Years of listing on Lovie Aurora
              </label>
              <UniqueInput />
            </div>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <div className="space-y-2  max-w-[60rem] mt-2 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Number of reviews on Lovie Aurora
              </h1>
              <div className="flex  space-x-2  items-center ">
                <CheckButton green={true} text="within 500" />
                <CheckButton green={true} text="between 500 and 1000" />
                <CheckButton green={true} text="between 1000 and 2000" />
                <CheckButton green={true} text="more than 2000" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <div className="space-y-2  max-w-[60rem] mt-2 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Number of annual sales on Lovie Aurora
              </h1>
              <div className="flex items-center space-x-2 ">
                <CheckButton green={true} text="within 500" />
                <CheckButton green={true} text="between 500 and 1000" />
                <CheckButton green={true} text="between 1000 and 2000" />
                <CheckButton green={true} text="more than 2000" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <div className="space-y-2  max-w-[40rem] mt-2 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Return/Exchange/Refund rate
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="within 1%" />
                <CheckButton green={true} text="more than 1%" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-2">
            <h2 className="text-coolDarkerGreen  text-[16px] font-bold">
              Lovie Aurora Team Impression
            </h2>

            <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Product general impression
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="good" />
                <CheckButton green={true} text="others" />
              </div>
            </div>

            <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Compelling selling point
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="yes" />
                <CheckButton green={true} text="no" />
              </div>
            </div>

            <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Need to change packaging
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="yes" />
                <CheckButton green={true} text="no" />
              </div>
            </div>

            <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Are product details satisfied ?
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="yes" />
                <CheckButton green={true} text="no" />
              </div>
            </div>
          </div>

          <div className="flex  items-start space-x-3 mt-4">
            <Button
              text="Confirm Calculation"
              color="bg-coolDarkerGreen max-w-[28rem]"
            />
            <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
            <Button text="Cancel" color="bg-coolDarkerGreen max-w-[28rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScore;
