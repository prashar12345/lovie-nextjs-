import React from "react";
import Button from "../components/inputs/Button";
import Layout from "../components/layout/Layout";
import { categories } from "../data/categories";

const formInputs = [
  { id: 1, label: "First name", type: "text" },
  { id: 2, label: "Last name", type: "text" },
];

const ContactUs = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="my-14 text-center">
        <h1 className="uppercase tracking-[-2.4px] font-cool text-5xl font-medium mb-4">
          Contact
        </h1>
        <p className="text-sm text-gray-700">How can we help?</p>
        <form className="max-w-[40rem] mx-auto mt-10">
          <div className="flex w-full gap-4">
            {formInputs.map((input) => (
              <div key={input.id} className="flex flex-col items-start w-full">
                <label className="text-sm mb-1">{input.label}</label>
                <input
                  className="border w-full border-coolBlack rounded-md p-2"
                  type={input.type}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1">Email Address</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1">Subject</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1">Message</label>
            <textarea
              className="border w-full border-coolBlack rounded-md p-2"
              type="text"
              rows="6"
            />
          </div>
          <Button
            text="Submit"
            color="bg-coolDarkGreen"
            margin="mt-8"
            padding="py-1.5 px-8"
          />
        </form>
      </div>
    </Layout>
  );
};

export default ContactUs;
export async function getStaticProps() {
  // const api = process.env.NEXT_PUBLIC_API;
  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  return {
    props: { categories: categories },
  };
}
