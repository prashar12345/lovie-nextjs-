/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Checkmark } from "react-ionicons";
import SelectorIcon from "../../components/icons/SelectorIcon";
import { StarIcon } from "../../components/icons/VendorIcons";
import VendorLayout from "../../components/layout/VendorLayout";
import reviews from "./reviews";
import Link from "next/link";
import Button from "../../components/inputs/Button";
const tabs = [
  { id: 1, tab: "All" },
  { id: 2, tab: "Active" },
  { id: 3, tab: "Delivered" },
  { id: 4, tab: "Completed" },
  { id: 5, tab: "Cancelled" },
  { id: 6, tab: "Dispute" },
  { id: 7, tab: "Return & Exchange" },
];

const ordersArr = [
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    stock: 10,
    cost: "$60.32",
    status: "Deleted",
    pendingStatus: "Approved",
    follow: "Send-in Inventory",
    name: "Nike Shoes",
    sales: "123",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    rating: "4.9",
    reviews: [{ text: "hello" }, { text: "hello" }, { text: "hello" }],
    image:
      "https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    stock: 10,
    cost: "$60.32",
    status: "Suspended",
    pendingStatus: "Approved",
    follow: "Send-in Inventory",
    name: "Nike Shoes",
    sales: "123",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    rating: "4.9",
    reviews: [{ text: "hello" }, { text: "hello" }, { text: "hello" }],
    image:
      "https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    stock: 10,
    pendingStatus: "Reviewing",
    cost: "$60.32",
    status: "Inactive",
    name: "Nike Shoes",
    follow: "Details",
    sales: "123",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    rating: "4.9",
    reviews: [{ text: "hello" }, { text: "hello" }, { text: "hello" }],
    image:
      "https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    stock: 10,
    cost: "$60.32",
    status: "Active",
    follow: "Details",
    pendingStatus: "Denied",
    name: "Nike Shoes",
    sales: "123",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    rating: "4.9",
    reviews: [{ text: "hello" }, { text: "hello" }, { text: "hello" }],
    image:
      "https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
  },
];

const stars = ["1", "2", "3", "4", "5"];
const Products = () => {
  const [selected, setSelected] = useState(1);
  return (
    <VendorLayout>
      <div className="mt-8">
        <div className="mb-4">
          <Link href="/vendor-panel/addProduct">
            <Button
              text="Add a Product"
              padding="px-4 py-3"
              color="bg-coolDarkerGreen"
            />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-coolDarkerGreen">
          Current Products
        </h1>
        <div className="shadow-lg rounded-sm -lg mt-4 pb-4">
          <table className="min-w-full divide-y divide-gray-300 ">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-[21px] pr-3 text-left text-sm font-semibold text-coolDarkerGreen flex items-center gap-2"
                >
                  <div className="flex items-center gap-3">
                    Item <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen "
                >
                  <div className="flex items-center gap-3">
                    Date <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Stock <SelectorIcon />{" "}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Price <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Sales <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Status <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Reviews <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-right text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Edit <SelectorIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white">
              {ordersArr.map((order, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={order.image}
                          alt="img"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-coolBlack">
                          {order.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack">{order.date}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack">{order.stock}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack">{order.cost}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack">{order.sales}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack">{order.status}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack flex items-center space-x-1">
                      {stars.map((item, i) => (
                        <StarIcon size color="#e84414" key={i} />
                      ))}
                      <span className="pl-2">{order.rating}</span>
                      <span className=" pl-2">
                        {order.reviews.length} reviews
                      </span>
                    </div>
                  </td>

                  <td className="whitespace-nowrap  mr-7 text-sm text-coolBlack">
                    <div className=" px-3 py-4 flex items-center">
                      <button className="bg-coolDarkerGreen text-white rounded-sm hover:opacity-60  px-4 py-1 text-xs">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6"></div>
        <h1 className="text-2xl font-bold text-coolDarkerGreen">
          Pending Products
        </h1>
        <div className="shadow-lg max-w-full lg:max-w-[60%] w-full rounded-sm  mt-4 pb-4">
          <table className=" w-full divide-y divide-gray-300 ">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-[21px] pr-3 text-left text-sm font-semibold text-coolDarkerGreen flex items-center gap-2"
                >
                  <div className="flex items-center gap-3">
                    Item <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen "
                >
                  <div className="flex items-center gap-3">
                    Date <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Status <SelectorIcon />{" "}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Follow-up <SelectorIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white">
              {ordersArr.map((order, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={order.image}
                          alt="img"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-coolBlack">
                          {order.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack">{order.date}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack">{order.pendingStatus}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                    <div className="text-coolBlack">{order.follow}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </VendorLayout>
  );
};

export default Products;
