"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function page() {
  const isCheckLogin = true;
  const router = useRouter();
  const loginUser = () => {
    if (isCheckLogin) {
      router.push("/home");
    }
  };
  return (
    <div>
      Trang đăng nhập <br />
      <button onClick={loginUser}> login</button>
    </div>
  );
}
