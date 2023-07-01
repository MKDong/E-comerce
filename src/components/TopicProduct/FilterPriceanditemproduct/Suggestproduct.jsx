import React from "react";
export default function Suggestproduct({ listproductsuggest }) {
  return (
    <div className="mt-10 Suggestproduct">
      <div>SẢN PHẨM MỚI NHẤT</div>
      <div className="wp-item">
        {listproductsuggest.map((item, index) => {
          return (
            <div key={index} className="div-product">
              <div className="div-img">
                <img
                  src={`https://backoffice.nodemy.vn${item.attributes?.image?.data[0].attributes?.url}`}
                  alt=""
                />
              </div>
              <div className="div-info">
                <div className="info">{item.attributes?.name}</div>
                <div className="newprice pt-0">{item.attributes?.price}đ</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
