import "./TotalCart.scss"
import iconPayment from '../../assets/credit-card-payment.png'
import CircleIcon from "@mui/icons-material/Circle";
function TotalCart() {
    return (
      <div className="h-[440px] bg-slate-300 rounded-[5px] relative">
        <h1 className="text-[26px] text-center pt-[25px]">
          Thông tin đơn hàng
        </h1>
        <div className="tottal_custtom border-y-indigo-500 flex justify-between items-center-c px-3 py-2 mt-5 ">
          <h3 className="text-[25px] grow">Tổng tiền: </h3>
          <p className="text-[25px] text-red-500 font-[700] ">290.000VND</p>
        </div>
        <div className="m-3 ">
          <ul style={{ paddingLeft: "1.2em" }}>
            <li>
              <CircleIcon style={{ width: "10px", marginRight: "3px" }} />
              Phí vận chuyển sẽ được tính ở trạng thái thanh toán
            </li>
            <li>
              <CircleIcon style={{ width: "10px", marginRight: "3px" }} />
              Bạn cũng có thể nhập mã giảm giá ở trang thanh toán{" "}
            </li>
          </ul>
        </div>
        <button className="button-buy absolute ">
          <img src={iconPayment} alt="payment.jpg" />
          <span className="lable">Thanh toán ngay</span>
        </button>
        <div className="absolute w-[90%] left-[50%] translate-x-[-50%] bottom-2 bg-slate-50 rounded-[5px] p-2">
          <p>
            <b>Chính sach giao hàng</b>
          </p>
          <p>Hiện tại chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu <b>500.000đ</b></p>
        </div>
      </div>
    );
}

export default TotalCart