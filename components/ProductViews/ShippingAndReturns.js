/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "react-ionicons";
import { Chat } from "../../components/icons/SocialIcons";
import Paragraph from "../../components/Typography/Paragraph";
const ShippingAndReturns = ({ item }) => {
  console.log(item,"item");
  const [open, setOpen] = useState(false);
  const returnsRef = useRef();
  return (
    <div className="relative">
      {/* <div className="flex items-start gap-4 pb-10 "> */}
        <div className="flex-1">
          <h3 className="font-bold text-xl  text-coolOrange inline truncate">
            Shipping
          </h3>
          <div className="mt-5">
            <div className="shipping">
            <p className="text-coolBlack text-sm font-semibold mb-4">
            Preparing <br></br>
            <span className="font-normal">{item?.dayToPrepare} business days</span>
            </p>
            <p className="text-coolBlack text-sm font-semibold mb-4">
            Delivery <br></br>
            <span className="font-normal">{item?.delivery} days shipping</span> <br></br>
            {/* <span className="font-normal">estimated delivery: Nov 12-15</span> */}
            </p>

            <p className="text-coolBlack text-sm font-semibold mb-4">
            Returns <br></br>
            <span className="font-normal">{item?.returns} returns and exchanges </span> <br></br>
            <span className="font-normal text-xs cursor-pointer">read more</span>
            </p>

            </div>
            {/* <p className="font-semibold text-coolOrange mb-2">
              Free International Shipping
            </p> */}
            {/* <p className=" text-coolBlack mb-2 text-sm">
              {item?.dayToPrepare || ""}
            </p>
            <p className=" text-coolBlack text-sm">
              Estimated delivery 12th-17th Feb 2022
            </p> */}
          </div>

            <div className="mt-8">
            <p className="font-normal text-coolBlack text-sm mb-2">Shop</p>

            <div className="flex items-center">
            <p className="text-coolBlack text-sm font-semibold mr-4">
            Momo’s Talk</p>
            <div id="reviews" className="flex items-center mr-4">
              <Chat size="10" color />
              {/* <p className="md:block hidden text-sm font-normal ml-2 text-coolBlack">
                Contact Store
              </p> */}
            </div>
              <p className="product_badge w-10 text-white text-[14px  tracking-[-0.05em] font-[400]">follow</p>
            </div>

            <div className="flex mt-3">
            <Paragraph text="followers: 5674" className="text-[10px]" />
            <span className="text-xs font-light  text-coolBlack mx-2"></span>
            <Paragraph text={`store sales: 30`} />
              </div>
            </div>

        </div>
        {/* <div
          ref={returnsRef}
          className={`flex-1 ${
            open ? "h-[32rem] overflow-y-scroll" : "h-[12rem]"
          }   overflow-hidden relative shipping`}
        >
          <h3 className="font-semibold  text-coolBlack text-xl  text-coolBlack inline">
            Return & Exchange
          </h3>
          <div className="mt-10">
            <p className="font-semibold text-md text-coolOrange mb-2">
              Accept returns but no exchange
            </p>
            <p className="text-sm mt-2  text-coolBlack">
              Request order cancelation before order status becoming “shipped”.{" "}
              <br /> <br /> 7 days to request returns/exchanges/refund after
              delivery. <br /> <br /> 7 days to ship the item out from the
              shipping-back label issued.
            </p>
            <p className="font-semibold  text-coolBlack mb-2 mt-6">
              Shipping cost of your returns/exchanges will be paid by the
              customer.
            </p>
            <p className="text-sm  text-coolBlack">(Exception may apply)</p>
            <p className="font-semibold  text-coolBlack mb-2 mt-6">
              What items can not be returned/exchanged?
            </p>
            <p className="text-sm  text-coolBlack">
              Not in the new and unused conditions <br />
              Custom orders <br />
              Perishable products (like food) <br />
              Digital products <br />
              Items on sale <br />
              Intimate items (for health reason)
            </p>
            <p className="font-semibold  text-coolBlack mb-2 mt-6">
              How to ask for a return/exchange/refund?
            </p>
            <p className="text-sm  text-coolBlack">
              Please open a case in your account, then the customer
              representative would guide you through.
            </p>
            <p className="font-semibold  text-coolBlack mb-2 mt-6">
              Other details
            </p>
            <p className="text-sm  text-coolBlack">
              If the real products you received is a bit different from the one
              listed on Lovie Aurora. This is normal situation. We take great
              care when we display our products to show them in the best
              possible conditions, so they appear as close as can be to their
              real look. That being said, colours are displayed differently
              depending on computer screens. Therefore, it is possible that the
              real colour be a little different than what you see online.
            </p>
            <p className="mt-6 text-sm  text-coolBlack">
              If you are not be satisfied with your purchase, we will refund
              you. Our main objective is you satisfaction so we won't make
              difficulties. To get a refund, to exchange the product, the
              product purchased must be new and unused (in other words, we need
              to be able to sell it).
            </p>
            <p className="mt-6 text-sm  text-coolBlack">
              If you return an item, the shipping fees to send the item back to
              us is yours to pay. We'll gladly pay for shipping the
              repaired/replacement product back to you.
            </p>
            <p className="mt-6 text-sm  text-coolBlack">
              If you return an item that is lost during shipping, we can not be
              held responsible. Shipping must always include insurance and a
              tracking number.
            </p>
            <p className="mt-6 text-sm  text-coolBlack">
              If you receive an item that is damaged, please take a picture of
              it in its actual state so we can make a claim to the Post.
            </p>
            <p className="mt-6 text-sm  text-coolBlack">
              If you order a custom product, it is considered a final sail. No
              refund or exchange is possible.
            </p>
          </div>
          <div className="bg-gradient-to-t from-white w-full h-6 bottom-0 absolute"></div>
        </div> */}
        {/* {open ? (
          <button
            onClick={() => {
              setOpen(false);
              returnsRef.current.scrollTop = 0;
            }}
            className="absolute right-[9.2rem] -bottom-0"
          >
            <ChevronUp color="#363638" />
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="absolute right-[9.2rem] -bottom-0"
          >
            <ChevronDown color="#363638" />
          </button>
        )} */}
      {/* </div> */}
    </div>
  );
};

export default ShippingAndReturns;
