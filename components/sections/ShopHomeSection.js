import React from "react";
import CategoryLayout from "../layout/CategoryLayout";
import Heading from "../Typography/Heading";
import Link from "next/link";

const ShopHomeSection = ({ items ,userid,setAddwishlist,isAddedWishlist }) => {
  return (
    <section className="mt-[5rem]">
      <Link href="/home">
        <a>
          <Heading h2 text="Shop Home" margin="mb-4" />
        </a>
      </Link>

      <CategoryLayout items={items} userid={userid} setAddwishlist={setAddwishlist} isAddedWishlist={isAddedWishlist}/>
    </section>
  );
};

export default ShopHomeSection;
