import React, { useEffect, useState ,useContext} from "react";
import Carouselmore from "../DataDisplay/Carouselmore";
import { newArrivals } from "../../data";
import Heading from "../Typography/Heading";
import Link from "next/link";
import ApiClient from "../../methods/api/apiClient";
import {UserContext} from '../../pages/_app'
const MoreCateg = ({ title ,id}) => {
  const [more, setmore] = useState();
  const [userID,setuser]=useState()

  const {homelistproduct } = useContext(UserContext);
  const [ isAddedWishlist,setAddwishlist] = homelistproduct
  useEffect(() => {
    let Id=''
    if(localStorage.getItem("userdata")){
      let user =JSON.parse( localStorage.getItem("userdata"));
      setuser(user?.id);
      Id=user.id
      console.log('users are here',user)
    }
    if (id) {
      GetmoreCatgProduct(Id);
    }
  }, [isAddedWishlist]);
  const GetmoreCatgProduct = (Id) => {
    ApiClient.get("product/list", {
      page: 1,
      count: 10,
      categoryId: id?.id,
      userId:Id
    }).then((res) => {
      if (res.success) {
        setmore(res.data);
      }
    });
  };

  // const GetPopularStores=()=>{
  //     ApiClient.get('stores',{page:1,count:100,})
  // }
  return (
    <section className="mt-[5rem]">
      <Link href="/editors-choice">
        <a>
          <Heading h2 text={title} margin="mb-4 ml-3" />
        </a>
      </Link>

      <Carouselmore items={more} userid={userID} />
    </section>
  );
};

export default MoreCateg;
