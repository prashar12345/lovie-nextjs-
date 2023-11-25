import React from "react";
import { ChevronDown } from "react-ionicons";
import { financePopup } from "../../atoms/popup";
import Stats from "../../components/DataDisplay/Stats";
import {
  AddCard,
  PayPalIcon,
  TransferIcon,
} from "../../components/icons/VendorIcons";
import VendorLayout from "../../components/layout/VendorLayout";
import FinancePopups from "../../components/popups/financePopup";
import { useRecoilState } from "recoil";
const financeArr = [
  {
    date: "10/20/2022",
    for: "Funds pending clearence",
    amount: "$220.21",
  },
  {
    date: "10/20/2022",
    for: "Funds cleared",
    amount: "$108.21",
  },
  {
    date: "10/20/2022",
    for: "Funds pending clearence",
    amount: "$90.21",
  },
  {
    date: "10/20/2022",
    for: "Funds pending clearence",
    amount: "$45.21",
  },
  {
    date: "10/20/2022",
    for: "Funds pending clearence",
    amount: "$312.21",
  },
];

const Finance = () => {
  const [data, setData] = useRecoilState(financePopup);
  const handleOpenPopup = (text) => {
    setData({ ...data, type: text, show: true });
  };
  return (
    <VendorLayout>
      <FinancePopups />
      <div className="flex text-coolBlack flex-col mt-10">
        <h1 className="text-2xl font-bold text-coolDarkerGreen">Financial</h1>
        <Stats />

        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center mt-8">
          <h2 className="text-md text-coolDarkerGreen mr-3">Withdraw:</h2>
          <button
            onClick={() => handleOpenPopup("GoToPaypal")}
            className="bg-[#337357] flex items-center gap-3 rounded-lg py-3 px-4 text-white"
          >
            <PayPalIcon /> PayPal Account
          </button>
          <button
            onClick={() => handleOpenPopup("bankWithDraw")}
            className="bg-[#337357] flex items-center gap-3 rounded-lg py-3 px-4 text-white md:ml-5"
          >
            <TransferIcon /> Bank Transfer
          </button>
          <button
            onClick={() => handleOpenPopup("AddCard")}
            className="bg-[#337357] flex items-center gap-3 rounded-lg py-3 px-4 text-white md:ml-auto"
          >
            <AddCard /> Edit/Add Card
          </button>
        </div>

        <div className="rounded-lg bg-white shadow-lg w-full mt-8 p-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center pb-4 border-b border-gray-200 gap-4">
            <h2 className="hidden md:block text-md text-coolDarkerGreen mr-5">
              Show:
            </h2>
            <button className="bg-white rounded-lg py-3 px-3 drop-shadow-[0_6px_6px_rgba(0,0,0,0.22)] flex items-center justify-between">
              Everything{" "}
              <div className="border-l border-gray-500 pl-2 ml-2">
                {" "}
                <ChevronDown color="#363638" />
              </div>
            </button>

            <button className="bg-white rounded-lg py-3 px-3 drop-shadow-[0_6px_6px_rgba(0,0,0,0.22)] flex items-center justify-between">
              2022{" "}
              <div className="border-l border-gray-500 pl-2 ml-2">
                {" "}
                <ChevronDown color="#363638" />
              </div>
            </button>
            <button className="bg-white rounded-lg py-3 px-3 drop-shadow-[0_6px_6px_rgba(0,0,0,0.22)] flex items-center justify-between">
              All Months{" "}
              <div className="border-l border-gray-500 pl-2 ml-2">
                {" "}
                <ChevronDown color="#363638" />
              </div>
            </button>
          </div>
          <div className="overflow-x-scroll categories mt-4 md:mt-0">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 text-left text-md font-bold text-coolDarkGreen pl-3"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left pl-[10rem] text-md font-bold text-coolDarkGreen"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left pr-[24rem] text-md font-bold text-coolDarkGreen"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {financeArr.map((order, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-coolBlack">
                      <div className="text-coolBlack">{order.date}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 pl-[10rem] py-2 text-sm text-coolBlack">
                      <div className="flex items-center gap-3">
                        {index === 0 && (
                          <div className="text-[0.6rem] uppercase rounded py-0.-5 px-4 bg-coolDarkerGreen text-white drop-shadow-lg">
                            Clearing
                          </div>
                        )}
                        <div className="text-coolBlack">{order.for}</div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-coolBlack">
                      <div className="text-coolBlack">{order.amount}</div>
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

export default Finance;
