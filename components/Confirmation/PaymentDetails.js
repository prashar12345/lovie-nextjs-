import React from "react";

const PaymentDetails = () => {
  return (
    <div className="max-w-[40rem] mt-10">
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-semibold ">
          Payment Details
        </h2>
      </div>
      <div className="flex items-start justify-between w-full mr-3 mt-4">
        <div>
          <p className="font-medium">Payment type: </p>
          <p className="font-medium">Card number:</p>
          <p className="font-medium">Amount:</p>
        </div>
        <div className="text-right">
          <p className="text-sm">VISA</p>
          <p className="text-sm">1234</p>
          <p className="text-sm">$60.00</p>
        </div>
      </div>
      <div className="flex items-start justify-between w-full mt-6">
        <div>
          <p className="font-medium">Billing Addres:</p>
        </div>
        <div className="text-right">
          <p className="text-sm">26, Jamway Road</p>
          <p className="text-sm">Twearlson</p>
          <p className="text-sm">Coventry, Warwickshire</p>
          <p className="text-sm">CV1 678</p>
          <p className="text-sm">Untied Kingdom</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
