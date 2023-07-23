import { Link, Navigate } from "react-router-dom";
import "./Header.scss";
import Logo from "/logo.png";
import { Badge, Dropdown, Space } from "antd";
import {
  ShoppingCartOutlined,
  BarsOutlined,
  AndroidOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import ModalLeft from "./ModalLeft";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/headless";
import InputSearch from "./InputSearch";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Menumega from "../menuMega/Menumega";
import { useSelector } from "react-redux";
export default function Header({ reloadHeader }) {
  const [openBar, setOpenbar] = useState(false);
  const user = useSelector((state) => state.user.value);
  const login = localStorage.getItem("user");
  const [clic, setClic] = useState(false);
  const items = [
    {
      label: (
        <Link style={{ fontSize: 20 }} to="/profile">
          Xem trang cá nhân
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          style={{ color: "red", fontSize: 20 }}
          onClick={() => {
            localStorage.removeItem("user");
            return <Navigate to="/login"></Navigate>;
          }}
        >
          Đăng xuất
        </Link>
      ),
      key: "1",
    },
  ];
  return (
    <>
      {openBar ? <ModalLeft setOpenbar={setOpenbar} /> : ""}
      <div className="header">
        <div className="mainHeader">
          <div className="d-block d-md-none">
            <BarsOutlined
              style={{ fontSize: "30px" }}
              onClick={() => {
                setOpenbar(true);
              }}
            />
          </div>

          <div className="logo">
            <Link to="/">
              <img src={Logo}></img>
            </Link>
          </div>
          <div className="nav none">
            <InputSearch></InputSearch>
            <Menumega reloadmenumega={reloadHeader}></Menumega>
          </div>

          <div className="cart">
            <Link to="/cart">
              <Badge count={5}>
                <ShoppingCartOutlined style={{ fontSize: 30, color: "#fff" }} />
              </Badge>
            </Link>
          </div>

          {login ? (
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space
                  onClick={() => {
                    setClic(!clic);
                  }}
                  className="drop"
                >
                  <h1 style={{ fontSize: 18, color: "orange" }}>
                    Hi, {user?.username}{" "}
                  </h1>
                  <div>{clic ? <UpOutlined /> : <DownOutlined />}</div>
                </Space>
              </a>
            </Dropdown>
          ) : (
            <Link to={"/login"} className="login">
              {" "}
              Đăng nhập{" "}
            </Link>
          )}
        </div>
      </div>
      <div style={{ marginTop: "80px", width: "100vw" }}>
        {/* <Breadcrumbs></Breadcrumbs> */}
      </div>
    </>
  );
}
