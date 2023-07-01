import React from "react";
import ListImgBaner from "./ListImgBaner";

import "./Baner.scss";
import Article from "../Article/Article";
export default function BanerHomepage() {
  return (
    <div className="w-full grid grid-cols-3">
      <div className=" col-span-2 h-[25.125rem] mr-2.5">
        <ListImgBaner />
      </div>
      <div className="col-span-1 h-[25.125rem]">
        <Article />
      </div>
    </div>
  );
}
