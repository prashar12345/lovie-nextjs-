import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import StarReviews from "../components/DataDisplay/StarReviews";
import SuperTitle from "../components/Typography/SuperTitle";
import { Store } from "../utils/Store";
import ApiClient from "../methods/api/apiClient";
import { useRouter } from "next/router";
import { toastState } from "../atoms/toastify";
import { useRecoilState } from "recoil";
import { categories } from "../data/categories";
import { UserContext } from '../pages/_app'
//import { UserContext } from '../../pages/_app'
const Checkout = ({ categories}) => {

  console.log(categories,"categories");

  const router = useRouter()
  const { id } = router.query

  console.log(id,"id");


  const { priceto } = useContext(UserContext);
  // const [Ite, setcartItems] = priceto;

  const [cartLis, setcartLis] = useState()
  const [cartL, setcartL] = useState()
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
  if(localStorage.getItem('userdata')){
    if(id){
      ApiClient.get(`product?id=${id}`).then(res => {
        if (res.success) {
          setcartLis([{product:res.data,quantity:1}])
        }
      })
    } else{
      ApiClient.get('cart/listing', { page: 1 }).then(res => {
        if (res.success) {
          setcartLis(res.data)
        }
      })
    }
  }
  }, [])
 
  const {
    cart: { cartItems },
    wishlist,
  } = state;

const addprice = (cartLis?.reduce((total, item) => total + (item.product?.price * item.quantity), 0))

  const shipPrice = 5;
  let total =
    cartItems !== null &&
    cartItems.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2);
  

  const [openToast, setToast] = useRecoilState(toastState);
   

  // useEffect(() => {
  //   if (!userInfo) {
  //     router.push("/auth/signin?redirect=/shipping");
  //   }
  // });

  // useEffect(() => {}, [openToast]);

  return (
    <Layout categories={categories}>
      <div className="my-14">
        {/* <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/> */}
        <h1 className="uppercase tracking-[-2.4px] font-cool text-5xl font-medium w-[12rem] mb-8">
          Checkout
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 md:gap-40">
          {/* FIRST SECTION */}
          <div className="col-span-1">
            <div className="flex justify-between items-center">
              {/* <Heading h4 size="text-sm" text="Already have an account?" /> */}
              {/* <Button text="Sign in" color="bg-coolDarkGreen" /> */}
            </div>
            <CheckoutForm cartLis={cartLis} />
          </div>

          {/* SECOND SECTION */}
          <div className="col-span-1">
            <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
              <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium ">
                Order Summary
              </h2>
            </div>
            <div className="">
              {cartItems !== null &&
                cartItems.map((item) => {
                  console.log(cartItems,"cartItems");
                  return (
                    <div className="flex items-start gap-2 mt-3" key={item._id}>
                      <div className="relative h-[200px] min-w-[125px]">
                        <Image
                          src={item.supporting_images[0].url}
                          objectFit="cover"
                          layout="fill"
                          alt=""
                        />
                      </div>
                      <div className="-mt-[3px] ml-4">
                        <SuperTitle
                          size="text-md"
                          text={item.store.store_name}
                        />
                        <h3 className="text-[20px] lg:text-[20px] tracking-[-0.05em] font-medium antialiased">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5 mb-2">
                          <StarReviews />
                          <p className="text-xs text-textColor">321 reviews</p>
                        </div>
                        <p className="font-semibold text-xl text-md">{`$${item.price}`}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <p className="font-normal text-sm text-coolBlack">
                            Style: {item.options.style}
                          </p>
                          <p className="capitalize text-sm text-coolBlack">
                            Color: {item.options.colours}
                          </p>
                          <p className=" text-sm text-coolBlack">
                            Size: {item.options.sizes.toUpperCase()}
                          </p>
                          <p className=" text-sm text-coolBlack">
                            Quantity: {item.options.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-md text-coolBlack font-medium">
                Item(s) total:
              </p>
           
              <p className="text-md text-coolBlack">{`TOTAL: $${addprice}`}</p>
           
            </div>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-md text-coolBlack font-medium">Shipping:</p>
              <p className="text-md text-coolBlack font-medium">$0.00</p>
            </div>
            <div className="flex flex-col items-end border-t border-coolBlack mt-6 pt-4 ">
              <h4 className="text-2xl">{`TOTAL: $${addprice}`}</h4>
              <div className="flex flex-col items-end mt-3">
                <p className="text-sm text-coolDarkGreen underline mb-4">
                  Got a Promo Code?
                </p>
                <input
                  type="text"
                  className="rounded-md border border-coolBlack px-2 py-1.5 text-sm"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
export async function getStaticProps() {
  // const api = process.env.NEXT_PUBLIC_API;
  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  return {
    props: { categories: categories },
  };
}
