import React from "react";
import "./listtopic.scss";

export default function Listtopicproduct({ listproductProp }) {
  return (
    <div className="Listtopic">
      <div className="grid grid-cols-3 text-white mb-[3.125rem]">
        {listproductProp.map((item, index) => {
          let newprice = +item.attributes?.price;

          let oldprice = +item.attributes?.oldPrice;
          return (
            <div key={index} className="col-span-1 hover cursor-pointer ">
              <div>
                <div>
                  <img
                    src={`https://backoffice.nodemy.vn${item.attributes?.image?.data[0].attributes?.url}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="info">{item.attributes?.name}</div>
              <div className="newprice pt-0">
                {newprice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
              <div className="oldprice pt-0">
                {oldprice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
                đ
              </div>
            </div>
          );
        })}
      </div>
      alo
    </div>
  );
}
