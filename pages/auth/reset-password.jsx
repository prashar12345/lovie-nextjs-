import Link from "next/link";
import React, { useState } from "react";
import Button from "../../components/inputs/Button";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Checkmark, LogoApple, LogoFacebook, LogoGoogle } from "react-ionicons";
import { categories } from "../../data/categories";
import ApiClient from "../../methods/api/apiClient";
import { toast } from "react-toastify";


const ResetPassword = () => {
    const [passwordView, setPasswordView] = useState(false);
    const [confirmPasswordView, setConfirmPasswordView] = useState(false);
    const [facebook, setFacebook] = useState(false);
    const [google, setGoogle] = useState(false);
    const [apple, setApple] = useState(false);
    const [code, setCode] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false)
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(true);
        if (!code?.length || !password?.length || password !== confirmPassword) {
            return
        }

        let param = {
            code,
            newPassword: password
        }

        ApiClient.put('reset/password', param).then(res => {
            if (res.success) {
                toast.success('Password changed successfully')
                setTimeout(() => {
                    router.push("/auth/signin");
                }, 3000);
            } else {
                toast.error(res?.error?.message)
            }
        })
    };

    return (
        <Layout categories={categories}>
            <div className="text-center my-14">
                <div className="max-w-[40rem] mx-auto -mb-6">
                    <h1 className="text-3xl md:text-5xl uppercase text-coolBlack font-sans font-semibold">
                        
                    </h1>
                    <p className="text-coolBlack antialiased text-md font-light max-w-[24.8rem] mx-auto mt-2 md:mt-6 mb-10">
                        You have recived a code on your mail.
                    </p>
                    <div className="flex mx-auto flex flex-col mb-5">
                        <input
                            placeholder="Enter the code"
                            className={`${code !== "Code" ? "" : "uppercase"
                                } rounded-md border border-coolBlack py-2 px-4 text-center text-coolBlack tracking-tight w-full
                type="text"`}
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        {error && !code ? (
                            <p className="text-danger  text-red-600">Code is required.</p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex relative rounded-md  items-center border border-coolBlack mb-5">
                        <input
                            className={`flex-1 py-2 px-4 text-center rounded-md text-coolBlack tracking-tight w-full`}
                            type={passwordView ? "text" : "password"}
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value.trim())
                            }
                        />

                        <button
                            type="button"
                            className="absolute top-[25%] right-2"
                            onClick={() => setPasswordView(!passwordView)}
                        >
                            {passwordView ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                    </div>
                    <div className="flex relative rounded-md  items-center border border-coolBlack mb-5">
                        <input
                            className={`flex-1 py-2 px-4 text-center rounded-md text-coolBlack tracking-tight w-full`}
                            type={confirmPasswordView ? "text" : "password"}
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value.trim())
                            }
                        />

                        <button
                            type="button"
                            className="absolute top-[25%] right-2"
                            onClick={() => setConfirmPasswordView(!confirmPasswordView)}
                        >
                            {confirmPasswordView ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                    </div>

                    <div className="flex flex-col items-center mt-6">
                        <Button
                            onClick={handleLogin}
                            text={"Save"}
                            color="bg-coolOrange max-w-[28rem]"
                        />
                        <Link href="/auth/signup">
                            <a className="smalltext text-sm mt-6">
                                Don't have an account?{" "}
                                <span className=" smalltext font-bold ">Sign up</span>{" "}
                            </a>
                        </Link>
                    </div>
                    <div className="max-w-[28rem] mx-auto mb-8 mt-6 border-borderColor"></div>
                    <div className="max-w-[28rem] mx-auto border-b mb-8 mt-6 border-borderColor"></div>
                    <p className="text-sm text-coolBlack">
                        Or continue using your social media:
                    </p>
                    <div className="max-w-[28rem] mx-auto my-6">
                        <button
                            onMouseOver={() => setFacebook(true)}
                            onMouseLeave={() => setFacebook(false)}
                            className="relative flex border border-borderColor w-full rounded-full py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group truncate text-sm md:text-base"
                        >
                            <LogoFacebook
                                color={facebook ? "white" : "black"}
                                height="29px"
                                width="29px"
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
                                height="29px"
                                width="29px"
                            />
                            <span className="absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white text-sm md:text-base">
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
                                height="29px"
                                width="29px"
                            />
                            <span className="absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white text-sm md:text-base">
                                Continue with Apple
                            </span>
                        </button>
                    </div>
                    <p className="text-sm text-coolBlack">
                        We’ll never post without permission
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default ResetPassword;
