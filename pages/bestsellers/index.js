import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Heading from "../../components/Typography/Heading";
import Link from "next/link";
import Filters from "../../components/Filters/Filters";
import WishListButton from "../../components/utils/WishListButton";
import ItemDescription from "../../components/DataDisplay/ItemDescription";
import { categories } from "../../data/categories";

const index = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="flex flex-col md:flex-row mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[7.1rem]">
          {/* <h3 className="uppercase text-2xl font-semibold w-[12rem]">
            {query.category}
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1">
          <div className="flex flex-col text-center">
            <h1 className="text-4xl text-center font-bold uppercase text-coolBlack font-cool">
              our best sellers
            </h1>
          </div>

          {/* ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {categories.map((category, i) => (
              <Link
                href="/bestsellers/[category]"
                as={`/bestsellers/${category.slug}`}
                key={i}
              >
                <a>
                  <div key={i} className="mb-10">
                    <div className="relative aspect-[8/10] group cursor-pointer">
                      <Image
                        src={category.image}
                        alt=""
                        objectFit="cover"
                        layout="fill"
                      />

                      <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>

                      <WishListButton item={category} />
                    </div>
                    <ItemDescription
                      store_name="BODONI"
                      name={category.name}
                      reviews={`123 reviews`}
                      price={`$ 156`}
                      slug={category.slug}
                      remaining={4}
                    />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
export async function getStaticProps(ctx) {
  const data = await JSON.parse(JSON.stringify(categories));

  return {
    props: { categories: data },
  };
}
