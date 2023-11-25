import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Heading from "../../components/Typography/Heading";
import Button from "../../components/inputs/Button";
import MultiChoice from "../../components/inputs/MultiChoice";
import ImageUpload from "../../components/inputs/ImageUpload";
import UniqueInput from "../../components/inputs/UniqueInput";
import OperationChoice from "../../components/inputs/OperationChoice";
import CallInput from "../../components/inputs/CallInput";
import { Checkmark } from "react-ionicons";
import CheckButton from "../../components/CheckButton";
import { categories } from "../../data/categories";

const Application = () => {
  const [terms, setTerms] = useState(false);
  return (
    <Layout categories={categories}>
      <div className="text-center mb-24 text-coolBlack">
        <Heading h1 text="SELLER APPLICATION FORM" size="text-5xl" />
        <p className="font-semibold mt-6">
          Ready to start your journey with Lovie Aurora?
        </p>
        <p className="mt-2">
          Please fill out this application form and Lovie Aurora will get back
          to you soon.
        </p>
        <form className="max-w-[40rem] mx-auto mt-10">
          <h3 className="uppercase mt-10 font-semibold mb-6 text-2xl font-cool">
            About you
          </h3>
          <div className="flex w-full gap-4">
            <div className="flex flex-col items-start w-full mt-4">
              <label className="text-sm mb-1 font-bold">First name</label>
              <input
                className="border outline-coolBlack  w-full border-coolBlack rounded-md p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start w-full mt-4">
              <label className="text-sm mb-1 font-bold">Surname</label>
              <input
                className="border outline-coolBlack  w-full border-coolBlack rounded-md p-2"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Email Address</label>
            <input
              className="border outline-coolBlack  w-full border-coolBlack rounded-md p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Contact Number</label>
            <input
              className="border outline-coolBlack  w-full border-coolBlack rounded-md p-2"
              type="number"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Country</label>
            <input
              className="border outline-coolBlack  w-full border-coolBlack rounded-md p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Address</label>
            <textarea
              className="border outline-coolBlack  w-full border-coolBlack rounded-md p-2"
              type="text"
              rows="4"
            />
          </div>
          <h3 className="uppercase mt-10 font-semibold mb-6 text-2xl font-cool">
            Your Brand
          </h3>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Brand name</label>
            <input
              className="border outline-coolBlack  w-full border-coolBlack rounded-md p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">
              Website (if applicable)
            </label>
            <input
              className="border outline-coolBlack  w-full border-coolBlack rounded-md p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-6">
            <label className="text-sm mb-1 font-bold">
              Select a Main Category for your products.
            </label>
            <MultiChoice />
          </div>

          <div className="flex flex-col items-start w-full mt-6">
            <label className="text-sm mb-1 font-bold">Number of patents</label>
            <UniqueInput />
          </div>

          <div className="flex flex-col text-sm  items-start w-full space-y-2 mt-6">
            <label htmlFor="" className="text-[14px] font-bold">
              Write the number if you have more than 10 patents
            </label>

            <input
              type="number"
              className="p-1 border outline-coolBlack  outline-coolBlack w-[100px] rounded-md  p-1 w-full border outline-coolBlack  outline-coolBlack border-coolBlack rounded-lg"
            />
          </div>

          <div className="flex flex-col items-start w-full mt-6 space-y-2">
            <p className="font-bold text-[14px] ">
              Upload the patent info to prove the number you claimed
            </p>
            <div className="flex items-center justify-center w-[7rem] h-[9rem] border-2 border-gray-300 border-dashed text-xl ">
              <h1>+</h1>
            </div>
            {/* <div className="flex w-full overflow-x-scroll">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <div key={num} className="flex flex-1 items-center justify-center w-[rem] h-[9rem] border-coolBlack text-xl border">
                <h1>+</h1>
              </div>
            ))}
          </div> */}
          </div>
          <div className="space-y-5 text-sm ">
            <div className="flex items-start mt-6 flex-col">
              <h2 className="text-sm mb-1 font-bold">
                Size of workshop and office
              </h2>
              <div className="flex items-center space-x-4">
                <CheckButton green={true} text="within 200 square meters" />
                <CheckButton green={true} text="more than 200 square meters" />
              </div>
            </div>

            <div className="flex items-start mt-6 flex-col">
              <h2 className="text-sm mb-1 font-bold">Number of R&D staff</h2>
              <div className="flex items-center space-x-4">
                <CheckButton green={true} text="only 1 R&D staff" />
                <CheckButton green={true} text="more than 1 R&D staff" />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2 items-start w-full mt-6">
            <label className="text-sm font-bold">
              Upload some examples of your product (Upto 10 Images)
            </label>
            <ImageUpload />
          </div>
          <div className="flex flex-col items-start w-full mt-6">
            <label className="text-sm mb-1 font-bold">
              Out of 10, how unique are your products?
            </label>
            <UniqueInput />
          </div>
          <div className="flex flex-col items-start w-full mt-6">
            <label className="text-sm mb-1 font-bold">
              Which Lovie Aurora operation modes do you prefer?
            </label>
            <OperationChoice />
          </div>
          <div className="flex flex-col items-start w-full mt-6">
            <label className="text-sm mb-1 font-bold">
              Are you willing to accept a video call to verify yourself and your
              products?
            </label>
            <CallInput />
          </div>

          <div className="text-left">
            <Button
              type="submit"
              text="Submit Application"
              color="bg-coolDarkerGreen"
              margin="mt-6"
              padding="py-1.5 px-4"
            />
          </div>
          <div className="flex items-center mb-2 mt-6">
            <button
              onClick={() => setTerms(!terms)}
              type="button"
              className={`${
                terms ? "bg-coolDarkerGreen" : "bg-white"
              }  border outline-coolBlack  border-coolDarkerGreen rounded-md`}
            >
              <Checkmark color="white" />
            </button>
            <p className="ml-3 text-sm text-coolBlack">
              I agree to the Terms and Conditions and Privacy Policy
            </p>
          </div>
          <p className="font-smeibold text-left mt-6 text-sm">
            Please be patient. A Lovie Aurora representative will contact you
            regarding your application as soon as possible.
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Application;
