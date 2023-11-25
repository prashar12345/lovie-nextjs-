import React, { useContext, useState } from "react";
import SuperTitle from "../Typography/SuperTitle";
import Heading from "../Typography/Heading";
import { ChevronBack, Close } from "react-ionicons";
import Button from "../inputs/Button";
import { Chat, Lock, Messenger, Van } from "../icons/SocialIcons";
import { useRouter } from "next/router";
import StarReviews from "../DataDisplay/StarReviews";
import methodModel from "../../methods/methods";
import { MdDelete, MdModeEdit } from 'react-icons/md'
import ApiClient from "../../methods/api/apiClient";
import { toast } from "react-toastify";
import { UserContext } from '../../pages/_app'

const CartItems = ({ cartItems, setdeletecart, deletecartItms }) => {

  const { priceto } = useContext(UserContext);
  const [Ite, setcartItems] = priceto;
  const router = useRouter();
  const [quantity, setQuantity] = useState(null);
  const [editquantityShow, setshow] = useState()
  const [newquantityVal, setQuantityVal] = useState()
  // const { removeItemsFromCart, setCartItems, setTotal } = useContext(
  //   cartContextTwo
  // );
  const [totalPrice, setTotalPrice] = useState(0);


  console.log(cartItems, "hello");

  const removeCartItem = (id) => {


    ApiClient.delete('cart', { id: id }).then(res => {
      if (res.success) {
        toast.success(res.message)
        // location.reload();
        setdeletecart(!deletecartItms)
      }
    })
    // console.log("item", item);
    // dispatch({ type: "CART_REMOVE_ITEM", payload: item });
    // console.log(cartItems);
  };
  setcartItems(cartItems)
  const setCartItems = () => { };

  const shipPrice = 0;
  const itemamount = Number(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
 

  const total = itemamount;
  console.log(total, "hello");


  const proceedToCheckout = () => {
    setTotalPrice(total);
    router.push("/checkout");
  };


  const handlequantityEdit = (id) => {
    if(newquantityVal){
      ApiClient.put(`cart?id=${id}`, { quantity: newquantityVal }).then(res => {
        if (res.success) {
          toast.success(res.message)
          setdeletecart(!deletecartItms)
          setshow('')
        }
      })
    }
   
  }
  const editquantityInput = (id) => {
    console.log('woking heredadaddd')
    setshow(id)
  }
  return (
    <div className="mt-10 text-coolBlack">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-20 place-items-start">
        <div className="flex-1 w-full basis-3/5">
          {/* <div className="flex items-center justify-between">
                  <p className="mb-5 uppercase flex items-center hover:bg-gray-50 transition duration-150 rounded-md text-coolBlack">
                    Cart
                    <span className="font-normal ml-1">
                      {cartItems.length} Items
                    </span>{" "}
                  </p>
                </div> */}
          {cartItems && cartItems.map((item, index) => (
            <div key={index} className="col-span-2 p-4 shadow border rounded-4 mb-5">
              {/* FIRST COLUMN */}
              <div>


                <div className="flex items-start">
                  <button
                    onClick={() => removeItemsFromCart(item)}
                    className="hover:bg-gray-50  text-coolBlack transition duration-150 mr-2 rounded"
                  >
                    {/* <Close color="#363638" /> */}
                  </button>
                  <div className="relative  card-img">
                    {/* 
                    <img src={methodModel.noImg(cartItems.product && cartItems.product.styleImage, 'products')} objectFit="cover" layout="fill" alt=""  /> */}
                    <img src={methodModel.userImg(item.product && item.product.coverImage, 'products')} objectFit="cover" layout="fill" alt="" />
                  </div>
                  <div className="flex flex-col md:flex-row items-start justify-between w-full ml-4 lg:ml-10">
                    <div className="-mt-[3px]">
                      {/* <SuperTitle
                        size="text-md"
                        className="text-coolBlack "
                        text={item.store && item.store.name}
                      /> */}
                      <h3 className="break-all text-[20px] lg:text-[26px] tracking-[-0.05em] font-medium antialiased">
                        {item.product && item.product.title}
                      </h3>
                      <div className="break-all flex items-center gap-2 mt-0.5 mb-2">
                        <StarReviews />
                        <p className="break-all text-xs text-coolBlack">321 reviews</p>
                      </div>
                      <p className="break-all font-semibold text-xl text-md">{`$${item.product && item.product.price}`}</p>
                      <div className="flex items-center flex-wrap gap-2 mt-1.5">
                        <p className="font-normal text-sm text-coolBlack">
                          Style: {item.product && item.product.style}
                        </p>
                        <p className="capitalize text-sm text-coolBlack">
                          Color: {item.product && item.product.color}
                        </p>
                        <p className=" text-sm text-coolBlack">
                          Size: {item.product && item.product.size.toUpperCase()}
                        </p>
                        <p className=" text-sm text-coolBlack">
                          Quantity:{" "}
                          {quantity === null ? item.quantity : quantity}
                        </p>
                      </div>
                      {
                        editquantityShow === item._id ? <>
                          <div className="mt-4 flex flex-[0.55] items-center">
                            <input className="text-coolBlack w-full p-1.5 border rounded-[4px] border-coolBlack" type={'number'} placeholder='quantity' onChange={e => setQuantityVal(e.target.value)} defaultValue={item.quantity} />
                            <div className="flex ml-2">
                              <button className="bg-coolDarkGreen w-full text-md font-semibold  rounded-[7px]  py-2 w-fit px-3 ml-auto hover:bg-opacity-60 transition duration-150  text-md truncate null text-white null mr-2 " onClick={e => handlequantityEdit(item._id)}>Save</button>
                              <button className="bg-coolDarkGreen w-full text-md font-semibold  rounded-[7px]  py-2 w-fit px-3 ml-auto hover:bg-opacity-60 transition duration-150  text-md truncate null text-white null" onClick={e => editquantityInput('')}>Cancel</button>
                            </div>

                          </div>
                        </> : <></>
                      }
                    </div>




                    <div className="md:items-end flex md:flex-col flex-row-reverse items-center md:mt-0 mt-4">
                      <div class="dropdown cart-dropdown cursor-pointer">
                        {/* <span><i className="fa fa-ellipsis-v"></i></span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" /></svg>
                        <div class="dropdown-content">
                          <div className="flex mb-3 dropdown-list items-center">
                            <Chat size="35" /> <span className="ml-2">Chat</span>
                          </div>
                          <div className="flex mb-3 dropdown-list items-center icon-bg" onClick={e => removeCartItem(item._id)}>
                            <MdDelete className="cursor-pointer" size={40}  /> <span className="ml-2">Delete</span>
                          </div>
                          <div className="flex mb-3 dropdown-list items-center icon-bg" onClick={e => editquantityInput(item._id)}>
                            <MdModeEdit className="cursor-pointer" size={40} /> <span className="ml-2">Edit</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECOND COLUMN */}
        <div className="flex-1 basis-2/5 flex flex-col w-full lg:max-w-[25rem] border-t border-borderColor pt-4 md:pt-0 md:border-0">
          <div className="flex items-center justify-between">
            <Lock />
            <SuperTitle size="text-coolDarkGreen" text="Secure Payment" />
          </div>
          <div className="border-b border-coolBlack mt-10 pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <Heading h3 size="text-md" text="Item(s) total:" />
              <Heading h3 size="text-md" text={`${cartItems.reduce((total, item) => total + (item.product?.price * item.quantity), 0)}$`} />
              {/* <td>total price :{cartItems.reduce((total, item)=>total+(item.product?.price*item.quantity),0)}</td> */}
            </div>
            <div className="flex justify-between items-center">
              <Heading h3 size="text-md" text="Shipping:" />
              <Heading h3 size="text-md" text={`${shipPrice}$`} />
            </div>
          </div>
          <h3 className="text-3xl text-right">{`TOTAL: $${cartItems.reduce((total, item) => total + (item.product?.price * item.quantity), 0)}`}</h3>
          <Button
            onClick={proceedToCheckout}
            margin="mt-8"
            color="bg-coolDarkGreen w-full text-md font-semibold"
            text="Proceed to Checkout"
            padding=" py-2 w-fit px-3 ml-auto"
          />
          <div>{/* <VisaIcon /> */}</div>
          <button className="flex items-center bg-coolDarkGreen rounded-md px-4 hover:opacity-80 transition duration-300 text-white text-xs mt-4 self-end">
            <div className="hidden lg:block">
              <Van />
            </div>
            <div className="flex flex-col ml-0 lg:ml-4">
              <span className="text-lg font-semibold">Worldwide Returns</span>
              <span className="self-start hover:underline lg:self-center text-[0.8rem]">
                click here for more details
              </span>
            </div>
          </button>
          <button className="flex items-center bg-white border border-coolBlack rounded-md px-2 lg:px-4 py-1.5 lg:py-3 text-xs mt-4 self-end">
            <Messenger size="40" />
            <div className="flex flex-col ml-4 items-start text-coolBlack">
              <span>Need help?</span>
              <span className="hidden lg:block self-end text-[0.7rem] text-coolBlack underline">
                Live chat or message us!
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* EMPTY CART ITEMS OR CONTINUE SHOPPING */}
      <button
        onClick={() => router.push("/")}
        className="bg-coolDarkGreen py-2 px-4 rounded-md hover:opacity-60 text-white text-sm flex items-center"
      >
        <ChevronBack color="white" height="18px" width="18px" />
        <span className="ml-2">Continue Shopping</span>
      </button>
      {/* <button
        onClick={() => setCartItems([])}
        className="uppercase flex items-center hover:bg-gray-50 transition duration-150 rounded-md px-4 py-1 mt-6 -ml-5"
      >
        <Close color="#363638" />
      </button> */}
    </div >
  );
};

export default CartItems;
