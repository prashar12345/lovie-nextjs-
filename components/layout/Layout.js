import React, { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer/";
import MailingListSection from "../sections/MailingListSection";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children, categories }) => {
  const router = useRouter();
  const [user, setuser] = useState()
  console.log("categories", categories);
  useEffect(() => {
    if (localStorage.getItem('userdata')) {
      let user = JSON.parse(localStorage.getItem('userdata'))
      setuser(user)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Lovie Aurora: Original, Handmade and Quality Products</title>
        <meta
          name="description"
          content="Lovie Aurora was founded on the very simple idea that online shopping should be a stress-free, enjoyable experience, where 1000’s of high-quality products from an international roster of businesses are quickly and expertly organised to showcase to an active social community of buyers."
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css" integrity="sha512-3PN6gfRNZEX4YFyz+sIyTF6pGlQiryJu9NlGhu9LrLMQ7eDjNgudQoFDK3WSNAayeIKc6B8WXXpo4a7HqxjKwg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link> */}
      </Head>
      {router.pathname === "/" && (
        <div className="md:px-[9.52655%] sm:px-4 px-0 mx-auto  lg:mb-5">
          <div className="bg-coolDarkGreen flex items-center justify-center text-[11px] md:text-[11px] py-3.5 text-[#F8F8F8] font-sans">
            Free International Shipping
          </div>
        </div>
      )}

      <Navbar categories={categories} />
      <div className=" mt-6 mx-auto md:px-[9.52655%] px-4">
        {children}
        {user ? <></> : router.pathname !== "/auth/signup" &&
          router.pathname !== "/auth/signin" && <MailingListSection />}
      </div>
      {/* {
         user ?<></> : <div className="">
          {children}
          {router.pathname !== "/auth/signup" &&
            router.pathname !== "/auth/signin" && <MailingListSection />}
        </div>
      } */}

      <Footer />
    </>
  );
};

export default Layout;
