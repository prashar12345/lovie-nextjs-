import React, { useEffect, useState } from "react";
import Carousel from "../DataDisplay/Carousel";
// import { newArrivals } from "../../data";
import Heading from "../Typography/Heading";
import Link from "next/link";
import ApiClient from "../../methods/api/apiClient";

const HomeCatgProduct = (props) => {
  const [items, setdata] = useState()
 
  return (
    <section className="mt-[5rem]">
      {
        items && items ? <Link href="/editors-choice">
          <a>
            <Heading h2 text="new ARRival" margin="mb-4 ml-3" />
          </a>
        </Link> : <></>
      }


      {
        props.data ? <Carousel items={props.data} /> : <></>
      }
      : <></>


    </section>
  );
};

export default HomeCatgProduct;
