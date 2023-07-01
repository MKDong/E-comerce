import React from "react";
import Infordetail from "./infodetail/infodetail";
import "./Detailproduct.scss";
import Listproduct from "../Homepage/Listproduct/Listproduct";
export default function Detailproduct() {
  return (
    <div className="Detaiproduct">
      <Infordetail />
      <Listproduct />
    </div>
  );
}
