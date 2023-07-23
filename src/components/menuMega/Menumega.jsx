/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../header/Header.scss";

export default function Menumega({ reloadmenumega }) {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://backoffice.nodemy.vn/api/categories?populate[1]=products",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setMenu(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to="#" className="menu ">
        Danh mục 
        <div className="sub">
          {menu.map((item, index) => {
            return (
                <div key={index}>
                  <Link
                    to={`/${item?.attributes?.slug}`}
                    onClick={() => {
                      reloadmenumega();
                    }}
                    className=" d-md-inline-block d-block"
                  >
                    {item?.attributes?.name}
                  </Link>
                </div>
            );
          })}
        </div>
      </Link>
      <Link to={"/blogs"}>Tin khuyến mãi</Link>
    </>
  );
}
