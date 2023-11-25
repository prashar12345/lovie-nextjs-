import React, { useState, useEffect } from "react";

import { Breadcrumbs, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NextBreadcrumbs() {
  const router = useRouter();
  const [breadcrumb, setBreadcrumbs] = useState();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumb = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumb);
  }, [router.asPath]);
  return (
    <Breadcrumbs
      separator="|"
      aria-label="breadcrumb"
      className="mt-16 text-sm text-[#363638] hover:text-coolOrange capitalize font-sans"
    >
      <BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
        Home
      </BreadcrumbItem>
      {breadcrumb &&
        breadcrumb.map((breadcrumb) => (
          <BreadcrumbItem
            key={breadcrumb.href}
            href={breadcrumb.href}
            isCurrent={breadcrumb.isCurrent}
          >
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
    </Breadcrumbs>
  );
}

export const BreadcrumbItem = ({ children, href, isCurrent, ...props }) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        <a
          className="hover:text-coolOrange text-sm text-[#363638] font-light capitalize font-sans"
          aria-current={isCurrent ? "page" : "false"}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};
