import React from "react";
import { Delivery, Van } from "../components/icons/SocialIcons";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import Image from "next/image";
import { categories } from "../data/categories";

const ShippingAndDelivery = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="relative w-full h-[30rem] object-top">
        <Image
          src="/eco.jpg"
          objectFit="cover"
          layout="fill"
          alt=""
          className="object-top"
        />
        <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
          <h1 className="text-xl sm:text-4xl lg:text-5xl uppercase text-white font-semibold font-cool z-20 text-center">
            ECO-FRIENDLY SHIPPING & DELIVERY
          </h1>
        </div>
      </div>
      <div className="my-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool text-coolBlack text-coolBlack">
              1
            </h3>
            <div className="border-t-4 border-gray-300 mb-6 md:mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center  md:text-lg mt-2 text-coolBlack">
                We are trying the best to reduce the plastic usage in our
                warehouse, packaging, and shipping.
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool text-coolBlack">
              2
            </h3>
            <div className="border-t-4 border-gray-300 mb-6 md:mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center  md:text-lg mt-2 text-coolBlack">
                We optimize the return/exchange policies to double down the
                carbon footprint.
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool text-coolBlack">
              3
            </h3>
            <div className="border-t-4 border-gray-300 mb-6 md:mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center  md:text-lg mt-2 text-coolBlack">
                We are always investing in new technologies to reduce pollution.
              </h4>
            </div>
          </div>
        </div>
        {/* SHIPPING */}
        <div className="my-[10rem] flex flex-col text-coolBlack items-center max-w-[40rem] mx-auto">
          <Van type="svg" color="#363638" size />
          <h3 className="font-cool uppercase font-medium text-4xl mb-6 mt-14">
            Shipping
          </h3>
          <p className="font-semibold self-start">Can I cancel my order？</p>
          <p className="leading-relaxed self-start mb-8">
            Yes, you can only cancel your order before the period that the
            status of your order changes into “shipped”. Once you order is
            shipped, you can’t cancel your order or change your address.
          </p>
          <p className="font-semibold self-start">
            How can I get free international shipping?
          </p>
          <p className="leading-relaxed self-start mb-8">
            Our current shipping policy is that all products on Lovie Aurora are
            with free shipping.
          </p>
          <p className="font-semibold self-start">How to track my order?</p>
          <p className="leading-relaxed self-start mb-8">
            You can track your order on the order page in your account.
          </p>
          <p className="font-semibold self-start"> What if my package lost?</p>
          <p className="leading-relaxed self-start mb-8">
            Please contact us as soon as possible when you haven’t received your
            package from Lovie Aurora.
          </p>
          <p className="self-start font-semibold">
            What if my waiting time beyond estimation delivery timeline?{" "}
          </p>
          <p className="leading-relaxed self-start mb-8">
            Please be patient, but if your parcel’s delivery has been seriously
            delayed (over 50%) please contact us as soon as possible.
          </p>
          <p className="font-semibold self-start">
            Can you ship to P.O Boxes？
          </p>
          <p className="leading-relaxed self-start">
            Sorry, currently, we can not ship packages to P.O Boxes
          </p>
        </div>

        {/* DELIVERY */}
        <div className="my-[10rem] text-coolBlack flex flex-col items-center text-start max-w-[40rem] mx-auto">
          <Delivery />
          <h3 className="font-cool uppercase text-center font-medium text-4xl mb-6 mt-14">
            Delivery
          </h3>
          <p className="font-semibold self-start">
            What if my package shows delivered, but I didn’t receive the
            package.
          </p>
          <p className="leading-relaxed self-start mb-8">
            Ok, we advise you to contact you local post office by the tracking
            number. If the problem is still unsolved, please contact us.
          </p>
          <p className="font-semibold self-start">
            Can I change the address during shipping?
          </p>
          <p className="leading-relaxed self-start mb-8">
            Sorry, as most packages are shipping internationally, it would be
            very complicated to change the address during shipping.
          </p>
          <p className="font-semibold self-start">
            What if I found package is broken after delivery?
          </p>
          <p className="leading-relaxed self-start mb-8">
            Sorry to hear that, please make sure the product is safe and sound,
            if it gets damaged during shipping, please contact us as soon as
            possible.
          </p>
          <p className="font-semibold self-start">
            What if I got wrong color or size shipped to me.
          </p>
          <p className="leading-relaxed self-start">
            We would be very sorry for that, and please contact Lovie Aurora as
            soon as possible.
          </p>
        </div>

        {/* CONTACT FORM */}
        <div className="max-w-[40rem] mx-auto">
          <h3 className="font-cool text-coolBlack uppercase text-center font-semibold text-4xl mt-14 mb-10">
            Still need help?
          </h3>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default ShippingAndDelivery;
export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;

  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  // const itemsRes = await fetch(`${api}/items`);
  // const itemsData = await itemsRes.json();

  return {
    props: { categories: categories },
  };
}
