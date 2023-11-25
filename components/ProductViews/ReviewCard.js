/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Star, StarHalf } from "react-ionicons";

const ReviewCard = () => {
  return (
    <div className="w-[10rem] bg-white shadow-lg flex flex-col items-start">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h2 className="text-sm font-bold">Urban</h2>
          <img src="" alt="" />
        </div>

        <div className="flex items-center gap-2">
          <Star height="20px" width="20px" color="#E84414" />
          <Star height="20px" width="20px" color="#E84414" />
          <Star height="20px" width="20px" color="#E84414" />
          <Star height="20px" width="20px" color="#E84414" />
          <StarHalf height="20px" width="20px" color="#E84414" />
        </div>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
          impedit aliquid. Ratione quas est ex necessitatibus modi qui quidem
          libero unde. Rem nobis consequatur earum exercitationem maxime,
          nesciunt ab fugiat!
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
