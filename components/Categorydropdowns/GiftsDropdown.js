import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Jewellery_featuredProducts from '../../data/categories'

const GiftsDropdown = ({ showGifts, setShowGifts }) => {
    // => Home Dropdown sub-categories data 
    const subCategories = [
        { name: "Gifts for Peers", image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Giftpeers.svg", nameHover: "Gifts for Peers", hover_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Giftpeershover.svg", slug: "/categories/peers" },
        { name: "Gifts for Seniors", image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Giftseniors.svg", nameHover: "Gifts for Seniors", hover_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Giftseniorshover.svg", slug: "/categories/gifts-seniours" },
        { name: "Gifts for Kids & Children", image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Giftkids.svg", nameHover: "Gifts for Kids & Children", hover_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Giftkidshover.svg", slug: "/categories/gifts-children" },
        { name: "Custom Gifts", image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Customgifts.svg", nameHover: "Custom Gifts", hover_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Customgiftshover.svg", slug: "//categories/gifts-custom" },
        { name: "Wedding Gifts", image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Weddinggifts.svg", nameHover: "Wedding Gifts", hover_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Weddinggiftshover.svg", slug: "/categories/gifts-wedding" },
        { name: "Others", image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Others.svg", nameHover: "Others", hover_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Othershover.svg", slug: "/categories/gifts-others" },
    ]

    // => Jewellry Category Dropdown data => Featured Products
    const Jewellery_featuredProducts = [
        {
            title: "Bottle Opener",
            image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/BottleOpener.svg",
            _id: 8956790,
        },
        {
            title: "New This Week",
            image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/NewThisWeek.svg",
            _id: 8956791,
        },
        {
            title: "Arters",
            image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Arters.svg",
            _id: 8956792,
        }
    ]

    // => Home Category Dropdown data => Cooper Products
    const jewellery_coopers = [
        {
            title: "Socks",
            image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/Socks.svg",
            _id: 8956794,
        },
        {
            title: "Throw Pillows",
            image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/ThrowPillows.svg",
            _id: 8956795,
        },
        {
            title: "Ceramic Pot",
            image_url: "/NavbarCategoriesAssets/GiftsDropdownAssets/CeramicPot.svg",
            _id: 8956796,
        }
    ]

    return (
        <div className="block ">
            <div className="w-full bg-white  py-10 px-8 flex flex-col ">
                {/* => Mapping all the subcategories */}
                {/* commented categories */}
                {/* <div className="flex justify-between items-center w-auto h-auto">
                    {subCategories.map((item, index) => (
                        <div className="subCategory transition-all cursor-pointer " key={index} onClick={() => setShowGifts(false)}>
                            <Link href={item.slug}>
                                <div className={`hide flex flex-col items-center justify-center m-2`}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition">
                                        <Image src={`${item.image_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-black font-normal text-[17px] capitalize text-center mt-4 font-sans">{item.name}</p>
                                </div>
                            </Link>
                            <Link href={item.slug}>
                                <div className={`show hidden flex-col items-center justify-center m-2`}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition">
                                        <Image src={`${item.hover_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-coolDarkGreen font-normal text-[17px] capitalize text-center mt-4 font-sans">{item.nameHover}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div> */}

                {/* => Showing Featured products and Coopers */}
                <div className="flex justify-between">
                    {/* => Left  */}
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-black font-sans font-semibold text-[20px] text-left mb-6 capitalize">
                            featured products
                        </h3>
                        {/* => Mapping all featured products */}
                        <div className="flex flex-row justify-start items-center">
                            {Jewellery_featuredProducts.map((item, index) => (
                                <Link href="/" key={index}>
                                    <div className="flex flex-col justify-center items-start mr-6 cursor-pointer" onClick={() => setShowGifts(false)} >
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
                        <h3 className="text-black font-sans font-semibold text-[20px]  text-left mb-6 ml-5 capitalize">
                            Shops
                        </h3>
                        {/* => Mapping all Coopers */}
                        <div className="flex flex-row justify-start items-center">
                            {jewellery_coopers.map((item, index) => (
                                <Link href="/" key={index}>
                                    <div className="flex flex-col justify-center items-start ml-6 cursor-pointer" onClick={() => setShowGifts(false)}>
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

export default GiftsDropdown