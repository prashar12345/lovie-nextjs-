import React, { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { HeartOutline, ShareSocialOutline } from "react-ionicons";
import Image from "next/image";
import SuperTitle from "../../components/Typography/SuperTitle";
import Heading from "../../components/Typography/Heading";
import { AddToCart } from "../../components/icons/SocialIcons";
import Button from "../../components/inputs/Button";

const Wishlist = () => {
  const [wishListItems, setWishListItems] = useState([]);

  useEffect(() => {
    const items = window.localStorage.getItem("wishlist");
    if (items !== "") {
      const parsedItems = JSON.parse(items);
      setWishListItems(parsedItems);
    }
  }, []);

  return (
    <AppLayout>
      <div className="flex flex-col mt-6">
        <h1 className="text-4xl text-center font-semibold text-coolDarkerGreen">
          Your Wishlist
        </h1>
        {/* ITEMS */}
        <div className="rounded-lg shadow-xl bg-[#FDFDFD] py-10 px-24 mt-10 z-10">
          <div className="grid grid-cols-4 gap-6">
          
            {wishListItems?.length
              ? wishListItems.map((item) => (
                <div key={item.id} className="mb-10">
                  <div className="relative aspect-[8/10] group cursor-pointer">
                    <img
                      // src={item.supporting_images[0].url}
                      objectFit="cover"
                      layout="fill"
                      alt=""
                    />
                    <button className="opacity-0 absolute top-2 right-2 group-hover:opacity-100 transition duration-200 z-20">
                      <HeartOutline
                        height="30px"
                        width="30px"
                        color="white"
                      />
                    </button>
                  </div>
                  <div className="mt-2 text-left text-coolBlack">
                    <SuperTitle text={item.store.store_name} />
                    <Heading h3 text={item.name} size="text-lg" />
                    <Heading
                      margin="mt-1 mb-4"
                      h3
                      text={`$${item.price}`}
                      size="text-base"
                    />
                    <div className="flex flex-col sm:flex-row item-start sm:items-center justify-between mr-4">
                      <Button text="Buy It Now" />
                      <div className="flex items-center">
                        <button className="p-1.5 rounded hover:bg-gray-50">
                          <AddToCart />
                        </button>
                        <button className="p-1.5 rounded hover:bg-gray-50">
                          <HeartOutline />
                        </button>

                        <button className="p-1.5 rounded hover:bg-gray-50">
                          <ShareSocialOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              : ""}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Wishlist;
