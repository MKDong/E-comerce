import React, { useState } from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  MailOutlined,
  PictureOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
export default function NumProductAndBuy({ ArrBuy }) {
  const datalocal = JSON.parse(localStorage.getItem("odered")) || [];
  console.log(ArrBuy);
  const [number, setNumber] = useState(1);
  function DownNumber() {
    if (number === 0) {
      return;
    }
    setNumber(number - 1);
  }
  function UpNumber() {
    setNumber(number + 1);
  }
  function Addproduct() {
    console.log("render");
    const ProductAndNumber = { ...ArrBuy, numberProduct: number };
    console.log(datalocal);
    if (datalocal.length === 0) {
      datalocal.push(ProductAndNumber);
      console.log(123);
    } else {
      let dataINDEX = datalocal.findIndex((item) => {
        return item[0].id === ArrBuy[0].id;
      });
      console.log(dataINDEX);
      if (dataINDEX === -1) {
        datalocal.push(ProductAndNumber);
      } else if (dataINDEX !== -1) {
        itemlocal.numberProduct = itemlocal.numberProduct + number;
      }
    }
    localStorage.setItem("odered", JSON.stringify(datalocal));
  }
  console.log("render");
  return (
    <>
      <div className="NumAndBuy">
        <div>
          <div onClick={DownNumber}>-</div>
          <div>
            <span>{number}</span>
          </div>
          <div onClick={UpNumber}>+</div>
        </div>
        <button onClick={Addproduct}>MUA HÀNG NGAY</button>
      </div>
      <div className="Buy">
        <p>MUA HÀNG NGAY</p>
        <p>Gọi điện xác nhận và giao hàng tận nơi</p>
      </div>
      <div className="logo">
        <div className="frame">
          <FacebookOutlined />
        </div>
        <div className="frame">
          <TwitterOutlined />
        </div>
        <div className="frame">
          <MailOutlined />
        </div>
        <div className="frame">
          <PictureOutlined />
        </div>
        <div className="frame">
          <GoogleOutlined />
        </div>
      </div>
    </>
  );
}
