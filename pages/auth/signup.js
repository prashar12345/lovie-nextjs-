import React, { useState, useEffect } from "react";
import Button from "../../components/inputs/Button";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


import {
  Checkmark,
  EyeOffOutline,
  EyeOutline,
  LogoApple,
  LogoFacebook,
  LogoGoogle,
} from "react-ionicons";
import Link from "next/link";
import CreateProfile from "../../components/popups/ProfilePopup";
import BuyerPupups from "../../components/popups/BuyerPupups";
import { categories } from "../../data/categories";
import ApiClient from "../../methods/api/apiClient";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import methodModel from "../../methods/methods";

const Signup = () => {
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [apple, setApple] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [showconfPass, setShowconfPass] = useState(true);
  const [passwordmatched, setPasswordmatched] = useState(false);
  const [confirmPass, setconfirmpass] = useState();
  const [isvalidEmail, setisValidemail] = useState(true);
  const [userDetails, setuserdetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    role: "",
    password: "",
  });


  const router = useRouter();
  const { redirect } = router.query;


  const handlepassword = (e) => {
    userDetails.confirmPassword = e.target.value;
    if (userDetails.password === userDetails.confirmPassword) {
      setuserdetails({ ...userDetails, confirmPassword: e.target.value });
      setPasswordmatched(true);
    } else {
      setPasswordmatched(false);
    }
  };

  const emailHandler = (e, text) => {
    let val = e.target.value;
    if (!val) {
      setuserdetails({ ...userDetails, email: text });
    } else {
      setuserdetails({ ...userDetails, email: e.target.value?.trim() });
    }
    let isvalid = false;
    if (val.length) {
      isvalid = methodModel.emailvalidation(val);
    } else {
      isvalid = true;
    }
    setisValidemail(isvalid);
  };

  const handleSignUp = async (e) => {
    setError(true);

    if (
      !userDetails?.firstName ||
      !userDetails?.lastName ||
      !userDetails?.email ||
      !userDetails?.mobileNo ||
      !userDetails.password ||
      userDetails?.password !== confirmPass
    ) {
      return;
    }

    e.preventDefault();
    let value = {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      mobileNo: userDetails.mobileNo,
      password: userDetails.password,
    };
    ApiClient.post("register", value).then((res) => {
      if (res.success) {
        toast.success("Verification link has been sent to your mail.");
        setTimeout(() => {
          router.push(redirect || "/auth/signin");
        }, 4000);
      } else {
        toast.error(res.error.message);
      }
    });
  };

  return (
    <Layout categories={categories}>
      {/* Same as */}
      <CreateProfile />
      <BuyerPupups />
      <div className="text-center my-14 ">
        <div className="max-w-[40rem] mx-auto -mb-6">
          <h1 className="text-3xl md:text-4xl uppercase text-coolBlack font-sans font-semibold">
            Join the club
          </h1>
          <p className="smalltext text-coolBlack antialiased text-md font-light max-w-[24.8rem] mx-auto mt-2 md:mt-6 mb-6">
            Sign up to Lovie Aurora today for exclusive access to 
            <p>specialoffers, discounts, events and more.</p>
          </p>
          <div
            className="max-w-[25rem] mx-auto flex flex-col"
            style={{ color: "#363638" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex relative rounded-md  mb-4 items-center border border-coolBlack">
                <input
                  // onFocus={() => setPassword("")}
                  className={` flex-1 py-2 px-8 text-center rounded-md tracking-tight w-full`}
                  type={"text"}
                  placeholder="First Name"
                  // style={{ color: "#363638" }}
                  // value={password}
                  onChange={(e) =>
                    setuserdetails({
                      ...userDetails,
                      firstName: e.target.value.trim(),
                    })
                  }
                />
              </div>
              <div className="flex relative rounded-md  mb-4 items-center border border-coolBlack">
                <input
                  // onFocus={() => setConfirmPassword("")}
                  className={` text-coolBlack  flex-1 py-2 px-8 text-center rounded-md text-coolBlack tracking-tight w-full`}
                  type={"text"}
                  placeholder="Last Name"
                  // value={confirmPassword}
                  onChange={(e) =>
                    setuserdetails({
                      ...userDetails,
                      lastName: e.target.value.trim(),
                    })
                  }
                />
              </div>
            </div>
            <div className=" relative mb-4">
            <input
              className={` border border-coolBlack flex-1 py-2 px-8 text-center rounded-md text-coolBlack tracking-tight w-full`}
              type="email"
              placeholder="Email"
              style={{ color: "#363638" }}
              // onFocus={() => setEmail("")}
              // value={email}
              onChange={(e) => emailHandler(e)}
              onPaste={(e) => emailHandler(e, e.clipboardData.getData("text"))}
            />
            {isvalidEmail ? (
              <></>
            ) : (
              <p className="text-danger  text-red-600 ">Invalid email</p>
            )}
            {error ? <>{error}</> : <></>}

              </div>

            <div className="  mb-4">
              <div className="relative">
              <input
                className={`border border-coolBlack flex-1 py-2 px-4 pr-8 text-center rounded-md text-coolBlack tracking-tight w-full`}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                minLength="8"
                style={{ color: "#363638" }}
                value={userDetails.password}
                onChange={(e) =>
                  setuserdetails({
                    ...userDetails,
                    password: e.target.value.trim(),
                  })
                }
                required
              />
              <button
                type="button"
                className="eye-button"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
              </div>
              {userDetails.password ? (
              userDetails.password.length >= 8 ? (
                <></>
              ) : (
                <p className="text-danger  text-red-600 ">min length for password is 8</p>
              )
            ) : (
              <></>
            )}

            </div>
        

            <div className=" mb-4">
            <div className="relative">
              <input
                className={`border border-coolBlack flex-1 py-2 px-4 pr-8 text-center rounded-md text-coolBlack tracking-tight w-full`}
                type={showconfPass ? "text" : "password"}
                placeholder="Confirm Password"
                style={{ color: "#363638" }}
                minLength="8"
                value={confirmPass}
                onChange={(e) => {
                  let confimrpass = e.target.value.trim();
                  setconfirmpass(confimrpass);
                  if (confimrpass === userDetails.password) {
                    setPasswordmatched(true);
                  } else {
                    setPasswordmatched(false);
                  }
                }}
                required
              />
              <button
                type="button"
                className="eye-button"
                onClick={() => setShowconfPass(!showconfPass)}
              >
                {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
              </div>
              {confirmPass ? (
              passwordmatched ? (
                <></>
              ) : (
                <p className="text-danger  text-red-600 ">password not matched</p>
              )
            ) : (
              <></>
            )}
            </div>

         
            <input
              className={` rounded-md border border-coolBlack py-2 px-8 text-center  text-coolBlack tracking-tight w-full mb-4`}
              type="number"
              placeholder="MobileNo."
              style={{ color: "#363638" }}
              value={userDetails.mobileNo}
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  setuserdetails({
                    ...userDetails,
                    mobileNo: e.target.value.trim(),
                  });
                }
              }}
            />
          </div>
          <div className="mb-8 mt-8 flex items-center max-w-[21rem] mx-auto">
            <button
              onClick={() => setSelected(!selected)}
              type="button"
              className={`${
                selected
                  ? "bg-coolDarkGreen border border-white"
                  : "border border-coolDarkGreen"
              } rounded h-7 w-8 px-1.5 mr-2.5`}
            >
              <Checkmark color="white" />
            </button>
            <p className="smalltext text-sm text-coolBlack text-left">
              Yes, I want to receive the Lovie Aurora newsletter,as well as
            hear about special offers, events, news and updates.</p>
            
          </div>
          <div className="flex flex-col items-center">
            {passwordmatched ? (
              <Button
                onClick={handleSignUp}
                text="Sign Up"
                color="bg-coolDarkGreen max-w-[32rem]"
              />
            ) : (
              <Button text="Sign Up" color="bg-coolDarkGreen max-w-[32rem]" />
            )}

            <Link href="/auth/signin">
              <a className="smalltext text-sm mt-6 text-coolBlack">
                Already have an account?{" "}
                <span className="font-bold text-coolBlack">Sign in</span>{" "}
              </a>
            </Link>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
