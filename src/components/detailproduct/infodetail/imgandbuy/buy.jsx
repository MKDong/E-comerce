import React from "react";
import Nameproductandprice from "./Nameproductandprice";
import NumProductAndBuy from "./NumProductAndBuy";

export default function Buy({ getArr }) {
  return (
    <div>
      <Nameproductandprice ArrBuy={getArr} />
      <NumProductAndBuy ArrBuy={getArr} />
    </div>
  );
}
