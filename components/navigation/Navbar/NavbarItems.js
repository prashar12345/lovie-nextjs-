import React, { useContext, useEffect, useState } from "react";
import { ArrowForward, LogInOutline } from "react-ionicons";
import { RiLogoutCircleLine } from 'react-icons/ri'
import { RiDashboardLine } from 'react-icons/ri'
import Link from "next/link";
import {
  NavCartIcon,
  NavHeartIcon,
  NavChatIcon,
  NavLogInIcon,
  NavCartIconWhite,
  NavHeartIconWhite,
  NavChatIconWhite,
  NavLogInIconWhite,
} from "../../icons/NavIcons";
import { getFromStorage } from "../../../functions/getFromStorage";
import { cartContext } from "../../../contexts/cartContext";
import { wishlistContext } from "../../../contexts/wishlistContext";
import { cartContextTwo } from "../../../contexts/cartContextTwo";
import Drawer from "../Drawer";
import BuyerPupups from "../../popups/BuyerPupups";
import { useRecoilState } from "recoil";
import { buyerPopup } from "../../../atoms/popup";
import { Store } from "../../../utils/Store";
import { UserContext } from "../../../pages/_app";

// import ApiClient from "../methods/api/apiClient";
import ApiClient from "../../../methods/api/apiClient";
const navbarItems = [
  {
    id: 2,
    path: "/cart",
    text: "cart",
    icon: <NavCartIcon />,
    white: <NavCartIconWhite />,
  },
  {
    id: 3,
    path: "/wishlist",
    text: "whishlist",
    icon: <NavHeartIcon height="24px" width="24px" />,
    white: <NavHeartIconWhite />,
  },
];

const NavbarItems = ({ categories }) => {
  // const { cartItems } = useContext(cartContextTwo);
  // const { wishListItems } = useContext(wishlistContext);
  const messages = ["hello", "someone"];
  const [user, setuser] = useState()
  console.log(user, "user");
  const [total, settotal] = useState()

  const { priceto, fvrttotals, carttotal, costomber } = useContext(UserContext);
  const [Ite, setcartItems] = priceto;
  const [Ites, setcartIt] = carttotal;
  const [userid, setuserid] = costomber;
  const { totalguestItems } = useContext(UserContext)
  const [totalguestCartitems, settotalcartItem] = totalguestItems;
  setuserid(user)
  // const [wishListItems, setWishListItems] = useState([]);
  const [fvrtTotal, setpfvrtTotal] = fvrttotals
  // useEffect(() => {
  //   const items = window.localStorage.getItem("wishlist");
  //   if (items !== "") {
  //     const parsedItems = JSON.parse(items);
  //     setWishListItems(parsedItems);
  //   }
  // }, []);


  const [popupData, setPopupData] = useRecoilState(buyerPopup);
  const handlePopup = () => {
    setPopupData({ ...popupData, open: true, type: "showLogin" });
  };

  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
    wishlist,
  } = state;

  const logout = () => {
    localStorage.clear()
    
  }
  // console.log(wishlist.length)
  useEffect(() => {
    if (getFromStorage('userdata')) {
      let data = JSON.parse(getFromStorage('userdata'))
      setuser(data)
    }
  }, [])
  return (
    <div className="flex text-coolBlack items-center justify-between gap-0 md:gap-2 lg:ml-0 ml-auto">
      <BuyerPupups />
      <Drawer categories={categories} />

      {/*login icon*/}
      {
        user && user ? <a href="/auth/signin" ><RiLogoutCircleLine size={45} onClick={logout} title="LogOut" /></a> : <Link href=" /auth/signin" >
          <a title="Sign in" className="rounded-full border-[1px] md:border-[1px] border-coolBlack h-[2.5rem] w-[2.5rem] md:h-[2.5rem] md:w-[2.5rem] flex items-center justify-center hover:bg-coolBlack transition duration-200 group">
            <span className="group-hover:hidden hidden md:block text-coolBlack -ml-2 md:-ml-6">
              <NavLogInIcon />
            </span>
            <span className="group-hover:hidden block md:hidden text-coolBlack -ml-2 md:-ml-6">
              <NavLogInIcon size={"24"} />
            </span>
            <span className="group-hover:block hidden text-coolBlack -ml-2 md:-ml-6">
              <span className="hidden md:block">
                <NavLogInIconWhite />
              </span>
              <span className="block md:hidden">
                <NavLogInIconWhite size={"24"} />
              </span>
            </span>

            {/* <span className="text-[0.5rem]  hidden group-hover:block text-white">
           log in
         </span> */}
          </a>
        </Link>
      }



      {
        navbarItems.map((item) => (
          <Link key={item.id} href={item.path}>
            <a title={item.text} className="rounded-full md:border-[1px] border-coolBlack h-[2.5rem] w-[2.5rem] md:h-[2.5rem] md:w-[2.5rem]  flex items-center justify-center hover:bg-coolBlack  transition duration-200 group relative">
              <span className="group-hover:hidden block">{item.icon}</span>
              <span className="group-hover:block hidden ">{item.white}</span>
              {/* <span className="text-[0.5rem] hidden group-hover:block text-white">
              {item.text}
            </span> */}
              {/* {cartItems.length !== 0 && item.path === "/cart" && (
                <div>
               
                <span className="bg-coolDarkGreen rounded-full h-5 w-5 text-white flex items-center justify-center text-xs absolute -top-2 -right-1">
                  {cartItems.length}
                </span>
                </div>
              )}
               {/* <div className="reddot"><span className="count">2</span></div> */}

              {/* {wishlist.length !== 0 && item.path === "/wishlist" && (
                <>
                <span className="bg-coolDarkGreen rounded-full h-5 w-5 text-white flex items-center justify-center text-xs absolute -top-2 -right-1">
                  {wishlist.length}
                </span>
                </>
              )}
            </a>
          </Link> */}
              {/* {cartItems.length !== 0 && item.path === "/cart" && (
                <div>
                  {item.text == 'cart' ? <span className="bg-coolDarkGreen rounded-full h-5 w-5 text-white flex items-center justify-center text-xs absolute -top-2 -right-1">
                    {cartItems.length}
                  </span> : <></>}
                  

                </div>
              )} */}

              {Ites && Ites.length !== 0 && item.path === "/cart" ? <div className="reddot_fav" ><span className="count">{Ites}</span></div> : <></>}
              {/* {fvrtTotal?.text=='wishlist'?<div className="reddot_fav"><span className="count">{wishlist}</span></div>:<></>} */}
              {/* {wishlist.length !== 0 && item.path === "/wishlist" && (
                <>
                  <span className="bg-coolDarkGreen rounded-full h-5 w-5 text-white flex items-center justify-center text-xs absolute -top-2 -right-1">
                    {wishlist.length}
                  </span>
                </>
              )} */}
              {/* totalguestCartitems */}
              {item.path === "/wishlist" && fvrtTotal && fvrtTotal.length != 0 ? <div className="reddot_fav"><span className="count">{fvrtTotal}</span></div> : <></>
              }

            </a>
          </Link>
        ))
      }



      {
        user && user ? (
          <a href={`/my-account/chat/message`}>
            <a title="Chat" className="rounded-full md:border-[1px] border-coolBlack h-[2.5rem] w-[2.5rem] md:h-[2.5rem] md:w-[2.5rem] flex items-center justify-center hover:bg-coolBlack transition duration-200 group relative">
              <span className="mt-6 group-hover:hidden">
                <NavChatIcon height="24px" width="24px" />,

              </span>
              <span className=" hidden group-hover:block ">
                <NavChatIconWhite height="24px" width="24px" />
              </span>
            </a>
          </a>
        ) : (
          <div title="Chat"
            onClick={handlePopup}
            className="rounded-full md:border-[1px] border-coolBlack h-[2.5rem] w-[2.5rem] md:h-[2.5rem] md:w-[2.5rem] flex items-center justify-center hover:bg-coolBlack transition duration-200 group relative"
          >
            <span className=" group-hover:hidden">
              <NavChatIcon height="24px" width="24px" />
            </span>
            <span className=" hidden group-hover:block ">
              <NavChatIconWhite height="24px" width="24px" />
            </span>
          </div>
        )
      }
      {
        user && user ?
          <a href="/my-account/dashboard"><RiDashboardLine size={45} title="Dashboard" /></a>
          : <></>
      }

    </div >
  );
};

export default NavbarItems;
