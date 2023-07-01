import React, { useEffect, useState } from "react";
import "./Listproduct.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { phantrang, phantrangfn } from "../../../redux/SliceProduct";
import { useNavigate } from "react-router-dom";
export default function Listproduct() {
  const [listproduct, setListProduct] = useState([]);
  const [page, setPage] = useState({ page: 1, pageSize: 10, total: 10 });
  const givepage = useDispatch();
  const dataSessions = JSON.parse(sessionStorage.getItem("dataSessions")) || [];
  const currentpage = useSelector((state) => state.page.currentPage);
  const currentpageSize = useSelector((state) => state.page.currentPageSize);
  const goToDetails = useNavigate();
  const [ren, setRen] = useState(true);
  useEffect(() => {
    setPage((prev) => ({
      ...prev,
      page: currentpage,
      pageSize: currentpageSize,
    }));
  }, [currentpage, currentpageSize]);
  useEffect(() => {
    axios
      .get(
        `https://backoffice.nodemy.vn/api/products?populate=*&pagination[page]=${page.page}&pagination[pageSize]=${page.pageSize}&sort[0]=price%3Aasc&sort[1]=name%3Aasc`
      )
      .then((response) => {
        setListProduct(response.data.data);

        let total = response.data.meta.pagination.total;
        setPage((prev) => ({
          ...prev,
          total,
        }));
      });
  }, [page.page, page.pageSize]);

  useEffect(() => {
    givepage(phantrang(page));
    // givepage(phantrangfn(fnstepage));
  }, [page]);
  function Clicktodetail(item) {
    console.log("hih");

    if (dataSessions.lenght === 0) {
      dataSessions.push(item);
    } else {
      let data = dataSessions.findIndex(
        (itemlocal) => itemlocal.id === item.id
      );
      if (data === -1) {
        dataSessions.push(item);
      }
    }
    sessionStorage.setItem("dataSessions", JSON.stringify(dataSessions));
    console.log(dataSessions);
    goToDetails(`/sanpham/${item.attributes?.slug}?id=${item.id}`);
  }
  return (
    <div className="Listproduct">
      <div className="Allproduct h-[3.125rem] bg-white mb-[2rem]">
        TẤT CẢ SẢN PHẨM
      </div>
      <div className="grid grid-cols-4 text-white mb-[3.125rem]">
        {listproduct.map((item, index) => {
          let newprice = +item.attributes?.price;
          console.log();
          let oldprice = +item.attributes?.oldPrice;
          return (
            <div
              key={index}
              onClick={() => {
                Clicktodetail(item);
              }}
              className="col-span-1 hover cursor-pointer "
            >
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
