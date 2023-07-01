import React from "react";

import Contact from "./Contact";
import Filterrange from "./Filterrange";
import "./FilterPriceanditemproduct.scss";
import Suggestproduct from "./Suggestproduct";
export default function FilterPriceanditemproduct({ listproductProp }) {
  return (
    <div className="text-white w-[25%] ml-6 text-left Filteranditem">
      <Contact />
      <Filterrange />
      <Suggestproduct listproductsuggest={listproductProp} />
    </div>
  );
}
