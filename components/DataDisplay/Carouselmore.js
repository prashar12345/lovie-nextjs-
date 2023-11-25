import React,{useContext} from "react";
import Image from "next/image";
import { HeartOutline } from "react-ionicons";
import Slider from "react-slick";
import { Back, Forward } from "./CustomArrows";
import ItemDescription from "./ItemDescription";
import ApiKey from "../../methods/ApiKey";
import Link from "next/link";
import WishListButton from "../utils/WishListButton";
import { UserContext } from '../../pages/_app'
const Carouselmore = ({ items,userid}) => {
 
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {items&&items.map((item, index) => (
                  <Link
                  // href={`/categories/[sub]/[slug]`}
                  href={`/categories/${item?.material
                    ?.toLowerCase()
                    .replaceAll(" ", "-")}/${item._id}`}
                >
          <div
           onClick={() => {
            localStorage.setItem("productId", item._id);
          }}
            className={`px-4 md:px-4 cursor-pointer relative group`}
          >
            <div className={`aspect-[3/4] w-full bg-gray-50 relative flex-col`}>
              <span className="blog-inner">
                <img
                  src={`${ApiKey.api}/images/products/${item.coverImage}`}
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
                    {/* <Link
           key={item.id}
           href={`/categories/${item?.material
             ?.toLowerCase()
             .replaceAll(" ", "-")}/${item.title
               ?.toLowerCase()
               .replaceAll(" ", "-")}?id=${item?._id}`}
           as={`/categories/${item?.material
             ?.toLowerCase()
             .replaceAll(" ", "-")}/${item?.title
               ?.toLowerCase()
               .replaceAll(" ", "-")}`}
         >
               </Link> */}
                  
                      {/* <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></a> */}
                   
              </span>
              <div className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 z-10"></div>
              <WishListButton item={item._id} userId={userid} wishls={item.isFavourite}/>
            </div>
            <ItemDescription
              store_name={item.store?.name}
              name={item.title}
              // reviews={`${item.reviews?.length} reviews`}
              price={`$${item.price}`}
              // auction={auction}
            />
          </div>
      </Link >
        ))}
      </Slider>
    </>
  );
};

export default Carouselmore;
