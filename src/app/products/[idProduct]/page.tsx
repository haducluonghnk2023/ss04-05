"use client";
import React from "react";
interface Props {
  params: { idProduct: string };
}
export default function ProductDetail(props: Props) {
  console.log("gia tri props", props);
  const { params } = props;

  return <div>Sản phẩm có id/tên là: {params.idProduct}</div>;
}
// client component
// server component
