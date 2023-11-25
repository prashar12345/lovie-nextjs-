import React, { useState } from "react";
import Link from "next/link";
import Button from "../inputs/Button";
import Heading from "../Typography/Heading";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Logo from "../utils/Logo";

const MailingListSection = () => {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [showPass, setShowPass] = useState(false);
  return (
    <section className="border-t bg-coolDarkerGreen text-[#fff] border-coolBlack mx-[-16px] sm:mx-0 sm:py-14">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mt-6">
          <div className="hidden sm:block">
            <Logo color="text-[#fff]" />
          </div>
          <div className="block sm:hidden">
            <Logo color="text-[#fff]" size="33" />
          </div>
        </div>
        <p className="text-[#fff] text-[9px] md:text-sm mt-8">
          Sign up to our
        </p>
        <Heading
          h2
          text="Mailing List"
          margin="mt-3 font-bold"
          size="text-[25px] md:text-[25px]"
          color="text-[#fff]"
        />
        {/* <p className="text-[#fff] text-sm">
          Get exclusive access to discounts,new items and more.
        </p> */}
      </div>
      <form className="flex flex-col items-center justify-center mt-6">
        <input
          className={`email-dark rounded-md border border-gray-200 py-[3px] md:py-2 px-4 bg-transparent focus:outline-none text-white tracking-tight md:w-full max-w-[20rem] w-[267px]`}
          type="email"
          placeholder={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <div className="flex relative rounded-md  items-center border border-coolBlack max-w-[25rem] w-full">
          <input
            onFocus={() => setPassword("")}
            className={`flex-1 py-2 px-4 text-center rounded-md text-coolBlack tracking-tight w-full`}
            type={showPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute top-[25%] right-2"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        </div> */}
        <Link href="/auth/signup">
        <Button
          margin="mt-6"
          color="bg-[#fff]"
          text="Sign up"
          padding="px-4 py-1 md:py-2 text-md"
          width={"md:w-full max-w-[20rem] w-[267px]"}
          textColor={"text-coolBlack"}
        />
</Link>
        <Link href="/">
          <a
            // className="text-[#fff] text-xs underline mt-5 underline-offset-4 decoration-dashed dec "
            className="text-gray-100   md:text-sm mt-8"
            href=""
          >
           <small className="desc_cls"> Get exclusive access to discounts, new items and more.</small>
          </a>
        </Link>
        <span className="text-[9px] md:text-sm mt-10 sm:mt-20 mb-10 text-gray-100">
          <Link href="/auth/signin">
            <a className=" ">
              Already have an account?
              <span className="font-bold"> Sign in </span>
              <span className=""> or </span>
            </a>
          </Link>
          <Link href="/auth/signup">
            <a>
              <span className="font-bold"> Sign up</span>
            </a>
          </Link>
        </span>
      </form>
    </section>
  );
};

export default MailingListSection;
