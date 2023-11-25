import "../styles/globals.css";
import WishlistContextProvider from "../contexts/wishlistContext";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import { StoreProvider } from "../utils/Store";
import { useState, createContext, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiClient from "../methods/api/apiClient";
import { getFromStorage } from '../functions/getFromStorage'
export const UserContext = createContext();
function MyApp({ Component, pageProps }) {
  
  const router = useRouter()
  const { redirect } = router.query;
  const [user, setUser] = useState();
  const [totalguestCartitems,settotalcartItem]=useState()
  const [categoryId, setcategoryId] = useState()
  const [matrials, setmaterials] = useState()
  const [productList, setproductList] = useState()
  const [productListwishList, setproductListWishlist] = useState()
  const [fvrtTotal, setpfvrtTotal] = useState()
  const [price, setprice] = useState()
  const [cartI, setcartI] = useState()
  const [car, setcar] = useState()
  const [costomberid, setcostomberid] = useState()
  const [removingFromWishList, setremoveFromWishList] = useState(false)
  const [addinWishlist, setaddwishlist] = useState(false)

  const [ isAddedWishlist,setAddwishlist]=useState(false)

  useEffect(() => {
    let user = getFromStorage('userdata')
    console.log('changing here')

    ApiClient.get('product/list', { page: 1, count: 1000, categoryId: categoryId, material: matrials, sortBy: price }).then(res => {
      if (res.success) {
        setproductList(res.data)
      }else if(res.error.code===401) {
        router.push(redirect || `/auth/signin`);
      }
    })
    if (user) {
   


      if(localStorage.getItem('guestcart')){
        let arr =JSON.parse(localStorage.getItem('guestcart'))
        for (let i = 0; i < arr.length; i++) {
          let param ={
            quantity:arr[i].quantity,
            product:arr[i].productId
          }
          ApiClient.post('add/cart',param).then(res=>{
            if(res.success){
              console.log("added guest products to your account appjs")
            }
          })
        }
      }
    }


  }, [categoryId, matrials, price])

  useEffect(()=>{
    if(user){
      ApiClient.get('favourites', { page: 1, count: 100, categoryId: categoryId, material: matrials, sortBy: price }).then(res => {
        if (res.success) {
          setproductListWishlist(res.data)
          setpfvrtTotal(res.total)
        }
      })

    }
  },[removingFromWishList, addinWishlist])

  // function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
   
    <UserContext.Provider value={{ user: [user, setUser], category: [categoryId, setcategoryId], matrial: [matrials, setmaterials], productls: [productList, setproductList], shortBy: [price, setprice], priceto: [cartI, setcartI], wishlists: [productListwishList, setproductListWishlist], priceto: [cartI, setcartI], removewishlist: [removingFromWishList, setremoveFromWishList],carttotal: [car,setcar] ,fvrttotals: [fvrtTotal, setpfvrtTotal], addwishlists: [addinWishlist, setaddwishlist],costomber: [costomberid, setcostomberid],homelistproduct:[ isAddedWishlist,setAddwishlist],totalguestItems:[totalguestCartitems,settotalcartItem]  }}>
      <StoreProvider>
        <RecoilRoot>
          <WishlistContextProvider>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
              />

              <Component {...pageProps} />
         
          </WishlistContextProvider>
        </RecoilRoot>
      </StoreProvider>
    </UserContext.Provider >
    // </SessionProvider>
  );
}

export default MyApp;





