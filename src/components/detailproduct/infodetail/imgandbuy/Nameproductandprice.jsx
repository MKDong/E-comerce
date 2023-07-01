import React from "react";

export default function Nameproductandprice({ ArrBuy }) {
  console.log(ArrBuy);
  console.log(ArrBuy[0].attributes.name);
  let Price = parseInt(ArrBuy[0].attributes.price);

  return (
    <div className="Nameproducandprice">
      <div>
        <span>{ArrBuy[0].attributes.name}</span>
        <span>
          {Price.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </div>
      <div>
        <i class="fa-solid fa-gift"></i>
        <span>Khuyến mại</span>
      </div>
      <div className="listgift">
        <ul>
          <div>
            <li>Bao test 10 ngày ở bất kỳ đâu, lỗi 1 đổi 1.</li>
          </div>
          <div>
            <li>Cam kết CHÍNH HÃNG 100%.</li>
          </div>
          <div>
            <li>Thay pin miễn phí trọn đời</li>
          </div>
          <div>
            <li>MIỄN PHÍ vệ sinh trong vòng 1 năm.</li>
          </div>
          <div>
            <li>Tặng ngay 1 móc khóa rồng VÀNG trị giá 500.000 đồng</li>
          </div>
        </ul>
      </div>
      <div>
        <span>› Mã sản phẩm: {ArrBuy[0].id}</span>
        <span>› Sản phẩm có tại văn phòng Việt Nam</span>
        <span>› Miễn phí vận chuyển</span>
        <span>› Bảo hành 3 năm</span>
      </div>
    </div>
  );
}
