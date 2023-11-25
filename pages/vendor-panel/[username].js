/* eslint-disable @next/next/no-img-element */
import React from "react";
import LineChart from "../../components/Charts/LineChart";
import VendorLayout from "../../components/layout/VendorLayout";
import { feed, messages, newArrivals } from "../../data";
import Image from "next/image";
import SelectorIcon from "../../components/icons/SelectorIcon";

const VendorDashboard = () => {
  return (
    <VendorLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 pb-0 md:pb-10">
        <div className="shadow-lg rounded-lg p-4">
          <h2 className="text-coolDarkGreen mb-4 ml-2 font-semibold">
            Revenue
          </h2>
          <LineChart />
        </div>

        <div className="text-coolBlack shadow-lg rounded-lg p-4 overflow-y-scroll categories">
          <h2 className="text-coolDarkGreen mb-4 font-semibold">
            Unshipped orders
          </h2>
          <table className="w-full mt-4">
            <thead>
              <tr className="text-left text-sm my-2">
                <th className="pb-1 font-semibold">
                  {" "}
                  <div className="flex text-sm items-center  gap-2 text-coolDarkerGreen ">
                    Item <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 hidden md:block font-semibold">
                  {" "}
                  <div className="flex text-sm items-center  gap-2 text-coolDarkerGreen ">
                    Purchase Date <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 font-semibold text-left">
                  {" "}
                  <div className="flex text-sm items-center  gap-2 text-coolDarkerGreen ">
                    Quantity <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 text-left font-semibold">
                  <div className="flex text-sm items-center  gap-2 text-coolDarkerGreen  truncate">
                    Preparing Time Left <SelectorIcon />
                  </div>
                </th>
                <th className="text-left md:block hidden"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex text-coolBlack  items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full md:block hidden">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm hidden md:table-cell text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  1
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  3 days
                </td>
                <td className="hidden md:table-cell text-sm text-coolBlack pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-[3px] text-white bg-coolDarkerGreen px-4 py-1.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-xs md:text-sm truncate text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full md:block hidden">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm hidden md:table-cell text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  1
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  1 day
                </td>
                <td className="hidden md:table-cell text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-[3px] text-white bg-coolDarkerGreen px-4 py-1.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full md:block hidden">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs hidden md:table-cell md:text-sm text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  1
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  4 days
                </td>
                <td className="hidden md:table-cell text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-[3px] text-white bg-coolDarkerGreen px-4 py-1.5 text-xs mr-4">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full md:block hidden">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs hidden md:table-cell md:text-sm text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  1
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  1 day
                </td>
                <td className="hidden md:table-cell text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-[3px] text-white bg-coolDarkerGreen px-4 py-1.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full md:block hidden">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs hidden md:table-cell md:text-sm text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  1
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  3 days
                </td>
                <td className="hidden md:table-cell text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-[3px] text-white bg-coolDarkerGreen px-4 py-1.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full md:block hidden">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs hidden md:table-cell md:text-sm text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  1
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4 text-left">
                  6 days
                </td>
                <td className="hidden md:table-cell text-xs md:text-sm text-coolBlack pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-[3px] text-white bg-coolDarkerGreen px-4 py-1.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="shadow-lg rounded-lg p-4 categories overflow-y-scroll">
          <h2 className="text-coolDarkGreen mb-4 font-semibold">
            Recent Sales
          </h2>
          <table className="w-full mt-4">
            <thead>
              <tr className="text-left text-sm my-2">
                <th className="pb-1 font-semibold">
                  <div className="flex items-center gap-2 text-coolDarkerGreen">
                    Item <SelectorIcon />
                  </div>
                </th>
                <th className="hidden md:block pb-1 font-semibold">
                  <div className="flex items-center gap-2 text-coolDarkerGreen">
                    Purchase Date <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 font-semibold">
                  <div className="flex items-center gap-2 text-coolDarkerGreen">
                    Quantity <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 font-semibold">
                  <div className="flex items-center gap-2 text-coolDarkerGreen">
                    Price <SelectorIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex text-coolBlack items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-xs md:text-sm md:table-cell hidden text-coolBlack pt-4">
                  04/03/2022
                </td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">1</td>
                <td className="text-xs md:text-sm text-coolBlack pt-4">$60</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row-span-1 shadow-lg rounded-lg p-4 overflow-hidden pb-4">
          <h2 className="text-coolDarkGreen mb-3 font-semibold">Messages</h2>
          <div className="flex flex-col overflow-y-scroll categories justify-between h-full py-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className="pb-4 flex items-start md:items-center gap-3"
              >
                <div className="h-8 md:h-14 w-8 md:w-14 rounded-full bg-gray-50 relative overflow-hidden">
                  <Image
                    src={message.image}
                    objectFit="cover"
                    layout="fill"
                    alt="jjj"
                  />
                </div>
                <div className="ml-2 md:ml-5 flex-1">
                  <h3 className="text-xs md:text-sm text-coolBlack font-semibold">
                    {message.user}
                  </h3>
                  <h4 className="text-xs md:text-sm text-coolBlack">
                    {message.message}
                  </h4>
                  <p className="text-xs text-coolBlack mt-1">
                    17:44 | 18.10.2021
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default VendorDashboard;
