"use client";
import React from "react";

export default function post(props: any) {
  const { params } = props;
  console.log(params);

  return <div>Danh sách bài viết của user Id là:{params.idPost}</div>;
}
