import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setvaluesort } from "../../../redux/Slicesort";
import "./dropdown.scss";

const { Option } = Select;

const Filterdropdown = ({ total }) => {
  const [selectedValue, setSelectedValue] = useState("all");
  const valuesort = useDispatch();

  useEffect(() => {
    valuesort(setvaluesort(selectedValue));
  }, [selectedValue]);

  const handleDropdownChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="Dropdown">
      <Select value={selectedValue} onChange={handleDropdownChange}>
        <Option value="up">Giá tăng dần</Option>
        <Option value="down">Giá giảm dần</Option>
        <Option value="all">Mặc định</Option>
      </Select>
      <p>tổng {total} sản phẩm</p>
    </div>
  );
};

export default Filterdropdown;
