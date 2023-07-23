import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const listDataCard = JSON.parse(localStorage.getItem("dataCard")) || [];

export default function AddToCart(itemProductInCart) {
  const listDataCardComponent = listDataCard;

  const handleAddToCart = () => {
    const checkProductHaveInCart = listDataCardComponent.findIndex((i) => {
      return i.id === itemProductInCart.id;
    });

    console.log(checkProductHaveInCart);
    const dataAddCart = {
      id: itemProductInCart.id,
      quantity: 1,
      check: false,
      attributes: {
        name: itemProductInCart.attributes.name,
        orlPrice: itemProductInCart.attributes.orlPrice,
        price: itemProductInCart.attributes.price,
        urlImg: itemProductInCart.attributes?.image?.data[0].attributes?.url,
      },
    };

    if (checkProductHaveInCart !== -1) {
      toast.warning("Sản phẩm đã tồn tại, hãy kiểm tra giỏ hàng!", {
        autoClose: 2000,
      });
    } else {
      toast.success("Đã thêm vào giỏ hàng!", { autoClose: 2000 });
      listDataCardComponent.push(dataAddCart);
    }

    localStorage.setItem("dataCard", JSON.stringify(listDataCardComponent));
  };

  console.log("itemProductInCart", itemProductInCart);
  return (
    <><div onClick={handleAddToCart}>
      <p>THÊM VÀO GIỎ HÀNG</p>
      <p>Gọi điện xác nhận và giao hàng tận nơi</p>
    </div><ToastContainer /></>

  );
}
