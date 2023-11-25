import Image from "next/image";
import React, { useState } from "react";
import StoreCard from "../../components/DataDisplay/StoreCard";
import AppLayout from "../../components/layout/AppLayout";

const followingStores = () => {
  const stores = [
    {
      store_name: `ARTER'S`,
      store_image: "/deals.jpg",
      slug: "arters",
      number_of_reviews: "356",
      store_description:
        "                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium accusantium quidem provident, ipsam laborum, officiis vel, tempora pariatur sit harum ullam nemo id voluptatem ipsa tempore minus accusamus inventore fugit.",
    },
    {
      store_name: "BODONI",
      store_image: "/hangers.jpg",
      slug: "bodoni",
      number_of_reviews: "656",
      store_description:
        "                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium accusantium quidem provident, ipsam laborum, officiis vel, tempora pariatur sit harum ullam nemo id voluptatem ipsa tempore minus accusamus inventore fugit.",
    },
    {
      store_name: `COOPER's`,
      store_image: "/people-1.jpg",
      slug: "coopers",
      number_of_reviews: "136",
      store_description:
        "                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium accusantium quidem provident, ipsam laborum, officiis vel, tempora pariatur sit harum ullam nemo id voluptatem ipsa tempore minus accusamus inventore fugit.",
    },
  ];
  return (
    <AppLayout>
      <h1 className="text-xl mt-6 md:text-4xl text-center font-semibold mb-2 mt-2 md:mb-4 lg:mb-6 text-coolDarkerGreen">
        Stores You Follow
      </h1>
      <div className="w-full flex justify-center">
        <div className="mt-10 md:py-10 max-w-[68rem] mx-auto">
          <StoreCard type="following" stores={stores} />
        </div>
      </div>
    </AppLayout>
  );
};

export default followingStores;
