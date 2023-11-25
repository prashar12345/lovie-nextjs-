import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import { FacebookIcon, TwitterIcon } from "../../components/icons/SocialIcons";
import { ChevronForward, ChevronBack } from "react-ionicons";
import BlogCard from "../../components/BlogCard/BlogCard";
import { categories } from "../../data/categories";


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
  return (
    <Layout categories={categories}>
      <div className="mb-20 md:mb-36 text-coolBlack">
        <div className="relative w-full h-[24rem] object-top">
          <Image
            src="/about-us.png"
            objectFit="cover"
            layout="fill"
            alt=""
            className="object-top"
          />
        </div>
        <div className="mt-12 w-full h-full flex items-center justify-center flex-col text-center">
          <h1 className="text-3xl md:text-[40px] text-coolBlack font-extrabold z-20 mb-6 font-sans">
            This is The Blog Title
          </h1>
          <p className="text-coolBlack font-semibold text-[20px] ">Author</p>
          <p className="text-coolBlack ">Lovie Aurora content team</p>
        </div>

        {/* BLOG CONTENT */}
        <div className="mt-8 px-[10%] mx-auto font-sans">
          <h1 className="font-bold text-[30px] font-sans mb-4">
            What is Lorem Ipsum?
          </h1>
          <h1 className="font-bold text-[25px] font-sans mb-4">Instruction</h1>
          <p className="text-coolBlack leading-relaxed text-[20px] ">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>
          <p className="text-coolBlack leading-relaxed mt-6 text-[20px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>

          <p className="text-coolBlack leading-relaxed mt-6 text-[20px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>
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
            {popularBlogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                writerName={blog.writerName}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
// export async function getStaticProps() {
//   return {
//     props: { categories: categories },
//   };
// }
