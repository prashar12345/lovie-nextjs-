import React from "react";

const DeliveryDetails = () => {
  return (
    <div className="max-w-[40rem] mt-32">
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-semibold">
          Delivery Details
        </h2>
      </div>
      <div className="flex items-start justify-between w-full mr-3 mt-4">
        <div>
          <p className="font-semibold">Suzy Butler</p>
          <p>26 Jamway Road</p>
          <p>Twearlsdon</p>
          <p>Convetry, Warwickshire</p>
          <p>CV1 678</p>
          <p>United Kingdom</p>
          <p>
            Email: <span className="font-semibold">something@gmail.com</span>{" "}
          </p>
        </div>
        <div>
          <p className="font-semibold">Standard delivery</p>
          <p>$0.00</p>
          <p>
            <span className="font-semibold">Within 3-5 days,</span> excluding{" "}
            <br />
            weekends & bank holidays
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
