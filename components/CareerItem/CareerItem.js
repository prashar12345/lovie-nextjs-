import React from "react";
import Link from "next/link";

const CareerItem = ({ category, jobs, margin }) => {
  return (
    <div className={`${margin}`}>
      <div>
        <h3 className="text-xl md:text-2xl lg:text-3xl text-coolBlack border-b pb-1 font-bold mb-6 pb-6 border-coolBlack">
          {category}
        </h3>
        {jobs.map((job) => (
          <Link key={job} href={`/career/[slug]`} as={`/career/${job}`}>
            <a className="text-coolBlack font-md text-[12px] md:text-[20px] mb-6 block">{job}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerItem;
