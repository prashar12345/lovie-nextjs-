import React, { useEffect, useState } from "react";
import VendorLayout from "../../components/layout/VendorLayout";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import CheckButton from "../../components/CheckButton";
import { Chip } from "@material-ui/core";
import Button from "../../components/inputs/Button";
import SmallTable from "../../components/utils/SmallTable";
import { useRecoilState } from "recoil";
import { variation } from "../../atoms/popup";
import AddVariation from "../../components/popups/AddVariation";
import AdminPopup from "../../components/popups/AdminPopup";
import { BsPlus } from "react-icons/bs";

const AddProduct = () => {
  const [mainImage, setMainImage] = useState(null);

  const [productData, setProductData] = useState({
    mainImage: mainImage,
  });
  const [oneScoreSelected, setOneScoreSelected] = useState(null);

  const [adminState, setAdminState] = useRecoilState(variation);
  const addVariation = () => {
    console.log("addVariation");
    setAdminState({ ...adminState, type: "addVariation", open: true });
  };

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
    console.log(productData);
  };

  const handleReadImage = (file) => {
    if (file != undefined) {
      setProductData({ ...productData, [e.target.name]: file.name });
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(file);
        }
      };
      const readFile = reader.readAsDataURL(file);
      return readFile;
    }
  };

  const handleAddProduct = () => {
    // clever stuff
  };

  const currencies = ["US $", "RMB ¥", "EURO €", "GBP £"];

  useEffect(() => {
    console.log(oneScoreSelected);
  }, [oneScoreSelected]);
  return (
    <VendorLayout>
      <main className="mt-5 space-y-5">
        {adminState.open && <AdminPopup />}
        <div className="space-y-3">
          <h1 className="font-bold text-[#337357] text-2xl tracking-wide">
            Create Your Product
          </h1>
          <p className="text-sm text-coolBlack max-w-[59rem]">
            Lovie Aurora values listing and products quality over quantity, so
            we hand-pick all sellers&creators and products. This means before
            activating your product to list on Lovie Aurora, we need to evaluate
            the product and have scores as a common standard to pick products
            for our customers.
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2 max-w-[59rem]">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
              Product Title
            </h1>
            <input
              name="title"
              onChange={handleChange}
              type="text"
              required
              className="mr-2 w-full outline-coolBlack bg-transparent border border-coolBlack p-1 rounded-[4px]"
            />
          </div>
          <div className="max-w-[60rem]">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
              Product Images
            </h1>
            {/* <div className='flex flex-wrap items-center '>
                            {[0, 1, 2, 3, 4, 5].map(no => (
                                <label htmlFor='mainImage' style={{ marginTop: '10px' }}>
                                    <div className='w-[151px] h-[150px] mr-2 bg-[#E7E7E7] relative flex items-center rounded-md justify-center flex-col gap-1'>
                                        <MdOutlineAddAPhoto className='text-5xl text-coolBlack' />
                                        {no === 0 && <div className='absolute py-[0px] px-2 top-[68%] right-[35%] text-[12px] font-semibold text-coolDarkerGreen'>
                                            Main
                                        </div>}
                                        <input accept='image/*' onChange={(e) => handleReadImage(e.target.files[0])} name='mainImage' type='file' hidden id='mainImage' />
                                    </div>
                                </label>
                            ))}

                        </div> */}
            <div className="py-3 space-y-2 cursor-pointer">
              {/* img  */}

              <label htmlFor="mainImage" className="cursor-pointer">
                <div className="grid grid-cols-7 gap-2">
                  <div className="rounded-[5px] text-coolBlack flex text-lg md:text-xl items-center justify-center border-2 border-dashed border-gray-400 w-full h-[140px]">
                    <input
                      accept="image/*"
                      onChange={(e) => handleReadImage(e.target.files[0])}
                      name="mainImage"
                      type="file"
                      hidden
                      id="mainImage"
                    />
                    +
                  </div>
                </div>
              </label>
            </div>
          </div>
          {/* <div className=" max-w-[40rem]  space-y-2">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
              Price
            </h1>
            <p className="text-coolBlack text-xs">
              Note: you set a price for Lovie Aurora purchasing from you as a
              wholesaler, Lovie Aurora then has the right to decide sale price
              for customer.
            </p>
            <div className="max-w-[180px]  text-center border border-coolBlack flex rounded-md">
              <select
                required
                name="currency"
                onChange={handleChange}
                className="text-center outline-none mr-2 flex-[0.3] rounded-md py-1 border-coolBlack "
                id="birthday"
              >
                {currencies.map((currency, index) => (
                  <option
                    className="text-center"
                    key={index}
                    value={`${currency}`}
                  >
                    {currency}
                  </option>
                ))}
              </select>
              <input
                defaultValue={productData.price}
                onBlur={(e) =>
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value + ".00",
                  })
                }
                onChange={handleChange}
                name="price"
                placeholder="00.00"
                type="number"
                className="w-full outline-coolBlack bg-transparent flex-[0.7] border-l-2 text-center w-full border-coolBlack pl-2 p-1 "
              />
            </div>
          </div> */}
          <div className="space-y-2  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
              Category
            </h1>
            <div className="pr-2 border flex items-center justify-between rounded-md border-coolBlack w-[150px]">
              <select
                required
                name="currency"
                onChange={handleChange}
                className="text-center outline-none w-full rounded-md py-1 border-coolBlack "
                id="birthday"
              >
                {["Home", "Kitchen", "Bathroom", "Bedroom"].map(
                  (currency, index) => (
                    <option
                      className="text-center"
                      key={index}
                      value={`${currency}`}
                    >
                      {currency}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          <div className="flex flex-col  max-w-[40rem]  md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0">
            <div className="flex items-center max-w-[15rem] space-x-4">
              <div className="flex flex-col space-y-1">
                <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                  Weight
                </h1>
                <div className="flex items-center">
                  <input
                    type="number"
                    placeholder="Weight"
                    className="light-placeholder outline-coolBlack w-full bg-transparent border border-coolBlack  p-1 rounded-[4px]"
                  />
                  <p className="ml-1 text-lg font-semibold text-coolDarkerGreen">
                    g
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
                  Material
                </h1>
                <div className="flex items-center">
                  <input
                    type="number"
                    placeholder="Material"
                    className="light-placeholder outline-coolBlack w-full bg-transparent border border-coolBlack  p-1 rounded-[4px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-[18rem] ">
              <h1 className="font-semibold text-coolDarkerGreen w-full mb-2 text-md">
                Dimensions
              </h1>
              <div className="flex items-center">
                <div className="flex items-center md:space-x-2">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center">
                      <input
                        type="number"
                        placeholder="Length"
                        className="light-placeholder outline-coolBlack w-full bg-transparent border border-coolBlack  p-1 rounded-[4px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center">
                      <input
                        type="number"
                        placeholder="Width"
                        className="light-placeholder outline-coolBlack w-full bg-transparent border border-coolBlack  p-1 rounded-[4px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center">
                      <input
                        type="number"
                        placeholder="Height"
                        className="light-placeholder outline-coolBlack w-full bg-transparent border border-coolBlack  p-1 rounded-[4px]"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-lg font-semibold text-coolDarkerGreen ml-2">
                  {" "}
                  cm
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-1 max-w-[40rem] ">
            <h1 className="font-bold text-coolDarkerGreen text-lg">
              Variations & Price
            </h1>

            {/* <div className='flex  items-center space-x-5'>

                            <div>
                                <h2 className=' font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Color</h2>
                                <input type="text" className='outline-coolBlack w-full bg-transparent border border-coolBlack p-1 rounded-[4px]' />
                                <p className='text-sm text-coolDarkerGreen ml-1'>add</p>
                            </div>
                            <div>
                                <h2 className=' font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Style</h2>
                                <input type="text" className='outline-coolBlack w-full bg-transparent border border-coolBlack  p-1 rounded-[4px]' />
                                <p className='text-sm text-coolDarkerGreen ml-1'>add</p>
                            </div>
                            <div>
                                <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Size</h2>
                                <input type="number" className='outline-coolBlack w-full bg-transparent border border-coolBlack  p-1 rounded-[4px]' />
                                <p className='text-sm text-coolDarkerGreen ml-1'>add</p>
                            </div>

                        </div> */}
            <SmallTable rows={2} price="price" />
          </div>
          <Button
            text="Add a Variation"
            color="bg-coolDarkerGreen"
            padding="py-3 px-4"
            onClick={addVariation}
          />

          <div className="space-y-2  max-w-[60rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
              Description Bullets
            </h1>
            <input
              type="text"
              className="outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]"
            />
            <input
              type="text"
              className="outline-coolBlack bg-transparent border border-coolBlack  w-full p-1 rounded-[4px]"
            />
            <input
              type="text"
              className="outline-coolBlack bg-transparent border border-coolBlack  w-full p-1 rounded-[4px]"
            />
            <input
              type="text"
              className="outline-coolBlack bg-transparent border border-coolBlack  w-full p-1 rounded-[4px]"
            />
            <input
              type="text"
              className="outline-coolBlack bg-transparent border border-coolBlack  w-full p-1 rounded-[4px]"
            />
          </div>

          <div className=" max-w-[40rem]">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
              Description{" "}
            </h1>
            <textarea
              name=""
              id=""
              cols="67"
              rows="10"
              className="bg-transparent outline-coolBlack border w-full border-coolBlack rounded-[4px]"
            ></textarea>
          </div>

          <div className="flex items-center  max-w-[40rem] ">
            <CheckButton
              green={true}
              text="Whether add customization button to this product?"
            />
          </div>

          <div className=" max-w-[40rem]">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md">
              Customization Description{" "}
            </h1>
            <textarea
              name=""
              id=""
              cols="67"
              rows="5"
              className="w-full bg-transparent outline-coolBlack border border-coolBlack rounded-[4px]"
            ></textarea>
          </div>

          <div className="space-y-2   max-w-[40rem] ">
            <h1 className=" font-semibold text-coolDarkerGreen w-full mb-1 text-md">
              Edit Customization Content
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="Text Box" />
                </div>
                <div className="flex-1 flex-col invisible">
                  <input
                    type="text"
                    className="outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]"
                  />
                  <p className="text-coolDarkerGreen">add</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="Text Color" />
                </div>
                <div className="flex-1 flex-col">
                  <input
                    type="text"
                    className="outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]"
                  />
                  <p className="text-coolDarkerGreen">add</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="Font Style" />
                </div>
                <div className="flex-1 flex-col">
                  <input
                    type="text"
                    className="outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]"
                  />
                  <p className="text-coolDarkerGreen">add</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckButton green={true} text="Note Box" />
                </div>
                <div className="flex-1 flex-col invisible">
                  <input
                    type="text"
                    className="outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]"
                  />
                  <p className="text-coolDarkerGreen">add</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
              Return/Refund/Exchange Policy
            </h1>
            <select
              required
              name="productName"
              onChange={handleChange}
              className="border outline-coolBlack px-4 rounded-md py-2 border-coolBlack w-full"
              id="birthday"
            >
              {[
                "Accept Return and Exchange",
                "Accept return but no exchange",
                "Accept exchange but no return",
                "No return and exchange",
              ].map((productName, index) => (
                <option key={index} value={`${productName}`}>
                  {productName}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
              Shipping Terms
            </h1>
            <p className="text-coolBlack text-sm">
              How many business days to prepare?
            </p>
            <input
              type="number"
              className="outline-coolBlack bg-transparent border border-coolBlack w-[100px] p-1 rounded-[4px]"
            />
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <p className="font-semibold text-coolDarkerGreen mb-1 text-[18px]">
              Calculate Product Scores
            </p>
            <p className="text-coolBlack text-sm">
              Help Lovie Aurora to calculate your product score, it will be the
              only factor to decide whether Lovie Aurora lists this product.
            </p>
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
              Define your product
            </h1>
            <div className="flex sm:items-center space-y-2 whitespace-nowrap sm:space-y-0 sm:space-x-3 flex-col sm:flex-row">
              <div className="flex items-center space-x-3">
                <div
                  onClick={() => setOneScoreSelected("Handmade")}
                  className="flex-1 flex items-center"
                >
                  <CheckButton
                    green={true}
                    outline={oneScoreSelected === "Handmade" ? false : true}
                    text="Handmade"
                  />
                </div>
                <div
                  onClick={() => setOneScoreSelected("Original Design")}
                  className="flex-1 flex items-center"
                >
                  <CheckButton
                    green={true}
                    outline={
                      oneScoreSelected === "Original Design" ? false : true
                    }
                    text="Original Design"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  onClick={() => setOneScoreSelected("Premium Quality")}
                  className="flex-1 flex items-center"
                >
                  <CheckButton
                    green={true}
                    outline={
                      oneScoreSelected === "Premium Quality" ? false : true
                    }
                    text="Premium Quality"
                  />
                </div>
                <div
                  onClick={() => setOneScoreSelected("Custom")}
                  className="flex-1 flex items-center"
                >
                  <CheckButton
                    green={true}
                    outline={oneScoreSelected === "Custom" ? false : true}
                    text="Custom"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
              Product url, if applicable.( Etsy, Amazon, Taobao and etc)
            </h1>
            <input
              type="text"
              className="outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]"
            />
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
              Product manufacture
            </h1>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:items-center sm:space-x-3">
              <div className="flex-1 flex items-center">
                <CheckButton green={true} text="100% productce by machine" />
              </div>
              <div className="flex-1 flex items-center">
                <CheckButton
                  green={true}
                  text="productce by the combination of hands and machines"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
              Have advanced manufacturing technology
            </h1>
            <div className="flex items-center space-x-3">
              <CheckButton green={true} text="yes" />
              <CheckButton green={true} text="no" />
            </div>
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
              How long it will last for usage?
            </h1>
            <div className="flex items-center space-x-3">
              <CheckButton green={true} text="within 5 years" />
              <CheckButton green={true} text="more than 5 years" />
            </div>
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <h1 className="font-semibold text-coolDarkerGreen w-full mb-1 text-md ">
              Any potential issues to affect user exoerience?
            </h1>
            <div className="flex items-center space-x-3">
              <CheckButton green={true} text="yes" />
              <CheckButton green={true} text="no" />
            </div>
          </div>

          <div className="space-y-2  max-w-[40rem] ">
            <input
              type="text"
              className="outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]"
            />
            <p className="text-coolBlack text-xs">
              Disclose the flaw of your product, this could help us market your
              product in a proper way and minimise customer dissatisfaction
            </p>
          </div>

          {/* <button className='text-coolDarkerGreen font-bold bg-white text-lg  rounded-md'>Send a sample to Lovie Aurora Warehouse</button>

                    <div className='space-y-1  max-w-[40rem] '>
                        <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Sender Name</h2>
                        <input type="text" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />

                    </div>
                    <div className='space-y-1  max-w-[40rem] '>
                        <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Sender Email</h2>
                        <input type="email" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />

                    </div>
                    <div className='space-y-1  max-w-[40rem] '>
                        <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Sender Phone</h2>
                        <input type="number" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />

                    </div>

                    <div className='space-y-1  max-w-[40rem] '>
                        <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Ship-from Address</h2>
                        <textarea name="" id="" cols="40" rows="5" className='bg-transparent w-full outline-coolBlack border border-coolBlack rounded-[4px]'></textarea>

                    </div>

                    <div className='space-y-1  max-w-[40rem] '>
                        <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Ship-back Address(Include Name, Phone# and Address)</h2>
                        <textarea name="" id="" cols="40" rows="5" className='bg-transparent w-full outline-coolBlack border border-coolBlack rounded-[4px]'></textarea>

                    </div>

                    <div className='space-y-1  max-w-[40rem] '>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <h2 className=' font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Color</h2>
                                <input type="text" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />
                            </div>

                            <div>
                                <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Size</h2>
                                <input type="number" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />
                            </div>
                            <div>
                                <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Quantity</h2>
                                <input type="number" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />
                            </div>
                        </div>
                    </div>


                    <div className='space-y-1  max-w-[40rem] '>
                        <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Shipping Carrier</h2>
                        <input type="text" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />

                    </div>

                    <div className='space-y-1  max-w-[40rem] '>
                        <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Shipping Date</h2>
                        <input type="text" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />

                    </div>

                    <div className='space-y-1  max-w-[40rem] '>
                        <h2 className='font-semibold text-coolDarkerGreen w-full mb-1 text-md'>Tracking #</h2>
                        <input type="text" className='outline-coolBlack bg-transparent border border-coolBlack w-full p-1 rounded-[4px]' />

                    </div>

                    <div className=' max-w-[40rem]'>

                        <p className='text-sm text-coolBlack'>Note: if the product gains our approval, the listing would become active immediately, and the sample would become an invotory rather than shipping back to you.Only samples that failed to Lovie Aurora Listing Approval
                            would be returned back to sellers.</p>
                    </div> */}

          <div className="flex space-x-5  max-w-[40rem] ">
            <Button
              text="Submit Product"
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
      </main>
    </VendorLayout>
  );
};

export default AddProduct;
