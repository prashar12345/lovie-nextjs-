import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import Layout from "../../components/layout/Layout";
import FeaturesSection from "../../components/sections/FeaturesSection";
import OperationMethods from "../../components/sections/OperationMethods";
import SellerCTASection from "../../components/sections/SellerCTASection";
import { categories } from "../../data/categories";

const JoinAsSeller = () => {
  return (
    <Layout categories={categories}>
      <HeroSection
        light
        imageUrl="/seller-hero.png"
        text={
          <p className="md:ml-20">
            READY TO EMBRACE <br /> THE WORLD?
          </p>
        }
        paragraph={
          <p className="md:ml-24">
            Sell directly to the whole world with Lovie Aurora
          </p>
        }
      />
      <div className="my-20 md:my-32 text-center max-w-[45rem] mx-auto">
        <h2 className="font-cool uppercase font-semibold text-2xl md:text-5xl text-coolBlack">
          WHAT IS Lovie Aurora?
        </h2>
        <p className="text-md  font-semibold mt-4 md:mt-8 text-coolBlack">
          Lovie Aurora is a multivendor eCommerce marketplace for creators from
          all over the world.
        </p>
        <p className="text-sm mt-6 leading-relaxed text-coolBlack">
          We aim to craft a hassle-free shopping platform for customers and
          creators. How can Lovie Aurora achieve this goal? Firstly, we have the
          strict screen system to evaluate creators and their products to make
          sure they meet our standards such as authenticity, creativity and
          safety of raw material.
        </p>
        <p className="text-sm mt-4 leading-relaxed text-coolBlack">
          Meanwhile, we design an all-in commission fee to charge creators
          rather than a complicated fee system. This would guarantee the
          creators are able to focus on their profession and production and not
          to be bothered by store operation, etc.
        </p>
      </div>
      <FeaturesSection />
      <OperationMethods />
      <SellerCTASection />
    </Layout>
  );
};

export default JoinAsSeller;
