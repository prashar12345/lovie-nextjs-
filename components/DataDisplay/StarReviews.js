import React, { useEffect, useState } from "react";
import { StarOutline, Star } from "react-ionicons";
import { Rating } from "react-simple-star-rating";

const StarReviews = ({ rating }) => {
  const [ratings, setRatings] = useState([2, 4, 1,3, 4]);

  useEffect(() => {
    if (rating >= 0) {
      let arr = ratings.map((r, idx) => {
        if (idx < rating) {
          return 1;
        }
        return 0;
      });
      setRatings(arr);
    }
  }, [rating]);

  return (
    <div className="flex items-center gap-1">
      {ratings?.length ? (
        <>
          {ratings.map((itm, idx) =>
            itm ? (
              <Star height="14px" width="14px" color="#E84414" />
            ) : (
              <StarOutline height="14px" width="14px" color="#E84414" />
            )
          )}
        </>
      ) : (
        "No ratings"
      )}
    </div>
  );
};

export default StarReviews;
