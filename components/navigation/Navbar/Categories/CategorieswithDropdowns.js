import React, { useEffect, useState } from "react";
import Link from "next/link";
import HomeDropdown from "../../../Categorydropdowns/HomeDropdown";
import ClothingDropdown from "../../../Categorydropdowns/ClothingDropdown";
import JewelryDropdown from "../../../Categorydropdowns/JewelryDropdown";
import GiftsDropdown from "../../../Categorydropdowns/GiftsDropdown";
import Home from "../../../../pages";
import ApiClient from "../../../../methods/api/apiClient";

const CategorieswithDropdowns = () => {
  const [homeDetail, setHomeDetail] = useState(false);
  const [clothingDetail, setClothingDetail] = useState(false);
  const [jewelryDetail, setJewelryDetail] = useState(false);
  const [giftDetail, setGiftDetail] = useState(false);
  const [categories, setCategories] = useState([]);
  console.log(categories,"categories");

  useEffect(() => {
    ApiClient.get("list/category?page=1&count=100&type=parent").then(
      (res) => {
        if (res?.data) {
          setCategories(res.data);
          console.log(res.data, 'working here')
        }
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-between mt-[34px] relative">
      {/* New */}
      <div
   
          className="pl-0 inline-block  navItem"
          onMouseOver={() => setHomeDetail(true)}
          onMouseLeave={() => setHomeDetail(false)}
      
        >
          <Link
            href={`/new?new`}
            as={`/new`}
          // passHref
          >
            <p
              style={{
                textTransform: "capitalize",
              }}
              className="navItemTitle transition  cursor-pointer text-[12px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal"
            >
             new
            </p>
          </Link>
        </div>
        <div
        
          className="pl-0 inline-block  navItem"
          onMouseOver={() => setHomeDetail(true)}
          onMouseLeave={() => setHomeDetail(false)}
         
        >
        <Link
            href={`/popular?[slug]`}
            as={`/popular?popular`}
          // passHref
          >
            <p
              style={{
                textTransform: "capitalize",
              }}
              className="navItemTitle transition  cursor-pointer text-[12px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal"
            >
               popular
            </p>
          </Link>
        </div>
      {categories?.map((category, index) => (
        <div
          key={index}
          className="pl-0 inline-block  navItem"
          onMouseOver={() => setHomeDetail(true)}
          onMouseLeave={() => setHomeDetail(false)}
          // onClick={() => localStorage.setItem("categoryId", category?._id)}
        >
          <Link
            href={category._id === '637230014016ed1c2581dff2' ? 'sellers' : `/${category?._id}`}
          //   as={`/${category?.name?.toLowerCase().replaceAll(" ", "-")}`}
          // // passHref
          >
            <p
              style={{
                textTransform: "capitalize",
              }}
              className="navItemTitle transition  cursor-pointer text-[12px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal"
            >
              {category?.name}
            </p>
          </Link>
        </div>
      ))}

      {/* Popular */}
      {/* <div
        className="inline-block  navItem"
        onMouseOver={() => setHomeDetail(true)}
        onMouseLeave={() => setHomeDetail(false)}
      >
        <Link href="/">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            Popular
          </p>
        </Link>
      </div> */}

      {/* Home */}
      {/* <div
        className=" inline-block  navItem"
        onMouseOver={() => setHomeDetail(true)}
        onMouseLeave={() => setHomeDetail(false)}
      >
        <Link href="/home">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            Home
          </p>
        </Link>
        {homeDetail && (
          <div className="absolute left-0 hidden w-full z-30  dropdown">
            <HomeDropdown showHome={HomeDropdown} setShowHome={setHomeDetail} />
          </div>
        )}
      </div> */}
      {/* Clothing */}
      {/* <div
        className=" inline-block  navItem"
        onMouseOver={() => setClothingDetail(true)}
        onMouseLeave={() => setClothingDetail(false)}
      >
        <Link href="/clothing-accessories">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            Clothing & Accessories
          </p>
        </Link>
        {clothingDetail && (
          <div className="absolute hidden w-full z-30  dropdown">
            <ClothingDropdown
              showClothing={clothingDetail}
              setShowClothing={setClothingDetail}
            />
          </div>
        )}
      </div> */}
      {/* Jewelry */}
      {/* <div
        className=" inline-block  navItem"
        onMouseOver={() => setJewelryDetail(true)}
        onMouseOut={() => setJewelryDetail(false)}
      >
        <Link href="/jewelry">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            Jewelry
          </p>
        </Link>
        {jewelryDetail && (
          <div className="absolute hidden w-full z-30  dropdown">
            <JewelryDropdown
              showJewelry={jewelryDetail}
              setShowJewelry={setJewelryDetail}
            />
          </div>
        )}
      </div> */}
      {/* Custom */}
      {/* <div className=" inline-block  navItem">
        <Link href="/custom">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            Custom
          </p>
        </Link>
      </div> */}
      {/* Handmade */}
      {/* <div
        className=" inline-block  navItem"
        onMouseOver={() => setHomeDetail(true)}
        onMouseLeave={() => setHomeDetail(false)}
      >
        <Link href="/">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            Handmade
          </p>
        </Link>
      </div> */}
      {/* Gifts */}
      {/* <div
        className=" inline-block  navItem"
        onMouseOver={() => setGiftDetail(true)}
        onMouseLeave={() => setGiftDetail(false)}
      >
        <Link href="/gifts">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            Gifts
          </p>
        </Link>
        {giftDetail && (
          <div className="absolute hidden w-full z-30  dropdown">
            <GiftsDropdown
              showGifts={giftDetail}
              setShowGifts={setGiftDetail}
            />
          </div>
        )}
      </div> */}
      {/* Holidays & Entertainment */}
      {/* <div
        className=" inline-block  navItem"
        onMouseOver={() => setHomeDetail(true)}
        onMouseLeave={() => setHomeDetail(false)}
      >
        <Link href="/">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            Holidays & Entertainment
          </p>
        </Link>
      </div> */}
      {/* All Stores */}
      {/* <div
        className=" inline-block  navItem"
        onMouseOver={() => setHomeDetail(true)}
        onMouseLeave={() => setHomeDetail(false)}
      >
        <Link href="/">
          <p className="navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal">
            All Stores
          </p>
        </Link>
      </div> */}
      {/* Electronics */}
      {/* <div className=' inline-block  navItem'>
                <Link href="/electronics">
                    <p className='navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal'>Electronics</p>
                </Link>
            </div> */}
      {/* Celebration */}
      {/* <div className=' inline-block  navItem'>
                <Link href="/celebration">
                    <p className='navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal'>Celebration</p>
                </Link>
            </div> */}
      {/* Arts */}
      {/* <div className=' inline-block  navItem'>
                <Link href="/art">
                    <p className='navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal'>Arts</p>
                </Link>
            </div> */}
      {/* Pets */}
      {/* <div className=' inline-block  navItem'>
                <Link href="/pets">
                    <p className='navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal'>Pets</p>
                </Link>
            </div> */}
      {/* Sale */}
      {/* <div className=' inline-block  navItem'>
                <Link href="/sale">
                    <p className='navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal'>Sale</p>
                </Link>
            </div> */}
      {/* More */}
      {/* <div className=' inline-block  navItem'>
                <Link href="/more">
                    <p className='navItemTitle transition  cursor-pointer text-[17px] hover:text-coolDarkGreen py-3 px-3  duration-150 font-normal'>More</p>
                </Link>
            </div> */}
    </div>
  );
};

export default CategorieswithDropdowns;
