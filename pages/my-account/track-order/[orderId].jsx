import Link from "next/link";
import Logo from "../../../components/utils/Logo";
import { categories } from "../../../data/categories";
import Button from "../../../components/inputs/Button";
import AppLayout from "../../../components/layout/AppLayout";
export default function orderId({ data, categories, stores }) {
  const widthOfLine = 80;

  const detailLabel = [
    "Order No.",
    "Recipient Name",
    "Shipping Address",
    "Order Value",
    "Est. Delivery",
  ];
  const detailValue = [
    "#837430832742370",
    "Urban Leung",
    "971 Sherman Brock Cir, Newmarket,ON, Canada, L3X 0G7",
    "$343",
    "3rd-17th, 05, 2022",
  ];
  const dataForShipping = [
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  const place =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium.Nobis, laudantium.Nobis, laudantium.";
  return (
    <AppLayout categories={categories}>
      <div className="my-3 max-w-[1320px] mx-auto">
        <div className="flex w-full flex-col items-center">
          <h1 className="text-xl md:text-[36px] text-center font-semibold text-coolDarkerGreen">
            Track Your Order
          </h1>
          <div className="w-full mt-10 pt-8 max-w-[1000px] flex w-full flex-col items-center">
            <div className="max-w-[50rem] w-[90%] md:w-[100%]  relative my-4 bg-gray-300 p-[1.5px] md:p-[3px] ">
              {/* circle */}
              <div
                className={`absolute  top-[-100%] left-0 z-30 rounded-full h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-${
                  widthOfLine > 0 ? "coolDarkerGreen" : "white border"
                } z-50 w-fit`}
              ></div>
              {/* circle */}
              <div
                className={`absolute  top-[-100%] left-[33.3%] z-30 rounded-full h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-${
                  widthOfLine >= 33.3 ? "coolDarkerGreen" : "white border"
                } z-50 w-fit`}
              ></div>
              {/* circle */}
              <div
                className={`absolute  top-[-100%] left-[66.6%] z-30 rounded-full h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-${
                  widthOfLine >= 66.6 ? "coolDarkerGreen" : "white border"
                } z-50 w-fit`}
              ></div>
              {/* circle */}
              <div
                className={`absolute  top-[-100%] left-[100%] z-30 rounded-full h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-${
                  widthOfLine == 100 ? "coolDarkerGreen" : "white border"
                } z-50 w-fit`}
              ></div>
              {/* <div className={`absolute top-0 rounded-full bg-coolDarkerGreen p-[3px] z-10 min-w-[${widthOfLine}]`}></div> */}
              <div
                className={`absolute top-0 rounded-full bg-coolDarkerGreen p-[1.5px] md:p-[3px] z-10 w-full`}
              ></div>
            </div>
            <div className="max-w-[55rem] my-4 text-coolBlack text-sm md:text-md flex items-center text-center justify-between w-full">
              <p className="text-center">Order Placed</p>
              <p className="text-center">Preparing</p>
              <p className="text-center">Shipped</p>
              <p className="text-center">Delivered</p>
            </div>

            <div className="flex flex-col rounded-md shadow-sm border  my-4 p-1 md:p-2 lg:p-6 w-full">
              {detailValue.map((text, index) => (
                <div className="flex items-start py-1 w-full" key={index}>
                  <p className="text-sm  md:text-lg text-coolDarkerGreen flex-[0.4] md:flex-[0.3] font-semibold">
                    {detailLabel[index]}
                  </p>
                  <div className="flex-[0.6] md:flex-[0.7] w-full text-sm md:text-lg text-coolBlack">
                    {text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-col">
              <h1 className="md:mt-4 text-sm  md:text-lg text-coolDarkerGreen flex-[0.4] md:flex-[0.3] font-semibold pl-1 md:pl-6">
                Shipping Status
              </h1>
              <div className="flex flex-col rounded-md shadow-sm border  my-2 md:my-4 p-2 lg:p-6 w-full">
                {dataForShipping.map((cameToHere, index) => (
                  <div
                    className={`hover:bg-gray-100 cursor-pointer flex py-2 w-full items-start ${
                      dataForShipping[index + 1] != null ? "border-b" : ""
                    }`}
                    key={index}
                  >
                    <div className="flex-1 flex ">
                      <p
                        style={{ whiteSpace: "nowrap" }}
                        className="mr-2 text-sm md:text-lg text-coolBlack md:mr-4 "
                      >
                        12-04-2022
                      </p>
                      <p className="ml-4 hidden md:flex w-full text-coolBlack uppercase">
                        {place.slice(0, 100)}...
                      </p>
                      <p className="ml-4 text-sm flex md:hidden text-coolBlack w-full uppercase">
                        {place.slice(0, 50)}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center w-full justify-center">
            <Link href="/my-account/orders">
              <Button
                text="Back to order page"
                color="bg-coolDarkerGreen"
                padding="py-3 px-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

// export const getStaticPaths = async () => {
//   const paths = [{ params: { orderId: "#455633567744" } }];
//   return { paths, fallback: "blocking" };
// };
// export async function getStaticProps() {
//   const res = await fetch(`https://lovie-test.herokuapp.com/items`);
//   const data = await res.json();

//   const resC = await fetch(`https://lovie-test.herokuapp.com/categories`);
//   const dataC = await resC.json();

//   const resS = await fetch(`https://lovie-test.herokuapp.com/stores`);
//   const dataS = await resS.json();
//   return {
//     props: { data: data, categories: categories, stores: dataS },
//   };
// }
