import React from "react";
import Button from "../inputs/Button";
import { Messenger } from "../icons/SocialIcons";

const ContactForm = ({ formFor }) => {
  return (
    <form>
      <div className="flex flex-col md:flex-row items-center justify-between mt-4">
        <div className="flex flex-col w-full md:mr-3">
          <label className="text-xs mb-1 text-coolBlack">First Name</label>
          <input
            className="border border-coolBlack text-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full md:ml-3">
          <label className="text-xs mb-1 text-coolBlack">Last Name</label>
          <input
            className="border border-coolBlack text-coolBlack  rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mt-4">
        <label className="text-xs mb-1 text-coolBlack">Email</label>
        <input
          className="border border-coolBlack text-coolBlack rounded-md px-2 py-1.5 text-sm"
          type="email"
        />
      </div>
      <div className="flex flex-col w-full mt-4">
        <label className="text-xs mb-1 text-coolBlack">{formFor === 'ipPage' ? 'Product LAID (find it on product page)' : 'Subject'}</label>
        <input
          className="border border-coolBlack text-coolBlack rounded-md px-2 py-1.5 text-sm"
          type="email"
        />
      </div>

      <div className="flex flex-col w-full mt-4">
        <label className="text-xs mb-1 text-coolBlack">Message</label>
        <textarea className="border border-coolBlack text-coolBlack rounded-md px-2 py-1.5 text-sm" />
      </div>
      <div className="flex items-center justify-between">
        <Button
          text="Submit"
          color="bg-coolDarkerGreen"
          margin="mt-4"
          padding="py-2 px-5"
        />
        <button className="flex items-center bg-white border border-[#B7B7B7] rounded-md px-2 lg:px-2.5 py-1.5 lg:py-1.5 text-xs mt-4 self-end">
          <Messenger size="30" />
          <div className="flex flex-col ml-4 items-start">
            <span>Need help?</span>
            <span className="underline hidden lg:block self-end text-[0.7rem] text-coolBlack">
              Live chat or message us!
            </span>
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
