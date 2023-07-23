import { Pagination } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changepage } from "../../../redux/SliceProduct";
import "./Listproduct.scss";
const onChange = (pageNumber) => {
  // console.log("Page: ", pageNumber);
};

export default function Paginationproduct() {
  const dispatch = useDispatch();
  const getpage = useSelector((state) => state?.page?.value);
  // const getfnpage = useSelector((state) => state.page.function);
  return (
    <>
      <Pagination
        className="Pagination"
        showQuickJumper
        total={getpage.total}
        current={getpage.page}
        showSizeChanger
        pageSize={getpage.pageSize}
        showTotal={(total, range) => `${total} sản phẩm ${range}`}
        onChange={(page, pageSize) => {
          dispatch(changepage({ page, pageSize }));
        }}
      />
    </>
  );
}
