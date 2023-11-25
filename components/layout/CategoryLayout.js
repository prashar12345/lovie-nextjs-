import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartOutline, Heart } from "react-ionicons";
import { wishlistContext } from "../../contexts/wishlistContext";
import ItemDescription from "../DataDisplay/ItemDescription";
import WishListButton from "../utils/WishListButton";
import ScorePopup from "../popups/scores";
import { scorePopup } from "../../atoms/popup";
import { useRecoilState } from "recoil";
import ApiKey from "../../methods/ApiKey";
// import {UserContext} from '../../pages/_app'
const Categories = ({ items ,userid}) => {
  // const { homelistproduct } = useContext(UserContext);
  // const [ isAddedWishlist,setAddwishlist] = homelistproduct
  // const { handleWishlistItems } = useContext(wishlistContext);
  const [heartHover, setHeartHover] = useState(false);
  const [scoreData, setScoreData] = useRecoilState(scorePopup);
  const handleOpenPopup = (type) => {
    setScoreData({ ...scoreData, type: type, open: true });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-8">
      <ScorePopup />
      {items&&items.map((item, index) => (
        <div
        // onClick={() => {
        //   localStorage.setItem("productId", item._id);
        // }}
          key={item.id}
          className={`${index === 0
            ? " hidden lg:block lg:row-span-2 lg:col-span-2 aspect"
            : "lg:col-span-1 sm:col-span-1 aspect-[8/10] mb-14"
            } group cursor-pointer `}
        >
          {/* h-[84.745%] */}
          <>
            <div
              style={{
                height: `100%`,
                width: `100%`,
                display:`inline-flex`
              }}
              className={`bg-gray-500 relative `}
            >
              <img
                src={`${ApiKey.api}/images/products/${item.coverImage}`}
                objectFit="cover"
                layout="fill"
                alt="" className="bigimg"
              />
             <Link
                      // href={`/categories/[sub]/[slug]`}
                      href={`/categories/${item?.material
                        ?.toLowerCase()
                        .replaceAll(" ", "-")}/${item._id}`}
                    >
                      <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></a>
                    </Link>
              <WishListButton item={item._id} userId={userid} wishls={item.isFavourite}/>
            </div>
            <ItemDescription
              store_name={item.store?.name}
              name={item.title}
              // reviews={`${item.reviews.length} reviews`}
              price={`$${item.price}`}
              // slug={item.store.slug}
              // remaining={item.remaining}
            />
          </>
          {/* <div className="mt-1">
            {index === 3 && (
              <div
                onClick={() => handleOpenPopup("handmade")}
                className="bg-coolOrange inline rounded-[2px] text-xs text-white px-1.5 py-[2px] lowercase"
              >
                handmade
              </div>
            )}
          </div>
          <div className="mt-1">
            {index === 0 && (
              <div
                onClick={() => handleOpenPopup("handmade")}
                className="bg-coolOrange inline rounded-[2px] text-xs text-white px-1.5 py-[2px] lowercase"
              >
                handmade
              </div>
            )}
          </div>
          <div className="mt-1">
            {index === 6 && (
              <div
                onClick={() => handleOpenPopup("handmade")}
                className="bg-coolOrange inline rounded-[2px] text-xs text-white px-1.5 py-[2px]  lowercase"
              >
                handmade
              </div>
            )}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Categories;
