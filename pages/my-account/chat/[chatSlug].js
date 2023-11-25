import React from "react";
import Chat from "../../../components/Chat/Chat";
import AppLayout from "../../../components/layout/AppLayout";
import { categories } from "../../../data/categories";

const chatSlug = ({ categories }) => {
  return (
    <AppLayout categories={categories}>
      <Chat />
    </AppLayout>
  );
};
export default chatSlug;

export const getStaticPaths = async ({ params }) => {
  const users = ["someone", "message"];
  const paths = [
    { params: { chatSlug: users.find((user) => user === "message") } },
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
