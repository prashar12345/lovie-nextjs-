import React, { useEffect, useState, useContext } from "react";
import Logo from "../../utils/Logo";
import Link from "next/link";
import { StorefrontOutline } from "react-ionicons";
import { useRouter } from "next/router";
import Editprofile from "../../popups/Editprofile";
import { useRecoilState } from "recoil";
import { editprofilepopup } from "../../../atoms/popup";
import { getFromStorage } from "../../../functions/getFromStorage";
import { UserContext } from "../../../pages/_app";
import ApiKey from "../../../methods/ApiKey";

const Sidebar = () => {
  const user = useContext(UserContext);
  const [profileData, setProfileData] = useRecoilState(editprofilepopup);
  const router = useRouter();
  const [userdetail, setuser] = useState();

  const editProfile = () => {
    setProfileData({ ...profileData, type: "edit", show: true });
  };

  const logout = () => {
    localStorage.clear();
  };
  useEffect(() => {
    if (getFromStorage("userdata")) {
      let data = JSON.parse(getFromStorage("userdata"));
      console.log(data, "checking dat on side bar");
      setuser(data);
    }
  }, []);
  useEffect(() => {
    if (getFromStorage("userdata")) {
      let data = JSON.parse(getFromStorage("userdata"));
      setuser(data);
    }
  }, [user]);

  // const userdetail = () => {
  //   ApiClient.get('user').then(res => {
  //     if (res.success) {
  //       setuser(res.dat)
  //     }
  //   })
  // }
  return (
    <div className="fixed left-0 min-h-screen h-full min-w-[10rem] md:min-w-[20rem] bg-gray-50 px-8 md:px-14 flex flex-col items-center py-6 overflow-y-scroll categories z-50">
      <Editprofile />
      <a href="/">
        <Logo different={true} size="80" />
      </a>

      <div className="mt-8 text-center">
        <p className="text-coolDarkerGreen">Welcome back</p>
        <h1 className="text-coolDarkerGreen text-3xl font-bold">
          {userdetail && userdetail?.fullName}
        </h1>
      </div>

      <div className="relative my-5">
        <div className="relative rounded-full h-24 w-24  overflow-hidden">
          <img className="h-24 w-24 object-cover"
            src={
              userdetail && userdetail?.image
                ? `${ApiKey.api}/images/users/${userdetail.image}`
                : "/profile.jpg"
            }
            alt="profile"
            objectFit="cover"
            layout="fill"
          />
        </div>
        {/* <div className="h-5 w-5 absolute bottom-0 right-2 bg-coolDarkGreen rounded-full"></div> */}
      </div>
      <div>
        <a className="flex cursor-pointer flex-col items-center mb-4">
          <p
            className="text-coolDarkGreen text-sm font-semibold hover:underline"
            onClick={editProfile}
          >
            edit
          </p>
          <p className="text-coolBlack text-sm font-semibold my-5">
            following:
          </p>
          <Link href={`/my-account/following-stores`}>
            <div className="flex items-center">
              <StorefrontOutline color="#5B8B76" height="28px" width="28px" />
              <p className="font-semibold text-coolBlack ml-3 text-sm">
                23 <span className="font-normal">stores</span>
              </p>
            </div>
          </Link>
        </a>
      </div>
      <div className="flex flex-col items-center h-full mt-4">
        <Link href="/my-account/dashboard" as="/my-account/dashboard">
          <div
            className={`${router?.pathname === "/my-account/dashboard" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 cursor-pointer hover:text-coolBlack text-coolBlack`}
          >
            Dashboard
          </div>
        </Link>
        <Link href="/my-account/orders">
          <div
            className={`${router?.pathname === "/my-account/orders" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 cursor-pointer hover:text-coolBlack text-coolBlack`}
          >
            Orders
          </div>
        </Link>
        <Link href={`/my-account/chat/message`}>
          <div
            className={`${router?.pathname === "/my-account/chat/[chatSlug]" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 cursor-pointer hover:text-coolBlack text-coolBlack`}
          >
            Message
          </div>
        </Link>
        <Link href="/my-account/open-a-case">
          <div
            className={`${router?.pathname === "/my-account/open-a-case" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 cursor-pointer hover:text-coolBlack text-coolBlack`}
          >
            Open a case
          </div>
        </Link>
        <Link href="/my-account/settings">
          <div
            className={`${router?.pathname === "/my-account/settings" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 cursor-pointer hover:text-coolBlack text-coolBlack`}
          >
            Your account
          </div>
        </Link>

        <Link href="/home">
          <div
            className={`${router?.pathname === "/my-account/account" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 cursor-pointer hover:text-coolBlack text-coolBlack`}
            onClick={logout}
          >
            Sign out
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
