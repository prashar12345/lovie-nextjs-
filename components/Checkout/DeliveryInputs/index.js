import React, { useEffect } from "react";
import CountryInput from "./CountryInput";
import NameInput from "./NameInput";
import AddressInput from "./AddressInput";
// import { Controller, useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Index = ({
  country,
  setCountry,
  firstName,
  setFirstname,
  address,
  setAddress,
  lastName,
  setLastName,
  city,
  setCity,
  states,
  setStates,
  zipCode,
  setZipCode,
}) => {
  const router = useRouter();

  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  //   setValue,
  //   getValues,
  // } = useForm();

  // const {userInfo}=useSelector(state=>state.user)

  //   useEffect(()=>{
  // if(!userInfo){
  // router.push('/auth/signin?redirect=/checkout')
  // }
  //   },[])

  const submitHandler = ({
    firstName,
    lastName,
    address,
    city,
    state,
    postalCode,
    country,
  }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        firstName,
        lastName,
        address,
        city,
        postalCode,
        state,
        country,
      },
    });
    setToStorage("shippingAddress", {
      firstName,
      lastName,
      address,
      city,
      postalCode,
      state,
      country,
    });
  };

  return (
    <div>
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium w-[12rem]">
          Delivery
        </h2>
        <p className="text-xs text-coolDarkGreen">Required</p>
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-xs mb-1">Country</label>
        <select
          className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
          onChange={() => setCountry(e.target.value)}
        >
          <option value="United Kingdom">United Kingdom</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
        </select>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col w-full mr-3">
          <label className="text-xs mb-1">First Name</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full ml-3">
          <label className="text-xs mb-1">Last Name</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col w-full mr-3">
          <label className="text-xs mb-1">Address</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
        </div>
        <div className="flex items-start justify-between mt-4">
          <div className="flex flex-col w-full mr-3">
            <label className="text-xs mb-1">City</label>
            <input
              className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
              type="text"
            />
            <label className="text-xs mb-1 mt-4">ZIP / Post Code</label>
            <input
              className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full ml-3">
            <label className="text-xs mb-1">State </label>
            <input
              className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
