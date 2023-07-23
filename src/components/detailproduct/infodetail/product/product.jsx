import React from "react";
import SimilarProduct from "../../similarproduct/SimilarProduct";

export default function Product({ getArr }) {
  // console.log(getArr, "getArr");
  return (
    <div>
      <SimilarProduct listsimilar={getArr} />
    </div>
  );
}
