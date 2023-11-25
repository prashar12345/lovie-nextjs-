import React from "react";
import Chat from "../../../components/Chat/Chat";
import VendorLayout from "../../../components/layout/VendorLayout";
import { categories } from "../../../data/categories";

const chatSlug = ({ categories }) => {
  return (
    <VendorLayout categories={categories}>
      <Chat />
    </VendorLayout>
  );
};
export default chatSlug;

export const getStaticPaths = async ({ params }) => {
  const users = ["someone", "nick"];
  const paths = [
    { params: { chatSlug: users.find((user) => user === "nick") } },
  ];
  return { paths, fallback: false };
};
export async function getStaticProps() {
  // const api = process.env.NEXT_PUBLIC_API;
  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  return {
    props: { categories: categories },
  };
}
