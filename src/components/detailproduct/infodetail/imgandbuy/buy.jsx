/* eslint-disable react/prop-types */
import Nameproductandprice from "./Nameproductandprice";
import NumProductAndBuy from "./NumProductAndBuy";

export default function Buy({ getArr }) {
  console.log(getArr, "getArr");
  return (
    <div>
      <Nameproductandprice ArrBuy={getArr} />
      <NumProductAndBuy itemProductInCart={getArr} />
    </div>
  );
}
