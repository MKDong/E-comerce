import { Button, InputNumber, Table } from "antd";
import "./Cart.css";
import { Link } from "react-router-dom";
export default function Cart() {
  const a = JSON.parse(localStorage.getItem("odered"));
  console.log(a);
  const products = [
    {
      name: "Laptop gaming ASUS FX507ZU4 FX507ZU4",
      quantity: 1,
      price: "18820000",
    },
    {
      name: "Laptop gaming DELL FX507ZU4 FX507ZU4",
      quantity: 2,
      price: "255888",
    },
    {
      name: "Laptop gaming X FX507ZU4 FX507ZU4",
      quantity: 1,
      price: "9877777",
    },
    {
      name: "Laptop gaming X FX507ZU4 FX507ZU4",
      quantity: 3,
      price: "9877777",
    },
  ];
  const newProducts = products.map((item) => {
    item.totalAll = item.quantity * item.price;
    return item;
  });
  return (
    <>
      <Table
        style={{ marginBottom: "100px" }}
        columns={[
          {
            title: "Sản phẩm",
            dataIndex: "name",
            render: (value) => {
              return (
                <>
                  <div className="row product">
                    <div className="col-md-5 imgProduct">
                      <img src="girl.jpg" alt="" />
                    </div>
                    <div className="col-md-7">
                      <h1 style={{ color: "green", fontSize: 25 }}>{value}</h1>
                    </div>
                  </div>
                </>
              );
            },
          },
          {
            title: "Số lượng",
            dataIndex: "quantity",
            render: (value, record) => {
              return (
                <InputNumber
                  defaultValue={value}
                  min={1}
                  max={10}
                  style={{ fontSize: 25 }}
                  onChange={(value) => {
                    newProducts.map((item) => {
                      item.totalAll = item.price * value;
                      return item;
                    });
                  }}
                ></InputNumber>
              );
            },
          },
          {
            title: "Giá",
            dataIndex: "price",
            render: (value) => {
              return (
                <h19
                  style={{ color: "red", fontSize: 25, textAlign: "center" }}
                >
                  {(+value)?.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h19>
              );
            },
          },
          {
            title: "Tổng tiền",
            dataIndex: "totalAll",
            render: (value) => {
              return (
                <h1 style={{ color: "red", fontSize: 25, textAlign: "center" }}>
                  {value?.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h1>
              );
            },
          },
        ]}
        dataSource={newProducts}
        // summary={(data)=>{
        //     const total = data.reduce((pre,current)=>{
        //         return pre+current.total
        //     },0);
        //     return <h1>Tổng đơn hàng: {total}</h1>
        // }}
        pagination={false}
      />
      <div style={{ textAlign: "right", marginBottom: 50 }}>
        <button
          style={{
            backgroundColor: "orange",
            fontSize: 25,
            padding: 10,
            color: "white",
          }}
        >
          <Link to="/">Tiếp tục mua hàng</Link>
        </button>
      </div>
    </>
  );
}
