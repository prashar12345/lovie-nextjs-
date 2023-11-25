import React from "react";
import Button from "../../components/inputs/Button";
import SmallTable from "../../components/utils/SmallTable";

const productSample = () => {
  return (
    <div className="w-[100vw] p-5">
      <div className="flex flex-col items-center space-y-2 w-[35rem] mx-auto text-center">
        <h2 className="text-coolDarkGreen font-bold text-[24px]">
          Send Your Sample
        </h2>
        <p className="text-center">
          Send a sample to Lovie Aurora Warehouse for an in-depth evaluation for
          the final decision of product approval.
        </p>
      </div>

      <div className="items-start space-y-2 px-1 lg:px-36">
        <div className="p-3 space-y-2">
          <h3 className="text-coolDarkGreen font-semibold text-[18px]">
            Select Product
          </h3>
          <div className="flex text-coolBlack  pr-2 border-2 rounded-[4px] border-[#337357] overflow-hidden  items-center w-[40rem]">
            <select
              defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
              required
              className="px-4 py-2 w-full outline-none"
              name="United Kingdom"
              id="country"
            >
              <option value="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha">
                Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant
                Cha
              </option>
              <option value="China">China</option>
              <option value="United States">United States</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-5">
          <div className="flex">
            <div className="p-3 space-y-2">
              <h3 className="text-coolDarkGreen font-semibold text-[18px]">
                Style
              </h3>
              <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center w-[10rem]">
                <select
                  defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                  required
                  className="px-4 py-2 w-full outline-none"
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
              <h3 className="text-coolDarkGreen font-semibold text-[18px]">
                Color
              </h3>
              <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center w-[10rem]">
                <select
                  defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                  required
                  className="px-4 py-2 w-full outline-none"
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
              <h3 className="text-coolDarkGreen font-semibold text-[18px]">
                Size
              </h3>
              <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center w-[7rem]">
                <select
                  defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                  required
                  className="px-4 py-2 w-full outline-none"
                  name="United Kingdom"
                  id="country"
                >
                  <option value="Style1">M</option>
                  <option value="France">L</option>
                  <option value="China">2xl</option>
                  <option value="United States">2XL</option>
                  <option value="Germany">Germany</option>{" "}
                </select>
              </div>
            </div>
            <div className="p-3 space-y-2">
              <h3 className="text-coolDarkGreen font-semibold text-[18px]">
                Quantity
              </h3>
              <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center w-[5rem]">
                <select
                  required
                  className="px-4 py-2 w-full outline-none"
                  name="United Kingdom"
                  id="country"
                  defaultValue="1"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ml-3 mt-2">
            <Button color="bg-coolDarkGreen" text="Add Product Sample " />
          </div>

          <div className="ml-3 mt-2">
            <h2 className="text-coolDarkGreen font-semibold text-[18px]">
              Sample List
            </h2>
            {/* <table className='mt-2 items-center table-fixed'>
  <thead >
    <tr className='flex justify-between space-x-32  md:space-x-56 border-b-2 p-2'>
      <td className='font-bold text-coolDarkGreen'>Item</td>
      <td className='font-bold text-coolDarkGreen'>Style</td>
      <td className='font-bold text-coolDarkGreen'>Color</td>
      <td className='font-bold text-coolDarkGreen'>Size</td>
      <td className='font-bold text-coolDarkGreen'>Quantity</td>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td className='w-[50px]' >Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain Included 2.6 pounds</td>
      <td>Gun-Shape</td>
      <td>Green</td>
      <td>XL</td>
      <td>1</td>
    </tr>
  </tbody>
</table> */}

            <SmallTable rows={4} />

            <div className="space-y-3">
              <div className="space-y-2 max-w-[59rem]">
                <h1 className=" text-coolDarkerGreen w-full/5 mb-1 text-md font-semibold">
                  Sender Name
                </h1>
                <input
                  name="title"
                  type="text"
                  required
                  className="mr-2 w-full/3 outline-coolBlack bg-transparent border-2 border-coolDarkGreen p-1 rounded-[4px]"
                />
              </div>

              <div className="space-y-2 max-w-[59rem]">
                <h1 className=" text-coolDarkerGreen w-full/5 mb-1 text-md font-semibold">
                  Sender Phone Number
                </h1>
                <input
                  name="title"
                  type="number"
                  required
                  className="mr-2 w-full/3 outline-coolBlack bg-transparent border-2 border-coolDarkGreen p-1 rounded-[4px]"
                />
              </div>

              <div className="space-y-2 max-w-[59rem]">
                <h1 className=" text-coolDarkerGreen w-full/5 mb-1 text-md font-semibold">
                  Sender Email
                </h1>
                <input
                  name="title"
                  type="email"
                  required
                  className="mr-2 w-full/3 outline-coolBlack bg-transparent border-2 border-coolDarkGreen p-1 rounded-[4px]"
                />
              </div>

              <div className=" max-w-[40rem]">
                <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                  Ship-from Address{" "}
                </h1>
                <textarea
                  name=""
                  id=""
                  cols="67"
                  rows="5"
                  className="w-full bg-transparent outline-coolBlack border-2 border-coolDarkGreen rounded-[4px]"
                ></textarea>
              </div>

              <div className=" max-w-[40rem]">
                <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                  Ship-back Address Include Name , Phone Number and Address{" "}
                </h1>
                <textarea
                  name=""
                  id=""
                  cols="67"
                  rows="5"
                  className="w-full bg-transparent outline-coolBlack border-2 border-coolDarkGreen rounded-[4px]"
                ></textarea>
              </div>

              <div className="space-y-2 max-w-[59rem]">
                <h1 className=" text-coolDarkerGreen w-full/5 mb-1 text-md font-semibold">
                  Shpping Carrier
                </h1>
                <input
                  name="title"
                  type="text"
                  required
                  className="mr-2 w-[40rem] outline-coolBlack bg-transparent border-2 border-coolDarkGreen p-1 rounded-[4px]"
                />
              </div>

              <div className="space-y-2  max-w-[40rem] ">
                <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
                  Shipping Date
                </h1>
                <div className="flex items-center space-x-5">
                  <div className="space-y-1">
                    <p className="text-coolBlack text-sm">Day</p>
                    <input
                      type="number"
                      className="outline-coolBlack bg-transparent border-2 border-coolDarkGreen w-[80px] p-1 rounded-[4px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-coolBlack text-sm">Month</p>
                    <input
                      type="number"
                      className="outline-coolBlack bg-transparent border-2 border-coolDarkGreen w-[80px] p-1 rounded-[4px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-coolBlack text-sm">Year</p>
                    <input
                      type="number"
                      className="outline-coolBlack bg-transparent border-2 border-coolDarkGreen w-[80px] p-1 rounded-[4px]"
                    />
                  </div>
                </div>

                <div className="space-y-2 max-w-[59rem]">
                  <h1 className=" text-coolDarkerGreen w-full/5 mb-1 text-md font-semibold">
                    Tracking Number
                  </h1>
                  <input
                    name="title"
                    type="text"
                    required
                    className="mr-2 w-[40rem] outline-coolBlack bg-transparent border-2 border-coolDarkGreen p-1 rounded-[4px]"
                  />
                </div>
              </div>

              <p className="text-sm mt-10 w-[40rem] pt-4">
                Note:if the product gains our approval,the listing would become
                active immediately , and the sample would become an invotory
                rather than shipping back to you.Only samples that failed to
                Lovie Aurora Listing Approval would be returned back to sellers
              </p>

              <div className="space-x-6 mt-5 pt-4">
                <Button
                  color="bg-coolDarkGreen"
                  text="Confirm Sample Shipping "
                />
                <Button color="bg-coolDarkGreen" text="Save " />
                <Button color="bg-coolDarkGreen" text="Cancel " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productSample;
