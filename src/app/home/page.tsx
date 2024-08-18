"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Home() {
  const pathName = usePathname();
  console.log("gia tri pathName", pathName);

  return (
    <div>
      Đây là trang chủ! <br />
      <Link
        className={pathName == "/home/about" ? "active" : ""}
        href={"/home/about"}
      >
        about
      </Link>
      <br />
      <Link
        className={pathName == "/home/contact" ? "active" : ""}
        href={"/home/contact"}
      >
        contact
      </Link>
      <Link
        className={pathName == "/auth/login" ? "active" : ""}
        href={"/auth/login"}
      >
        login
      </Link>
    </div>
  );
}
