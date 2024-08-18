import { log } from "console";
import React from "react";

export default function page(props: any) {
  const { params } = props;
  console.log(params);

  return <div>Trang chi tiết dự án có ID:{params.id}</div>;
}
