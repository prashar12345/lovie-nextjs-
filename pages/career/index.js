import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import CareerItem from "../../components/CareerItem/CareerItem";
import { categories } from "../../data/categories";

const Career = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="mb-36">
        <div className="relative w-full h-[30rem] object-top mb-24">
          <Image
            src="/help-creators-grow.png"
            objectFit="cover"
            layout="fill"
            className="object-top"
          />
          <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-white font-semibold font-cool z-20 ">
              Careers
            </h1>
          </div>
        </div>

        <CareerItem
          category="Create Something New"
          jobs={["Eco-packaging perfectionist", "Creative product manager"]}
        />
        <CareerItem
          margin="mt-20"
          category="Technology"
          jobs={["Data expert", "Full stack developer"]}
        />
        <CareerItem
          margin="mt-20"
          category="Partnership"
          jobs={["Sales manager"]}
        />
        <CareerItem
          margin="mt-20"
          category="Marketing"
          jobs={["SEO specialist", "Social media manager"]}
        />
        <CareerItem margin="mt-20" category="Operation" jobs={["Copywriter"]} />
      </div>
    </Layout>
  );
};

export default Career;
export async function getStaticProps() {
  return {
    props: { categories: categories },
  };
}
