import React from "react";
import { popularStories } from "../../data";
import Image from "next/image";
import { ArrowForward } from "react-ionicons";
import BigArrow from "../icons/BigArrow";
import Heading from "../Typography/Heading";
import Link from "next/link";
import ApiKey from "../../methods/ApiKey";
import StarReviews from "../../components/DataDisplay/StarReviews";

const PopularStories = ({ stores,Storeloader }) => {
  console.log(stores,"stores");
  return (
    <section className="mt-[5rem] mb-[8rem]">


      




      {/* <Link href="/blog"> */}
        <a>
          <Heading h2 text="Popular Stores" margin="mb-4" />
        </a>


      {/* loader */}
{
  Storeloader? <div className='loaderdiv'>
  <div className='loaderdivcls'>
    <div className=' mt-2 d-flex shine shineCard'>
    </div>
  </div>


  <div className="loaderflex">

    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>
    <div className="sendloader shine">
    </div>

  </div>

  <div className="loaderflex">
    
    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>

  </div>
</div>:<></>
}
     
      {/* end loader */}
      {/* </Link> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {stores&&stores.map((store) => (
              <Link
              key={store._id}
              href="/sellers/[slug]"
              as={`/sellers/${store._id}`}
            >
            <div className="relative w-full aspect-[9/10] cursor-pointer group" 
            // onClick={localStorage.setItem("popularStore",store._id)}
              >
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
                  <BigArrow />
                </div>
              </div>
            </div>
            </Link>
      
        ))}
      </div>


    </section>

    
  );




};


export default PopularStories;
