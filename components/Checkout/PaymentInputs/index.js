import React, { useContext } from "react";
import NameOnCardInput from "./NameOnCardInput";
import CardNumber from "./CardNumber";
import ExpiryDateInput from "./ExpiryDateInput";
import { Store } from "../../../utils/Store";
import { toast } from "react-toastify";

const PaymentInputs = () => {
  const { state, dispatch } = useContext(Store);
  const { cartItems } = state;

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch(`/api/stripe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(cartItems),
      },
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting.......");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div>
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium ">
          Payment Information
        </h2>
        <p className="text-xs text-coolDarkGreen">Required</p>
      </div>
      <div className="w-[25rem] flex items-start  mt-5">
        {/* <NameOnCardInput />
        <CardNumber />
        <ExpiryDateInput /> */}
        <select
          className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="stripe">Stripe</option>
          {/* <option value="paypal">PayPal</option> */}
        </select>
      </div>
    </div>
  );
};

export default PaymentInputs;
