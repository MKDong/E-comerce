import React, { useEffect, useState } from "react";
import "./Listproduct.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { phantrang, phantrangfn } from "../../../redux/SliceProduct";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const listDataCard = JSON.parse(localStorage.getItem("dataCard")) || [];

export default function Listproduct() {
  const [listproduct, setListProduct] = useState([]);
  const [page, setPage] = useState({ page: 1, pageSize: 10, total: 10 });
  const givepage = useDispatch();
  const dataSessions = JSON.parse(sessionStorage.getItem("dataSessions")) || [];
  const currentpage = useSelector((state) => state.page.currentPage);
  const currentpageSize = useSelector((state) => state.page.currentPageSize);
  const goToDetails = useNavigate();
  const listDataCardComponent = listDataCard;
  useEffect(() => {
    setPage((prev) => ({
      ...prev,
      page: currentpage,
      pageSize: currentpageSize,
    }));
  }, [currentpage, currentpageSize]);

  const Fetch = () => {
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
  };
  useEffect(() => {
    Fetch();
  }, [page.page, page.pageSize]);

  useEffect(() => {
    givepage(phantrang(page));
    // givepage(phantrangfn(fnstepage));
  }, [page]);
  function Clicktodetail(item) {
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
    goToDetails(`/sanpham/${item.attributes?.slug}?id=${item.id}`);
  }

  const handleAddToCard = (item) => {
    console.log(item, "item");
    const checkProductHaveInCart = listDataCardComponent.findIndex(
      (i) => {
        return i.id === item.id;
      }
    );

    console.log(checkProductHaveInCart);
     const dataAddCart = {
       id: item.id,
       quantity: 1,
       check: false,
       attributes: {
         name: item.attributes.name,
         orlPrice: item.attributes.orlPrice,
         price: item.attributes.price,
         urlImg: item.attributes?.image?.data[0].attributes?.url,
       },
     };

    if (checkProductHaveInCart !== -1) {
      toast.warning("Sản phẩm đã tồn tại, hãy kiểm tra giỏ hàng!", { autoClose: 2000 });
    } else {
      toast.success("Đã thêm vào giỏ hàng!", { autoClose: 2000 });
      listDataCardComponent.push(dataAddCart);
    }
      
    

    localStorage.setItem("dataCard", JSON.stringify(listDataCardComponent));
  };
  return (
    <div className="Listproduct mx-4">
      <div className="Allproduct h-[3.125rem] text-[35px] text-center rounded-[10px] bg-white mb-[2rem]">
        TẤT CẢ SẢN PHẨM
      </div>
      <div className="content_list_Product grid grid-cols-4 gap-x-4 gap-y-10  text-white">
        {listproduct.map((item, index) => {
          let newprice = +item.attributes?.price;
          let oldprice = +item.attributes?.oldPrice;
          return (
            <div key={index} className="">
              <div class="card">
                <div className="overflow-hidden rounded-[15px]">
                  <img
                    onClick={() => {
                      Clicktodetail(item);
                    }}
                    src={`https://backoffice.nodemy.vn${item.attributes?.image?.data[0].attributes?.url}`}
                    alt=""
                  />
                </div>
                <div class="card-details">
                  <div className="newprice text-title pt-0 text-red-600">
                    {newprice.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </div>
                  <div className="oldprice pt-0 line-through">
                    {oldprice.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </div>
                </div>
                <button
                  class="card-button"
                  onClick={() => handleAddToCard(item)}>
                  Thêm vào giỏ hàng
                </button>
                <ToastContainer />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
