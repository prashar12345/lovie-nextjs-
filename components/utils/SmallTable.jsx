import React, { useEffect, useState } from "react";
import ListData from "./ListData";

const SmallTable = ({ rows, price }) => {
  const data = [
    {
      item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`,
      style: "Gun-Shape",
      color: "Green",
      size: "XL",
      quantity: 18,
      price: 12,
    },
    {
      item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`,
      style: "Gun-Shape",
      color: "Green",
      size: "XL",
      quantity: 18,
      price: 12,
    },
    {
      item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`,
      style: "Gun-Shape",
      color: "Green",
      size: "XL",
      quantity: 18,
      price: 12,
    },
    {
      item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`,
      style: "Gun-Shape",
      color: "Green",
      size: "XL",
      quantity: 18,
      price: 12,
    },
    {
      item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`,
      style: "Gun-Shape",
      color: "Green",
      size: "XL",
      quantity: 18,
      price: 12,
    },
  ];

  const [list, setList] = useState(data);
  useEffect(() => {
    if (rows) {
      setList(data.slice(0, rows));
    }
  }, [rows, data]);
  const headings = ["Item", "Style", "Color", "Size", "Quantity"];
  const tableHeadings = ["Item", "Style", "Color", "Size", "Quantity", "Price"];
  return (
    <table className="min-w-full  divide-y divide-gray-300 ">
      <thead>
        <tr className="flex items-center justify-between">
          {price
            ? tableHeadings.map((heading, i) => (
                <th
                  scope="col"
                  key={i}
                  className={`py-3.5 pr-3 text-left text-sm font-semibold text-coolDarkerGreen flex items-center gap-2 ${
                    i === 0 ? "flex-[0.4]" : "flex-[0.15]"
                  }`}
                >
                  <div className="flex items-center gap-3">{heading}</div>
                </th>
              ))
            : headings.map((heading, i) => (
                <th
                  scope="col"
                  key={i}
                  className={`py-3.5 pr-3 text-left text-sm font-semibold text-coolDarkerGreen flex items-center gap-2 ${
                    i === 0 ? "flex-[0.4]" : "flex-[0.15]"
                  }`}
                >
                  <div className="flex items-center gap-3">{heading}</div>
                </th>
              ))}
        </tr>
      </thead>
      <tbody>
        {list.map((listData, i) => (
          <ListData listData={listData} price={price} key={i} />
        ))}
      </tbody>
    </table>
  );
};

export default SmallTable;
