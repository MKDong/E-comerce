import React from "react";
import Sliceimg from "./imgandbuy/sliceimg";
import Buy from "./imgandbuy/buy";
import Product from "./product/product";
import Detail from "./detail/detail";

import SliceProduct from "./slice/sliceproduct";
import { useSearchParams } from "react-router-dom";

export default function Infordetail() {
  let ArrdatafromSession = JSON.parse(sessionStorage.getItem("dataSessions"));
  const [Searchparam] = useSearchParams();
  const idParam = Searchparam.get("id");
  const Arrdatadetail = ArrdatafromSession.filter(
    (item) => item.id === parseInt(idParam)
  );
  const Arrdataconcat = Arrdatadetail.concat(Arrdatadetail);
  // console.log(Arrdatadetail, "Arrdatadetail");
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4 border-r-[1px]">
        <div className="grid grid-cols-7 gap-x-[1.1rem] mr-5">
          <div className="col-span-3 Sliceimg">
            <Sliceimg getArr={Arrdataconcat} />
          </div>
          <div className="col-span-4">
            <Buy getArr={Arrdatadetail} />
          </div>
        </div>
        <div className="col-span-7 detailparent mb-3">
          <Detail getArr={Arrdatadetail} />
        </div>
        <div className="col-span-7 sliceproduct mb-5">
          <SliceProduct getArr={ArrdatafromSession} />
        </div>
      </div>
      <div className="col-span-2 ">
        <Product getArr={ArrdatafromSession} />
      </div>
    </div>
  );
}
