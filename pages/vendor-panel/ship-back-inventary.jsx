import React, { useState } from "react";
import { Checkmark } from "react-ionicons";
import personImg from "../../public/woman-dress.jpg";
import CheckButton from "../../components/CheckButton";
import VendorLayout from "../../components/layout/VendorLayout";
import VendorBar from "../../components/navigation/VendorBar/VendorBar";
import Image from "next/image";
import SelectorIcon from "../../components/icons/SelectorIcon";
import Button from "../../components/inputs/Button";
import SmallTable from "../../components/utils/SmallTable";
import { useRecoilState } from "recoil";
import { variation } from "../../atoms/popup";
import AdminPopup from "../../components/popups/AdminPopup";

const ShipBackInventary = () => {
  const [adminState, setAdminState] = useRecoilState(variation);

  const addVariation = () => {
    setAdminState({ ...adminState, type: "addVariation1", open: true });
  };

  return (
    <VendorLayout>
      <AdminPopup />
      <div className="my-8 space-y-4">
        <h1 className="text-coolDarkerGreen text-xl md:text-2xl md:text-2Green font-bold text-coolDarkerGreen">
          Ship-back Your Inventory From Lovie Aurora
        </h1>
        <h2 className="text-lg md:text-Green font-bold text-coolDarkerGreen">
          Product & Shipping Information{" "}
        </h2>
        <div className="flex flex-col space-y-1  max-w-[40rem]">
          <h2 className="text-lg font-semibold text-coolDarkerGreen">
            Select Product
          </h2>
          <select
            required
            name="product"
            className="border outline-coolDarkerGreen px-4 rounded-md py-2 border-coolDarkerGreen w-full"
            id="birthday"
          >
            {[
              "Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain",
              "Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain",
              "Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain",
              "Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain",
            ].map((qty) => (
              <option key={qty} value={`${qty}`}>
                {qty}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col space-y-4 max-w-[40rem]">
          <h2 className="text-lg font-semibold text-coolDarkerGreen">
            Variations & Quantity
          </h2>
          <SmallTable />
        </div>
        <Button
          text="Add a Variation"
          color="bg-coolDarkerGreen"
          padding="px-4 py-3"
          onClick={addVariation}
        />
        <div className="flex flex-col space-y-4 max-w-[40rem]">
          <div className="space-y-2">
            <label
              htmlFor="newPass"
              className=" text-coolDarkerGreen font-semibold"
            >
              Recipient Name.
            </label>
            <input
              required
              min={6}
              id="newPass"
              className={`border-coolDarkerGreen outline-coolDarkerGreen rounded-md border py-2 px-4  uppercase text-coolBlack tracking-tight w-full`}
              type="password"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="newPass"
              className=" text-coolDarkerGreen font-semibold"
            >
              Recipient Phone Number.
            </label>
            <input
              required
              min={6}
              id="newPass"
              className={`border-coolDarkerGreen outline-coolDarkerGreen rounded-md border py-2 px-4  uppercase text-coolBlack tracking-tight w-full`}
              type="password"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="newPass"
              className=" text-coolDarkerGreen font-semibold"
            >
              Recipient Email.
            </label>
            <input
              required
              min={6}
              id="newPass"
              className={`border-coolDarkerGreen outline-coolDarkerGreen rounded-md border py-2 px-4  uppercase text-coolBlack tracking-tight w-full`}
              type="password"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="newPass"
              className=" text-coolDarkerGreen font-semibold"
            >
              Ship-back Address.
            </label>
            <textarea
              required
              min={6}
              id="newPass"
              className={`border-coolDarkerGreen outline-coolDarkerGreen rounded-md border py-2 px-4  uppercase text-coolBlack tracking-tight w-full`}
              type="password"
            />
          </div>
          <p className="text-coolDarkerGreen text-sm font-semibold">
            Note: after shipping out your inventory, you will get nitified by
            email and SMS. If you have any problem, please contact our customer
            service.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            text="Confirm Shipping"
            color="bg-coolDarkerGreen"
            padding="px-4 py-3"
          />
          <Button text="Save" color="bg-coolDarkerGreen" padding="px-4 py-3" />
          <Button
            text="Cancel"
            color="bg-coolDarkerGreen"
            padding="px-4 py-3"
          />
        </div>
      </div>
    </VendorLayout>
  );
};

export default ShipBackInventary;
