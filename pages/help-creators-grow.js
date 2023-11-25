import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";
import {
  Brand,
  Income,
  Platform,
  Products,
} from "../components/icons/SocialIcons";
import { categories } from "../data/categories";

const HelpCreatorsGrow = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="relative w-full h-[30rem] object-top">
        <Image
          src="/help-creators-grow.png"
          objectFit="cover"
          alt=""
          layout="fill"
          className="object-top"
        />
        <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
          <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-white font-semibold font-cool z-20 ">
            HELP CREATORS GROW
          </h1>
        </div>
      </div>
      <div className="mb-14 text-coolBlack mt-40">
        <div className="text-center">
          <h1 className="uppercase text-coolBlack md:tracking-[-2.4px] font-cool text-xl md:text-5xl font-semibold mb-3 md:mb-6 text-center">
            SUPPORT CREATORS TO GROW
          </h1>
          <p className="text-coolBlack text-md md:text-[16px]">
            Lovie Aurora: a hassle-free shopping platform for both customers and
            creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-36">
          <div className="place-self-center mb-20 flex flex-col items-center">
            <Income />
            <p className="text-coolBlack mt-6">Reliable income stream</p>
          </div>
          <div className="place-self-center mb-20 flex flex-col items-center">
            <Platform />
            <p className="text-coolBlack mt-6">All-in-one selling platform</p>
          </div>
          <div className="place-self-center mb-20 md:mb-0 flex flex-col items-center">
            <Brand />
            <p className="text-coolBlack mt-6">Increase brand awareness</p>
          </div>
          <div className="place-self-center flex flex-col items-center">
            <Products />
            <p className="text-coolBlack mt-6">Develop your products</p>
          </div>
        </div>
        {/* CONTACT FORM */}
        <div className="max-w-[40rem] mx-auto">
          <h3 className="font-cool uppercase text-center font-semibold text-4xl mt-14 mb-10">
            Get in touch
          </h3>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default HelpCreatorsGrow;
export async function getStaticProps(ctx) {
  return {
    props: { categories: categories },
  };
}
