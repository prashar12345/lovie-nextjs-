import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import CartItems from "../components/Cart/CartItems";
import Button from "../components/inputs/Button";
import Layout from "../components/layout/Layout";
import BigCartIcon from "../components/icons/BigCartIcon";
import { categories } from "../data/categories";
import ApiClient from "../methods/api/apiClient";
import { UserContext } from '../pages/_app'
import Guestcart from "../components/Cart/Guestcart";

const cart = ({ categories }) => {
  const { carttotal,totalguestItems } = useContext(UserContext);
  const [Ites, setcartIte] = carttotal;
  const [totalguestCartitems,settotalcartItem]=totalguestItems;
  // const { cartItems } = useContext(cartContextTwo);
  const [deleteItmFromGuestList,setGuestDelete]=useState(false)
  const [cartList, setcartList] = useState()
  const [totaldata, settotaldata] = useState()
  const [deletecartItms, setdeletecart] = useState(false)
  const [guestcartList,setcartlist]=useState()
  const [user,setuser]=useState()
  //const user = useContext(cartList);
  setcartIte(totaldata)
  console.log(totaldata, "totaldata");
 
  useEffect(() => {
    let isuser=JSON.parse( localStorage.getItem('userdata'));
    setuser(isuser)
if(localStorage.getItem('guestcart')){
  let cartList = JSON.parse(localStorage.getItem('guestcart'));
  console.log(cartList,'here is your cart list ')
  setcartlist(cartList)
}
if(isuser){
  ApiClient.get('cart/listing', { page: 1 }).then(res => {
    if (res.success) {
      setcartList(res.data)
    }
  })
}
  
     
    
 
  }, [])
  useEffect(() => {
    if(localStorage.getItem('userdata')){
      let user=localStorage.getItem('userdata');
      setuser(user)
      ApiClient.get('cart/listing', { page: 1 }).then(res => {
        if (res.success) {
          setcartList(res.data)
          settotaldata(res.total)
  
        }
      })
    }
  }, [deletecartItms])
  // totalguestItems:[totalguestCartitems,settotalcartItem]
  //handling cart list for guest users
  useEffect(()=>{
    if(localStorage.getItem('guestcart')){
    let val =JSON.parse(localStorage.getItem('guestcart'));
    setcartlist(val)
    settotalcartItem(val)
    }
  },[deleteItmFromGuestList])
  // console.log(cartItems,"hello");
  const router = useRouter();
  return (
    <Layout categories={categories}>
     {
       user&&user?<>{cartList && cartList ? (
        <div className="my-14">
          <h1 className="text-coolBlack uppercase tracking-[-2.4px] font-sans text-5xl font-bold w-[12rem]">
            Cart
          </h1>
          <CartItems cartItems={cartList} deletecartItms={deletecartItms} setdeletecart={setdeletecart} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center my-24">
          <h1 className="text-5xl uppercase text-coolBlack font-sans font-semibold mb-12">
            Cart
          </h1>
          <BigCartIcon />
          <p className="text-coolBlack antialiased text-md md:text-lg font-light max-w-[38rem] mx-auto my-8">
            Your cart seems to be empty. Let’s change that.
          </p>
          <Button
            onClick={() => router.push("/")}
            text="Start Shopping"
            color="bg-coolDarkGreen max-w-[26rem]"
            padding="py-2.5 px-6"
          />
        </div>
      )}</>:<>{guestcartList && guestcartList&&!user? (
        <div className="my-14">
          <h1 className="text-coolBlack uppercase tracking-[-2.4px] font-sans text-5xl font-bold w-[12rem]">
            Cart
          </h1>
          {/* const [deleteItmFromGuestList,setGuestDelete]=useState(false) */}
          <Guestcart cartItems={guestcartList} deleteItmFromGuestList={deleteItmFromGuestList} setGuestDelete={setGuestDelete} />
        </div>
      ):<div className="flex flex-col items-center justify-center my-24">
      <h1 className="text-5xl uppercase text-coolBlack font-sans font-semibold mb-12">
        Cart
      </h1>
      <BigCartIcon />
      <p className="text-coolBlack antialiased text-md md:text-lg font-light max-w-[38rem] mx-auto my-8">
        Your cart seems to be empty. Let’s change that.
      </p>
      <Button
        onClick={() => router.push("/")}
        text="Start Shopping"
        color="bg-coolDarkGreen max-w-[26rem]"
        padding="py-2.5 px-6"
      />
    </div> }</>
     } 
    </Layout>
  );
};

export default cart;

export async function getStaticProps() {
  // const api = process.env.NEXT_PUBLIC_API;
  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  return {
    props: { categories: categories },
  };
}
