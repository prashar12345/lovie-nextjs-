import React, { useEffect, useState,useContext } from "react";
import Carousel from "../DataDisplay/Carousel";
import { newArrivals } from "../../data";
import Heading from "../Typography/Heading";
import Link from "next/link";
import ApiClient from "../../methods/api/apiClient";
import {UserContext} from '../../pages/_app'
const StaticProductListing = ({ title,id}) => {
  const [listdata, setlistdata] = useState();
  const [userID,setuser]=useState()

  const {homelistproduct } = useContext(UserContext);
  const [ isAddedWishlist,setAddwishlist] = homelistproduct
  useEffect(() => {
    let Id=''
    if(localStorage.getItem("userdata")){
      let user =JSON.parse( localStorage.getItem("userdata"));
      setuser(user.id);
      Id=user.id
      console.log('users are here',user)
    }
    if (id) {
      GetmoreCatgProduct(Id);
    }
  }, [isAddedWishlist]);

  const GetmoreCatgProduct = (userid) => {
    ApiClient.get("product/list", {
      page: 1,
      count: 100,
      categoryId:id,
      // userId:user.id
      userId:userid
    }).then((res) => {
      if (res.success) {
        setlistdata(res.data);
      }
    });
  };
  return (
    <section className="mt-[5rem]">
      <Link href="/editors-choice">
        <a>
          <Heading h2 text={title} margin="mb-4 ml-3" />
        </a>
      </Link>

      <Carousel items={listdata} userid={userID?.userID}/>
    </section>
  );
};

export default StaticProductListing;
