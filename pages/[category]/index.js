import React, { useContext, useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { HeartOutline } from "react-ionicons";
import { AiFillHeart } from 'react-icons/ai'
import ItemDescription from "../../components/DataDisplay/ItemDescription";
import { useRouter } from "next/router";
import Button from "../../components/inputs/Button";
import ApiClient from "../../methods/api/apiClient";
import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import { toast } from "react-toastify";
import { UserContext } from '../_app'
import ApiKey from '../../methods/ApiKey'


const index = () => {
  const [iconCheck, setIconCheck] = useState(false);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const [userId, setuserId] = useState();
  const { productls, addwishlists } = useContext(UserContext);
  const [productList, setproductList] = productls
  const [addinWishlist, setaddwishlist] = addwishlists
  const [addremovefromWishlist, setwishlist] = useState(false)
  const [loader,setloader]=useState(false);
  useEffect(() => {
    if (localStorage.getItem("userdata")) {
      let user = JSON.parse(localStorage.getItem("userdata"));
      setuserId(user.id);
 
    }
    if (router.isReady) {
      // console.log(router.query.slug,'here is my slug')
      let requestParam = "";
      if (router.query.category) {
        requestParam = router.query.category;
      }
      setloader(true)
      ApiClient.get(
        `product/list?page=1&count=100&userId=${userId ? userId : ''}&categoryId=${requestParam}`
      ).then((res) => {
        if (res?.success) {
          setProducts(res?.data);
          setloader(false)
        }
      });
    }
  }, [router, addremovefromWishlist]);
  // useEffect(() => {
  //   setProducts(productList)
  // }, [productList])
  const addwishlist = (productid, userid) => {
    console.log("added to whish list");
    let param = {
      userId: userid,
      productId: productid,
    };
    ApiClient.post("favourite/product", param).then((res) => {
      if (res.success) {
        toast.success(res.message);
        // location.reload()
        setaddwishlist(!addinWishlist)
        setwishlist(!addremovefromWishlist)
      }
    });
  };

  return (
    <Layout categories={[]}>
      <Breadcrumbs page={"products-list"} />
      
      <div className="flex flex-col md:flex-row mt-10 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[7.1rem]">
  
          <Filters />

        </div>
        <div className="flex-1">
          <h1 className="text-4xl text-center font-bold capitalize text-coolBlack font-sans">
            {/* {router?.query?.category} */}
              {products&&products[0]?.category.name}
          </h1>
          <p className="text-coolBlack text-md max-w-[48rem] text-center mx-auto mt-6 mb-4">
     

          </p>
          {/* ITEMS */}
          <div className="md:hidden flex items-center justify-center my-8">
            <Button
              color="bg-coolBlack"
              text="Filter"
              padding="px-8 py-1"
              size="text-[15px]"
            />
          </div>
          <div className="text-center md:text-left text-sm text-[#363638] font-light capitalize font-sans">
            {products?.length} items
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-5">
          {
        loader?<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:<> {products?.map((item) => (
              <div
                // onClick={() => {
                //   localStorage.setItem("productId", item._id);
                // }}
                key={item._id}
              >
                <div className="relative aspect-[8/10] group cursor-pointer">
                  <div>{item.length}</div>
                  {item?.coverImage && (
                    <span className="blog-inner">
                      <img
                        src={`${ApiKey.api}/images/products/${item.coverImage}`}
                        alt="cover"
                        width="100%"
                      // layout="fill"
                      />
                    </span>
                  )}
                     <Link
                      // href={`/categories/[sub]/[slug]`}
                      href={`/categories/${item?.material
                        ?.toLowerCase()
                        .replaceAll(" ", "-")}/${item._id}`}
                    >
                    <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></a>
                  </Link>
              
                  <button className="md:opacity-0 right-2 md:group-hover:opacity-100 transition duration-200 z-20 absolute top-2">
              
                    {item.isFavourite ? (
                      <AiFillHeart height="30px" width="30px" color="white" size={35} onClick={(e) => addwishlist(item._id, userId)} />
                    ) : (
                      <HeartOutline height="30px" width="30px" color="white" onClick={(e) => addwishlist(item._id, userId)} />
                    )}
                  </button>
                </div>
                <ItemDescription
                  store_name={item?.store?.store_name || ""}
                  name={item.title || ""}
                  reviews={`${item.totalReviews || 0} reviews`}
                  price={`$${item?.price || 0}`}
                  slug={
                    `/categories/${item?.category?.name
                      ?.toLowerCase()
                      .replaceAll(" ", "-")}/${item?.title
                        ?.toLowerCase()
                        .replaceAll(" ", "-")}` || ""
                  }
                />

              </div>
            ))}</>
      }
           
          </div>
          <div className="mt-16">{/* <Pagination /> */}</div>
        </div>
      </div>
    </Layout>
  );
};

export default index;


