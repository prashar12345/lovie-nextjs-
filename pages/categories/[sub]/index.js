import Link from "next/link";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { Breadcrumbs } from "@mui/material";
import { HeartOutline } from "react-ionicons";
import Filters from "../../../components/Filters/Filters";
import Layout from "../../../components/layout/Layout";
import ItemDescription from "../../../components/DataDisplay/ItemDescription";
import { wishlistContext } from "../../../contexts/wishlistContext";
import { Store } from "../../../utils/Store";
import { useEffect } from "react";
import { setToStorage } from "../../../functions/setToStorage";
import { categories } from "../../../data/categories";
import { data } from "../../../data/itemsData";
import { useRouter } from "next/router";
import { subs } from "../../../data/subs";
import NextBreadcrumbs from "../../../utils/test";
import WishListButton from "../../../components/utils/WishListButton";
import ApiClient from "../../../methods/api/apiClient";

const index = ({ data, items, categories }) => {
  const { state, dispatch } = useContext(Store);
  const { wishlist } = state;
  const router = useRouter();
  console.log({ router });
  console.log("index sub data", data);
  console.log("index sub items", items);

  // console.log("index sub categories", categories);
  // const {
  //   addItemsToWishList,
  //   wishListItems,
  //   removeItemsFromWishList,
  // } = useContext(wishlistContext);

  // const handleWishlistItems = (newItem) => {
  //   const check = wishListItems.some((item) => item.id === newItem.id);
  //   if (check) {
  //     removeItemsFromWishList(newItem);
  //   } else {
  //     addItemsToWishList(newItem);
  //   }
  // };


  const handleWishlistItems = (newItem) => {
    // const check = wishlist.some((item) => item.id === newItem.id);
    // if (check) {
    //   removeItemsFromWishList(newItem);
    // } else {
    //   addItemsToWishList(newItem);
    // }
    console.log("wishlist clicked");
    const existItem = wishlist.find((x) => x._id === newItem._id);
    if (existItem) {
      wishlist.filter((x) => x._id !== newItem._id);
    } else {
      //  setToStorage("wishlist", JSON.stringify(newItem));
      dispatch({ type: "ADD_TO_WISHLIST", payload: newItem });
    }
    // dispatch({ type: "ADD_TO_WISHLIST", payload: JSON.stringify(newItem) });
  };

  //  useEffect(() => {
  //    const filtered = wishlist.some((i) => i.id === item.id);
  //    if (filtered === true) {
  //      setIconCheck(true);
  //    } else {
  //      setIconCheck(false);
  //    }
  //  }, [wishlist]);

  return (
    <Layout categories={categories}>
      {/* <Breadcrumbs separator="|" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          <a>Home</a>
        </Link>
        <Link underline="hover" color="inherit" href="/categories">
          <a>{router.asPath.split("/")}</a>
        </Link>
        <Link underline="hover" color="inherit" href=>
          <a>{router.query.sub}</a>
        </Link>
      </Breadcrumbs> */}
      <NextBreadcrumbs />
      <div className="flex flex-col md:flex-row mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[7.1rem]">
          {/* <h3 className="uppercase text-2xl font-semibold w-[12rem]">
            {categoryName}
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl text-center font-bold uppercase text-coolBlack font-sans">
            {data.name}
          </h1>
          <p className="text-coolBlack text-md max-w-[48rem] text-center mx-auto mt-6 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p>
          <div className="text-sm text-[#363638] font-light capitalize font-sans">
            {items.length} items
          </div>
          {/* ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
            {items?.map((item) => (
              <div key={item.id}>
                <div className="relative aspect-[8/10] group cursor-pointer">
                  <div className="text-red-400">{item.length}</div>
                  <Image
                    src={item.supporting_images[0].url}
                    objectFit="cover"
                    layout="fill"
                  />
                  
                  <Link
                    href="/categories/[sub]/[slug]"
                    as={`/categories/${data?.slug}/${item?.slug}`}
                  >
                    <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></a>
                  </Link>
                  <WishListButton item={item} />
                </div>
                <ItemDescription
                  store_name={item.store.store_name}
                  name={item.name}
                  reviews={`${item.reviews?.length} reviews`}
                  price={`$${item.price}`}
                  slug={item.store.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;

export async function getStaticPaths() {
  // const api = process.env.NEXT_PUBLIC_API;
  // const res = await fetch(`${api}/subs`);
  // const data = await res.json();
  // console.log("subs", subs);
  const paths = subs.map((item) => {
    return {
      params: { sub: item.slug },
    };
  });
  console.log("index sub paths", paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;
  const { sub } = ctx.params;
  console.log({ sub });
  // console.log({ data });
  // const res = subs.filter((item) => item.slug == sub);
  const res = subs.filter((item) => item.slug == sub);
  const resData = data.filter((item) => item.sub.slug == sub);
  console.log({ res }, { resData });
  // const res = await fetch(`${api}/subs?slug=${sub}`);
  // const data = await res.json();
  // const categoryRes = await fetch(`${api}/categories`);
  // const categoryData = await categoryRes.json();
  // const itemsRes = await fetch(`${api}/items?sub.slug=${sub}`);
  // const itemsData = await itemsRes.json();
  return {
    props: {
      data: res[0],
      items: resData,
      categories: categories,
    },
  };
}
