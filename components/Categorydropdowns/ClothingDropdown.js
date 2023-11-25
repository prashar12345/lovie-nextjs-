import React from 'react'
import Image from "next/image";
import Link from "next/link";

// => Subcategory data 
// Subcategory data  => Left --- men
const subcategory_men = [
    { name: "Men", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Men.svg", nameHover: "Men", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Menhover.svg", slug: "/categories/men" },
    // { name: "Shoes for Women", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Shoeswomen.svg", nameHover: "Shoes for Women", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Shoeswomenhover.svg", slug: "/categories/shoes-for-women" },
    { name: "Masks", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Mask.svg", nameHover: "Masks", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Maskhover.svg", slug: "/categories/masks" },
    { name: "Children & Kids", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Kids.svg", nameHover: "Children & Kids", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Kidshover.svg", slug: "/categories/children-and-kids" },
    // { name: "Shoes for Children & Kids", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Childrenshoes.svg", nameHover: "Shoes for Children & Kids", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Childrenshoeshover.svg", slug: "/categories/shoes-children" },
    { name: "Hats", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Hat.svg", nameHover: "Hats", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/MenIcons/Hathover.svg", slug: "/categories/hats" },
    { name: "Shoes", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Shoesmen.svg", nameHover: "Shoes", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Shoesmenhover.svg", slug: "/categories/shoes" },
    { name: "Others", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Others.svg", nameHover: "Others", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Othershover.svg", slug: "/categories/clothing-accessories-others" },
]
// Subcategory data  => Left --- women
const subcategory_women = [
    { name: "Women", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Women.svg", nameHover: "Women", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Womenhover.svg", slug: "/categories/women" },
    { name: "Scarves", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Scarves.svg", nameHover: "Scarves", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Scarveshover.svg", slug: "/categories/scarves" },
    { name: "Socks", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Socks.svg", nameHover: "Socks", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Sockshover.svg", slug: "/categories/socks" },
    { name: "Bags", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Bags.svg", nameHover: "Bags", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Bagshover.svg", slug: "/categories/bags" },
    { name: "Gloves", image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Gloves.svg", nameHover: "Gloves", hover_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/WomenIcons/Gloveshover.svg", slug: "/categories/gloves" },


]

//Subcategory data => Featured products
const featured = [
    {
        title: "Bottle Opener",
        image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/FeaturedProducts/BottleOpener.svg",
        _id: 89567991,
    },
    {
        title: "New This Week",
        image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/FeaturedProducts/NewThisWeek.svg",
        _id: 89567992,
    },
]

//Subcategory data => Coopers
const coopers = [
    {
        title: "Ceramic Pots",
        image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/Coopers/CeramicPots.svg",
        _id: 89567993,
    },
    {
        title: "Organic Cotton",
        image_url: "/NavbarCategoriesAssets/ClothingDropdownAssets/Coopers/OrganicCotton.svg",
        _id: 89567994,
    },
]

const ClothingDropdown = ({ showClothing, setShowClothing }) => {
    return (
        <div className='flex justify-between items-start w-full py-10 px-8 bg-white '>
            {/* => Subcategories */}
            {/* <div className='flex  justify-start items-start mr-16 w-[40%]'> */}
                {/* Subcategories => Men */}
                {/* <div className='flex flex-col items-start justify-start'>
                    {subcategory_men.map((item, index) => (
                        <div className="subCategory transition-all cursor-pointer " key={index} onClick={() => setShowClothing(false)}>
                            <Link href={item.slug}>
                                <div className={`hide flex  items-center justify-start `}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition mr-6">
                                        <Image src={`${item.image_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-black font-normal text-[17px] capitalize text-left mt-4 font-sans">{item.name}</p>
                                </div>
                            </Link>
                            <Link href={item.slug}>
                                <div className={`show hidden items-center justify-start `}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition mr-6">
                                        <Image src={`${item.hover_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-coolDarkGreen font-normal text-[17px] capitalize  text-left mt-4 font-sans">{item.nameHover}</p>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div> */}
                {/* Subcategories => Women*/}
                {/* <div className='flex flex-col items-start justify-start ml-12'>
                    {subcategory_women.map((item, index) => (
                        <div className="subCategory transition-all cursor-pointer " key={index} onClick={() => setShowClothing(false)}>
                            <Link href={item.slug}>
                                <div className={`hide flex items-center justify-start`}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition mr-6">
                                        <Image src={`${item.image_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-black font-normal text-[17px] capitalize text-left mt-4 font-sans">{item.name}</p>
                                </div>
                            </Link>
                            <Link href={item.slug}>
                                <div className={`show hidden items-center justify-start`}>
                                    <div className="flex items-center justify-center relative w-[40px] h-[70px] transition mr-6">
                                        <Image src={`${item.hover_url}`} priority alt="Image" objectFit="contain" layout="fill" />
                                    </div>
                                    <p className="text-coolDarkGreen font-normal text-[17px] capitalize text-center mt-4 font-sans">{item.nameHover}</p>
                                </div>
                            </Link>

                        </div>
                    ))} */}
                    {/* Subcategories => Women */}
                    {/* <div></div>
                </div>
            </div> */}
            {/* => Products */}
            <div className='flex items-center justify-between w-[100%] '>
                {/* Products => Featured  */}
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-black font-sans font-semibold text-[20px] text-left mb-6 capitalize">
                        featured products
                    </h3>
                    {/* => Mapping all featured products */}
                    <div className="flex flex-row justify-start items-center">
                        {featured.map((item, index) => (
                            <Link href="/" key={index}>

                                <div className="flex flex-col justify-center items-start mr-10 cursor-pointer " onClick={() => setShowClothing(false)}>
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
                {/* Products => Coopers */}
                <div className="flex flex-col justify-center items-start ">
                    <h3 className="text-black font-sans font-semibold text-[20px] text-left mb-6 ml-9 capitalize">
                        shops
                    </h3>
                    {/* => Mapping all Coopers */}
                    <div className="flex flex-row justify-start items-center">
                        {coopers.map((item, index) => (
                            <Link href="/" key={index}>
                                <div className="flex flex-col justify-center items-start ml-10 cursor-pointer" onClick={() => setShowClothing(false)}>
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
    )
}

export default ClothingDropdown