import React from "react";
import Button from "../../components/inputs/Button";
import SmallTable from "../../components/utils/SmallTable";

const addVariation = () => {
  return (
    <div className="p-5 flex flex-col justify-center ">
      <h1 className="font-bold text-center text-coolDarkGreen text-[24px] lg:text-[32px]">
        Add a Variation
      </h1>
      <div className="pl-10 lg:pl-36 flex flex-col items-start py-6">
        <div className="p-3 space-y-2 max-w-screen-lg">
          <h3 className="text-coolDarkGreen font-semibold text-sm md:text-[18px]">
            Style
          </h3>
          <input className="flex text-coolBlack  pr-2 border-2 rounded-[4px] border-[#337357] overflow-hidden py-1.5 items-center w-[17rem]" />
        </div>

        <div>{/* img  */}</div>

        <div className="flex">
          <div className="p-3 space-y-2">
            <h3 className="text-coolDarkGreen font-semibold text-sm md:text-[18px]">
              Color
            </h3>
            <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
              <input className="flex text-coolBlack  pr-2 border-2 rounded-[4px] border-[#337357] overflow-hidden py-1.5 items-center w-full" />
            </div>
          </div>
          <div className="p-3 space-y-2">
            <h3 className="text-coolDarkGreen font-semibold text-sm md:text-[18px]">
              Color
            </h3>
            <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
              <select
                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                required
                className="px-4 py-1.5 w-full outline-none"
                name="United Kingdom"
                id="country"
              >
                <option value="Style1">Style1</option>
                <option value="China">China</option>
                <option value="United States">United States</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
          </div>
          <div className="p-3 space-y-2">
            <h3 className="text-coolDarkGreen font-semibold  text-sm md:text-[18px]">
              Quantity
            </h3>
            <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
              <select
                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                required
                className="px-4 py-1.5 w-full outline-none"
                name="United Kingdom"
                id="country"
              >
                <option value="Style1">Style1</option>
                <option value="China">China</option>
                <option value="United States">United States</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
          </div>
          <div className="p-3 space-y-2">
            <h3 className="text-coolDarkGreen font-semibold text-sm md:text-[18px]">
              Price USD
            </h3>
            <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
              <select
                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                required
                className="px-4 py-1.5 w-full outline-none"
                name="United Kingdom"
                id="country"
              >
                <option value="Style1">Style1</option>
                <option value="China">China</option>
                <option value="United States">United States</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-3">
          <Button color="bg-coolDarkGreen" text="Add" />
        </div>

        <div className="p-3">
          <SmallTable rows={2} price={true} />
        </div>

        <div className="p-3 flex space-x-7">
          <Button color="bg-coolDarkGreen" text="Save" />
          <Button color="bg-coolDarkGreen" text="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default addVariation;
