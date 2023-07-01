import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import "./Article.scss";
import TabPane from "antd/es/tabs/TabPane";
import axios from "axios";

export default function ListArticle() {
  const [activeTab, setActiveTab] = useState("1");
  const [listblogs, setListblogs] = useState([]);
  const date = (datadate) => {
    const date = new Date(datadate);
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    return formattedDate;
  };
  useEffect(() => {
    axios
      .get(
        "https://backoffice.nodemy.vn/api/blogs?populate=*&sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=4 "
      )
      .then((response) => {
        setListblogs(response.data.data);
      });
  }, []);
  const onChange = (key) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: "1",
      label: `TIN MỚI CẬP NHẬP`,
      children: listblogs.map((item, index) => {
        return (
          <div key={index} className="cursor-pointer">
            <div>
              <img
                src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
                alt=""
              />
            </div>
            <div>
              <div> {item?.attributes?.title}</div>
              <div>{date(item?.attributes?.createdAt)}</div>
            </div>
          </div>
        );
      }),
    },
    {
      key: "2",
      label: `SẢN PHẨM MỚI`,
      children: listblogs.map((item, index) => {
        if (index < 3) {
          return (
            <div key={index}>
              <div>
                <img
                  src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
                  alt=""
                />
              </div>
              <div>
                <div> {item?.attributes?.title}</div>
                <div>{date(item?.attributes?.createdAt)}</div>
              </div>
            </div>
          );
        }
      }),
    },
  ];

  return (
    <div className="h-full">
      <Tabs activeKey={activeTab} onChange={onChange} className="custom-tabs">
        {items.map((item) => (
          <TabPane key={item.key} tab={item.label}>
            {item.children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
