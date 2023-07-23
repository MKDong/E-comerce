import CartProduct from "./CartProduct";
import TotalCart from "./TotalCart";
import './Cart.scss'
function Cart() {
  return (
    <div className="flex justify-center ">
      <div className="wb-cart grid grid-cols-6 gap-5 py-[50px]">
        <div className="col-span-4">
          <CartProduct />
        </div>
        <div className="col-span-2">
          <TotalCart />
        </div>
      </div>
    </div>
  );
}

export default Cart