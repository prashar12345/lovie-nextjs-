import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Link from "next/link";


const SearchDropdown = ({ categories: items,
    open,
    setOpen,
    setSearch,
    setOpenMenu,
    search, }) => {


    const ref = useRef();
    const handleClick = useCallback(
        (e) => {
            if (ref.current.contains(e.target)) {
                // inside click
                return;
            }
            // outside click
            setOpen(false);
        },
        [setOpen]
    );

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("scroll", () => setOpen(false));
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [handleClick, setOpen]);

    const checkPaths = (slug) => {
        if (slug === "pre-order") {
            return "/pre-orders";
        }
        if (slug === "sale") {
            return "/sales";
        }
        if (slug === "auction") {
            return "/auctions";
        }
        return slug;
    };

    const [query, setQuery] = useState("");
    const [deleteHistory, setDeleteHistory] = useState(false)


    // History data
    const historyData = [
        {
            search: "Household Mini bag",
            _id: 456783967123
        },
        {
            search: "New Products are available",
            _id: 456783967124
        },
        {
            search: "Home Fragrance",
            _id: 456783967123
        },
        {
            search: "Children's clothing botique",
            _id: 456783967125
        },
        {
            search: "Home Fragrance",
            _id: 456783967126
        },
        {
            search: "Mens shows",
            _id: 456783967127
        },
        {
            search: "Hairbands",
            _id: 456783967128
        },
        {
            search: "Children clothing botique",
            _id: 456783967129
        },
    ]

    // Recommended searches
    const recommendedSearchs = [
        {
            title: "New Products are available",
            _id: 978657453234
        },
        {
            title: "Leather goods series",
            _id: 978657453235
        },
        {
            title: "Household",
            _id: 978657453236
        },
        {
            title: "Home Fragrance",
            _id: 978657453237
        },
        {
            title: "Childrens's clothing botique",
            _id: 978657453238
        },
        {
            title: "Home Fragrance",
            _id: 978657453239
        },
        {
            title: "Children's clothing botique",
            _id: 978657453241
        },
        {
            title: "New Products are available",
            _id: 978657453242
        },
        {
            title: "Home Fragrance",
            _id: 978657453243
        },
        {
            title: "Children's clothing botique",
            _id: 978657453244
        },
        {
            title: "Home Fragrance",
            _id: 978657453245
        },
    ]

    const recommendedMobileSearchs = [
        {
            title: "New Products are available",
            _id: 978657453234
        },
        {
            title: "Leather goods series",
            _id: 978657453235
        },
        {
            title: "Household",
            _id: 978657453236
        },
        {
            title: "Home Fragrance",
            _id: 978657453237
        },
        {
            title: "Childrens's clothing botique",
            _id: 978657453238
        },
        {
            title: "Home Fragrance",
            _id: 978657453239
        },
        {
            title: "Children's clothing botique",
            _id: 978657453241
        },
    ]

    // Featured collections data
    const featuredCollectionsData = [
        {
            title: "ladies backpack",
            image_url: "/NavbarCategoriesAssets/SearchDropdownAssets/FeaturedCollections/Ladiesbackpack.svg",
            id: 567432456784
        },
        {
            title: "exquisite jewelry",
            image_url: "/NavbarCategoriesAssets/SearchDropdownAssets/FeaturedCollections/Exquisitejewelry.svg",
            id: 567432456785
        },
        {
            title: "casual suits",
            image_url: "/NavbarCategoriesAssets/SearchDropdownAssets/FeaturedCollections/Casualsuits.svg",
            id: 567432456786
        }
    ]


    return (
        <div ref={ref} className='relative w-full bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 place-content-between place-items-start py-4 md:py-8 lg:py-10 border-t-2  lg:border-t-2 mt-2 lg:-mt-[65px]' >
            {/* => History */}
            <div className='hidden md:flex flex-col items-start justify-center w-full  max-w-[270px]'>
                {/* History => Heading */}
                <div className='flex items-center justify-between w-full mb-5'>
                    <p className='text-black font-sans font-semibold text-[20px] text-left capitalize'>history</p>
                    <div className="flex items-center justify-center relative w-[26px] h-[26px] transition">
                        <Image src={`/NavbarCategoriesAssets/SearchDropdownAssets/delete.svg`} priority alt="Icon" objectFit="contain" layout="fill" />
                    </div>
                </div>
                {/* History => History Items */}
                <div className='flex flex-col items-start justify-center'>
                    {historyData.slice(0, 8).map((item, index) => (
                        <div onClick={() => {
                            setSearch("");
                            setSearch(item.search);
                            setOpenMenu(false);
                        }} className='cursor-pointer mb-2' key={item._id}>
                            <p className='text-black font-normal text-[17px] text-left mt-[6px] font-sans hover:text-coolDarkGreen'>{item.search}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* =>Recommendations */}
            <div className='flex flex-col items-center md:items-start justify-center w-full  min-w-[270px]'>
                {/* Recommendations => Heading */}
                <div className='flex items-center justify-start w-full mb-2 md:mb-5'>
                    <p className='text-black font-sans font-semibold text-[20px] text-center md:text-left capitalize w-full '>recommendations</p>
                </div>
                {/* Recommendations => Recommendation Items*/}
                <div className='hidden md:flex flex-col items-start justify-center'>
                    {recommendedSearchs.map((item, index) => (
                        <div onClick={() => {
                            setSearch("");
                            setSearch(item.title);
                            setOpenMenu(false);
                        }} className='flex items-start justify-start mb-4 cursor-pointer'>
                            <div className="flex items-center justify-center relative w-[18px] h-[22px] transition-all mr-2 mt-[3px]">
                                <Image src={`/NavbarCategoriesAssets/SearchDropdownAssets/OutlinedSearch.svg`} priority alt="Icon" objectFit="contain" layout="fill" />
                            </div>
                            <div className='flex items-start justify-start cursor-pointer ' key={item._id}>
                                <p className='text-black font-normal text-[17px] text-left  font-sans hover:text-coolDarkGreen'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex md:hidden flex-col items-start justify-center'>
                    {recommendedMobileSearchs.slice(0, 5).map((item, index) => (
                        <div onClick={() => {
                            setSearch("");
                            setSearch(item.title);
                            setOpenMenu(false);
                        }} className='flex items-start justify-start mb-4 cursor-pointer'>
                            <div className="flex items-center justify-center relative w-[18px] h-[22px] transition-all mr-3 mt-[3px]">
                                <Image src={`/NavbarCategoriesAssets/SearchDropdownAssets/OutlinedSearch.svg`} priority alt="Icon" objectFit="contain" layout="fill" />
                            </div>
                            <div className='flex items-start justify-startcursor-pointer ' key={item._id}>
                                <p className='text-black font-normal text-[15px] text-left  font-sans hover:text-coolDarkGreen'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* =>Featured Collections */}
            <div className='hidden lg:flex flex-col items-end justify-center w-full'>
                <div className='w-fit'>
                    {/* Featured Collections => Heading */}
                    <div className='flex items-center justify-start w-full mb-5'>
                        <p className='text-black font-sans font-semibold text-[20px] text-left capitalize'>featured collections</p>
                    </div>
                    {/* Featured Collections => Mapping all collections */}
                    <div className='flex flex-col justify-start items-start'>
                        {featuredCollectionsData.map((item, index) => (
                            <Link href="/" key={index}>
                                <div className='flex items-center justify-start cursor-pointer mb-2'>
                                    <div className="flex items-center justify-center relative w-[80px] h-[100px] transition-all mr-3 mt-[3px]">
                                        <Image src={`${item.image_url}`} priority alt="Icon" objectFit="contain" layout="fill" />
                                        <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>
                                    </div>
                                    <p className='text-black font-normal text-lg text-left font-sans capitalize'>{item.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            {/* =>Featured Products */}
            <div className='hidden lg:flex flex-col items-end justify-center w-full'>
                <div className='w-fit'>
                    <div className='flex items-center justify-start w-full mb-5'>
                        <p className='text-black font-sans font-semibold text-[20px] text-left capitalize'>product</p>
                    </div>
                    {/* Featured Products => Product */}
                    <Link href="/" >
                        <div className="flex flex-col justify-center items-start cursor-pointer" >
                            <div className="flex items-center justify-center relative w-[200px] h-[250px]  transition">
                                <Image src={`/NavbarCategoriesAssets/SearchDropdownAssets/FeaturedProducts/NextThisWeek.svg`} alt="Image" objectFit="contain" layout="fill" />
                                <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>
                            </div>
                            <p className="text-black font-light text-lg text-left mt-[6px] font-sans capitalize">next this week</p>
                        </div>
                    </Link>
                </div>
            </div>
            {/* => Coopers */}
            <div className='hidden lg:flex flex-col items-end justify-center w-full'>
                <div className=' w-fit'>
                    <Link href="/sellers">
                        <div className='flex items-center justify-start w-full mb-5 cursor-pointer'>
                            <p className='text-coolDarkGreen font-sans font-semibold text-[20px] text-left capitalize'>all shops</p>
                        </div>
                    </Link>
                    {/* Coopers=> Product */}
                    <Link href="/" >
                        <div className="flex flex-col justify-center items-start  cursor-pointer" >
                            <div className="flex items-center justify-center relative w-[200px] h-[250px] transition">
                                <Image src={`/NavbarCategoriesAssets/SearchDropdownAssets/Coopers/CeramicPot.svg`} alt="Image" objectFit="contain" layout="fill" />
                                <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>
                            </div>
                            <p className="text-black font-light text-lg text-left mt-[6px] font-sans capitalize">ceramic pot</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SearchDropdown