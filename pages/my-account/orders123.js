import React, { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Image from "next/image";
import { Chat } from "../../components/icons/SocialIcons";
import { ChevronDown } from "react-ionicons";
import SearchIcon from "../../components/icons/SearchIcon";
import StarReviews from "../../components/DataDisplay/StarReviews";
import Paragraph from "../../components/Typography/Paragraph";
import Link from "next/link";
import BuyerOrderPopups from "../../components/popups/BuyerOrderPopups";
import { useRouter } from "next/router";
import { OrderPopup, reviewPopup } from "../../atoms/popup";
import { useRecoilState } from "recoil";
import ReviewPopup from "../../components/popups/ReviewPopup";
import { data } from "../../data/itemsData";
// import ApiClient from '../methods/api/apiClient'
import ApiClient from '../../methods/api/apiClient'

const ordersArr = [
  {
    number: "4376",
    status: "Delivered on January 22, 2021",
    href: "#",
    invoiceHref: "#",
    status: "Preparing",
    products: [
      {
        id: 1,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/woman-sport.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      {
        id: 2,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/pink-box.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      // More products...
    ],
  },
  {
    number: "4376",
    status: "Delivered on January 22, 2021",
    href: "#",
    invoiceHref: "#",
    status: "delivered",
    products: [
      {
        id: 1,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/man-tennis-court.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      {
        id: 2,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/woman-dress.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      // More products...
    ],
  },
  {
    number: "4376",
    status: "Delivered on January 22, 2021",
    href: "#",
    invoiceHref: "#",
    status: "shipped",
    products: [
      {
        id: 1,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/man-tennis-court.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      {
        id: 2,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/woman-dress.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      // More products...
    ],
  },
];

const Orders = ({ items }) => {
  const [searchValue, setSearchValue] = useState("Search your orders");
  const [orderData, setOrderData] = useRecoilState(OrderPopup);
  const [orderdetail,setorderdetail] = useState()
  console.log(orderdetail,"orderdetail");
  const [showReviewPopup, setShowReviewPopup] = useRecoilState(reviewPopup);
  const router = useRouter();
  
  useEffect(() => {
    ApiClient.get('order/detail').then(res => {
      if (res.success) {
        setorderdetail(res.data)
      }
  })
  },[]);


  const trackOrder = (id) => {
    id = "287736453";
    router.push("/my-account/track-order/" + id);
  };
  const confirmPopup = () => {
    setOrderData({ ...orderData, type: "confirmOrder", show: true });
  };
  const cancelOrder = () => {
    setOrderData({ ...orderData, type: "BuyerCancelOrder", show: true });
  };
  const writeReview = () => {
    setShowReviewPopup(true);
  };
  return (
    <AppLayout>
      <BuyerOrderPopups />
      <ReviewPopup />
      <div className="flex flex-col mt-6">
        <h1 className="text-xl md:text-4xl text-center font-semibold text-coolDarkerGreen">
          Your Orders
        </h1>
        {/* ITEMS */}
        <div className="rounded-[4px] shadow-xl bg-white py-4 md:py-20 px-8 mt-10">
          <div className="max-w-7xl text-coolBlack mx-auto">
            <div>
              <div className="mb-10 flex items-center gap-14">
                {/* <div className="border border-coolDarkerGreen rounded-md px-2 py-2.5 flex items-center justify-start">
                  LAST THREE MONTHS{" "}
                  <div className="border-l border-coolDarkerGreen ml-8 pl-2">
                    <ChevronDown />
                  </div>
                </div> */}
                <div className="border-[3px] py-[0.4rem] px-2 lg:w-[20rem] rounded-full border-coolBlack flex items-center justify-center focus:outline-none group w-full relative">
                  <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="text-sm py-2 md:py-0 md:text-base text-center  px-2 lg:w-[26rem] border-coolBlack flex items-center justify-center focus:outline-none group w-full self-center transition duration-150 font-normal "
                    placeholder={searchValue}
                  />
                  <div className="ml-auto mr-2.5 absolute right-0 z-10 bg-white">
                    <SearchIcon size />
                  </div>
                </div>
              </div>
              {ordersArr.map((order, index) => (
                <section
                  key={order.number}
                  aria-labelledby={`${order.number}-heading`}
                  className={`${index === 0 ? "mt-0" : "mt-20 md:mt-36"} `}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 justify-between">
                    <h2 className="uppercase text-sm font-semibold text-coolBlack md:flex-shrink-0">
                      Orderplaced:{" "}
                      <span className="font-normal text-coolBlack">
                        18.10.2022
                      </span>
                    </h2>

                    <h2
                      id={`${order.number}-heading`}
                      className="uppercase text-sm font-semibold text-coolBlack md:flex-shrink-0"
                    >
                      Ordertotal:{" "}
                      <span className="font-normal text-coolBlack">
                        $1246.00
                      </span>
                    </h2>

                    <h2
                      id={`${order.number}-heading`}
                      className="uppercase text-sm font-semibold text-coolBlack md:flex-shrink-0"
                    >
                      Ordernumber:{" "}
                      <span className="font-normal text-coolBlack">
                        #{order.number}
                      </span>
                    </h2>
                  </div>

                  <div className="mt-6 -mb-6 flow-root ">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-3 mt-4 border-b border-coolBlack pb-6">
                      {order.status === "Preparing" && (
                        <>
                          <p className="text-sm font-semibold text-coolBlack">
                            STATUS:
                            <span className="ml-1 font-normal text-coolBlack">
                              {order.status}
                            </span>
                          </p>
                          <p className="text-sm font-semibold text-coolBlack md:-ml-[4.6rem]">
                            TIMELINE:
                            <span className="ml-1 font-normal text-coolBlack">
                              3-7 business days
                            </span>
                          </p>
                          <div className="flex items-center gap-2 flex-col"></div>
                        </>
                      )}

                      {order.status === "shipped" && (
                        <>
                          <p className="text-sm font-semibold text-coolBlack">
                            STATUS:
                            <span className="ml-1 font-normal text-coolBlack">
                              {order.status}
                            </span>
                          </p>
                          <p className="font-semibold md:ml-[9.7rem] text-coolBlack">
                            Est.delivery:{" "}
                            <span className="font-normal text-coolBlack">
                              17-17 February 2022
                            </span>
                          </p>
                          <div className="flex items-start md:items-center gap-2 flex-col">
                            <button
                              onClick={trackOrder}
                              className="text-sm bg-coolDarkerGreen hover:opacity-60 rounded-[4px] text-white px-6 py-2"
                            >
                              Track your Order
                            </button>
                            <button
                              type="button"
                              className="text-sm bg-coolDarkerGreen hover:opacity-60 rounded-[4px] text-white px-6 py-2"
                            >
                              Any problems?
                            </button>
                          </div>
                        </>
                      )}
                      {order.status === "delivered" && (
                        <>
                          <p className="text-sm font-semibold text-coolBlack">
                            STATUS:
                            <span className="ml-1 font-normal text-coolBlack">
                              {order.status}
                            </span>
                          </p>
                          <button
                            onClick={confirmPopup}
                            className="text-sm bg-coolDarkerGreen hover:opacity-60 rounded-[4px] text-white px-6 py-2 inline md:ml-16"
                          >
                            Confirm Your Purchase
                          </button>
                          <div className="flex items-start md:items-center gap-2 flex-col">
                            <button
                              onClick={(id) => trackOrder(id)}
                              className="text-sm bg-coolDarkerGreen hover:opacity-60 rounded-[4px] text-white px-6 py-2"
                            >
                              Track Your Order
                            </button>
                            <button
                              type="button"
                              className="text-sm bg-coolDarkerGreen hover:opacity-60 rounded-[4px] text-white px-6 py-2"
                            >
                              Any problems?
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-6 ">
                      <h3 className="uppercase font-semibold tracking-tight">
                        Your Items
                      </h3>
                    </div>

                    {order.products.map((product) => (
                      <div
                        key={product.id}
                        className="py-6 flex flex-col text-textColor md:flex-row items-start justify-start"
                      >
                        <Link
                          href="/categories/[sub]/[slug]"
                          as={`/categories/${items[0].sub.slug}/${items[0].slug}`}
                        >
                          <a>
                            <div className="relative aspect-3/9 overflow-hidden h-[14rem] w-[10rem]">
                              <Image
                                src={product.imageSrc}
                                objectFit="cover"
                                layout="fill"
                                alt=""
                              />
                            </div>
                          </a>
                        </Link>
                        <div className="md:ml-8">
                          <Link
                            href="/sellers/[slug]"
                            as={`/sellers/${items[0].store.slug}`}
                          >
                            <a className="text-md uppercase text-textColor">
                              {product.store}
                            </a>
                          </Link>
                          <h3 className="text-lg font-medium leading-none text-coolBlack mt-1.5">
                            <Link
                              href="/categories/[sub]/[slug]"
                              as={`/categories/${items[0].sub.slug}/${items[0].slug}`}
                            >
                              <a>{product.name}</a>
                            </Link>
                          </h3>
                          <div className="flex md:items-center flex-row sm:flex-col md:flex-row mt-1.5">
                            <StarReviews />
                            <Paragraph
                              margin="ml-2 text-coolBlack mt-0.5 sm:ml-0 md:ml-2"
                              text="387 reviews"
                              size="text-[0.7rem]"
                            />
                          </div>
                          <h3 className="text-md uppercase mt-1.5 text-coolBlack ">
                            {product.price}
                          </h3>
                          <div className="flex items-center gap-3 mt-1.5">
                            <p className="text-sm text-coolBlack">
                              Style: Cotton
                            </p>
                            <p className="text-sm text-coolBlack">
                              Color: Green
                            </p>
                            <p className="text-sm text-coolBlack">Size: XL</p>
                            <p className="text-sm text-coolBlack">
                              Quantity: 1
                            </p>
                          </div>
                          {order.status === "Preparing" ? (
                            <button
                              type="button"
                              onClick={cancelOrder}
                              className="bg-coolDarkerGreen hover:opacity-60 py-2 px-10 rounded-[4px] shadow-sm text-sm font-medium text-white  mt-6"
                            >
                              Cancel This Order
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={writeReview}
                              className="bg-coolDarkerGreen hover:opacity-60 py-2 px-10 rounded-[4px] shadow-sm text-sm font-medium text-white  mt-6"
                            >
                              Write Product Review
                            </button>
                          )}
                        </div>

                        <div className="flex flex-col items-end ml-auto">
                          <Link
                            href={"/my-account/chat/[chatSlug]"}
                            as={"/my-account/chat/lovie-aurora"}
                          >
                            <a>
                              <Chat size="40" />
                            </a>
                          </Link>
                          <p className="text-md font-semibold text-coolBlack mt-5">
                            Subtotal:a <span>{product.price}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="w-full flex flex-col items-end mt-10">
                      <div className="w-full text-coolBlack md:w-[68rem] border-t border-coolBlack py-8 md:py-4 flex flex-col md:flex-row justify-between items-start">
                        <div>
                          <p className="font-semibold text-sm text-coolBlack">
                            Deliver to:
                          </p>
                          <p className="text-sm text-coolBlack">
                            25 Jamway Road
                          </p>
                          <p className="text-sm text-coolBlack">Twealsdon</p>
                          <p className="text-sm text-coolBlack">Convetry</p>
                          <p className="text-sm text-coolBlack">
                            United Kingdom
                          </p>
                          <p className="text-sm text-coolBlack">CV1 2345</p>
                        </div>
                        <p className="font-semibold mt-4 text-coolBlack md:mt-0 text-lg uppercase">
                          Ordertotal:$120.00
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Orders;
export async function getStaticProps() {
  // const api = process.env.NEXT_PUBLIC_API;

  // const res = await Items.find({});
  // const data = await JSON.parse(JSON.stringify(res));

  return {
    props: { items: data },
  };
}
