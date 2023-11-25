import React, { useContext, useEffect, useState } from "react";
import { Heart, HeartOutline } from "react-ionicons";
import { Store } from "../../utils/Store";
import { wishlistContext } from "../../contexts/wishlistContext";
import { setToStorage } from "../../functions/setToStorage";
import { getFromStorage } from "../../functions/getFromStorage";
import ApiClient from "../../methods/api/apiClient";
import { toast } from "react-toastify";
import { UserContext } from '../../pages/_app'
const WishListButton = ({ item, userId, wishls}) => {
  const [iconCheck, setIconCheck] = useState(false);
  const { removewishlist,homelistproduct } = useContext(UserContext);
  const [removingFromWishList, setremoveFromWishList] = removewishlist
  const [ isAddedWishlist,setAddwishlist] = homelistproduct
  const wishListItems = [];
  const { state, dispatch } = useContext(Store);
  const { wishlist } = state;
  const [user, setuser] = useState()

  // useEffect(() => {
  //   let user = getFromStorage('userdata')
  //   setuser(user)
  // }, [])
  // const handleWishList = (newItem) => {
  //   const check = wishListItems.some((item) => item.id === newItem.id);
  //   if (check) {
  //     removeItemsFromWishList(newItem);
  //   } else {
  //     addItemsToWishList(newItem);
  //   }
  // };
  const handleWishList = (productId, userId) => {

  }
  const addwishlist = (productid, userid) => {
    console.log("added to whish list");
    let param = {
      userId: userid,
      productId: productid,
    };
    ApiClient.post("favourite/product", param).then((res) => {
      if (res.success) {
        toast.success(res.message);
        // setremoveWishlist(!removedfromWishlist)
        setremoveFromWishList(!removingFromWishList)
        setAddwishlist(!isAddedWishlist)
      }
    });
  };
  // };

  // useEffect(() => {
  //   if (wishlist) {
  //     const filtered = wishlist.find((itemsData) => itemsData._id === item._id);

  //     if (filtered) {
  //       setIconCheck(true);
  //     } else {
  //       setIconCheck(false);
  //     }
  //   }
  // }, [wishlist, item._id]);

  return (
    <>

      <button
        onClick={(e) => addwishlist(item, userId)}
        className="md:opacity-0 absolute top-[4px] right-[4px] md:group-hover:opacity-100 transition duration-200 z-20"
      >
        {
          wishls ? <Heart height="30px" width="30px" color="white" /> : <HeartOutline height="30px" width="30px" color="white" />
        }


      </button>
      {/* ) : (
      <button
        onClick={() => handleWishList(item)}
        className="md:opacity-0  right-2 md:group-hover:opacity-100 transition duration-200 z-20 absolute top-2"
      >
        {iconCheck ? (
          <Heart height="30px" width="30px" color="white" />
        ) : (
          <HeartOutline height="30px" width="30px" color="white" />
        )}
      </button> */}

    </>
  );
};

export default WishListButton;
