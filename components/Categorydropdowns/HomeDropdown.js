import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import home_featuredProducts from '../../data/categories'

const HomeDropdown = ({ showHome, setShowHome }) => {
    // => Home Dropdown sub-categories data 
    const subCategories = [
        { name: "Bathroom", image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Bathroom.svg", nameHover: "Bathroom", hover_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Bathroomhover.svg", slug: "/categories/bathroom" },
        { name: "Kitchen", image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Kitchen.svg", nameHover: "Kitchen", hover_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Kitchenhover.svg", slug: "/categories/kitchen" },
        { name: "Living room", image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Livingroom.svg", nameHover: "Living room", hover_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Livingroomhover.svg", slug: "/categories/living-room" },
        { name: "Bedroom", image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Bedroom.svg", nameHover: "Bedroom", hover_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Bedroomhover.svg", slug: "/categories/bedroom" },
        { name: "Study room", image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Studyroom.svg", nameHover: "Study room", hover_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Studyroomhover.svg", slug: "/categories/study-room" },
        { name: "Laundary room", image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Laundary.svg", nameHover: "Laundary room", hover_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Laundaryhover.svg", slug: "/categories/laundry-room" },
        { name: "Others", image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Others.svg", nameHover: "Others", hover_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Othershover.svg", slug: "/categories/home-other" },
    ]

    // => Home Category Dropdown data => Featured Products
    const home_featuredProducts = [
        {
            title: "Bottle Opener",
            image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/BottleOpener.svg",
            _id: 8956781,
        },
        {
            title: "New This Week",
            image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/NewThisWeek.svg",
            _id: 8956782,
        },
        {
            title: "Arters",
            image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Arters.svg",
            _id: 8956783,
        }
    ]

    // => Home Category Dropdown data => Cooper Products
    const home_coopers = [
        {
            title: "Socks",
            image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/Socks.svg",
            _id: 8956784,
        },
        {
            title: "Throw Pillows",
            image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/ThrowPillows.svg",
            _id: 8956785,
        },
        {
            title: "Ceramic Pot",
            image_url: "/NavbarCategoriesAssets/HomeDropdownAssets/CeramicPot.svg",
            _id: 8956786,
        }
    ]

    return (
        <div className="flex justify-center items-center  w-full">
            <div className="w-full bg-white  py-10 px-8 flex flex-col ">
                {/* => Mapping all the subcategories */}
                {/* <div className="flex justify-between items-center w-auto h-auto">
                    {subCategories.map((item, index) => (
                        <div className="subCategory transition-all cursor-pointer " key={index} onClick={() => setShowHome(false)}>
                            <Link href={item.slug}>
                                <div className={`hide flex flex-col items-center justify-center m-2`}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition">
                                        <Image src={`${item.image_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-black font-normal text-[17px] text-center mt-4 font-sans capitalize">{item.name}</p>
                                </div>
                            </Link>
                            <Link href={item.slug}>
                                <div className={`show hidden flex-col items-center justify-center m-2`}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition">
                                        <Image src={`${item.hover_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-coolDarkGreen font-normal text-[17px] capitalize text-center mt-4 font-sans ">{item.nameHover}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div> */}
                {/* => Showing Featured products and Coopers */}
                {/* mt-12 class remove from  className="flex justify-between"*/}
                <div className="flex justify-between">
                    {/* => Left  */}
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-black font-sans font-semibold text-[20px] text-left mb-6 capitalize">
                            featured products
                        </h3>
                        {/* => Mapping all featured products */}
                        <div className="flex flex-row justify-start items-center">
                            {home_featuredProducts.map((item, index) => (
                                <Link href="/" key={index}>
                                    <div className="flex flex-col justify-center items-start mr-6 cursor-pointer" onClick={() => setShowHome(false)} >
                                        <div className="flex items-center justify-center relative w-[160px] h-[200px] transition">
                                            <Image src={`${item.image_url}`} alt="Image" objectFit="contain" layout="fill" />
                                            <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>
                                        </div>
                                        <p className="text-black font-light text-lg text-left mt-[6px] font-sans">{item.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* => Right */}
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-black font-sans font-semibold text-[20px] text-left mb-6 ml-5 capitalize">
                            Shops
                        </h3>
                        {/* => Mapping all Coopers */}
                        <div className="flex flex-row justify-start items-center">
                            {home_coopers.map((item, index) => (
                                <Link href="/" key={index}>
                                    <div className="flex flex-col justify-center items-start ml-6 cursor-pointer" onClick={() => setShowHome(false)} >
                                        <div className="flex items-center justify-center relative w-[160px] h-[200px] transition">
                                            <Image src={`${item.image_url}`} alt="Image" objectFit="contain" layout="fill" />
                                            <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>
                                        </div>
                                        <p className="text-black font-light text-lg text-left mt-[6px] font-sans">{item.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HomeDropdown