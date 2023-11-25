import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../../data/categories";
import Layout from "../../components/layout/Layout";
import Heading from "../../components/Typography/Heading";
import ApiClient from "../../methods/api/apiClient";

const index = ({ categories }) => {
  // const api = process.env.NEXT_PUBLIC_API;
  const [categoriesList, setcategoryList] = useState()

  useEffect(() => {
    getcategoryList({ page: 1 })
  }, [])

  const getcategoryList = (p = {}) => {
    ApiClient.get('list/category', { ...p }).then(res => {
      if (res.success) {
        setcategoryList(res.data)
      }
    })
  }
  return (
    <Layout categories={categories}>
      <div className="text-center mb-24 pt-16">
        <Heading h1 text=" Categories" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
          {categoriesList && categoriesList.map((category) => (
            <div
              key={category.id}
              className="relative h-[467px] group cursor-pointer border-2 bg-black"
            >
              {/* <img src='pink-box.jpg' objectFit="cover" layout="fill" /> */}
              <div className="group-hover:bg-opacity-60 transition duration-150 absolute h-full w-full bg-coolBlack bg-opacity-0"></div>
              <h1 className="font-cool font-medium text-white	 text-3xl uppercase absolute right-4 bottom-4">
                {category.name}
              </h1>
              {/* <div className="flex flex-col justify-center ml-4 items-start h-full">
                {category.subs.map((sub) => (
                  <Link
                    key={sub.id}
                    href="/categories/[sub]"
                    as={`/categories/${sub.slug}`}
                  >
                    <a className="z-10 py-0.5 hover:text-coolOrange text-white">
                      {sub.name}
                    </a>
                  </Link>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;

export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;

  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));

  return {
    props: { categories: categories },
  };
}
