import React from "react";

const Summary = () => {
  return (
    <>
      <div className="col-span-1 mt-[2.3rem]">
        <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
          <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-semibold ">
            Order Summary
          </h2>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-coolBlack">Plain T-shirt (CLOTH)</p>
          <p className="text-sm text-coolBlack">x1</p>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-md text-coolBlack font-medium">Item(s) total:</p>
          <p className="text-md text-coolBlack font-medium">$60.00</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-md text-coolBlack font-medium">Delivery total:</p>
          <p className="text-md text-coolBlack font-medium">$0.00</p>
        </div>
        <div className="flex flex-col items-end mt-6">
          <h4 className="text-2xl font-semibold">TOTAL: $60.00</h4>
        </div>
      </div>
    </>
  );
};

export default Summary;
