import React, { useState, useEffect } from "react";
import SearchIcon, { SearchIconWhite } from "../../icons/SearchIcon";
import { VscChromeClose } from "react-icons/vsc";

const SearchInput = ({ openMenu, setOpenMenu, search, setSearch }) => {
  const [inputcolor, setInputcolor] = useState(false);

  const handleSearch = () => {
    setSearch("");
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const searchBlurHandler = () => {
    // const searchInput = document.getElementById("searchBar");
    // if (searchInput.hasFocus()) {
    //   console.log("worked");
    // }
    setSearch("what are you looking for?");
  }


  // const changevalueonscroll = () => {
  //   const scrollvalue = document.documentElement.scrollTop;
  //   if (scrollvalue > 80) {
  //     setInputcolor(true);
  //     // var x = document.getElementById("fname");
  //     // x.value = x.value.toUpperCase();
  //     setSearch("what are you looking for?");
  //   } else {
  //     setInputcolor(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changevalueonscroll);
  // }, [inputcolor]);

  useEffect(() => {
    const searchInput = document.getElementById("searchBar");
    document.addEventListener("scroll", () => {
      searchInput.blur();
    })
    return document.removeEventListener("scroll", () => {
      searchInput.blur();
    })
  }, [])



  return (
    <div
      className={
        `px-2 w-[20rem] md:mt-2 mb-2 md:mb-3  border-coolBlack rounded-[32px] flex items-center justify-center focus:bg-coolBlack group relative `
      }
    >
      <input
        id="searchBar"
        autoComplete="off"
        onClick={() => handleSearch()}
        onFocus={() => setSearch("")}
        onBlur={searchBlurHandler}
        onChange={(e) => setSearch(e.target.value)}
        className={
          "border-[2px] md:border-[1px] border-coolBlack h-[2.5rem] md:h-[2.5rem] text-coolBlack py-[0.2rem] px-2 lg:w-[29rem] rounded-[32px] focus:bg-coolBlack focus:text-white flex group-hover:bg-coolBlack group-hover:text-white text-center items-center justify-center focus:outline-none focus:text-start focus:pl-6 w-full self-center transition duration-150 text-[14px] md:text-[12px]"
        }
        value={search}
      // placeholder={search ? search : ""}
      />
      <div className="ml-auto group-hover:hidden block  focus:hidden  w-[30px] h-[25px] md:w-[43px] md:h-[41px] flex items-center justify-center rounded-full absolute  text-coolBlack right-4 cursor-pointer z-10  group-hover:bg-coolBlack focus:bg-coolBlack">
        <SearchIcon className="icon" title="Search"/>
      </div>

      {openMenu ? (
        <div className="ml-auto w-[30px] h-[25px]  md:w-[43px] md:h-[35px] flex items-center justify-center rounded-full absolute  top-2 right-4 md:top-3 cursor-pointer z-10 ">
          <VscChromeClose color="white" size={22} onClick={handleClose} />
        </div>
      ) : (
        <div className="ml-auto group-hover:block hidden  w-[30px] h-[25px] md:w-[42px] md:h-[31px] flex items-center justify-center rounded-full absolute right-2  md:right-2.1 top-[6px] md:top-3.5 cursor-pointer z-10 ">
          <SearchIconWhite />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
