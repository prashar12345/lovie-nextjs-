import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Jewellery_featuredProducts from '../../data/categories'

const HomeDropdown = ({ showJewelry, setShowJewelry }) => {
    // => Home Dropdown sub-categories data 
    const subCategories = [
        { name: "Rings", image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/Rings.svg", nameHover: "Rings", hover_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/RingsHover.svg", slug: "/categories/rings" },
        { name: "Bracelets", image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/Bracelets.svg", nameHover: "Bracelets", hover_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/BraceletsHover.svg", slug: "/categories/bracelets" },
        { name: "Hair Jewelry", image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/HairJewelry.svg", nameHover: "Hair Jewelry", hover_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/HairJewelryHover.svg", slug: "/categories/hair-jewelry" },
        { name: "Earrings", image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/Earings.svg", nameHover: "Earrings", hover_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/EaringsHover.svg", slug: "/categories/earrings" },
        { name: "Necklaces", image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/Necklaces.svg", nameHover: "Necklaces", hover_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/NecklacesHover.svg", slug: "/categories/necklaces" },
        { name: "Others", image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/Others.svg", nameHover: "Others", hover_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/Othershover.svg", slug: "/categories/jewelry-other" },
    ]

    // => Jewellry Category Dropdown data => Featured Products
    const Jewellery_featuredProducts = [
        {
            title: "Bottle Opener",
            image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/BottleOpener.svg",
            _id: 8956771,
        },
        {
            title: "New This Week",
            image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/NewThisWeek.svg",
            _id: 8956772,
        },
        {
            title: "Arters",
            image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/Arters.svg",
            _id: 8956773,
        }
    ]

    // => Home Category Dropdown data => Cooper Products
    const jewellery_coopers = [
        {
            title: "Socks",
            image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/Socks.svg",
            _id: 8956774,
        },
        {
            title: "Throw Pillows",
            image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/ThrowPillows.svg",
            _id: 8956775,
        },
        {
            title: "Ceramic Pot",
            image_url: "/NavbarCategoriesAssets/JewelleryDropdownAssets/CeramicPot.svg",
            _id: 8956776,
        }
    ]

    return (
        <div className="block ">
            <div className="w-full bg-white  py-10 px-8 flex flex-col ">
                {/* => Mapping all the subcategories */}
                {/* <div className="flex justify-between items-center w-auto h-auto">
                    {subCategories.map((item, index) => (
                        <div className="subCategory transition-all cursor-pointer " key={index} onClick={() => setShowJewelry(false)}>
                            <Link href={item.slug}>
                                <div className={`hide flex flex-col items-center justify-center m-2`}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition">
                                        <Image src={`${item.image_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-black font-normal font-[17px] capitalize text-center mt-4 font-sans">{item.name}</p>
                                </div>
                            </Link>
                            <Link href={item.slug}>
                                <div className={`show hidden flex-col items-center justify-center m-2`}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition">
                                        <Image src={`${item.hover_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-coolDarkGreen font-normal font-[17px] capitalize text-center mt-4 font-sans">{item.nameHover}</p>
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
                                    <div className="flex flex-col justify-center items-start mr-6 cursor-pointer" onClick={() => setShowJewelry(false)}>
                                        <div className="flex items-center justify-center relative w-[160px] h-[200px] transition">
                                            <Image src={`${item.image_url}`} alt="Image" objectFit="contain" layout="fill" />
                                            <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>
                                        </div>
                                        <p className="text-black font-light text-lg text-left mt-[6px] font-sans capitalize">{item.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* => Right */}
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-black font-sans font-semibold text-[20px] text-left mb-6 ml-6 capitalize">
                            shops
                        </h3>
                        {/* => Mapping all Coopers */}
                        <div className="flex flex-row justify-start items-center">
                            {jewellery_coopers.map((item, index) => (
                                <Link href="/" key={index}>
                                    <div className="flex flex-col justify-center items-start ml-6  cursor-pointer" onClick={() => setShowJewelry(false)}>
                                        <div className="flex items-center justify-center relative w-[160px] h-[200px] transition">
                                            <Image src={`${item.image_url}`} alt="Image" objectFit="contain" layout="fill" />
                                            <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>
                                        </div>
                                        <p className="text-black font-light text-lg text-left mt-[6px] font-sans capitalize">{item.title}</p>
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