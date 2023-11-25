import React from "react";
import Button from "../../../components/inputs/Button";
import VendorLayout from "../../../components/layout/VendorLayout";
import SmallTable from "../../../components/utils/SmallTable";

const Index = () => {
  const products = [
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
  ];
  const handleChange = (e) => {
    console.log(e);
  };
  const data = {
    name: "Aman pandey",
    date: "18",
    month: "07",
    year: "2005",
  };
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = new Date().getFullYear();
  return (
    <VendorLayout>
      <div className="flex flex-col mt-6">
        <h1 className="text-xl md:text-4xl text-center font-semibold text-coolDarkerGreen">
          Sample Evaluation
        </h1>
        <p className="text-sm md:text-md text-center my-4 text-coolBlack">
          Send a sample to Lovie Aurora Warehouse for an in-depth evaluation for
          the final decision of product approval.
        </p>
        <div className="rounded-[4px] justify-center items-center flex flex-col shadow-xl bg-white py-4 md:py-16 px-8">
          <div className="flex space-y-6 pb-6 border-b border-coolDarkerGreen flex-col w-full max-w-[50rem]">
            <div className="flex  flex-col ">
              <label
                className="text-coolDarkerGreen mb-1 font-semibold  "
                htmlFor="product"
              >
                Select Product
              </label>
              <div className="flex items-center border-coolDarkerGreen pr-2 border flex-1 outline-coolDarkerGreen rounded-md">
                <select
                  required
                  onChange={handleChange}
                  name="productName"
                  className=" px-4 rounded-md py-2 outline-none w-full"
                  id="birthday"
                >
                  {products.map((productName, index) => (
                    <option key={index} value={`${productName.productName}`}>
                      {productName.productName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid  md:space-x-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex  flex-col  my-3">
                <label
                  className="text-coolDarkerGreen mb-1 font-semibold  "
                  htmlFor="product"
                >
                  Style
                </label>
                <div className="flex items-center border-coolDarkerGreen pr-2 border flex-1 outline-coolDarkerGreen rounded-md">
                  <select
                    required
                    name="qty"
                    onChange={handleChange}
                    className="flex-1 outline-none rounded-md py-2 w-full"
                    id="birthday"
                  >
                    {["Gun-shaped", "Gun-shaped", "Gun-shaped"].map((qty) => (
                      <option key={qty} value={`${qty}`}>
                        {qty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex  flex-col  my-3">
                <label
                  className="text-coolDarkerGreen mb-1 font-semibold  "
                  htmlFor="product"
                >
                  Color
                </label>
                <div className="flex items-center border-coolDarkerGreen pr-2 border flex-1 outline-coolDarkerGreen rounded-md">
                  <select
                    required
                    name="qty"
                    onChange={handleChange}
                    className="flex-1 outline-none rounded-md py-2 w-full"
                    id="birthday"
                  >
                    {["red", "green", "blue"].map((qty) => (
                      <option key={qty} value={`${qty}`}>
                        {qty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex  flex-col  my-3">
                <label
                  className="text-coolDarkerGreen mb-1 font-semibold  "
                  htmlFor="product"
                >
                  Size
                </label>
                <div className="flex items-center border-coolDarkerGreen pr-2 border flex-1 outline-coolDarkerGreen rounded-md">
                  <select
                    required
                    name="qty"
                    onChange={handleChange}
                    className="flex-1 outline-none rounded-md py-2 w-full"
                    id="birthday"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((qty) => (
                      <option key={qty} value={`${qty}`}>
                        {qty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex  flex-col  my-3">
                <label
                  className="text-coolDarkerGreen mb-1 font-semibold  "
                  htmlFor="product"
                >
                  Quantity
                </label>
                <div className="flex items-center border-coolDarkerGreen pr-2 border flex-1 outline-coolDarkerGreen rounded-md">
                  <select
                    required
                    name="qty"
                    onChange={handleChange}
                    className="flex-1 outline-none rounded-md py-2 w-full"
                    id="birthday"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((qty) => (
                      <option key={qty} value={`${qty}`}>
                        {qty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <Button
              text="Add Product Sample"
              padding="py-2.5 px-4"
              color="bg-coolDarkerGreen w-fit"
            />
            <h1 className="text-coolDarkerGreen text-lg md:text-xl font-semibold">
              Sample List
            </h1>

            <SmallTable />
            <div className="space-y-1 max-w-[20rem]">
              <h2 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                Sender Name
              </h2>
              <input
                type="text"
                className="outline-coolDarkerGreen bg-transparent border border-coolDarkerGreen w-full p-1 rounded-[4px]"
              />
            </div>
            <div className="space-y-1 max-w-[20rem]">
              <h2 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                Sender Phone Number
              </h2>
              <input
                type="number"
                className="outline-coolDarkerGreen bg-transparent border border-coolDarkerGreen w-full p-1 rounded-[4px]"
              />
            </div>
            <div className="space-y-1 max-w-[25rem]">
              <h2 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                Sender Email
              </h2>
              <input
                type="email"
                className="outline-coolDarkerGreen bg-transparent border border-coolDarkerGreen w-full p-1 rounded-[4px]"
              />
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                Ship-from Address
              </h2>
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                className="bg-transparent w-full outline-coolDarkerGreen border border-coolDarkerGreen rounded-[4px]"
              ></textarea>
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                Ship-back Address(Include Name, Phone and Address)
              </h2>
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                className="bg-transparent w-full outline-coolDarkerGreen border border-coolDarkerGreen rounded-[4px]"
              ></textarea>
            </div>
            <div className="space-y-1">
              <h2 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                Shipping Carrier
              </h2>
              <input
                type="number"
                className="outline-coolDarkerGreen bg-transparent border border-coolDarkerGreen w-full p-1 rounded-[4px]"
              />
            </div>
            <div className="space-y-1">
              <h2 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                Tracking Number
              </h2>
              <input
                type="number"
                className="outline-coolDarkerGreen bg-transparent border border-coolDarkerGreen w-full p-1 rounded-[4px]"
              />
            </div>
            <div className="space-y-1">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="birthday"
                  className="mb-1 font-semibold text-coolDarkerGreen"
                >
                  Birthday Date
                </label>
                <div className="flex items-center flex-1 space-x-2 w-full">
                  <div className="flex text-coolBlack flex-1 border rounded-[4px] border-coolBlack overflow-hidden items-center w-full ">
                    <select
                      required
                      className="px-2 py-2 w-full"
                      name="London"
                      id="birthday"
                    >
                      {monthNames.map((monthName) => (
                        <option key={monthName} value="Los Angeles">
                          {monthName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex text-coolBlack border rounded-[4px] overflow-hidden  border-coolBlack  items-center w-full flex-1">
                    <input
                      type="number"
                      max={31}
                      min={1}
                      required
                      className="px-4 py-2 w-full"
                    />
                  </div>
                  <div className="flex text-coolBlack border rounded-[4px] overflow-hidden border-coolBlack  items-center w-full flex-1">
                    <input
                      type="number"
                      max={year}
                      min={1900}
                      required
                      className="px-4 py-2 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-coolBlack">
              Note: if the product gains our approval, the listing would become
              active immediately, and the sample would become an invotory rather
              than shipping back to you.Only samples that failed to Lovie Aurora
              Listing Approval would be returned back to sellers.
            </p>
            <div className="flex space-x-5  max-w-[40rem] ">
              <Button
                text="Submit Sample Shipping"
                padding="px-4 py-2.5"
                color="bg-coolDarkerGreen"
              />
              <Button
                text="Save"
                padding="px-4 py-2.5"
                color="bg-coolDarkerGreen"
              />
              <Button
                text="Cancel"
                padding="px-4 py-2.5"
                color="bg-coolDarkerGreen"
              />
            </div>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default Index;
