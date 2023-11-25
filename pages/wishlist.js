import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Filters from "../components/Filters/Filters";
import Image from "next/image";
import SuperTitle from "../components/Typography/SuperTitle";
import Paragraph from "../components/Typography/Paragraph";
import StarReviews from "../components/DataDisplay/StarReviews";
import Heading from "../components/Typography/Heading";
import WishListButton from "../components/utils/WishListButton";
import { wishlistContext } from "../contexts/wishlistContext";
import Button from "../components/inputs/Button";
import { Store } from "../utils/Store";
import Link from "next/link";
import { categories } from "../data/categories";
import ApiClient from "../methods/api/apiClient";
import methodModel from "../methods/methods";
import { toast } from "react-toastify";

import { UserContext } from './_app'
const Wishlist = ({ categories }) => {
  // const { state, dispatch } = useContext(Store);
  // const { wishlist } = state;
  const { wishlists } = useContext(UserContext);
  const [wishlist, setwishlist] = useState()
  const [totalproduct, settotal] = useState()
  const [productListwishList, setproductListWishlist] = wishlists
  const [removedfromWishlist, setremoveWishlist] = useState(false)
  const [user, setuser] = useState()
  // console.log("object", wishlist);
  useEffect(() => {
    if (localStorage.getItem('userdata')) {
      let user = JSON.parse(localStorage.getItem('userdata'))
      setuser(user)
    }
    ApiClient.get('favourites', { page: 1, count: 100 }).then(res => {
      if (res.success) {
        setwishlist(res.data)
        settotal(res.total)
      }
    })
  }, [])
  useEffect(() => {

    ApiClient.get('favourites', { page: 1, count: 100 }).then(res => {
      if (res.success) {
        setwishlist(res.data)
        settotal(res.total)
      }
    })
  }, [removedfromWishlist])

  useEffect(() => {
    setwishlist(productListwishList)
  }, [productListwishList])
  const addItem = async (id) => {


    let param = {
      quantity: 1,
      user: user && user.id,
      product: id
    }
    ApiClient.post('add/cart', param).then(res => {
      if (res.success) {
        toast.success(res.message)
      }
    })
  }

  return (
    <Layout categories={categories}>
      <div className="flex mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[7.1rem]">
          {/* <h3 className="uppercase text-coolBlack text-2xl font-semibold w-[12rem]">
            WISHLIST
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-4xl uppercase font-bold text-coolBlack font-sans">
            Wishlist
          </h1>
          {/* <p className="text-coolBlack text-md max-w-[48rem] text-center mx-auto mt-6 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p> */}
          <div className="text-center md:text-left text-sm text-[#363638] font-light capitalize font-sans">
            {totalproduct} items
          </div>
          {/* ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
            {totalproduct != 0
              ? wishlist && wishlist?.map((item) => (
                <div key={item.id} className="">

                  <div className="relative aspect-[8/10] group cursor-pointer">
                    <span className="blog-inner">
                      <img
                        src={methodModel.userImg(item.productId && item.productId.coverImage, 'products')}
                        // src={item?.supporting_images[0].url}
                        objectFit="cover"
                        layout="fill"
                        alt=""
                      />
                    </span>
                    <Link
                      href={`/categories/${item?.product_material
                        ?.toLowerCase()
                        .replaceAll(" ", "-")}/${item.productId?.title
                          ?.toLowerCase()
                          .replaceAll(" ", "-")}?id=${item.productId?._id}`}
                      as={`/categories/${item?.product_material
                        ?.toLowerCase()
                        .replaceAll(" ", "-")}/${item.productId?.title
                          ?.toLowerCase()
                          .replaceAll(" ", "-")}`}
                    >
                      <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></a>
                    </Link>
                    <WishListButton item={item.productId?._id} userId={user.id} setremoveWishlist={setremoveWishlist} wishls={true} removedfromWishlist={removedfromWishlist} />
                  </div>
                  <div className="mt-2 text-left text-coolBlack">
                    <div className="flex items-center  justify-between gap-3 ">
                      {/* <SuperTitle text={item.store.store_name} /> */}
                    </div>

                    <Heading h3 text={item.productId && item.productId.title} size="text-lg" />
                    <div className="flex md:items-center flex-row sm:flex-col md:flex-row ">
                      <StarReviews />
                      <Paragraph
                        margin="ml-2 mt-0.5 sm:ml-0 md:ml-2"
                        text="387 reviews"
                        size="text-[0.7rem]"
                      />
                    </div>
                    <Heading
                      margin="mt-1 mb-4"
                      h3
                      text={`$${item.productId && item.productId.price}`}
                      size="text-base"
                    />
                    {/* <div className="flex flex-col sm:flex-row item-start sm:items-center justify-between gap-2">
                      <Button padding="py-2 px-3 text-sm" text="Buy It Now" />

                      <Button
                        padding="py-2 px-3 text-sm"
                        text="Add To Cart"
                        onClick={() => addItem(item.productId && item.productId._id)}
                      />

                      <Button
                        padding="py-2 px-3 text-sm"
                        text="Share"
                        color="bg-coolDarkerGreen"
                      />
                    </div> */}
                  </div>

                </div>
              ))
              : ""}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
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
