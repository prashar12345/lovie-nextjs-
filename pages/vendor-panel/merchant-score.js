import React from "react";
import CheckButton from "../../components/CheckButton";
import Button from "../../components/inputs/Button";
import UniqueInput from "../../components/inputs/UniqueInput";
import VendorLayout from "../../components/layout/VendorLayout";
import VendorBar from "../../components/navigation/VendorBar/VendorBar";

const MerchantScore = () => {
  return (
    <div className="flex">
      <VendorBar />
      <div className=" text-center  w-screen">
        <h1 className="text-coolDarkerGreen  font-bold md:text-[28px] text-md lg:text-[36px]">
          Calculate Product Score
        </h1>
        <div className="flex flex-col items-start px-10 py-10">
          <div className="flex flex-col items-start space-y-1">
            <h2 className="text-coolDarkerGreen text-[16px] font-bold">
              Merchant Subjective Data from Seller
            </h2>
            <p>30</p>
          </div>

          <div className="flex flex-col items-start space-y-1 mt-4">
            <h2 className="text-coolDarkerGreen text-[16px] font-bold mb-2">
              Merchant Fact Data
            </h2>

            <div>
              <div className="space-y-2  max-w-[40rem] mt-1 items-start">
                <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                  Years of Store
                </h1>
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="within 5 years" />
                  <CheckButton green={true} text="more than 5 years" />
                </div>
              </div>
              <div className="space-y-2  max-w-[40rem] mt-4 items-start">
                <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                  Store Rating
                </h1>
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="within 40,000" />
                  <CheckButton green={true} text="more than 40,000" />
                </div>
              </div>
              <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
                <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                  Store Sales
                </h1>
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="within 500" />
                  <CheckButton green={true} text="more than 500" />
                </div>
              </div>
              <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
                <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                  Number of Active Products
                </h1>
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="within 100" />
                  <CheckButton green={true} text="more than 100" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2 py-2">
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
            <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Number of store active products on Lovie Aurora
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="within 10" />
                <CheckButton green={true} text="more than 10" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full mt-1 space-y-2">
            <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
              Anuual revenue from Lovie Aurora
            </h1>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="within 10,000USD" />
                <CheckButton
                  green={true}
                  text="between 10,000USD and 20,000USD"
                />
              </div>
              <div className="flex items-center space-x-3">
                <CheckButton
                  green={true}
                  text="between 20,000USD and 1 million"
                />
              </div>
              <div className="flex items-center space-x-3">
                <CheckButton
                  green={true}
                  text="between 1 million USD and 2 million USD"
                />
              </div>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="more than 2 millions USD" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Number of reviews
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="within 500" />
                <CheckButton green={true} text="more than 500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <div className="space-y-2  max-w-[40rem] mt-1 items-start mb-3">
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
                Store general impression
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="good" />
                <CheckButton green={true} text="others" />
              </div>
            </div>

            <div className="space-y-2  max-w-[40rem] mt-4 items-start mb-3">
              <h1 className="font-normal text-coolDarkerGreen w-full mb-1 text-sm text-left">
                Communication Rating
              </h1>
              <div className="flex items-center space-x-3">
                <CheckButton green={true} text="good" />
                <CheckButton green={true} text="others" />
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

export default MerchantScore;
