import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

const Breadcrumbs = ({ page }) => {
  const router = useRouter();

  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (router?.isReady) {
      const parts = router.asPath.split("/");
      setRoutes(parts);
    }
  }, [router]);

  return (
    <>
      {routes?.length ? (
        <div>
          {page === "auction" ? (
            <div>
              <Link href="/auctions">
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  Homepage
                </a>
              </Link>
              <span className="text-[#363638] text-xs mx-1">|</span>
              <Link href="/women">
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  Auctions
                </a>
              </Link>
              <span className="text-[#363638] text-xs mx-1">|</span>
              <Link href="/auctions">
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  {router.query.slug}
                </a>
              </Link>
            </div>
          ) : page === "pre-order" ? (
            <div>
              <Link href="/categories">
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  Homepage
                </a>
              </Link>
              <span className="text-[#363638] text-xs mx-1">|</span>
              <Link href="/clothing-accessories">
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  Pre-order
                </a>
              </Link>
              <span className="text-[#363638] text-xs mx-1">|</span>
              <Link
                href="/[categories]/[slug]"
                as={`/${router.query.categories}/${router.query.slug}`}
              >
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  {router.query.slug}
                </a>
              </Link>
            </div>
          ) : page === "product-detail" ? (
            <div>
              <Link href={`/${routes[0]}`}>
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  Homepage
                </a>
              </Link>
              <span className="text-[#363638] text-xs mx-1">|</span>
              <Link href={`/${routes[2]}`} as={`/${routes[2]}`}>
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  {routes[2]}
                </a>
              </Link>
              <span className="text-[#363638] text-xs mx-1">|</span>
              <Link
                href={`/categories/${routes[2]}/${routes[3]}`}
                as={`/categories/${routes[2]}/${routes[3]}`}
              >
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  {routes[3]}
                </a>
              </Link>
            </div>
          ) : page === "products-list" ? (
            <div>
              <Link href={`/${routes[0]}`}>
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  Homepage
                </a>
              </Link>
              <span className="text-[#363638] text-xs mx-1">|</span>
              <Link href={`/${routes[1]}`} as={`/${routes[1]}`}>
                <a className="hover:text-coolOrange transition duration-150 text-sm text-[#363638] font-light capitalize">
                  {routes[1]}
                </a>
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Breadcrumbs;
