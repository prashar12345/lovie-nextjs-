import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GlobeOutline, ChevronDown } from "react-ionicons";
import TextLogo from "../../utils/TextLogo";
// import {FaFacebookF} from 'react-icons/fa'
import {
  Chat,
  FacebookIcon,
  InstagramIcon,
  Messenger,
  TikTok,
  TwitterIcon,
} from "../../icons/SocialIcons";

const Footer = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openOp, setOpenOp] = useState(false);
  const [openServerice, setOpenServices] = useState(false);
  const [openPolicies, setOpenPolicies] = useState(false);
  const [currencyShortForm, setCurrencyShortForm] = useState("USD");
  const [footerSetting, setFooterSetting] = useState("USD");
  const currencies = [
    { fullForm: "US Dollar", shortForm: "USD" },
    { fullForm: "Canadian Dollar", shortForm: "CAD" },
    { fullForm: "British Pound", shortForm: "GBP" },
    { fullForm: "Euro", shortForm: "EUR" },
  ];

  useEffect(() => {
    setCurrencyShortForm(
      footerSetting.currency === "Euro"
        ? "EUR"
        : footerSetting.currency === "Canadian Dollar"
          ? "CAD"
          : footerSetting.currency === "British Pound"
            ? "GBP"
            : "USD"
    );
  }, [footerSetting]);

  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState("Us Dollar");
  const node = useRef();

  const handleClick = (e) => {
    if (node?.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    setCurrency(selectedValue);
    setCurrencyShortForm(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const [openForLang, setOpenForLang] = useState(false);
  const [lang, setLang] = useState("English");
  return (
    <div className="bg-[#F8F8F8] text-coolBlack  w-full pt-10 md:pt-16 pb-10">
      <div className=" px-4 md:px-[9.52655%] mx-auto">
        <div>
          <div className=" flex flex-col items-center ">
            <img
              src="/HeaderLogo.svg"
              alt=""
              className="h-[28px] sm:h-[25px] md:h-[30px] lg:h-[30px] "
            />
            <div className="flex items-center gap-6 ">
              <div className="" >
                <div className="flex py-[1px] w-full  flex-col">
                  <div
                    onClick={() => setOpenForLang(!openForLang)}
                    className="flex items-center justify-end cursor-pointer min-w-[8rem]"
                  >
                    <div className="flex items-center ">
                      <GlobeOutline height="18px" color="white" width="18px" />
                      {/* <span className="text-base w-full pl-4 whitespace-nowrap">
                        {lang}
                      </span> */}
                    </div>

                    {/* <GlobeOutline height="18px" color="white" width="18px" />
                    <span className="text-base w-full pl-4 whitespace-nowrap">
                      {lang}
                    </span> */}
                    <div className="ml-auto sm:ml-[2.5rem] pl-1.5 pr-1.5">
                      <div className={`${!openForLang ? "visible" : "invisible"}`}>
                        <ChevronDown height="16px" color="#fff" width="16px" />
                      </div>
                      {/* {!openForLang && (
                          <ChevronDown height="16px" color="#fff" width="16px" />
                          )} */}

                          {/* <FaFacebookF /> */}
                    </div>
                    {openForLang && (
                      <div
                        onMouseLeave={() => setOpenForLang(false)}
                        className="absolute rounded bg-white top-12 left-[4.4px] z-20  w-[100%]   text-left  flex flex-col -ml-[3.1px] mt-[3px] items-center   py-1 overflow-hidden"
                      >
                        {/* <button
                          onClick={() => setLang("English")}
                          className="text-black rounded hover:bg-coolDarkerGreen hover:text-white text-base text-left py-1 pl-[2.5rem]  sm:pl-[5rem] pr-[2rem] w-full"
                        // className="hover:bg-coolDarkerGreen   hover:text-white  py-1 px-5 text-xs  w-full"
                        >
                          English
                        </button> */}
                        {/* <button
                          onClick={() => setLang("Chinese")}
                          className="text-black rounded hover:bg-coolDarkerGreen  hover:text-white py-1 text-left text-base pl-[2.5rem]  sm:pl-[5rem] pr-[2rem] w-full"
                        >
                          Chinese
                        </button> */}
                      </div>
                    )}
                    {/* <div
                      onMouseLeave={() => setOpenForLang(false)}
                      className="absolute rounded bg-white top-12 left-[4.4px] z-20  w-[100%]   text-left  flex flex-col -ml-[2px] mt-[3px] items-center   py-1 overflow-hidden"
                    >
                      <button
                        onClick={() => setLang("")}
                        className="text-black rounded hover:bg-coolDarkerGreen hover:text-white text-base text-left py-1 pl-[2rem]  sm:pl-[4.9rem] pr-[2rem] w-full"
                      // className="hover:bg-coolDarkerGreen   hover:text-white  py-1 px-5 text-xs  w-full"
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLang("Chinese")}
                        className="text-black rounded hover:bg-coolDarkerGreen  hover:text-white py-1 text-left text-base pl-[2rem]  sm:pl-[4.9rem] pr-[2rem] w-full"
                      >
                        Chinese
                      </button>
                    </div> */}
                  </div>

                </div>
              </div>
              <div>
              {/* <div className="border relative border-coolBlack h-[53px] bg-[#363638] text-white sm:w-[13.5rem] px-2 sm:px-0   py-1 flex items-center  rounded-md justify-end mt-3" onMouseLeave={() => setOpen(false)}> */}
                <div
                  ref={node}
                  className="flex relative flex-col w-full"
                >
                  <div
                    onClick={() => setOpen(!open)}
                    className=" rounded-md flex items-center justify-end cursor-pointer min-w-[8rem] "
                  >
                    <div className="flex items-center ">
                      <GlobeOutline height="18px" color="white" width="18px" />
                      {/* <span className="text-base w-full pl-4 whitespace-nowrap ">
                        {currencyShortForm}
                      </span> */}
                    </div>
                    <div className="ml-auto sm:ml-[4.3rem] border-coolBlack pl-1.5 pr-1.5">
                      <div className={`${!open ? "visible" : "invisible"}`}>
                        <ChevronDown height="16px" color="#fff" width="16px" />
                      </div>
                      {/* {!open && (
                        <ChevronDown height="16px" color="#fff" width="16px" />
                      )} */}
                    </div>
                  </div>


                </div>
                {open && (
                  <div
                    onMouseLeave={() => setOpen(false)}
                    className="text-base absolute rounded bg-white   top-[60px] sm:top13  z-20  w-full  py-1 mt-[-8px] flex flex-col items-start overflow-hidden left-[1px]"
                  >
                    {currencies.map((curr, index) => (
                      <button
                        key={index}
                        onClick={() => handleChange(curr.shortForm)}
                        className="text-black rounded hover:bg-coolDarkerGreen bg-transparent hover:text-white text-left text-base pl-[2.5rem] sm:pl-[5.2rem] py-1  w-full"
                      >
                        {curr.shortForm}
                      </button>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-12 lg:flex-nowrap flex-wrap justify-around lg:justify-between md:mt-20">
          <div className="w-[70%] mr-0 md:mr-2">
            {/* <div className="-mt-1.5 flex flex-col items-center md:items-start">
              <TextLogo size1="280" size2="50" />
              <div className="flex items-center gap-3">
                <div className="border border-coolBlack bg-white px-1 py-0.5 flex items-center max-w-[11rem] rounded-md justify-end mt-3">
                  <GlobeOutline height="16px" width="16px" />
                  <div className="flex py-[1px] w-full relative flex-col">
                    <div
                      onMouseLeave={() => setOpenForLang(false)}
                      onClick={() => setOpenForLang(!openForLang)}
                      className="flex items-center cursor-pointer"
                    >
                      <span className=" w-full text-center text-sm ml-3 mr-3.5">
                        {lang}
                      </span>
                      <div className="ml-auto pl-1.5 pr-1.5">
                        {!openForLang && (
                          <ChevronDown
                            height="16px"
                            color="#fff"
                            width="16px"
                          />
                        )}
                      </div>
                      {openForLang && (
                        <div
                          onMouseLeave={() => setOpenForLang(false)}
                          className="absolute bg-white top-5 z-20 right-1 mt-1 text-center w-full  flex flex-col mt-[3px] items-center px-1 py-1 overflow-hidden"
                        >
                          <button
                            onClick={() => setLang("English")}
                            className="hover:bg-coolDarkerGreen hover:text-white text-sm  py-1  w-full"
                          >
                            English
                          </button>
                          <button
                            onClick={() => setLang("Chinese")}
                            className="hover:bg-coolDarkerGreen  hover:text-white py-1   text-xs  w-full"
                          >
                            Chinese
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border border-coolBlack bg-white px-1 py-0.5 flex items-center w-full rounded-md justify-end mt-3">
                  <div
                    onMouseLeave={() => setOpen(false)}
                    ref={node}
                    className="flex relative flex-col min-w-[8rem]"
                  >
                    <div
                      onClick={() => setOpen(!open)}
                      className=" rounded-md flex items-center cursor-pointer"
                    >
                      <span className="text-sm w-full text-center whitespace-nowrap">
                        {currencyShortForm}
                      </span>
                      <div className="ml-auto border-coolBlack pl-1">
                      </div>
                      {open && (
                        <div
                          onMouseLeave={() => setOpen(false)}
                          className="text-sm absolute bg-white rounded-sm shadow-md top-6 z-10 left-0 w-full  flex flex-col items-start overflow-hidden"
                        >
                          {currencies.map((curr, index) => (
                            <button
                              key={index}
                              onClick={() => handleChange(curr.shortForm)}
                              className="hover:bg-coolDarkerGreen hover:text-white text-sm px-4 py-1  w-full"
                            >
                              {curr.shortForm}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-col mt-20 md:mt-6 lg:mt-0">
              <div className="flex lg:flex-col items-center lg:items-start justify-evenly ">
                <Link href="/about-us">
                  <a className="text-[13px] lg:mb-4 text-coolBlack ">
                    About Us
                  </a>
                </Link>
                <Link href="/career">
                  <a className="text-[13px] lg:mb-4 text-coolBlack ">Career</a>
                </Link>
                <Link href="/blog">
                  <a className="text-[13px] text-coolBlack ">The Blog</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="block w-full text-center lg:text-start mt-12 md:mt-10 lg:mt-0">
            <h1 className="font-sans uppercase font-bold text-[15px]">
              Customer Service
            </h1>
            <div className="flex flex-col ">
              <Link href="/returns-refunds">
                <a className="text-[13px] my-4 text-coolBlack ">
                  Returns & Refunds
                </a>
              </Link>
              <Link href="/shipping-and-delivery">
                <a className="text-[13px] text-coolBlack ">
                  Shipping & Delivery
                </a>
              </Link>
            </div>
          </div>
          <div className="block w-full ml-3 text-center lg:text-start mt-12 md:mt-10 lg:mt-0">
            <h1 className="font-sans uppercase font-bold text-[15px]">
              Opportunities
            </h1>
            <div className="flex flex-col  ">
              <Link href="/join-as-seller">
                <a className="text-[13px] my-4 text-coolBlack">
                  Become a Seller
                </a>
              </Link>

              <Link href="/help-creators-grow">
                <a className="text-[13px] text-coolBlack mb-4">
                  Help Creators Grow
                </a>
              </Link>
              <Link href="/we-protect-sellers-ip">
                <a className="text-[13px] text-coolBlack mb-1.5">
                  Protect Sellers' IP
                </a>
              </Link>
              <p className="text-[13px] text-coolDarkerGreen mt-20 lg:block hidden">
                © Lovie Aurora, 2022
              </p>
            </div>
          </div>
          <div className="block w-full text-center lg:text-start mt-12 md:mt-10 lg:mt-0">
            <h1 className="font-sans uppercase font-bold text-[15px]">
              LEGALS
            </h1>
            <div className="flex flex-col">
              <Link href="/privacy-policy">
                <a className="text-[13px] my-4 ">Privacy Policy</a>
              </Link>
              <Link href="/terms-of-conditions">
                <a className="text-[13px] mb-4 ">Terms of Conditions</a>
              </Link>

              <Link href="/cookie-policy">
                <a className="text-[13px] mb-4 ">Cookies</a>
              </Link>
            </div>
          </div>

          {/* MOBILE ABOUT */}
          {/* <div className="md:hidden w-full">
            <div
              onClick={() => setOpenAbout(!openAbout)}
              className="flex items-center justify-between"
            >
              <h1 className="font-cool uppercase font-bold text-[18px]">
                About
              </h1>
              <ChevronDown />
            </div>
            {openAbout && (
              <div className="flex flex-col mt-2">
                <Link href="/about-us">
                  <a className="text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                    About us
                  </a>
                </Link>
                <Link href="/career">
                  <a className="text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                    Career
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                    The blog
                  </a>
                </Link>
              </div>
            )}
          </div> */}

          {/* MOBILE OPPORTUNITIES */}
          {/* <div className="md:hidden w-full">
            <div
              onClick={() => setOpenOp(!openOp)}
              className="flex items-center justify-between"
            >
              <h1 className="font-cool uppercase font-bold text-sm">
                Opportunities
              </h1>
              <ChevronDown />
            </div>
            {openOp && (
              <div className="flex flex-col mt-2 ">
                <Link href="/join-as-seller">
                  <a className="text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                    Sell on Lovie Aurora
                  </a>
                </Link>

                <Link href="/help-creators-grow">
                  <a className="text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-4">
                    Help Creators Grow
                  </a>
                </Link>
                <Link href="/help-creators-grow">
                  <a className="text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-1.5">
                    We Protect Sellers IP
                  </a>
                </Link>
              </div>
            )}
          </div> */}

          {/* MOBILE CUSTOMER SERVICE */}
          {/* <div className="md:hidden w-full">
            <div
              onClick={() => setOpenServices(!openServerice)}
              className="flex items-center justify-between"
            >
              <h1 className="font-cool uppercase font-bold text-sm">
                Customer Service
              </h1>
              <ChevronDown />
            </div>
            {openServerice && (
              <div className="flex flex-col mt-2">
                <Link href="/returns-refunds">
                  <a className="text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                    Returns and Refunds
                  </a>
                </Link>
                <Link href="/shipping-and-delivery">
                  <a className="text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-10">
                    Shipping & Delivery
                  </a>
                </Link>
              </div>
            )}
          </div> */}

          {/* MOBILE POLICIES */}
          {/* <div className="md:hidden w-full">
            <div
              onClick={() => setOpenPolicies(!openPolicies)}
              className="flex items-center justify-between"
            >
              <h1 className="font-cool uppercase font-bold text-sm">
                Policies
              </h1>
              <ChevronDown />
            </div>
            {openPolicies && (
              <div className="flex flex-col mt-2">
                <Link href="/">
                  <a className="text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                    Cookie Policy
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                    Privacy Policy
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                    Terms and Conditions
                  </a>
                </Link>
              </div>
            )}
          </div> */}

          <div className="w-[53%] lg:text-left text-center md:mt-10 lg:mt-0">
            <h1 className="font-sans uppercase font-bold text-[15px]">
              Contact Us
            </h1>
            <div className="mt-[1rem]  mb-4 flex flex-col items-center lg:items-start">
              <div className="flex items-center mb-4 gap-3">
                <Link href="/my-account/chat/nick">
                  <a>
                    <Chat size="25" />
                  </a>
                </Link>
                <FacebookIcon size="25" />
                <InstagramIcon size="25" />
                {/* <a className="flex items-center border border-[#B7B7B7] rounded-md px-2 py-1 ml-3 text-xs self-end">
                  <Link href="/my-account/chat/nick">
                    <Messenger size="30" />
                  </Link>
                  <div className="flex flex-col ml-4 items-start">
                    <span>Need help?</span>
                    <Link href="/contact">
                      <a className="hover:underline self-end text-[0.6rem] text-coolBlack">
                        Live chat or message us!
                      </a>
                    </Link>
                  </div>
                </a> */}
              </div>
              <div className="flex items-center gap-3">
                {/* <Link href="/my-account/chat/nick">
                  <a className="block md:hidden">
                    <Chat size="35" />
                  </a>
                </Link> */}
                {/* <InstagramIcon size="35" />
                <FacebookIcon size="35" /> */}
                <Messenger size="25" />
                <TikTok size="25" />
                <TwitterIcon size="25" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20 w-full text-center block md:hidden">
          <p className="text-[18px] text-coolDarkerGreen">
            © Lovie Aurora, 2022
          </p>
        </div>
        <div className="md:mt-20 w-full text-center hidden md:block lg:hidden">
          <p className="text-[18px] text-coolDarkerGreen">
            © Lovie Aurora, 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
