import Image from "next/image";
import React, { useState } from "react";
import {
  Star,
  StarHalf,
  ChevronDown,
  ThumbsUpOutline,
  ThumbsDownOutline,
} from "react-ionicons";
import SearchIcon from "../icons/SearchIcon";
import Button from "../inputs/Button";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";

const Reviews = ({ reviews, imageUrl, productName }) => {
  const [openSort, setOpenSort] = useState(false);
  return (
    <div className="">
      <div className="flex gap-3 items-center">
        <div className="mr-2">
          <Heading
            size="text-[14px] text-coolBlack"
            h3
            text={`${reviews.length} review`}
          />
        </div>
        <div className="flex items-center gap-2">
          <Star height="20px" width="20px" color="#E84414" />
          <Star height="20px" width="20px" color="#E84414" />
          <Star height="20px" width="20px" color="#E84414" />
          <Star height="20px" width="20px" color="#E84414" />
          <StarHalf height="20px" width="20px" color="#E84414" />
        </div>
      </div>
      {/* INPUTS */}
      {/* <div className="flex justify-start md:items-center flex-col md:flex-row space-y-2 md:space-y-0 mt-6 ">
        <div className="text-[14px] md:mr-6">
          <div className="border border-coolBlack rounded-md overflow-hidden text-center w-full md:w-[13rem] flex items-center">
            <input
              type="text"
              className="p-2 py-2 w-full text-center text-coolBlack focus:outline-none"
              placeholder="Search Reviews"
            />
            <div className="mr-3 ">
              <SearchIcon size />
            </div>
          </div>
        </div>
        <div className="text-[14px]  md:mt-0">
          <div
            onClick={() => setOpenSort(!openSort)}
            className="border relative border-coolBlack rounded-md w-full text-center md:w-[13rem] flex items-center justify-between cursor-pointer"
          >
            <button
              type="button"
              className="p-2 py-2 w-full text-center text-left text-coolBlack focus:outline-none"
            >
              Search Reviews
            </button>
            <div className="mr-3 border-l border-coolBlack pl-2">
              <ChevronDown />
            </div>
            {openSort && (
              <div className="absolute top-11 left-0 w-full z-20 bg-white border rounded-lg overflow-hidden border-coolBlack">
                <p className="hover:bg-gray-50 p-3 text-coolBlack cursor-pointer">
                  Time
                </p>
                <p className="hover:bg-gray-50 p-3 text-coolBlack cursor-pointer">
                  Stars
                </p>
              </div>
            )}
          </div>
        </div>
      </div> */}

      {/* BUTTONS */}
      <div className="flex items-center justify-start flex-wrap gap-2 md:space-x-9 md:gap-0 mt-6">
        <Button
          color="bg-coolDarkGreens w-40 text-xs md:text-[14px] py-3"
          padding="py-3 px-4"
          text="Positive"
        />
        <Button
          color="bg-white text-black w-40 border text-xs md:text-[14px] py-3"
          padding="py-3 px-4"
          text="Negative"
        />
        <Button
          color="bg-white text-black border w-40 text-xs md:text-[14px] py-3"
          padding="py-3 px-4"
          text="Images"
        />
        <Button
          color="bg-white text-black border w-40 text-xs md:text-[14px] py-3"
          padding="py-3 px-4"
          text="Videos"
        />
      </div>

      {/* Reviews */}
      <div className="mt-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-borderColor mb-4 pb-4"
          >
            <div className="flex justify-between">
              <div>
                <div className="h-16 w-16 relative rounded-full overflow-hidden mb-4">
                  <Image
                    src="/man-tennis-court.jpg"
                    objectFit="cover"
                    alt=""
                    layout="fill"
                  />
                </div>
                <Heading h3 text="John Doe" />
                <Paragraph
                  text="Berlin, Germany"
                  size="text-base"
                  margin="mt-1 mb-1"
                />
                <Paragraph text="10.10.2022" />
                <Heading h3 text={productName} margin="mt-2" />
                <Paragraph text={review.review_description} />
              </div>

              {/* REVIW WITH IMAGE AND DESCRIPTION */}
              <div className="">
                <div className="flex mb-4 gap-1">
                  <Star height="24px" width="24px" color="#E84414" />
                  <Star height="24px" width="24px" color="#E84414" />
                  <Star height="24px" width="24px" color="#E84414" />
                  <StarHalf height="24px" width="24px" color="#E84414" />
                  <StarHalf height="24px" width="24px" color="#E84414" />
                </div>
                <div className="flex gap-3">
                  <div className="relative h-[10rem] w-[8rem]">
                    <Image
                      src={imageUrl[0].url}
                      objectFit="cover"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="relative h-[10rem] w-[8rem]">
                    <Image
                      src={imageUrl[1].url}
                      objectFit="cover"
                      layout="fill"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <div className="mr-8 flex items-center">
                    <ThumbsUpOutline height="18px" width="18px" />
                    <Paragraph
                      margin="ml-3"
                      size="text-sm opacity-60"
                      text={review.upvotes}
                    />
                  </div>
                  <div className="flex items-center">
                    <ThumbsDownOutline height="18px" width="18px" />
                    <Paragraph
                      margin="ml-3"
                      size="text-sm opacity-60"
                      text={review.downvotes}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
