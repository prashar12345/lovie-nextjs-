import React from "react";

const WhatHappens = () => {
  return (
    <div className="max-w-[40rem] mt-14">
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-semibold ">
          What happens now?
        </h2>
      </div>
      <p className="text-sm mt-4">
        Once you’ve received your order confirmation email, we’ll send you
        another email when your order has left our warehouse. We’ll also let you
        know the name of the carrier who’ll be delivering your order.
      </p>
    </div>
  );
};

export default WhatHappens;
