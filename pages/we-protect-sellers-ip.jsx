import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";
import { categories } from "../data/categories";

const WeProtectSellersIP = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="relative w-full h-[30rem] object-top">
        <Image
          src="/help-creators-grow.png"
          objectFit="cover"
          layout="fill"
          alt=""
          className="object-top"
        />
        <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-white font-cool z-20 font-semibold">
            WE PROTECT SELLERS IP
          </h1>
        </div>
      </div>
      <div className="mb-14 text-coolBlack mt-32">
        <div className="max-w-[50rem] mx-auto">
          <h1 className="text-3xl text-center md:text-4xl lg:text-5xl uppercase font-cool z-20 font-semibold">
            IP PROTECTION METHODS
          </h1>
          <h1 className="text-[16px] text-center text-coolBlack my-4 lg:my-8">
            Lovie Aurora has zero tolerance to any IP infrigement
          </h1>

          <div className="flex-col sm:flex-row flex  my-4 py-2 lg:py-8 lg:my-12 justify-between ">
            <div className="flex my-8 sm:my-0 flex-col items-center flex-1">
              <div className="flex relative mb-4  items-center  justify-center w-[10rem] h-[10rem]">
                <Image alt="" layout="fill" src="/icons/zero-tolerance.png" />
              </div>
              <div className="h-[4px] rounded-full my-3 sm:my-8 w-full bg-gray-300 max-w-[70%]"></div>
              <p className="text-[14px] mt-2 text-center text-coolBlack max-w-[15rem]">
                Zero tolerance to all products listed on Lovie Aurora.
              </p>
            </div>
            <div className="flex my-8 sm:my-0 flex-col items-center flex-1">
              <div className="flex relative mb-4  items-center  justify-center w-[10rem] h-[10rem]">
                <Image layout="fill" src="/icons/secured-ip.png" alt="" />
              </div>
              <div className="h-[4px] rounded-full my-3 sm:my-8 w-full bg-gray-300 max-w-[70%]"></div>
              <p className="text-[14px] mt-2 text-center text-coolBlack max-w-[15rem]">
                IP from Lovie Aurora to other social medias or websites without
                written permission.
              </p>
            </div>
            <div className="flex my-8 sm:my-0 flex-col items-center flex-1">
              <div className="flex relative mb-4  items-center  justify-center w-[10rem] h-[10rem]">
                <Image layout="fill" src="/icons/law.png" alt="" />
              </div>
              <div className="h-[4px] rounded-full my-3 sm:my-8 w-full bg-gray-300 max-w-[70%]"></div>
              <p className="text-[14px] mt-2 text-center text-coolBlack max-w-[15rem]">
                Lovie Aurora would hire attorneys for any serious IP
                infringement cases.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="max-w-[40rem] mx-auto">
          <h3 className="font-cool font-semibold uppercase text-center text-4xl mt-14 mb-10 text-coolBlack">
            report an ip violation
          </h3>
          <ContactForm formFor="ipPage" source="ipPage" />
        </div>
      </div>
    </Layout>
  );
};
export default WeProtectSellersIP;
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
