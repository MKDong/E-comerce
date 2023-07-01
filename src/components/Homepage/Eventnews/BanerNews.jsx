import React from "react";
import ListImgBanerNews from "./ListImgBanerNews";

import "./Baner.scss";

export default function BanerNews() {
  return (
    <div className="w-full grid grid-cols-1">
      <div className=" col-span-1  h-[18rem] mr-2.5 ">
        <ListImgBanerNews />
      </div>
    </div>
  );
}
