import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import WhatHappens from "../../components/Confirmation/WhatHappens"
import Button from "../../components/inputs/Button"
import Layout from "../../components/layout/Layout"
import { Checkmark, ChevronBack } from "react-ionicons";
import { Store } from "../../utils/Store"
import { categories } from "../../data";
import ApiClient from '../../methods/api/apiClient'
import ApiKey from '../../methods/ApiKey'
import { reviewPopup } from "../../atoms/popup";
import StarReviews from "../../components/DataDisplay/StarReviews"
import { useRecoilState } from "recoil";
import ReviewPopup from "../../components/popups/ReviewPopup";

const Confirmation = ({ categories }) => {
    const { state, dispatch } = useContext(Store);
    const [order, setorder] = useState();
    const [showReviewPopup, setShowReviewPopup] = useRecoilState(reviewPopup);
    const [productid,setproductid]=useState()
    const router = useRouter()
    const { id } = router.query

    const {
        cart: { cartItems, shippingAddress },
    } = state;


    const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.456 => 123.46

    const itemsPrice = round2(
        cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
    );
    const shippingPrice = 0;

    const totalPrice = round2(itemsPrice + shippingPrice);

    useEffect(() => {
        ApiClient.get(`view/order?orderId=${id}`).then(res => {
            if (res.success) {
                setorder(res.data)
            }
        })
    }, []);

    const writeReview = () => {
        setShowReviewPopup(true);
      };

    const getPdf=()=>{
        ApiClient.getblob('invoicePdf',{orderId:id} ).then(resp => {

            // set the blog type to final pdf
            var blob=new File([resp],'myBill.pdf',{type: "text/pdf"});
            var link=document.createElement('a');
            link.href=window.URL.createObjectURL(blob);
            link.download="myBill.pdf";
            link.click();
        });
    }
    // function download(pdfUrl) {
    //     fetch(pdfUrl).then(resp => resp.arrayBuffer()).then(resp => {

    //         // set the blog type to final pdf
    //         const file = new Blob([resp], {type: 'application/pdf'});

    //         // process to auto download it
    //         const fileURL = URL.createObjectURL(file);
    //         const link = document.createElement('a');
    //         link.href = fileURL;
    //         link.download = "FileName" + new Date() + ".pdf";
    //         link.click();
    //     });
    // }
    const [selected, setSelected] = useState(true);
    return (
        <Layout categories={categories}>
         <ReviewPopup productid={productid}/>
            <div className=" text-coolBlack flex flex-col items-center my-14">

                <Button color="bg-coolDarkGreen" text="Print Order" onClick={getPdf} />
                <p className="mt-6">
                    <span className="font-semibold">Order number:-</span> {order?.orderNumber}
                </p>
                <p className="mt-2 text-center">
                    We just sent a confirmation letter to{" "}
                    <span className="font-semibold">
                        {order?.userEmail}- be sure to check your spam!
                    </span>
                </p>

                <div className="max-w-[40rem] mx-auto">
                    {/* <DeliveryDetails /> */}
                    <div className="max-w-[40rem] mt-32">
                        <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
                            <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-semibold">
                                Delivery Details
                            </h2>
                        </div>
                        <div className="flex items-start justify-between w-full mr-3 mt-4">
                            <div>
                                <p className="font-semibold">{order?.shippingDetail?.first_name}</p>
                                <p>{order?.shippingDetail?.address}</p>
                                <p>{order?.shippingDetail?.city}</p>
                                <p>{order?.shippingDetail?.country}</p>
                                {/* <p>CV1 678</p>
          <p>United Kingdom</p> */}
                                <p>
                                    Email: <span className="font-semibold">{order?.userEmail}</span>{" "}
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Standard delivery</p>
                                <p>$0.00</p>
                                <p>
                                    <span className="font-semibold">Within 3-5 days,</span> excluding{" "}
                                    <br />
                                    weekends & bank holidays
                                </p>
                            </div>
                        </div>
                    </div>
                    <WhatHappens />
                    {/* <Summary /> */}
                    <div className="col-span-1 mt-[2.3rem]">
                        <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
                            <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-semibold ">
                                Order Summary
                            </h2>
                        </div>
                        <div className="diflex"> 

                      
                        {order?.order_detail.map((product) => (


                            <div className="main-product-holder-vieworder">
                             <div className="image-holder-vieworder">
                             <img 
                                    key={Math.random()}
                                    src={`${ApiKey.api}/images/products/${product?.product?.coverImage}`}
                                    alt="cover"
                                    width="100%"
                                    className="orderviewImage"

                                />
                             </div>
                                <div className="orderdetails">
                                <p>
                                    {product?.product?.title}
                                </p>
                                <h6 >
                                    <strong>$</strong>{product?.product?.price}
                                </h6>
                                <div >
                                    <StarReviews />
                                    <p >321 <em>reviews</em></p>
                                </div>
                                <h3>
                                    {product?.product?.quantity}
                                </h3>
                                </div>
                                <button
                            type="button"
                            // _id
                            className="m-2 bg-coolDarkerGreen hover:opacity-60 py-2 px-10 rounded-[4px] shadow-sm text-sm font-medium text-white  mt-6"
                          onClick={e=>{
                            writeReview();
                            setproductid(product._id)
                          }} 
                                                 >
                            Review
                          </button>
                            </div>
                       

                        ))}

</div>
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-sm text-coolBlack">Plain T-shirt (CLOTH)</p>
                            <p className="text-sm text-coolBlack">x1</p>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-md text-coolBlack font-medium">Item(s) total:</p>
                            <p className="text-md text-coolBlack font-medium">{order?.totalPrice}</p>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                            <p className="text-md text-coolBlack font-medium">Delivery total:</p>
                            <p className="text-md text-coolBlack font-medium">$0.00</p>
                        </div>
                        <div className="flex flex-col items-end mt-6">
                            <h4 className="text-2xl font-semibold">TOTAL: {order?.totalPrice}</h4>
                        </div>
                    </div>
                    {/* <PaymentDetails /> */}
                    <div className="max-w-[40rem] mt-10">
                        <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
                            <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-semibold ">
                                Payment Details
                            </h2>
                        </div>
                        <div className="flex items-start justify-between w-full mr-3 mt-4">
                            <div>
                                <p className="font-medium">Payment type: </p>
                                <p className="font-medium">Card number:</p>
                                <p className="font-medium">Amount:</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">VISA</p>
                                <p className="text-sm">{order?.last4Digit}</p>
                                <p className="text-sm">{order?.totalPrice}</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-between w-full mt-6">
                            <div>
                                <p className="font-medium">Billing Addres:</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">{order?.billingDetail?.Address}</p>
                                <p className="text-sm">{order?.billingDetail?.country}</p>
                                <p className="text-sm">{order?.billingDetail?.dist}</p>
                                {/* <p className="text-sm">CV1 678</p>
          <p className="text-sm">Untied Kingdom</p> */}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push("/")}
                        className="bg-coolDarkGreen py-2 px-4 uppercase rounded-lg text-white text-md flex items-center mt-10"
                    >
                        <ChevronBack color="white" height="18px" width="18px" />
                        <span className="ml-2">Continue Shopping</span>
                    </button>
                    <div className="border-t border-coolBlack mt-10 pt-4">
                        <p className="font-medium mb-4">Please note:</p>
                        <p className="text-xs">
                            This acknowledges that your order has been received but not
                            confirmed. Confirmation is subject to stock, payment, description
                            and price verification and validation. Once this is complete,
                            payment will be taken and your order will be dispatched. If there
                            are any problems, you will be contacted by our Customer Service
                            team.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Confirmation;
export async function getStaticProps() {
    // const api = process.env.NEXT_PUBLIC_API;
    // const categoryRes = await Category.find({});
    // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
    return {
        props: { categories: categories },
    };
}
