import React from "react";
import Image from "next/image";
import methodModel from "../../methods/methods";
import datepipeModel from '../../models/datepipemodel'
const BlogCard = ({ image, title, writerName, date }) => {
  return (
    <div>
      <div className="min-h-[24rem] w-full relative">
        {/* src={methodModel.userImg(image && image, 'blogs')} */}
        {/* src={'/woman-sport.jpg'} */}
        <span className="blog-inner">
        <img src={methodModel.noImg(image && image, 'blogs')} objectFit="cover" layout="fill" alt=""  className="blog-img" />
        </span>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-coolBlack">{title}</h4>
        <p className=" text-sm text-coolBlack">{writerName}</p>
        <p className=" text-sm text-coolBlack">{datepipeModel.date(date)}</p>
      </div>
    </div>
  );
};

export default BlogCard;


