import React, { useEffect, useState } from "react";
import SearchInput from "../../inputs/SearchInput/SearchInput";
import NavbarItems from "./NavbarItems";
import Categories from "./Categories/Categories";
import Link from "next/link";
import Logo from "../../utils/Logo";
import Drawer from "../Drawer";
import BigLogo from "../../utils/BigLogo";
// import SearchDropdown from "../SearchDropdown";
import SearchDropdown from "../../Categorydropdowns/SearchDropdown";
import CategorieswithDropdowns from "./Categories/CategorieswithDropdowns";

const Navbar = ({ categories }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("what are you looking for?");

  return (
    <div className="bg-white text-coolBlack relative top-[-2px] z-50 pt-4 md:pt-6  px-4 md:px-[9.52655%] w-full mx-auto  ">
      <div className="flex items-center h-[10vh] justify-start">
        <Link href="/">
          <a className="hidden md:block">
            <img
              src="/HeaderLogo.svg"
              alt=""
              className="md:h-[25px] lg:h-[35px]"
            />
          </a>
        </Link>

        <Link href="/">
          <a className="block md:hidden">
            <Logo size="30" />
          </a>
        </Link>
        <div className="mr-8 ml-auto lg:block hidden">
          <SearchInput
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <NavbarItems categories={categories} />
      </div>
      <div className="hidden lg:block">
        {/* <Categories categories={categories} /> */}
        <CategorieswithDropdowns />
      </div>
      <div className="lg:mr-8 ml-auto lg:hidden flex items-center justify-center my-1">
        {/* <Drawer categories={categories} /> */}
        <SearchInput
          search={search}
          setSearch={setSearch}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </div>
      {/* {openMenu && (
        <SearchDropdown
          search={search}
          setSearch={setSearch}
          setOpen={setOpenMenu}
          open={openMenu}
          categories={categories}
          setOpenMenu={setOpenMenu} />
      )} */}
      {openMenu && (
        <SearchDropdown
          search={search}
          setSearch={setSearch}
          setOpen={setOpenMenu}
          open={openMenu}
          categories={categories}
          setOpenMenu={setOpenMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
