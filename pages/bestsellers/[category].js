import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { HeartOutline } from "react-ionicons";
import ItemDescription from "../../components/DataDisplay/ItemDescription";
import { wishlistContext } from "../../contexts/wishlistContext";
import { categories } from "../../data/categories";
import { data } from "../../data/itemsData";
import { useRouter } from "next/router";

const Category = ({ categories }) => {
  const { handleWishlistItems } = useContext(wishlistContext);

  const [fill, stFill] = useState([]);
  const { query } = useRouter();

  // const { handleWishlistItems } = useContext(wishlistContext);
  const handlefilter = () => {
    stFill(data.filter((item) => item.category.slug == query.category));
  };
  console.log("fill", fill, query.category);
  useEffect(() => {
    handlefilter();
  }, [query.category]);

  return (
    <Layout categories={categories}>
      <div className="flex flex-col md:flex-row mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[9.7rem]">
          {/* <h3 className="uppercase text-2xl font-semibold w-[12rem]">
            Bestsellers
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl text-center font-bold uppercase text-coolBlack font-cool">
            {query.category} <br /> Bestsellers
          </h1>

          {/* ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {data.map((item) => (
              <div key={item.id}>
                <div className="relative aspect-[8/10] group cursor-pointer">
                  <Image
                    src={item.supporting_images[0].url}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                  <Link
                    href="/categories/[sub]/[slug]"
                    as={`/categories/${data[0].slug}/${item.slug}`}
                  >
                    <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></a>
                  </Link>
                  <button
                    onClick={() => handleWishlistItems(item)}
                    className="opacity-0 absolute top-2 right-2 group-hover:opacity-100 transition duration-200 z-20"
                  >
                    <HeartOutline height="30px" width="30px" color="white" />
                  </button>
                </div>
                <ItemDescription
                  store_name={item.store.store_name}
                  name={item.name}
                  reviews={`(${item.reviews.length} reviews)`}
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

export default Category;

export async function getStaticPaths() {
  // const api = process.env.NEXT_PUBLIC_API;
  // const res = await fetch(`${api}/categories`);
  // const data = await res.json();

  const paths = categories.map((item) => {
    return {
      params: { category: item.slug },
    };
  });
  console.log("best [category]", paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;
  const { category } = ctx.params;
  console.log(" best staticProp category", category);
  // const res = await fetch(`${api}/categories?slug=${category}`);
  // const data = await res.json();
  const res = categories.filter((item) => item.slug === category);

  console.log("itemsData", res);
  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  // const dataRaw = await Items.find({});
  // const itemsRes = JSON.parse(JSON.stringify(dataRaw));
  const itemsData = data.filter((item) => item.category.slug === category);
  console.log("itemsData", itemsData);
  return {
    props: { data: res[0], items: itemsData, categories: categories },
  };
}
