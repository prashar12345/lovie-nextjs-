/* eslint-disable @next/next/no-img-element */
import React from "react";
import VendorLayout from "../../components/layout/VendorLayout";
import Image from "next/image";
import { StarIcon, StarIconOutline } from "../../components/icons/VendorIcons";
import SelectorIcon from "../../components/icons/SelectorIcon";

const reviewsArr = [
  {
    orderId: "#000123456789",
    deliveryDate: "07/14/2022",
    name: "David Butler",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    orderId: "#000123456789",
    deliveryDate: "07/14/2022",
    name: "David Butler",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    orderId: "#000123456789",
    deliveryDate: "07/14/2022",
    name: "David Butler",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    orderId: "#000123456789",
    deliveryDate: "07/14/2022",
    name: "David Butler",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    orderId: "#000123456789",
    deliveryDate: "07/14/2022",
    name: "David Butler",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    orderId: "#000123456789",
    deliveryDate: "07/14/2022",
    name: "David Butler",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const stars = ["1", "2", "3", "4", "5"];
const reviews = () => {
  return (
    <VendorLayout>
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-coolDarkerGreen">Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[42rem] gap-4">
          <div className="md:col-span-2 rounded-lg shadow-xl bg-white py-8 px-8 mt-10">
            <div className="overflow-x-scroll categories">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-coolDarkerGreen sm:pl-6"
                    >
                      <div className="flex items-center gap-2">
                        Order ID <SelectorIcon />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                    >
                      <div className="flex items-center gap-2">
                        Delivery Date <SelectorIcon />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                    >
                      <div className="flex items-center gap-2">
                        Name <SelectorIcon />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-sm font-semibold text-coolDarkerGreen text-left"
                    >
                      <div className="flex items-center gap-2">
                        Rating <SelectorIcon />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {reviewsArr.map((review, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={review.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-coolBlack">
                              {review.orderId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                        <div className="text-coolBlack">
                          {review.deliveryDate}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                        <div className="text-coolBlack">{review.name}</div>
                      </td>
                      <td className="whitespace-nowrap text-left py-[26px] text-sm text-coolBlack flex items-center justify-start">
                        <div className="text-coolBlack flex items-center ">
                          {stars.map((item, i) => (
                            <StarIcon size color="#e84414" key={i} />
                          ))}
                        </div>
                        <p className="text-coolDarkerGreen underline ml-6">
                          Read more
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg shadow-xl bg-white py-8 px-8 mt-10">
            <h1 className="text-lg text-coolDarkerGreen font-medium mb-4">
              Breakdown
            </h1>
            <div className="flex items-center justify-between pb-3 pr-[1.2rem]">
              <h2 className="text-5xl font-semibold text-coolBlack">4.8</h2>
              <p className="text-coolDarkerGreen">overall rating</p>
            </div>
            <div className="flex items-center justify-between pb-3 mt-3 pr-[1.2rem]">
              <h2 className="text-5xl font-semibold text-coolBlack">5423</h2>
              <p className="text-coolDarkerGreen">total reviews</p>
            </div>

            <h3 className="text-lg text-coolDarkerGreen font-medium mt-4 mb-4">
              Rating Breakdown
            </h3>
            <div className="flex items-center gap-2 md:gap-20">
              <div className="flex gap-3">
                {stars.map((item, i) => (
                  <StarIcon color="#e84414" key={i} />
                ))}
              </div>
              <p className="text-coolDarkerGreen">1245</p>
            </div>

            <div className="flex items-center gap-2 md:gap-20 mt-8">
              <div className="flex gap-3">
                <StarIcon color="#e84414" />
                <StarIcon color="#e84414" />
                <StarIcon color="#e84414" />
                <StarIcon color="#e84414" />
                <StarIconOutline color="#e84414" />
              </div>
              <p className="text-coolDarkerGreen">93</p>
            </div>
            <div className="flex items-center gap-2 md:gap-20 mt-8">
              <div className="flex gap-3">
                <StarIcon color="#e84414" />
                <StarIcon color="#e84414" />
                <StarIcon color="#e84414" />
                <StarIconOutline color="#e84414" />
                <StarIconOutline color="#e84414" />
              </div>
              <p className="text-coolDarkerGreen">2</p>
            </div>
            <div className="flex items-center gap-2 md:gap-20 mt-8">
              <div className="flex gap-3">
                <StarIcon color="#e84414" />
                <StarIcon color="#e84414" />
                <StarIconOutline color="#e84414" />
                <StarIconOutline color="#e84414" />
                <StarIconOutline color="#e84414" />
              </div>
              <p className="text-coolDarkerGreen">2</p>
            </div>
            <div className="flex items-center gap-2 md:gap-20  mt-8">
              <div className="flex gap-3">
                <StarIcon color="#e84414" />
                <StarIconOutline color="#e84414" />
                <StarIconOutline color="#e84414" />
                <StarIconOutline color="#e84414" />
                <StarIconOutline color="#e84414" />
              </div>
              <p className="text-coolDarkerGreen">4</p>
            </div>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default reviews;
