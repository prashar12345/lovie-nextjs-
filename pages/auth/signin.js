import React, { useState, useEffect, useContext } from "react";
import Button from "../../components/inputs/Button";
import Layout from "../../components/layout/Layout";
import { Checkmark, EyeOffOutline, EyeOutline } from "react-ionicons";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";

import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { setToStorage } from "../../functions/setToStorage";
import { getFromStorage } from "../../functions/getFromStorage";
import { categories } from "../../data/categories";
import ApiClient from "../../methods/api/apiClient";
import methodModel from "../../methods/methods";

const signin = ({ categories }) => {
  const [selected, setSelected] = useState(true);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [apple, setApple] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, seterror] = useState(false);
  const [isvalidEmail, setisValidemail] = useState(true);
  const [logindetails, setdetails] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const { redirect } = router.query;

  const handleLogin = async (e) => {
    seterror(true);
    if (!logindetails.email || !logindetails.password) {
      return;
    }
    e.preventDefault();
    let value = { email: logindetails.email, password: logindetails.password };
    ApiClient.post("user/signin", value).then((res) => {
      if (res.success) {
        let data = JSON.stringify(res.data);
        setToStorage("userdata", data);
        setToStorage("token", res.data.access_token);
        toast.success(`Logged in succesfully`);
        setTimeout(() => {
          router.push(redirect || `/my-account/dashboard`);
        }, 3000);
      } else {
        toast.error(res.error.message);
      }
    });
  };
  const emailHandler = (e, text) => {
    let val = e.target.value;
    if (!val) {
      setdetails({ ...logindetails, email: text });
    } else {
      setdetails({ ...logindetails, email: e.target.value.trim() });
    }
    let isvalid = false;
    if (val.length) {
      isvalid = methodModel.emailvalidation(val);
    } else {
      isvalid = true;
    }
    setisValidemail(isvalid);
  };
  useEffect(() => {
    if (getFromStorage("userdata")) {
      let name = getFromStorage("username");
      router.push(redirect || `/my-account/dashboard`);
    }
  }, []);

  return (
    <Layout categories={categories}>
      <div className="text-center my-14">
        <div className="max-w-[40rem] mx-auto -mb-6">
          <h1 className="text-3xl md:text-1xl uppercase text-coolBlack font-sans font-semibold">
            Sign in
          </h1>
          <p className="smalltext text-coolBlack antialiased text-md font-light max-w-[24.8rem] mx-auto mt-2 md:mt-6 mb-10">
            Log into your account
          </p>
          {/* const [logindetails, setdetails] = useState({ */}

          <div className="max-w-[25rem] mx-auto flex flex-col">
            <div className=" relative mb-4">
            <input
              className={` rounded-md border border-coolBlack py-2 px-4 text-center text-coolBlack tracking-tight w-full`}
              type="email"
              placeholder="Email"
              value={logindetails.email}
              onChange={(e) => emailHandler(e)}
              onPaste={(e) => emailHandler(e, e.clipboardData.getData("text"))}
            />
            {isvalidEmail ? (
              <></>
            ) : (
              <p className="text-danger  text-red-600">Invalid email</p>
            )}
            {error && !logindetails.email ? (
              <p className="text-danger  text-red-600">Email is required.</p>
            ) : (
              <></>
            )}
            </div>
            <div className=" relative">
              <input
                className={`border border-coolBlack flex-1 py-2 px-4 pr-8 text-center rounded-md text-coolBlack tracking-tight w-full`}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={logindetails.password}
                onChange={(e) =>
                  setdetails({
                    ...logindetails,
                    password: e.target.value.trim(),
                  })
                }
              />

              <button
                type="button"
                className="eye-button"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>

              {error && !logindetails.password ? (
            <p className="text-danger  text-red-600">Password is required.</p>
          ) : (
            <></>
          )}

            </div>
          </div>
   

          <div className="mb-8 mt-8 flex items-center max-w-[20rem] mx-auto">
            <button
              onClick={() => setSelected(!selected)}
              type="button"
              className={`${
                selected
                  ? "bg-coolOrange border border-white"
                  : "border border-coolOrange"
              } rounded h-7 w-9 mr-2`} 
            >
              {/* <GrFormCheckmark color="white" /> */}
              <Checkmark color="white" />
            </button>
            <p className="smalltext text-sm text-coolBlack text-left">
              By clicking "sign in", you agree to Lovie Aurora's terms of      
              conditions and privacy policy.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Button
              text="Sign In"
              color="bg-coolOrange max-w-[28rem]"
              onClick={handleLogin}
            />
            <Link href="/auth/signup">
              <a className="smalltext text-sm  text-coolBlack mt-6">
                Don't have an account?{" "}
                <span className="smalltext font-bold text-coolBlack">Sign up</span>{" "}
              </a>
            </Link>
            <Link href="/auth/password-recovery">
              <a className="smalltext text-sm mt-6 text-coolBlack">Forgot Password?</a>
            </Link>
          </div>
          {/* => Social Media login */}
          {/* <div className="max-w-[28rem] mx-auto border-b mb-8 mt-6 border-coolBlack"></div>
          <p className="text-sm text-coolBlack">
            Or continue using your social media:
          </p>
          <div className="max-w-[28rem] mx-auto my-6">
            <button
              // onClick={() => signIn("facebook")}
              onMouseOver={() => setFacebook(true)}
              onMouseLeave={() => setFacebook(false)}
              className="relative flex border border-borderColor hover:border-coolOrange w-full rounded-full py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group"
            >
              <LogoFacebook
                color={facebook ? "white" : "#363638"}
                height="29px"
                width="29px"
              />
              <span className="absolute text-coolBlack left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white text-sm md:text-base">
                Continue with Facebook
              </span>
            </button>
            <button
              // onClick={() => signIn("google", { redirect: false })}
              onMouseOver={() => setGoogle(true)}
              onMouseLeave={() => setGoogle(false)}
              className="relative flex border text-coolBlack border-borderColor hover:border-coolOrange w-full rounded-full mt-3 py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group"
            >
              <LogoGoogle
                color={google ? "white" : "#363638"}
                height="29px"
                width="29px"
              />
              <span className="absolute left-1/2 top-1/2 text-coolBlack -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white text-sm md:text-base">
                Continue with Google
              </span>
            </button>
            <button
              // onClick={()=>signIn(providers.apple.id)}
              onMouseOver={() => setApple(true)}
              onMouseLeave={() => setApple(false)}
              className="relative flex border border-borderColor hover:border-coolOrange text-coolBlack w-full rounded-full mt-3 py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group"
            >
              <LogoApple
                color={apple ? "white" : "#363638"}
                height="29px"
                width="29px"
              />
              <span className="absolute left-1/2 top-1/2 text-coolBlack -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white text-sm md:text-base">
                Continue with Apple
              </span>
            </button>
          </div>
          <p className="text-sm text-coolBlack">
            We’ll never post without permission
          </p> */}
        </div>
      </div>
    </Layout>
  );
};

export default signin;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  // const categoryRes = await fetch(`${api}/categories`);
  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));
  return {
    props: { categories: categories },
  };
}
