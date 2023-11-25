import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import { FacebookIcon, TwitterIcon } from "../../components/icons/SocialIcons";
import { ChevronForward, ChevronBack } from "react-ionicons";
import BlogCard from "../../components/BlogCard/BlogCard";
import { categories } from "../../data/categories";
import { useRouter } from "next/router";
import ApiClient from "../../methods/api/apiClient";
import methodModel from "../../methods/methods";

const popularBlogs = [
  {
    id: 1,
    title: "How to sell more",
    image: "/woman-sport.jpg",
    writerName: "John Doe",
    date: "24/01/2022",
  },
  {
    id: 2,
    title: "The Title blog",
    image: "/man-tennis-court.jpg",
    writerName: "John Doe",
    date: "24/01/2022",
  },
  {
    id: 3,
    title: "Where to find handcrafted items.",
    image: "/returns-refunds.png",
    writerName: "John Doe",
    date: "24/01/2022",
  },
];

const BlogPost = () => {

  const [bldetails, setdetails] = useState()
  const { query } = useRouter();
  const router =useRouter()
  const [load, setload] = useState(false)
  const [mapingDetailData, setmapingdata] = useState({
    title: '',
    description: '',
    coverImage: '',
    pageImage: ''
  })
  // useEffect(() => {
  //   let data = ''
  //   if (localStorage.getItem('blogdetails')) {
  //     data = JSON.parse(localStorage.getItem('blogdetails'))
  //     setdetails(data)
  //   }
  //   // console.log(query, 'checking here')

  //   // if (query.slug) {
  //   //   localStorage.setItem('slugid', query.slug)
  //   // }
  //   // let id = localStorage.getItem('slugid')
  //   // if (localStorage.getItem('blogdetails') && data.id === id) {
  //   //   setdetails(data)
  //   // } else {
  //   if (query.slug) {
  //     ApiClient.get('blog', { id: query.slug }).then(res => {
  //       if (res.success) {
  //         setdetails(res.data)
  //         let data = JSON.stringify(res.data)
  //         console.log(data, 'data is here on this line')
  //         localStorage.setItem('blogdetails', data)
  //       }
  //     })
  //   }




  // }, [])
  // useEffect(() => {
  //   console.log(query.slug, 'cdjakdskadkajd')
  //   if (query.slug) {
  //     ApiClient.get('blog', { id: query.slug }).then(res => {
  //       if (res.success) {
  //         setdetails(res.data)
  //         let data = JSON.stringify(res.data)
  //         console.log(data, 'data is here on this line')
  //         localStorage.setItem('blogdetails', data)
  //       }
  //     })
  //   }
  // }, [])
  useEffect(() => {
    // console.log(slug,'here we got it')
    if (router.isReady) {
      let query = "";
      if (router.query.slug) {
        query = router.query.slug;
      }
      getdetails(query);
    }
  }, [router]);
  const getdetails = (id) => {
    setload(true)
    ApiClient.get('blog', { id: id }).then(res => {
    
      if (res.success) {
        setdetails(res.data)
        setmapingdata({
          ...mapingDetailData,
          title: res.data.title,
          description: res.data.description,
          coverImage: res.data.coverImage,
          pageImage: res.data.pageImage,
          authorName:res.data.authorName
        })
        setload(false)

        // setdetails(res.data)
        // let data = JSON.stringify(res.data)
        // console.log(data, 'data is here on this line')
        // localStorage.setItem('blogdetails', data)
      }
    })
  }
  return (

    <Layout categories={categories}>
      {
        load?<div className='aboutusmain'>
        <div className='aboutusimgdiv shine shineCard'>
        </div>
        <div className='container mt-3'>
            <div className="shine detailshine mb-3"></div>
            <div className="shine detailshine mb-3"></div>
            <div className="shine detailshine mb-3"></div>
            <div className="shine detailshine mb-3"></div>
            <div className="shine detailshine mb-3"></div>
        </div>
    </div>:<div div className="mb-20 md:mb-36 text-coolBlack" >


<div className="relative w-full h-[24rem] object-top mb-5">
  <span className="blog-inner">
    <img
      src={methodModel.noImg(mapingDetailData.pageImage)}
      objectFit="cover"
      layout="fill"
      alt=""
    />
  </span>
</div>

<div className="mt-12 w-full h-full flex items-center justify-center flex-col text-center">
  <h1 className="text-3xl md:text-[40px] text-coolBlack font-extrabold z-20 mb-6 font-sans">
    {/* {bldetails && bldetails.title} */}
    {mapingDetailData.title}

  </h1>
  <p className="text-coolBlack font-semibold text-[20px] ">Author</p>
  <p className="text-coolBlack leading-relaxed text-[20px] ">{mapingDetailData&&mapingDetailData.authorName}
  </p>
</div>
{/* src={methodModel.noImg(bldetails && bldetails.image)} */}
<div className="max-h-48">
  <img
    objectFit="cover"
    layout="fill"
    alt=""
    className=""
  />
</div>
{/* BLOG CONTENT */}
<div className="mt-8 px-[10%] mx-auto font-sans">
  {/* <h1 className="font-bold text-[30px] font-sans mb-4">
    What is Lorem Ipsum?
  </h1> */}
  {/* <h1 className="font-bold text-[25px] font-sans mb-4">Content</h1> */}
  <p className="text-coolBlack leading-relaxed text-[20px] " dangerouslySetInnerHTML={{ __html: mapingDetailData.description }}></p>
</div>

{/* PREVIOUS NEXT */}
<div className="flex justify-between items-center mt-20 px-[10%]">
  <div className="flex items-center">
    <ChevronBack />{" "}
    <p className="text-coolBlack font-semibold uppercase text-xs md:text-sm ml-2">
      Previous Post
    </p>
  </div>
  <div className="flex gap-2 items-center">
    <TwitterIcon size="30" />
    <FacebookIcon size="30" />
  </div>
  <div className="flex items-center">
    <p className="text-coolBlack font-semibold uppercase text-xs md:text-sm mr-2">
      Next Post

    </p>
    <ChevronForward />{" "}
  </div>
</div>
<div className="my-16 md:my-24">
  <h3 className="text-3xl text-coolBlack text-center font-sans uppercase font-bold">
    Popular Posts
  </h3>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10">
    {/* {popularBlogs && popularBlogs.map((blog) => (
    <BlogCard
      key={blog._id}
      image={blog.image}
      title={blog.title}
      writerName={blog.writerName}
      date={blog.date}
    />
  ))} */}
  </div>
</div>
</div >
      }
      


  


    </Layout >

  );
};

export default BlogPost;
// export async function getStaticProps() {
//   return {
//     props: { categories: categories },
//   };
// }
