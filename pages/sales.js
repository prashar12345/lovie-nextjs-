import React, { useEffect } from "react";
import Image from "next/image";
import Filters from "../components/Filters/Filters";
import Layout from "../components/layout/Layout";
import ItemDescription from "../components/DataDisplay/ItemDescription";
import { newArrivals } from "../data";
import { data } from "../data/itemsData";
import { categories } from "../data/categories";
import WishListButton from "../components/utils/WishListButton";

const Sales = ({ categories }) => {

  return (
    <Layout categories={categories}>
      {/* <div className="w-full h-[450px] relative">
        <Image
          src="/sale-hero-image.png"
          objectFit="cover"
          alt=""
          layout="fill"
        />
      </div> */}
      <div className="flex flex-col md:flex-row mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[7.1rem]">
          {/* <h3 className="uppercase text-coolBlack text-2xl font-semibold w-[12rem]">
            Sale
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl text-center uppercase text-coolBlack font-sans font-bold">
            Sale
          </h1>
          <p className="text-coolBlack text-md max-w-[48rem] text-center mx-auto mt-6 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p>
          <div className="text-sm text-[#363638] font-light capitalize font-sans">
            {data.length} items
          </div>
          {/* ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-5">
            {data.map((item) => (
              <div key={item.id} className="mb-10">
                <div className="relative aspect-[8/10] group cursor-pointer">
                  <Image
                    src={item.supporting_images[0].url}
                    objectFit="cover"
                    alt=""
                    layout="fill"
                  />

                  <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>

                  <WishListButton item={item} />
                </div>
                <ItemDescription
                  store_name={item.store.store_name}
                  name={item.name}
                  reviews={`${item.reviews.length} reviews`}
                  price={`$${item.price}`}
                  slug={item.store.slug}
                  remaining={item.remaining}
                  sale
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sales;
export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;

  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  // const itemsRes = await fetch(`${api}/items`);
  // const itemsData = await itemsRes.json();

  return {
    props: { items: data, categories: categories },
  };
}