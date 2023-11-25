import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import BlogCard from "../../components/BlogCard/BlogCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { categories } from "../../data/categories";
import ApiClient from "../../methods/api/apiClient";
import Pagination from 'react-js-pagination';

const Blog = ({ categories }) => {

  const [total, settotal] = useState()
  const [loading, setloading] = useState(false)
  const [popularBlogs, setpopularBlogs] = useState()
  // const [blogdetails, setblogdetails] = useState()
  const [filters, setFilter] = useState({ page: 1, count: 10, search: '', })
  const [catefilters, setcateFilter] = useState({ page: 1, count: 10, search: '', })
  const [categoriesList, setCategories] = useState()
  const [selectedcategory, setcategory] = useState()
  const [loader,setloader]=useState(false)
  const { query } = useRouter();
  const blogListing = (p = {}) => {
    let filter = { ...filters, ...p, }
    setloader(true)
    ApiClient.get('blogs', filter).then(res => {
      if (res.success) {
        setpopularBlogs(res.data)
        settotal(res.total)
        setloader(false)
      }
    })
  }

  useEffect(() => {
    console.log('check')
  }, [popularBlogs])
  const getCategories = () => {
    ApiClient.get('list/category', { page: 1, cat_type: 'blog' }).then(res => {
      if (res.success) {
        setCategories(res.data)
      }
    })
  }
  const pageChange = (e) => {
    setFilter({ ...filters, page: e })
    blogListing({ page: e })
  }
  const categBaseBlogs = (p = {}) => {
    let filter = { ...catefilters, ...p, }
    ApiClient.get('blog/list/category', filter).then(res => {
      if (res.success) {
        setpopularBlogs(res.data)
        settotal(res.total)
      }
    })
  }
  // const userDetails = (id) => {
  //   ApiClient.get('blog', { id: id }).then(res => {
  //     if (res.success) {
  //       let data = JSON.parse(res.data)
  //       localStorage.setItem('blogdetail', data)
  //     }
  //   })
  // }
  useEffect(() => {
    categBaseBlogs({ id: selectedcategory })
  }, [selectedcategory])


  useEffect(() => {
 
    blogListing({ page: 1 ,isDraft:false})
    getCategories()
    
  }, [])
  return (
    <Layout categories={categories}>
      <div className="bg-gray-50 h-[35rem] relative">
        <Image src="/blog.png" objectFit="cover" layout="fill" alt="" />
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[34rem] z-20 mr-8">
          <h1 className="text-9xl text-coolBlack font-cool uppercase font-medium">
            The <br />
            Blog
          </h1>
        </div>
        <div className="md:hidden block absolute top-1/2 transform -translate-y-1/2 text-center z-20 mr-8 left-1/2 -translate-x-1/2 w-[90%]">
          <h1 className="text-4xl font-cool uppercase font-medium">The Blog</h1>
          <p className="text-coolBlack text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="absolute -bottom-2 left-0 w-full h-[35rem] bg-gradient-to-t from-white"></div>
      </div>
      <div className="bg-gray-50 h-[24rem] relative my-24 group cursor-pointer">
        <Image src="/blog-editor.png" alt="" objectFit="cover" layout="fill" />
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-30">
          <h2 className="text-2xl md:text-5xl text-center absolute whitespace-nowrap font-cool uppercase font-medium text-white transform -translate-x-1/2 top-1/2 -translate-y-1/2">
            Editors Pick

          </h2>
        </div>
        <div className="absolute h-full w-full bg-coolBlack bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-150 z-10"></div>
      </div>

      {/* POPULAR BLOGS */}
      {/* <div className="my-24">
        <h3 className="text-3xl text-coolBlack text-start font-sans uppercase font-bold">
          Popular
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
          {popularBlogs && popularBlogs.map((blog) => (
            <Link key={blog.id} href="/blog/[slug]" as={`/blog/${blog.title}`}>
              <a className="flex-1">
                <BlogCard
                  image={blog.image}
                  title={blog.title}
                  // writerName={blog.writerName}
                  date={blog.createdAt}
                />
              </a>
            </Link>
          ))}
        </div>
      </div> */}

      {/* BLOGS */}
      {/* <div className="relative w-full lg:max-w-sm">
        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" onChange={e => setcategory(e.target.value)}>
          <option disabled>Categories</option>
          {
            categoriesList && categoriesList.map(itm => {
              return <option value={itm._id}>{itm.name}</option>
            })
          }
        </select>
      </div> */}
      <div className="my-24 text-coolBlack">
        <h3 className="text-3xl text-start font-sans uppercase font-bold">
          CREATOR BLOG POSTS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
          {popularBlogs && popularBlogs.map((blog, i) => (
            <Link key={i} href={`/blog/${blog._id}`} >
              <a className="flex-1">
                <BlogCard
                  image={blog.coverImage}
                  title={blog.title}
                  writerName={blog.addedBy}
                  date={blog.createdAt}
                />
              </a>
            </Link>
          ))}
        </div>
        {!loading && total > filters.count ? 
        <div className="paginationclass">
          <Pagination
            className='flex-auto'
            activePage={filters.page}
            itemsCountPerPage={filters.count}
            totalItemsCount={total}
            pageRangeDisplayed={5}
            onChange={pageChange}
          />
        </div> : <></>}
        {/* <Pagination /> */}
        {/* <PaginationTwo /> */}
      </div>




      {/* shine loader */}
{
  loader&&loader? <div className='shine_loader'>

  <div className='loaderdiv'>
    <div className='loaderdivcls'>
      <div className=' mt-2 d-flex shine shineCard'>
      </div>
    </div>

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

    </div>

    <div className="loaderflex">
      
      <div className="sendloader shine">
      </div>

      <div className="sendloader shine">
      </div>

      <div className="sendloader shine">
      </div>

    </div>
  </div>
</div>:<></>
}
     

      {/* end loader */}

    </Layout>
  );
};

export default Blog;
export async function getStaticProps() {
  return {
    props: { categories: categories },
  };
}





