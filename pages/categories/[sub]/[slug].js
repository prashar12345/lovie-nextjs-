import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { Store } from "../../../utils/Store";
import { newArrivals } from "../../../data/index";
import Layout from "../../../components/layout/Layout";
import Button from "../../../components/inputs/Button";
import Tabs from "../../../components/navigation/Tabs";
import Heading from "../../../components/Typography/Heading";
import Size2 from "../../../components/ProductOptions/Size2";
import Reviews from "../../../components/ProductViews/Reviews";
import Carousel from "../../../components/DataDisplay/Carousel";
import Colour2 from "../../../components/ProductOptions/Colour2";
import Paragraph from "../../../components/Typography/Paragraph";
import Quantity from "../../../components/ProductOptions/Quantity";
import SuperTitle from "../../../components/Typography/SuperTitle";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import Customize from "../../../components/ProductOptions/Customize";
import StarReviews from "../../../components/DataDisplay/StarReviews";
import { useRecoilState } from "recoil";
import Description from "../../../components/ProductViews/Description";
import ShippingAndReturns from "../../../components/ProductViews/ShippingAndReturns";
import ProductImageGrid from "../../../components/ProductImageGrid/ProductImageGird";
import ApiClient from "../../../methods/api/apiClient";
import { toast } from "react-toastify";
// import { UserContext } from '../pages/_app'
import { UserContext } from '../../../pages/_app'
import {guestloginpop} from '../../../atoms/popup'
import Guestpopup from '../../../components/popups/Guestpopup'

const ItemPage = () => {

  // const {addToCart} = useSelector(state=>state.cart)
  // const item = data;
  // console.log("first", item);

  // const { addItemsToCart, cartItems } = useContext(cartContextTwo);

  // const {cartItems}=useSelector(store=>store.cart)

  const [selected, setSelected] = useState("Description");
  const [selectedColours, setSelectedColours] = useState("");
  const [openColours, setOpenColours] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedStyle, setSelectedStyle] = useState("Silk");
  const [openSizes, setOpenSizes] = useState(false);
  const [openStyles, setOpenStyles] = useState(false);
  const [qty, setQuantity] = useState(1);
  const [btnDisabled, setButtonDisabled] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);
  const router = useRouter();
  const {slug}=router.query;
  const [user, setuser] = useState();
  const { state, dispatch } = useContext(Store);
  const [productdetails, setproductDetails] = useState();
  const [guestcart,setguestcart]=useState([])
  const [loader,setloader]=useState(false)
  const [atributes, setAtbs] = useState({
    price: '',
    quantity: '',
    laid: '',
    image: ''
  })
  const [gridImages, setimages] = useState()
  console.log(qty,"pro");

  //-----------------Variation states--------------------------
  const [commonvarations, setcommon] = useState()
  const [uncommonvarations, setUncommon] = useState()
  const [variationCatbCHK, setCMNCHK] = useState(false)

  //---------------------------------------------------------
  const [profileData, setProfileData]=useRecoilState(guestloginpop)
  const addItem = async (item) => {
    if (qty) {
      let param = {
        quantity: qty,
        user: user && user.id,
        product: productdetails && productdetails.id,
      };
      ApiClient.post("add/cart", param).then((res) => {
        if (res.success) {
          toast.success(res.message);
        }
      });
    }


  

    // const newItem = item;
    // newItem.image = item.supporting_images;
    // newItem.options = {
    //   colours: selectedColours,
    //   style: selectedStyle,
    //   sizes: selectedSize,
    //   quantity: qty,
    // };
    // const existItem = state.cart.cartItems.find((x) => x._id === item._id);
    // console.log(existItem);
    // const quantity = existItem ? existItem.quantity + 1 : 1;
    // // const { data } = await axios.get(`/api/products/${item.id}`);
    // // if (data.countInStock < quantity) {
    // //   window.alert("Sorry. Product is out of stock");
    // //   return;
    // // }
    // // const quantity = existItem ? newItem.options.quantity + 1 : 1;

    // dispatch({ type: "CART_ADD_ITEM", payload: { ...newItem, quantity } });
  };

//guest cart adding items
const guestpopup = () => {
  setProfileData({ ...profileData, type: "guestpopup", show: true });
};
const guestCart =()=>{
  if(qty>0){
    let arr =[...guestcart]  
  let obj ={
      name:productdetails && productdetails.title,
      quantity:qty,
      price:atributes && atributes.price,
      laid:atributes && atributes.laid,
      image:atributes && atributes.image,
      productId:productdetails?.id
    }
    arr.push(obj)
    setguestcart(arr)
    localStorage.setItem('guestcart',JSON.stringify(arr))
  }
}


useEffect(()=>{
  if( localStorage.getItem('')){
    let list =JSON.parse( localStorage.getItem('guestcart'));
    setguestcart(list)
  }
  // if(guestcart){
    

  // }
},[guestcart])


  //handling variations change
  useEffect(() => {
    if (commonvarations) {
      let cmmnVal = { ...productdetails }
      for (let i = 0; i < cmmnVal.commonvariation?.length; i++) {
        if (openColours === cmmnVal.commonvariation[i]?.color?.value && selectedSize === cmmnVal.commonvariation[i]?.size?.value) {
          setAtbs({
            ...atributes, price: cmmnVal.commonvariation[i]?.price,
            quantity: cmmnVal.commonvariation[i]?.quantity,
            laid: cmmnVal.commonvariation[i]?.laid,
            image: cmmnVal.commonvariation[i]?.image
          })
        }

      }
    } else if (!commonvarations) {
      let arr = ''
      let firstvar = ''
      let secondvar = ''
      if (uncommonvarations&&uncommonvarations) {
        arr = [...uncommonvarations]

        firstvar = arr[0]?.variation ? arr[0].variation : []
        secondvar = arr.length>1&&arr[1].variation ? arr[1].variation : []
        // arr.length > 1 ? secondvar = arr[1].variation : secondvar = ''
        // for (let i = 0; i < firstvar.length; i++) {
        //   if (openColours === firstvar[i]?.name) {
        //     setAtbs({
        //       ...atributes,image:firstvar[i].image
        //     })
        //   }
  
        // }
        // console.log(firstvar, 'check working', secondvar)
        if (firstvar.length && secondvar.length) {
          for (let i = 0; i < firstvar.length; i++) {
            for (let j = 0; j < secondvar.length; j++) {

              // console.log("working here", firstvar[i].value, secondvar[j].value)
              if (openColours === firstvar[i].value && selectedSize === secondvar[j].value) {
                let firstVariation = {
                  price: firstvar[i].price,
                  quantity: firstvar[i].quantity,
                  laid: firstvar[i].laid,
                  image: firstvar[i].image
                }
                let secondVariation = {
                  price: secondvar[j].price,
                  quantity: secondvar[j].quantity,
                  laid: secondvar[j].laid,
                  
                }
                let price = firstVariation.price ? firstVariation.price : secondVariation.price
                let quantity = firstVariation.quantity ? firstVariation.quantity : secondVariation.quantity
                let laid = firstVariation.laid ? firstVariation.laid : secondVariation.laid
                let image = firstVariation.image ? firstVariation.image :productdetails&&productdetails.coverImage
                setAtbs({
                  ...atributes,
                  price: price ? price : atributes.price,
                  quantity: quantity ? quantity : atributes.quantity,
                  laid: laid ? laid : atributes.laid,
                  image: image ? image : ''
                })


              }

            }

          }
        }

      }



      // let arr = [...uncommonvarations]
      // let firstVariation = arr[0]
      // let secondVariation = arr[1] ? arr[1] : ''
      // console.log('firstvariation', firstVariation?.length, 'secondvariations', secondVariation?.length)
    }
  }, [selectedSize, openColours])


  const addToWishlist = (item) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: JSON.stringify(item) });
  };
  const { carttotal } = useContext(UserContext);
  const [Ites, setcartIte] = carttotal;
  const [totaldata, settotaldata] = useState()
  setcartIte(totaldata)
  const getproductDetails = (id) => {
    setloader(true)
    ApiClient.get("product", { id: id }).then((res) => {
      if (res.success) {
        setproductDetails(res.data);
        let arr = [...res.data?.image]
        let coverImage = res.data.coverImage ? res.data.coverImage : ''
        let newArray = [coverImage].concat(arr)
        // [atributes, setAtbs]
        setAtbs({
          ...atributes, price: res.data?.price,
          quantity: res.data?.quantity,
          laid: res.data?.laid,
          image: ''
        })
        setUncommon(res.data?.variation)
        setCMNCHK(res.data?.ifvariationHasEqualPoints)
        if (res.data?.ifvariationHasEqualPoints) {
          setcommon(res.data?.commonvariation)
        }
        // let indexOfduplicateValueOfimage = ''
        // for (let i = 0; i < newArray.length; i++) {
        //   if (newArray[i] === newArray[0]) {
        //     console.log('matched', i)
        //     indexOfduplicateValueOfimage = i
        //   }

        // }
        // console.log(newArray, 'myArray')
        // let arrAg = newArray.splice(1, indexOfduplicateValueOfimage)

        // console.log(arrAg, 'cosoling it')
        setimages(newArray)
        setloader(false)
        // console.log(newArray, 'working here peoples')
      }
    });
  };
  const refreshPage = () => {
    ApiClient.get('cart/listing', { page: 1 }).then(res => {
      if (res.success) {
        settotaldata(res.total)

      }
    })
  }

  useEffect(() => {
    if (localStorage.getItem("userdata")) {
      let user = JSON.parse(localStorage.getItem("userdata"));
      setuser(user);
    }
    if(localStorage.getItem("guestcart")){
      let arr =JSON.parse( localStorage.getItem("guestcart"))
      setguestcart(arr)
    }
  }, []);

  // const handleBuyNow = async (item) => {
  //   if (qty) {
  //     let param = {
  //       quantity: qty,
  //       user: user && user.id,
  //       product: productdetails && productdetails.id,
  //     };
  //     ApiClient.post("add/cart", param).then((res) => {
  //       if (res.success) {
  //         toast.success(res.message);
  //         router.push("/checkout")
  //       }
  //       else {
  //         toast.error(res?.message)
  //     }
  //     });
  //   }
   
  // };

  // const handleBuyNow = (item) => {
  //   const newItem = item;
  //   newItem.options = {
  //     colours: selectedColours,
  //     style: selectedStyle,
  //     sizes: selectedSize,
  //     quantity: qty,
  //   };
  //   newItem.removeId = uuid();
  //   addItemsToCart(newItem);
  //   router.push("/checkout");
  // };
  useEffect(() => {
    console.log(slug,'slug check')
    if (router.isReady) {
      let query = "";
      if (router.query.slug) {
        query = router.query.slug;
      } 
      getproductDetails(query);
    }
  }, [router]);
  // useEffect(() => {
  //   console.log(slug,'here we got it')
  //   if (router.isReady) {
  //     let query = "";
  //     if (router.query.id) {
  //       query = router.query.id;
  //     }
  //     getproductDetails(query);
  //   }
  // }, [router]);
  return (
    <Layout categories={[]}>
      <Guestpopup/>
      <Breadcrumbs page={"product-detail"} />
      {
       loader?<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:<><div className="lg:flex lg:items-start mt-6">
       <ProductImageGrid
         item={productdetails}
         changedImage={atributes&&atributes.image}
         supportingImages={gridImages}
       />
       <div className="ml-14 mt-[-7px] w-full">

         <h1 className="text-[26px]  text-coolBlack  tracking-tighter  font-medium">
           {productdetails && productdetails.title}
         </h1>
         {/* <Link href="/sellers/[slug]" as={`/sellers/${item.store.slug}`}> */}


         <div className="flex  items-center mt-1">
           <Link href="/sellers/[slug]" as={`/sellers/slug`}>
             <a>
               <SuperTitle
                 size="text-lg"
                 color="text-coolBlack"
                 text={productdetails && productdetails.store.name}
               />
             </a>
           </Link>
           <div className="flex items-center">
             <button
               onClick={() => {
                 setSelected("Reviews");
                 router.push("#reviews");
               }}
             >
               <StarReviews />
             </button>
             <Paragraph text="4.9" margin="ml-4" />
             {/* <span className="text-xs font-light  text-coolBlack mx-1">|</span> */}
             {/* <Paragraph text={`${item.reviews.length} reviews`} /> */}
             <span className="text-xs font-light  text-coolBlack mx-2"></span>
             {/* <Paragraph text={`${item.number_of_sales} sales`} /> */}
           </div>
           <Paragraph text="5674 Followers" />
           <span className="text-xs font-light  text-coolBlack mx-2"></span>
           {/* <Paragraph text={`Store Sales: ${item.number_of_sales}`} /> */}
           <Paragraph text={`30 Sales`} />
         </div>
         {/* <ul className="pl-5 list-disc mt-2">
         <li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>
         <li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>
         <li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>
         <li>Lorem ipsum dolor sit amet, consectetur adipisicing </li> 
       </ul> */}
         {/* <div className="flex items-center mt-5  gap-x-4 ">
           <SellerDataIcon icon={{ type: "HS", score: "35" }} margin="mt-4" />
           <SellerDataIcon icon={{ type: "OS", score: "101" }} margin="mt-4" />
         </div> */}
         <div className="mt-2 ml-4">
           <ul>
             {productdetails?.descriptionBullets?.map((point, index) => (
               <li
                 key={index}
                 className="text-coolBlack text-base leading-relaxed list-disc  font-[400]"
               >
                 {point}
               </li>
             ))}
           </ul>
         </div>
         {/* <div className="mt-4 flex gap-10"> */}
         <div className="flex items-start justify-start flex-row mt-4">
           <p className="font-medium text-sm text-coolBlack mb-3 mr-10">
             LAID:{" "}
             <span className="font-medium text-coolBlack">
               {atributes ? atributes.laid : ''}
             </span>
           </p>
           <p className="text-sm text-coolBlack font-medium">
             Weight:{" "}
             <span className="font-medium text-coolBlack">
               {productdetails && productdetails.weight}
             </span>
           </p>
         </div>

         {/* </div> */}

         <div className="grid grid-cols-1 md:grid-cols-2 gap-15">

           <div className="product-detail">
             <div className="flex items-start justify-start flex-row">
               <p className="font-medium text-sm text-coolBlack  mr-10">
                 Material:{" "}
                 <span className="font-medium  text-coolBlack">
                   {productdetails && productdetails.material}
                 </span>
               </p>
               <p className="font-medium text-sm text-coolBlack mb-3">
                 Dimension:{" "}
                 <span className="font-medium  text-coolBlack">
                   {`${productdetails?.length || 0} / ${productdetails?.width || 0
                     } / ${productdetails?.height || 0} cm`}
                 </span>
               </p>

             </div>
             <div className="flex flex-col items-stretch gap-3 mt-2">
               {/* <Style
                 styles={productdetails?.variation}
                 open={openStyles}
                 setOpen={setOpenStyles}
                 selected={selectedStyle}
                 setSelected={setSelectedStyle}
               /> */}
{
productdetails&& productdetails?.variation[0]?.variation?   <Colour2
 open={openColours}
 setOpen={setOpenColours}
 name={productdetails&& productdetails?.variation[0].name}
 selected={selectedColours}
 item={productdetails?.variation[0]?.variation}
 setSelected={setSelectedColours}
// iscommon={productdetails.ifvariationHasEqualPoints}
/>:<></>
}
{
productdetails&&  productdetails?.variation[1]?.variation? <Size2
 selected={selectedSize}
 setSelected={setSelectedSize}
 open={openSizes}
 name={productdetails&& productdetails?.variation[1].name}
 setOpen={setOpenSizes}
 item={productdetails?.variation[1]?.variation}
/>:<></>
}             
              
              {
                atributes && atributes.quantity>0?  <Quantity
                quantity={qty}
                setQuantity={setQuantity}
                productquantity={atributes && atributes.quantity}
              />:<></>
              }
             
               {/* => Show product customization conditionally */}
               {showCustomization && <Customize />}
               {/* <Customize /> */}
             </div>

             <div className="flex items-center mt-8 gap-4">
               <Heading
                 size="text-3xl font-bold text-coolBlack"
                 className="text-coolBlack"
                 h3
                 text={`$${atributes ? atributes.price : ''}`}
               />
               <Paragraph text="Local taxes included" className="text-coolBlack" />
             </div>

             <div className="flex items-center gap-4 mt-7 product_btn">
               {
                 atributes && atributes.quantity>0&&user?  <Button
                 padding="py-2.5 px-4"
                 onClick={() => router.push(`/checkout?id=${productdetails.id}`)} 
                 text="Buy It Now"
               />:<></>
               }
{
  atributes && atributes.quantity>0&&!user?   <Button 
  padding="py-2.5 px-4"
  // onClick={() => router.push(`/checkout?id=${productdetails.id}`)} 
  onClick={guestpopup}
  text="Buy It Now"
/>:<></>

}
            
               {
                 atributes && atributes.quantity>0?<> {
                   user&&user? <Button
                   padding="py-2.5 px-4"
                   disabled={btnDisabled}
                   disabledOpacity={btnDisabled}
                   onClick={() => { addItem(); refreshPage() }}
                   text={ 'Add To Cart'}
                 />: <Button
                 padding="py-2.5 px-4"
                 disabled={btnDisabled}
                 disabledOpacity={btnDisabled}
                 onClick={guestCart}
                 text="Add To Cart"
               />
                 }</>:<> {
                   user&&user? <Button
                   padding="py-2.5 px-4"
                   disabled={btnDisabled}
                   disabledOpacity={btnDisabled}
                   // onClick={() => { addItem(); refreshPage() }}
                   text={ 'Out of Stock'}
                 />: <Button
                 padding="py-2.5 px-4"
                 disabled={btnDisabled}
                 disabledOpacity={btnDisabled}
                 // onClick={guestCart}
                 text="Out of Stock"
               />
                 }</>
               }
              
               {/* <Button
                 padding="py-2.5 px-4"
                 disabled={btnDisabled}
                 disabledOpacity={btnDisabled}
                 onClick={() => { addItem(); refreshPage() }}
                 text="Add To Cart"
               /> */}
               {/* <Button text="Customize" /> */}
             </div>
           </div>

           <div className="product-detail pl-20 border-l-2">
             <ShippingAndReturns item={productdetails} />
           </div>

         </div>


         {/* <div className="mt-6 mb-6 w-full border-b border-borderColor pb-6 flex items-center justify-between">
         
           <IconGroup color />
         </div> */}

       </div>
     </div> 
     <div className="flex item-start justify-between gap-10">
     <div className="w-full mt-14 pt-10 mb-24">
       <Tabs selected={selected} setSelected={setSelected} />
       {selected === "Description" && (
         <Description
           description={productdetails?.description}
           image={productdetails?.descriptionImage}
         />
       )}
       {selected === "Reviews" && (
         <Reviews
           reviews={productdetails?.reviews}
           imageUrl={productdetails?.images}
           productName={productdetails?.title}
         />
       )}
     </div>
   </div>
   <div className=" border-t border-borderColor mb-20">
     <Heading h2 text="More from this store" margin="mt-20 mb-4 ml-3" />
     <Carousel items={newArrivals} size={true} />

     <Heading h2 text="You may also like" margin="mt-20 mb-4 ml-3" />
     <Carousel items={newArrivals} size={true} />

     <Heading h2 text="Others are looking at" margin="mt-20 mb-4 ml-3" />
     <Carousel items={newArrivals} size={true} />
   </div>
   </>
      }
      
      
    </Layout>
  );
};

export default ItemPage;
