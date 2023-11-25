import React, { useEffect } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Card from "../../components/DataDisplay/Card";
import { feed, messages, newArrivals } from "../../data";
// import Image from "next/image";
import CarouselSmall from "../../components/DataDisplay/CarouselSmall";
import SelectorIcon from "../../components/icons/SelectorIcon";
import { data } from "../../data/itemsData";
import { getFromStorage } from "../../functions/getFromStorage";
import { useRouter } from "next/router";

const MyAccount = () => {
  const router = useRouter();
  const items = data;
  useEffect(() => {
    if (router.isReady) {
      let data = getFromStorage("userdata");
      if (!data) {
        router.push("/");
      }
    }
  }, [router]);

  return (
    <AppLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4  pb-10 md:max-h-screen">
        <div className="row-span-1 max-h-[50vh] overflow-y-scroll shadow-lg noscrollbar">
          <Card light title="Orders">
            <div className="flex flex-col overflow-y-scroll categories justify-between h-full mt-8 py-6">
              <table>
                <thead>
                  <tr className="text-left text-sm my-2">
                    <th className="font-semibold">
                      <div className="flex text-xs md:text-base items-center gap-2 text-coolDarkerGreen">
                        Item <SelectorIcon />
                      </div>
                    </th>
                    <th className="font-semibold">
                      <div className="flex text-xs md:text-base items-center gap-2 text-coolDarkerGreen">
                        Date <SelectorIcon />
                      </div>
                    </th>
                    <th className="md:block hidden font-semibold text-left">
                      <div className="flex text-xs md:text-base items-center gap-2 text-coolDarkerGreen">
                        Order ID <SelectorIcon />
                      </div>
                    </th>
                    <th className="text-left font-semibold">
                      <div className="flex text-xs md:text-base items-center gap-2 text-coolDarkerGreen">
                        Status <SelectorIcon />
                      </div>
                    </th>
                    <th className="sr-only">asd</th>
                  </tr>
                </thead>
                <tbody>
                  {feed.map((item, i) => (
                    <tr key={item.id}>
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gray-50 relative overflow-hidden md:block hidden">
                            {/* <Image
                              src={item.image}
                              objectFit="cover"
                              alt=""
                              layout="fill"
                            /> */}
                          </div>
                          <span className="text-coolBlack font-semibold text-xs">
                            {item.item}
                          </span>
                        </div>
                      </td>
                      <td className="text-xs md:text-sm text-coolBlack">
                        04/03/2022
                      </td>
                      <td className="text-xs hidden md:table-cell md:text-sm text-coolBlack text-left">
                        PB1dd028da
                      </td>
                      <td className="text-xs md:text-sm text-coolBlack text-left">
                        {i === 1 ? "Shipped" : "Preparing"}
                      </td>
                      <td className="hidden md:table-cell text-xs md:text-sm font-bold text-coolDarkGreen text-left">
                        Check more
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <div className="row-span-1 max-h-[50vh] overflow-y-scroll shadow-lg noscrollbar">
          <Card title="Messages">
            <div className="flex flex-col overflow-y-scroll categories justify-between h-full mt-8 py-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="pb-4 text-coolBlack flex items-start md:items-center gap-3"
                >
                  <div className="h-8 md:h-14 w-8 md:w-14 rounded-full bg-gray-50 relative overflow-hidden">
                    {/* <Image
                      src={message.image}
                      objectFit="cover"
                      alt=""
                      layout="fill"
                    /> */}
                  </div>
                  <div className="flex-1 text-coolBlack">
                    <h3 className="text-xs md:text-sm text-coolBlack font-semibold">
                      {message.user}
                    </h3>
                    <h4 className="text-xs md:text-sm text-coolBlack text-coolBlack">
                      {message.message}
                    </h4>
                    <p className="text-xs text-coolBlack mt-1">
                      17:44 | 18.10.2021
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="row-span-1 max-h-[50vh] overflow-y-scroll shadow-lg noscrollbar">
          <Card title="Popular this week">
            <div className="mt-8 py-6">
              <CarouselSmall items={items} />
            </div>
          </Card>
        </div>
        <div className="row-span-1 max-h-[50vh] overflow-y-scroll shadow-lg noscrollbar">
          <Card light title="Sellers you follow">
            <div className="flex flex-col overflow-y-scroll categories justify-between h-full mt-8 py-6">
              {feed.map((item) => (
                <div key={item.id} className="pb-4 flex items-center gap-3">
                  <div className="h-8 md:h-14 w-8 md:w-14 rounded-full bg-gray-50 relative overflow-hidden">
                    {/* <Image
                      src={item.image}
                      objectFit="cover"
                      layout="fill"
                      alt=""
                    /> */}
                  </div>
                  <div>
                    <h3 className="text-xs text-coolBlack md:text-sm">
                      {" "}
                      <span className="font-semibold  text-coolBlack">
                        {item.user}
                      </span>{" "}
                      just bought{" "}
                      <span className="font-semibold text-coolBlack">
                        {item.item}
                      </span>{" "}
                      from{" "}
                      <span className="font-semibold  text-coolBlack">
                        {item.store}
                      </span>{" "}
                    </h3>
                    <p className="text-xs text-coolBlack mt-1">
                      17:44 | 18.10.2021
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyAccount;

// export async function getStaticPaths() {
// const api = process.env.NEXT_PUBLIC_API;
// const res = await fetch(`${api}/items`);
// const data = await res.json();

//   const paths = data.map((item) => {
//     return {
//       params: { username: item.category.slug, slug: item.slug },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }
// export const getStaticPaths = async ({ params }) => {
//   const users = ["someone", "nick"];
//   const paths = [
//     { params: { chatSlug: users.find((user) => user === "nick") } },
//   ];
//   return { paths, fallback: false };
// };
// export async function getStaticProps() {
//   // const api = process.env.NEXT_PUBLIC_API;

//   // const res = await Items.find({});
//   // const data = await JSON.parse(JSON.stringify(res));

//   return {
//     props: { items: data },
//   };
// }
