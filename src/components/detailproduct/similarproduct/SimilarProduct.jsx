
import "./similarproduct.scss";
export default function SimilarProduct({ listsimilar }) {
  return (
    <div className="similarproduct">
      <div>Sản phẩm đã xem</div>
      <div>
        <div className=" text-white mb-[3.125rem]">
          {listsimilar.map((item, index) => {
            let Price = parseInt(item.attributes.price);
            return (
              <div
                key={index}
                className="col-span-1 hover cursor-pointer itemsimilar "
              >
                <div>
                  <div>
                    <img
                      src={`https://backoffice.nodemy.vn${item.attributes?.image?.data[0].attributes?.url}`}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="info">{item?.attributes?.name}</div>
                  <div className="oldprice pt-0">
                    {Price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
