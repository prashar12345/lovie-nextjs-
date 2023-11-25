import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import Paragraph from "../../components/Typography/Paragraph";
import SuperTitle from "../../components/Typography/SuperTitle";
import StarReviews from "../../components/DataDisplay/StarReviews";
import Button from "../../components/inputs/Button";
import { Add } from "react-ionicons";
import { HeartOutline } from "react-ionicons";
import IconGroup from "../../components/icons/IconGroup";
import ItemDescription from "../../components/DataDisplay/ItemDescription";
import { wishlistContext } from "../../contexts/wishlistContext";
import SellerDataIcon from "../../components/SellerDataIcon/index";
import LoginPop from "../../components/popups/LoginPop";
import { loginModal } from "../../atoms/popup";
import { useRecoilState } from "recoil";
import Reviews from "../../components/ProductViews/Reviews";
import { categories } from "../../data/categories";
import { storeData } from "../../data/storedData";
import { useRouter } from "next/router";
import ApiClient from "../../methods/api/apiClient";
import ApiKey from "../../methods/ApiKey";
import methodModel from "../../methods/methods";

const Seller = () => {
  // const  router  = useRouter();
  // const {slug}=router.query;
  const router = useRouter()
  const { slug } = router.query
 
  const [storeDetails,setDetails]=useState()
  const [storepup, setStorepup] = useState()
  console.log(storeDetails,"storeDetails");

 const storepupDetails=(id) => {
    ApiClient.get('popular/products',{page:1,storeId:id,count:4,search:''}).then(res=>{
      if(res.success){
        setStorepup(res?.data)
      }
    })
  }

  const getstoreDetails=(id)=>{
      ApiClient.get('store',{id:id}).then(res=>{
        if(res.success){
          setDetails(res?.data)
        }
      })
  }
  useEffect(() => {
    console.log(slug,'slug check')
    if (router.isReady) {
      let query = "";
      if (router.query.slug) {
        query = router.query.slug;
      } 
      getstoreDetails(query);
      storepupDetails(query)
    }
  }, [router]);
  return (
    <Layout categories={categories}>
      <LoginPop />
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-stretch gap-10 justify-between mt-10 mb-20">
        <div className="min-h-[400px] md:min-h-[558px] flex-1 relative">
          <img src={methodModel.userImg(storeDetails?.coverImage,"stores")} objectFit="cover" layout="fill" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between">
            <SuperTitle
              size="text-sm text-white tracking-tight"
              text="Shop"
            />
            <div className="flex items-center">
              {/* <Paragraph text={`${storeDetails?.name} followers`} /> */}
              <Paragraph text="778 followers"/> 
              <button className="ml-2" >
                <Add height="33px" width="33px" />
              </button>
            </div>
          </div>
          <div className="mt-auto">
            <h1 className="font-cool text-4xl md:text-[60px] font-medium tracking-tighter uppercase mb-2 md:mb-8 text-coolBlack antialiased -ml-1">
              {storeDetails?.name}
            </h1>
            <Paragraph text={storeDetails?.country} size="text-sm md:text-[23px]" />
            <div className="mt-5 border-b border-coolBlack pb-5 mb-8">
              <div className="flex items-center">
                <StarReviews />

                <Paragraph
                  margin="ml-2"
                  // text={`${store?.number_of_reviews} reviews`}
                />
              </div>
              <div className="flex mt-5 space-x-4 items-center">
                <SellerDataIcon icon={{ type: "HS", score: 254 }} />
                <SellerDataIcon icon={{ type: "SS", score: 24 }} />
              </div>
            </div>

            <p className="text-coolBlack text-sm md:text-base">
              {storeDetails?.introduction}
            </p>
            <div className="mt-10 md:mt-20 flex items-center justify-between">
              <IconGroup />
              <a href={`mailto:${storeDetails?.email}`}>
              <Button text="Contact seller" color="bg-coolDarkGreen" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* STORE ITEMS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 md:gap-10 mt-2 md:mt-40">
        {/* {storeDetails&&storeDetails?.map((item, index) => ( */}
        {storepup?.map((item, index) => (
          <div key={item.id} className={`mb-10 md:mb-24 group cursor-pointer`}>
            <div className={`h-[348px] w-full bg-gray-50 relative`}>
              <img
                src={methodModel.userImg(item?.coverImage,"products")}           
                objectFit="cover"
                layout="fill"
              />
              {/* {men.includes(item.slug) && (
                <Link
                  href="/categories/[sub]/[slug]"
                  as={`/categories/men/${item.slug}`}
                  passHref
                >
                  <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200"></a>
                </Link>
              )} */}
            
              <button
                onClick={() => handleWishlistItems(item)}
                className="opacity-0 absolute top-2 right-2 group-hover:opacity-100 transition duration-200 z-20"
              >
                <HeartOutline height="30px" width="30px" color="white" />
              </button>
            </div>
            <ItemDescription
              store_name={item.store?.name}
              name={item.name}
              reviews={`342 reviews`}
              price={`$${item.price}`}
              slug={item.store.slug}
            />
          </div>
        ))}
      </div>
      {/* <Reviews reviews={[]} imageUrl={[]} productName={[]} /> */}
    </Layout>
  );
};

export default Seller;

