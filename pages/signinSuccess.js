import React from "react";
import Link from "next/link";
import BigLogo from "../components/utils/BigLogo";
import Logo from "../components/utils/Logo";
import { ImFacebook2 } from "react-icons/im";
import gmailIcon from "../public/gmail.png";
import instaIcon from "../public/instagram.png";
import Image from "next/image";
import invite from "../public/invite1.png";

import { newArrivals } from "../data";
import Button from "../components/inputs/Button";

// console.log(newArrivals);

const item = newArrivals[0];

const categories = [];
const SuccessSign = () => {
  const isActived = true;

  return (
    <div>
      <div className="bg-white sticky top-0 z-50 max-w-screen px-4 md:px-8 w-full mx-auto border-b-2 border-gray-400">
        <div className="flex items-center h-[10vh] justify-center ">
          <Link href="/">
            <a className="hidden sm:block">
              <BigLogo />
            </a>
          </Link>

          <Link href="/">
            <a className="block sm:hidden">
              <Logo size="50" />
            </a>
          </Link>
        </div>
      </div>

      <div className="max-w-[900px] w-full flex flex-col justify-center space-y-6 items-center mx-auto">
        <section className="flex border-b-1 border-gray-300 flex-col items-center text-center p-2 py-5 space-y-4 mt-10 shadow-sm w-full max-w-[900px] mx-auto">
          <h1 className="text-xl md:text-3xl font-semibold text-coolBlack font-cool">
            THANKS FOR YOUR REGISTRATION
          </h1>
          <h2 className="text-gray-800 text-md lg:text-lg font-sans">
            In order to create and protect a secured shopping community, we have
            sent your a confirmation letter to (email), please activate your
            account to begin this wonderful journey.
          </h2>
          {!isActived ? (
            <button className="text-lg font-sans font-bold text-white bg-[#337357] hover:bg-[#3c6754] p-2 px-6 rounded-lg">
              Activate Your Account
            </button>
          ) : (
            <>
              <Button
                text="Resend Confirmation Letter"
                color="bg-coolDarkerGreen"
                margin="mt-4"
                padding="py-2 px-5"
              />
              <p className=" font-sans text-coolBlack text-sm">
                In case, you didn’t receive the confirmation, you can ask us to
                send it again
              </p>
            </>
          )}
        </section>

        <section className="space-y-10">
          <h1 className="text-lg text-center text-coolBlack font-semibold">
            Invite Your Friends / Family to Get 10% Off
          </h1>
          {/* cards  */}
          <div className="flex space-x-4 w-full justify-center md:space-x-10">
            <div className="shadow-md border borde-gray-100 rounded-md py-3 w-[100px] flex flex-col items-center cursor-pointer justify-center px-5 py-1 space-y-3 hover:scale-90 transition-all ease-in-out">
              <Image src={gmailIcon} alt="" />
              <p className=" font-bold text-sm ">Mail</p>
            </div>

            <div className="shadow-md border borde-gray-100 rounded-md py-3 w-[100px] flex flex-col items-center cursor-pointer justify-center px-5 py-1 space-y-3 hover:scale-90 transition-all ease-in-out">
              <ImFacebook2 className="text-4xl text-blue-800" />
              <p className=" font-bold text-sm ">Facebook</p>
            </div>

            <div className="shadow-md border borde-gray-100 rounded-md py-3 w-[100px] flex flex-col items-center cursor-pointer justify-center px-5 py-1 space-y-3 hover:scale-90 transition-all ease-in-out">
              <Image src={instaIcon} alt="" />
              <p className=" font-bold text-sm">Instagram</p>
            </div>
          </div>
        </section>

        <section className="pt-10 space-y-10 flex flex-col items-center p-2 md:p-5 py-6 justify-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-coolBlack font-cool ">
            INVITATIONS
          </h1>

          <div>
            <h2 className="text-sm md:text-md  text-center">
              Your friend just gave you 10% off on your first Lovie Aurora
              order!
            </h2>
          </div>

          {/* invite card  */}

          <div className="flex flex-col p-2 md:p-5 text-center  shadow-md items-center justify-center">
            <div className="">
              <Image
                src={invite}
                width={900}
                height={400}
                objectFit="cover"
                alt="jj"
                className="w-full"
              />
            </div>

            <div className="p-4 px-10 font-sans space-y-6 text-lg">
              <h2 className="font-bold text-lg">
                Urbanxinjiang is trying to invite you to join Lovie Aurora.{" "}
              </h2>
              <p className="font-sans font-medium text-coolBlack">
                Lovie Aurora is an online marketplace values quality over
                quantity of products. All products are hand-picked and in-person
                evaluated without shipping fee.
              </p>

              <p>Sounds too good to be true? Check it out!</p>

              <button className="font-semibold text-sm md:text-lg text-white bg-coolDarkGreen px-4 md:px-6 py-2 md:py-3 rounded-lg">
                Register to Get 10% Off Coupon
              </button>

              {/* products */}

              <div className="flex justify-between pt-5 space-x-3 md:space-x-6">
                <div>
                  <Image src={item.image} width={200} height={200} alt="" />
                  <h2 className="text-sm text-coolBlack md:text-lg">
                    {item.title}
                  </h2>
                </div>
                <div>
                  <Image src={item.image} width={200} height={200} alt="" />
                  <h2 className="text-sm text-coolBlack md:text-lg">
                    {item.title}
                  </h2>
                </div>
                <div>
                  <Image src={item.image} width={200} height={200} alt="" />
                  <h2 className="text-sm text-coolBlack md:text-lg">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessSign;
