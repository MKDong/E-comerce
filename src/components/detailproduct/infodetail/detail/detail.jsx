import React from "react";
import "./details.scss";
import { Tabs } from "antd";
export default function Detail({ getArr }) {
  const ListDetail = ["MÔ TẢ CHI TIẾT", "ĐÁNH GIÁ", "HƯỚNG DẪN MUA HÀNG"];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="details">
      <Tabs
        onChange={onChange}
        type="card"
        items={ListDetail.map((item, i) => {
          const id = String(i + 1);
          return {
            label: item,
            key: id,
            children: (
              <div className="ParamInfor">
                {`${item}`}
                <p>{getArr[0].attributes.description}</p>
              </div>
            ),
          };
        })}
      />
    </div>
  );
}
