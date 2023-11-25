import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";
import { categories } from "../data/categories";
const cookiePolicy = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="relative text-coolBlack w-fullobject-top">
        <h1 className="my-6 md:my-12 lg:my-14 text-3xl md:text-4xl lg:text-[48px] uppercase text-center z-20 font-bold">
          COOKIE POLICY
        </h1>
      </div>
      <div className="mb-14 text-coolBlack ">
        <div className="space-y-2 md:space-y-4 max-w-[50rem] mb-28 mx-auto text-coolBlack lg:space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="text-sm">
              Lovie Aurora uses cookies to distinguish you from other users of
              our website. This helps us to provide you with a good experience
              when you browse our website and also allows us to improve our
              site.
            </div>
            <div className="text-sm">
              Lovie Aurora uses cookies to distinguish you from other users of
              our website. This helps us to provide you with a good experience
              when you browse our website and also allows us to improve our
              site. A cookie is a small file of letters and numbers that we
              store on your browser or the hard drive of your computer if you
              agree. Cookies contain information that is transferred to your
              computers hard drive.
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <div className="flex space-y-2 flex-col">
              <h3 className="leading-relaxed text-left font-bold text-lg md:text-xl lg:text-xl mb-1">
                We use the following cookies:
              </h3>
              <p className="text-sm text-[#363638] ">
                • Strictly necessary cookies. These are cookies that are
                required for the operation of our website. They include, for
                example, cookies that enable you to log into secure areas of our
                website, use a shopping cart or make use of e-billing services.
              </p>
              <p className="text-sm text-[#363638] ">
                • Analytical or performance cookies. These allow us to recognise
                and count the number of visitors and to see how visitors move
                around our website when they are using it. This helps us to
                improve the way our website works, for example, by ensuring that
                users are finding what they are looking for easily.
              </p>
              <p className="text-sm text-[#363638] ">
                • Functionality cookies. These are used to recognise you when
                you return to our website. This enables us to personalise our
                content for you, greet you by name and remember your preferences
                (for example, your choice of language or region).
              </p>
              <p className="text-sm text-[#363638] ">
                • Targeting cookies. These cookies record your visit to our
                website, the pages you have visited and the links you have
                followed. We will use this information to make our website and
                the advertising displayed on it more relevant to your interests.
                We may also share this information with third parties for this
                purpose.
              </p>
            </div>
            <div className="flex space-y-2 flex-col">
              <h3 className="leading-relaxed text-left font-bold text-lg md:text-xl lg:text-xl mb-1">
                The cookies enable us to:
              </h3>
              <p className="text-sm text-[#363638] ">
                • Estimate our audience size and usage pattern.
              </p>
              <p className="text-sm text-[#363638] ">
                • Store information about your preferences, and so allow us to
                customise our site and to provide you with offers that are
                targeted to your individual interests.
              </p>
              <p className="text-sm text-[#363638] ">
                • Speed up your searches.
              </p>
              <p className="text-sm text-[#363638] ">
                • Recognise you when you return to our site.
              </p>
              <p className="text-sm text-[#363638] ">
                • Allow you to use our site in a way that makes your browsing
                experience more convenient, for example, by allowing you to
                store items in an electronic shopping basket between visits. If
                you register with us or complete our online forms, we will use
                cookies to remember your details during your current visit, and
                any future visits provided the cookie was not deleted in the
                interim. Please note that the following third parties may also
                use cookies, over which we have no control. These named third
                parties may include, for example, advertising networks and
                providers of external services like web traffic analysis
                services. These third party cookies are likely to be analytical
                cookies or performance cookies or targeting cookies.
              </p>
              <p className="text-sm text-[#363638] ">
                • Google Analysitcs You can block cookies by activating the
                setting on your browser that allows you to refuse the setting of
                all or some cookies. However, if you use your browser settings
                to block all cookies (including essential cookies) you may not
                be able to access all or parts of our website.
              </p>
              <p className="text-sm text-[#363638] ">
                Except for essential cookies, all cookies will expire after 6
                months. This policy is governed by the law of Canada and you can
                bring legal proceedings in respect of it in the courts of
                Canada.
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="max-w-[40rem] mx-auto">
          <h3 className="font-cool font-semibold uppercase text-center text-4xl mt-14 mb-10">
            Still need help?
          </h3>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default cookiePolicy;
export async function getStaticProps() {
  // const api = process.env.NEXT_PUBLIC_API;
  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  return {
    props: { categories: categories },
  };
}
