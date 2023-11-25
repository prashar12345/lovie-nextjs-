import { useRouter } from "next/router";
import { useEffect, useState,useContext } from "react";
import Layout from "../components/layout/Layout";
import BestSellersSection from "../components/sections/BestSellersSection";
import Creators from "../components/sections/Creators";
import DealsSection from "../components/sections/DealsSection";
import EditorsChoice from "../components/sections/EditorsChoice";
import BannerMain from "../components/sections/BannerMain";
import NewArrivals from "../components/sections/NewArrivals";
import PopularStories from "../components/sections/PopularStories";
import ShopHomeSection from "../components/sections/ShopHomeSection";
import StaticProductListing from "../components/sections/StaticProductListing";
import MoreCateg from "../components/sections/MoreCateg";
import { categories } from "../data/categories";
import { data } from "../data/itemsData";
import { storeData } from "../data/storedData";
import ApiClient from "../methods/api/apiClient";
import { UserContext } from './_app'

export default function Home({ data, storeData }) {

  const { homelistproduct } = useContext(UserContext);
  const [ isAddedWishlist,setAddwishlist] = homelistproduct
  const [categoryList, setcategoryList] = useState();
  const [bestSellers, setbestsellers] = useState();
  const [editor, seteditorchoice] = useState();
  const [home, sethomeproduct] = useState();
  const [user,setuser]=useState()
  const [newArriveProduct,setNewArrive]=useState()
  // const [guestcart,setguestListcart]=useState([])
  // const [isAddedWishlist,setAddwishlist]=useState(false)
  const [storeList,setpopularStores]=useState()
  const [laoder,setloader]=useState(false)
  const [Storeloader,setstoreloader]=useState(false)
  // console.log("data", data);
  // console.log("categories home", categories);
  // console.log("stores", stores);

  // const { userInfo, pending, error } = useSelector((state) => state.user);

  const router = useRouter();
  useEffect(() => {
    let id =''
    if(localStorage.getItem("userdata")){
      let user =JSON.parse( localStorage.getItem("userdata"));
      setuser(user);
      id=user?.id
      // console.log('users are here',user)
    }
      ApiClient.get("category/list/product", { page: 1 }).then((res) => {
        if (res?.success) {
          setcategoryList(res.data);
        
        }
      });
      getBestSeller(id);
      geteditorChoice(id);
      getHomeproduct(id);
      getPopularStores();
      newArrived()
  
  }, [isAddedWishlist]);
  

  const newArrived = () => {
    setloader(true)
    ApiClient.get("product/list", { page: 1,userId:user?.id,count:100 }).then(
      (res) => {
        if (res.success) {
          setNewArrive(res.data)
          setloader(false)
        }
      }
    );
  };
  const getBestSeller = (userid) => {
    setloader(true)
    ApiClient.get("product/list", { page: 1,userId:userid, productType: "bestSeller" }).then(
      (res) => {
        if (res.success) {
          setbestsellers(res.data);
          setloader(false)
        }
      }
    );
  };
  const geteditorChoice = (userid) => {
    setloader(true)
    ApiClient.get("product/list", {
      page: 1,
      productType: "editorChoice",
      userId:userid
    }).then((res) => {
      if (res.success) {
        seteditorchoice(res.data);
        setloader(false)
      }
    });
  };

  const getHomeproduct = (userid) => {
    ApiClient.get("product/list", {
      page: 1,
      count: 100,
      categoryId: "63723ba74016ed1c2581dffa",
      userId:userid
    }).then((res) => {
      if (res.success) {
        sethomeproduct(res.data);
      }
    });
  };

  const getPopularStores=()=>{
    ApiClient.get('popular/store',{page:1,count:3}).then(res=>{
      setstoreloader(true)
      if(res.success){
        setpopularStores(res.data)
        setstoreloader(false)
      }
    })
  }
  // const { status } = useSession();
  // const {status}=useSession({
  //   required:true,
  //   onUnauthenticated(){
  //     router.push('/auth/signin')
  //   }
  // })

  // useEffect(() => {
  //   if (!userInfo && status !== 'authenticated') {
  //     router.push('/auth/signin')
  //   }
  // }, [])

  return (
    <Layout categories={categories}>
      {/* <HeroSection
        imageUrl="/hero-image.jpg"
        text="Meet the makers"
        paragraph="     We're Lovie Aurora, a community-driven online marketplace that
          connects you with uinique, exciting creators and their products from
          all over the world."
      /> */}

      <BannerMain />
      <div className="">
        <BestSellersSection items={bestSellers} userid={user?.id}/>
        <ShopHomeSection items={home}  userid={user?.id}/>
        <DealsSection />
        <NewArrivals items={newArriveProduct}   userid={user?.id} />
        <EditorsChoice items={editor}  userid={user?.id} />

        {/* {
          categoryList && categoryList.map(itm => {
            let data = isDataThere(itm._id)
            return <>{data ? <HomeCatgProduct data={data} /> : <></>}</>
            // if (item) {
            //   console.log(true)
            //   return <HomeCatgProduct item={item} />
            // } else {
            //   console.log(false)
            // }
          })
        } */}

        {/* <AuctionSection /> */}
        {/* <PreOrder /> */}
        {categoryList &&
          categoryList.map((itm) => {
            if (
              itm._id === "63723b594016ed1c2581dff8" ||
              itm._id === "63723ae94016ed1c2581dff7" ||
              itm._id === "63723a734016ed1c2581dff6" ||
              itm._id === "637238054016ed1c2581dff5" ||
              itm._id === "6372379d4016ed1c2581dff4" ||
              itm._id === "63722fd54016ed1c2581dff1"
            )
              return <StaticProductListing title={itm.name} id={itm._id}  />;
          })}
        <MoreCateg title={"more"} id={"637b2dc9d93667bd18b7f3b7"}  />
        <PopularStories stores={storeList} Storeloader={Storeloader} />
        <Creators />
      </div>

{/* loader */}
{/* {
  laoder?<div className='loaderdiv'>
  <div className='loaderdivcls'>
    <div className=' mt-2 d-flex shine shineCard'>
    </div>
  </div>


  <div className="loaderflex">

    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>
    <div className="sendloader shine">
    </div>

  </div>

  <div className="loaderflex">
    
    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>

    <div className="sendloader shine">
    </div>

  </div>
</div>:<></>

} */}

{/* loader */}

    </Layout>
  );
}
export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;

  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  // const itemsRes = await fetch(`${api}/items`);
  // const itemsData = await itemsRes.json();
  return {
    props: { data: data, categories: categories, storeData: storeData },
  };
}
