import Link from "next/link";
import React, { useState } from "react";
import Button from "../../components/inputs/Button";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import { Checkmark, LogoApple, LogoFacebook, LogoGoogle } from "react-ionicons";
import { categories } from "../../data/categories";
import ApiClient from "../../methods/api/apiClient";
import { toast } from "react-toastify";


const PasswordRecovery = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [apple, setApple] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("Password");
  const [emailsended, setmailsended] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter();
  const { redirect } = router.query;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(true);
    if (!email?.length) {
      return
    }

    let param = {
      email: email
    }

    ApiClient.post('user/forgot/password', param).then(res => {
      if (res.success) {
        setmailsended(true)
        toast.success('Verification code sent to your mail.')
        setTimeout(() => {
          router.push("/auth/reset-password");
        }, 3000);
      } else {
        toast.error(res.error.message)
      }
    })
  };

  return (
    <Layout categories={categories}>
      <div className="text-center my-14">
        <div className="max-w-[40rem] mx-auto -mb-6">
          <h1 className="text-3xl md:text-4xl uppercase text-coolBlack font-sans font-semibold">
            Reset your password
          </h1>
          <p className="text-coolBlack smalltext antialiased text-md font-light max-w-[24.8rem] mx-auto mt-2 md:mt-6 mb-10">
            First verify its you
          </p>
          <div className="max-w-[25rem] mx-auto flex flex-col">
            <input
              placeholder="Enter your email"
              className={`${email !== "Email" ? "" : "uppercase"
                } rounded-md border border-coolBlack py-2 px-4 text-center text-coolBlack tracking-tight w-full
                type="email`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && !email ? (
              <p className="text-danger  text-red-600">Email is required.</p>
            ) : (
              <></>
            )}
          </div>
          {error ? <div className="error">{error}</div> : <></>}
          <div className="flex flex-col items-center mt-6">
            <Button
              onClick={handleLogin}
              text={emailsended ? "Check your email" : "Send verification code"}
              color="bg-coolOrange max-w-[28rem]"
            />
            <Link href="/auth/signup">
              <a className="text-sm mt-6">
                Don't have an account?{" "}
                <span className="font-bold">Sign up</span>{" "}
              </a>
            </Link>
          </div>
          <div className="max-w-[23rem] mx-auto mb-8 mt-6 border-borderColor"></div>
          <div className="max-w-[20rem] mx-auto border-b mb-8 mt-6 border-borderColor"></div>
          <p className="text-sm text-coolBlack smalltext">
            Or continue using your social media:
          </p>
          <div className="max-w-[20rem] mx-auto my-6">
            <button
              onMouseOver={() => setFacebook(true)}
              onMouseLeave={() => setFacebook(false)}
              className="relative flex border border-borderColor w-full rounded-full py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group truncate text-sm"
            >
              <LogoFacebook
                color={facebook ? "white" : "black"}
                height="23px"
                width="23px"
              />
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white">
                Continue with Facebook
              </span>
            </button>
            <button
              onMouseOver={() => setGoogle(true)}
              onMouseLeave={() => setGoogle(false)}
              className="relative flex border border-borderColor w-full rounded-full mt-3 py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group md:text-base"
            >
              <LogoGoogle
                color={google ? "white" : "black"}
                height="23px"
                width="23px"
              />
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white text-sm ">
                Continue with Google
              </span>
            </button>
            <button
              onMouseOver={() => setApple(true)}
              onMouseLeave={() => setApple(false)}
              className="relative flex border border-borderColor w-full rounded-full mt-3 py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group"
            >
              <LogoApple
                color={apple ? "white" : "black"}
                height="23px"
                width="23px"
              />
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white text-sm ">
                Continue with Apple
              </span>
            </button>
          </div>
          <p className="text-sm text-coolBlack smalltext">
            We’ll never post without permission
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PasswordRecovery;
