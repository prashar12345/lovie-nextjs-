import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import { categories } from "../../data/categories";
import ApiClient from "../../methods/api/apiClient";
import { HeartOutline } from "react-ionicons";
import ItemDescription from "../../components/DataDisplay/ItemDescription";
import ApiKey from "../../methods/ApiKey";



const Blog = ({ categories }) => {
  const [total, settotal] = useState();
  const [loading, setloading] = useState(false);
  const [filters, setFilter] = useState({ page: 1, count: 10, search: "" });
  const [catefilters, setcateFilter] = useState({
    page: 1,
    count: 10,
    search: "",
  });
  const [categoriesList, setCategories] = useState();
  const [productListing, setproductListing] = useState();

  const [selectedcategory, setcategory] = useState();
 

  const getCategories = () => {
    ApiClient.get("list/category", { page: 1, cat_type: "product" }).then(
      (res) => {
        if (res.success) {
          setCategories(res.data);
        }
      }
    );
  };

  const pageChange = (e) => {
    setFilter({ ...filters, page: e });
    blogListing({ page: e });
  };
 
  const product_Lising = (p = {}) => {
    ApiClient.get("product/list", { ...p }).then((res) => {
      if (res.success) {
        setproductListing(res.data);
        settotal(res.total);
      }
    });
  };


  useEffect(() => {
    product_Lising({ page: 1 });
    // getCategories()
  }, []);
  return (
    <Layout categories={categories}>
      <div className="bg-gray-50 h-[35rem] mb-8 relative">
        <Image src="/blog.png" objectFit="cover" layout="fill" alt="" />
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[34rem] z-20 mr-8">
          <h1 className="text-9xl text-coolBlack font-cool uppercase font-medium">
            The <br />
            Listing
          </h1>
        </div>
        <div className="md:hidden block absolute top-1/2 transform -translate-y-1/2 text-center z-20 mr-8 left-1/2 -translate-x-1/2 w-[90%]">
          <h1 className="text-4xl font-cool uppercase font-medium">
            The Listing
          </h1>
          <p className="text-coolBlack text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="absolute -bottom-2 left-0 w-full h-[35rem] bg-gradient-to-t from-white"></div>
      </div>

      {/* BLOGS */}
      <div className="relative w-full lg:max-w-sm mt-24">
        <h2 className="text-[24px] lg:text-[30px] mb-4 tracking-[-0.02em] antialiased  text-coolBlack font-sans uppercase font-bold">
          Products
        </h2>
        <div className="flex  product-badge">
          <div className="badge-list active">All Products</div>
          <div className="badge-list">Old Products</div>
          <div className="badge-list">Trending Products</div>
        </div>
      </div>

      <div className="mb-24 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {productListing &&
            productListing.map((itm, idx) => {
              return (
                <a
                  href={`/categories/women/dress`}
                  key={idx}
                  className={`px-4 md:px-4 cursor-pointer relative group`}
                >
                  <div
                    className={`productlist_img aspect-[3/4] w-full bg-gray-50 relative flex-col`}
                  >
              
                    <img
                      src={`${ApiKey.api}/images/products/${
                        itm.image && itm.image[0]
                      }`}
                    ></img>
                    <div className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 z-10"></div>
                    <button className="opacity-0 absolute top-2 right-2 group-hover:opacity-100 transition duration-200 z-20">
                      <HeartOutline height="30px" width="30px" color="white" />
                    </button>
                  </div>
                  <ItemDescription
                    store_name={itm.category && itm.category.name}
                    name={itm.title || ""}
                    reviews={`${itm.totalReviews || 0} reviews`}
                    rating={itm.totalRating || 0}
                    price={`${itm.price | 0}$`}
                    auction={"auction"}
                  />
                </a>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
export async function getStaticProps() {
  return {
    props: { categories: categories },
  };
}
