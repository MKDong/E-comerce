import React, { useState } from "react";
import AddToCart from "./AddToCart";
import Swal from "sweetalert2";
import {
  FacebookOutlined,
  TwitterOutlined,
  MailOutlined,
  PictureOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
export default function NumProductAndBuy( itemProductInCart ) {
  console.log(itemProductInCart, "itemProductInCart");
  const handleAlertAddToCart = () => {
   
  }

  return (
    <>
      <div onClick={handleAlertAddToCart} className="Buy cursor-default">
        <AddToCart itemProductInCart={itemProductInCart} />
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
