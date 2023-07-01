import React from "react";
import "./Advertise.scss";
export default function Advertise() {
  return (
    <div className="Advertise h-[10rem] mt-12 mb-[2rem] grid grid-cols-3 flex gap-[1.875rem]">
      <div className="col-span-1">
        <div>
          <div>
            <p>01</p>
          </div>
        </div>
        <div>
          <span>UY TÍN HÀNG ĐẦU</span>
          <p>
            Với kinh nghiệm hơn 15 năm trong ngành điện thoại,laptop,máy tính
            bảng, chúng tôi tự tin mang đến cho quý khách những sản phẩm tốt
            nhất
          </p>
        </div>
      </div>{" "}
      <div className="col-span-1">
        <div>
          <div>
            <p>02</p>
          </div>
        </div>
        <div>
          <span>HẬU MÃI HÀNG ĐẦU</span>
          <p>
            Chế độ bảo hành sản phẩm lên đến 6 năm và ưu đãi vĩnh viễn cho tất
            cả sản phẩm khi mua tại cửa hàng
          </p>
        </div>
      </div>{" "}
      <div className="col-span-1">
        <div>
          <div>
            <p>03 </p>
          </div>
        </div>
        <div>
          <span>ĐỔI HÀNG DỄ DÀNG</span>
          <p>
            Điện thoại bị vỡ? bị lỗi phần mềm? Người thân không thích? Đừng lo!
            Bạn có thể đổi hàng trong vòng 7 ngày
          </p>
        </div>
      </div>
    </div>
  );
}
