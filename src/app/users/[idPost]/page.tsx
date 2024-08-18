import React from "react";

export default function IdPost(props: any) {
  const { params } = props;
  console.log(params);

  return <div>userId:{params.idPost}</div>;
}
