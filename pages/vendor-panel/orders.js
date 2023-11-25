/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Checkmark } from "react-ionicons";
import { modalState, sellership } from "../../atoms/popup";
import SelectorIcon from "../../components/icons/SelectorIcon";
import VendorLayout from "../../components/layout/VendorLayout";
import SellerShip from "../../components/popups/SellerShip";
import { useRecoilState } from "recoil";
import OrderPopup from "../../components/popups/OrderPopup";
import Button from "../../components/inputs/Button";

const tabs = [
  { id: 1, tab: "All" },
  { id: 2, tab: "Open" },
  { id: 3, tab: "Unshipped Orders" },
  { id: 4, tab: "Delivered" },
  { id: 5, tab: "Completed" },
  { id: 6, tab: "Cancelled" },
  { id: 7, tab: "Dispute" },
  { id: 8, tab: "Return & Exchange" },
];

const ordersArr = [
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    quantity: 1,
    cost: "$60.32",
    status: "Preparing",
    name: "David Butler",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    quantity: 1,
    cost: "$60.32",
    status: "Delivered",
    name: "David Butler",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    quantity: 1,
    cost: "$60.32",
    status: "Shipped",
    name: "David Butler",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    quantity: 1,
    cost: "$60.32",
    status: "Preparing",
    name: "David Butler",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Orders = () => {
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = useRecoilState(sellership);
  const handleShip = () => {
    setOpen(true);
  };
  const [data, setData] = useRecoilState(modalState);
  const handleCreateOrder = () => {
    setData(true);
  };
  return (
    <VendorLayout>
      <SellerShip />
      <OrderPopup />
      <div className="mt-8">
        <Button
          onClick={handleCreateOrder}
          text="Create an order"
          padding="px-4 py-3"
          color="bg-coolDarkerGreen"
        />
        <h1 className="text-2xl font-bold mt-4 text-coolDarkerGreen">Orders</h1>
        <div className="shadow-lg  rounded-sm-lg mt-4 pb-4">
          <div className="overflow-x-scroll rounded-lg categories">
            {/* <div className="bg-[#337357] rounded-t-lg px-5 py-5 flex gap-10 items-center justify-between">
              {tabs.map((tab) => (
                <button
                  onClick={() => setSelected(tab.id)}
                  key={tab.id}
                  className={`${tab.id === selected
                    ? "border-b-[2px] border-white text-white"
                    : "text-gray-200 border-b-[3px] border-none"
                    } text-lg font-semibold text-white leading-none`}
                >
                  {tab.tab}
                </button>
              ))}
            </div> */}
            <table className="w-full divide-y divide-gray-300 ">
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
                      Quantity <SelectorIcon />{" "}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                  >
                    <div className="flex items-center gap-3">
                      Cost <SelectorIcon />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                  >
                    <div className="flex items-center gap-3">
                      Name <SelectorIcon />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                  >
                    <div className="flex items-center gap-3">
                      Address <SelectorIcon />
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
                    className="px-3 py-3.5 text-right text-sm font-semibold text-coolDarkerGreen"
                  >
                    <div className="flex items-center gap-3">
                      Shipping <SelectorIcon />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {ordersArr.map((order, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={order.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-coolBlack font-medium">
                            {order.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                      <div className="text-coolBlack">{order.date}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                      <div className="text-coolBlack">{order.quantity}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                      <div className="text-coolBlack">{order.cost}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                      <div className="text-coolBlack">{order.name}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                      <div className="text-coolBlack">{order.address}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-coolBlack">
                      <div className="text-coolBlack">{order.status}</div>
                    </td>
                    <td className="whitespace-nowrap  mr-7 text-sm text-coolBlack">
                      <div className=" px-3 py-4 flex items-center">
                        {order.status === "Preparing" ? (
                          <button
                            onClick={handleShip}
                            className="hover:opacity-60 bg-coolDarkerGreen text-white rounded-[4px] px-4 py-2 text-xs"
                          >
                            Ship
                          </button>
                        ) : (
                          <div className=" rounded-sm ">
                            {/* <Checkmark
                              height="16px"
                              width="16px"
                              color="white"
                            /> */}
                            <button
                              // onClick={handleShip}
                              className="hover:opacity-60 bg-coolOrange text-white rounded-[4px] px-3 py-2 text-xs"
                            >
                              Truck
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default Orders;
