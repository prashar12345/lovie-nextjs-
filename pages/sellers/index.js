import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import ApiClient from "../../methods/api/apiClient";
import ApiKey from "../../methods/ApiKey";
import StarReviews from "../../components/DataDisplay/StarReviews";
// import BigArrow from "../icons/BigArrow";

const Sellers = () => {
  // const [searchValue, setSearchValue] = useState("Search Stores");
  const [char, setChar] = useState();

  // const [fs, setFs] = useState(stores);

  useEffect(() => {
    ApiClient.get('stores?page=1&count=100&search=&sortBy=name descending').then(res=>{
      if(res.success){
        setChar(res?.data)
      }
    })
  },[])
  

  return (
    <Layout >
      {/* <div className="text-center mb-10 mt-12">
        <h1 className="text-2xl md:text-5xl uppercase text-coolBlack font-cool font-semibold">
          Our Creators
        </h1>
      </div> */}
      {/* SELLERS HERO IMAGE */}
      {/* <div className="relative w-full h-[30rem] object-top">
        <Image
          src="/sellers.png"
          objectFit="cover"
          layout="fill"
          alt=""
          className="object-top"
        />
        <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
          <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase text-white font-cool z-20 ">
            Editors Pick
          </h1>
          <button className="text-white border mt-4 transition duration-150 hover:bg-coolBlack hover:bg-opacity-40 border-white rounded-md px-4 py-1.5 text-lg">
            meet this weeks featured sellers
          </button>
        </div>
      </div> */}
      {/* <div className="flex items-center justify-center mt-14">
        <div className="border-[3px] py-[0.4rem] px-2 lg:w-[20rem] rounded-full border-coolBlack flex items-center justify-center focus:outline-none group w-full relative">
          <div className="mr-auto ml-2.5 absolute left-2 z-10 bg-white">
            <SearchIcon />
          </div>
          <input
            onFocus={() => setSearchValue("")}
            onBlur={() => setSearchValue("Search Stores")}
            className=" text-center py-[0.2rem] px-2 lg:w-[26rem] text-coolBlack border-coolBlack flex items-center justify-center focus:outline-none group w-full self-center transition duration-150 font-normal"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div> */}
      {/* Search */}
      {/* <CharSearch char={char} setChar={setChar} /> */}
      <div className="text-center mb-10 md:mb-20">
        <h1 className="text-2xl md:text-[85px] font-medium uppercase text-coolOrange font-cool z-20">
          {/* {char} */}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {char&&char.map((store) => (
            //   <Link
            //   key={store._id}
            //   href="/sellers/[slug]"
            //   as={`/sellers/${store._id}`}
            // >
            <div className="relative w-full aspect-[9/10] cursor-pointer group" onClick={
              localStorage.setItem("popularStore",store._id)
            }>
              <img
                 src={`${ApiKey.api}/images/stores/${store.coverImage}`}
                alt=""
                objectFit="cover"
                layout="fill"
              />
              <p>{store.name}</p>
              <StarReviews />
              <p>{store.country}</p>
              <div className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 z-10">
                <div className="bottom-6 right-6 absolute -translate-x-4 transition duration-300 group-hover:translate-x-0">
                  {/* <BigArrow /> */}
                </div>
              </div>
            </div>
            
      
        ))}
      </div>
    </Layout>
  );
};

export default Sellers;

// export async function getStaticProps() {
//   // const api = process.env.NEXT_PUBLIC_API;
//   // const categoryRes = await fetch(`${api}/categories`);
//   // const categoryData = await categoryRes.json();

//   // const res = await fetch(`${api}/stores`);
//   // const data = await res.json();

//   return {
//     props: { stores: storeData, categories: categories },
//     revalidate: 200,
//   };
// }
