import React, { useEffect, useState } from "react";
import ApiClient from "../../methods/api/apiClient";
import ApiKey from "../../methods/ApiKey";
import Button from "../inputs/Button";

const Banner = () => {
  const [banner, setbanner] = useState();
  useEffect(() => {
    getbanner();
  }, []);

  const getbanner = () => {
    ApiClient.get("banner/listing", { page: 1, count: 1 }).then((res) => {
      if (res.success) {
        setbanner(res.data);
      }
    });
  };
  return (
    <div className="mt-4 banner">
      {banner?.map((itm, i) => {
        if (i == 0) {
          return (
            <img
              src={`${ApiKey.api}/images/banners/${itm.image}`}
              objectFit="cover"
              layout="fill"
              className="bannerImg"
              alt=""
            />
          );
        }
      })}
    </div>
  );
};

export default Banner;
