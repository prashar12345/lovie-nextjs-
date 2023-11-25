/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ContactInformation = ({ email, setform }) => {
  return (
    <div>
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium ">
          Contact Information
        </h2>
        <p className="text-xs text-coolDarkGreen">Required</p>
      </div>
      <div className="flex flex-col w-full mr-3 mt-4">
        <label className="text-xs mb-1">Email Address</label>
        <input
          className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
          onChange={e => setform({ ...form, email: e.target.value })}
          id="email"
        />
      </div>
      <p className="text-coolBlack mt-4 text-xs underline">
        We'll only contact you regarding your order
      </p>
    </div>
  );
};

export default ContactInformation;
