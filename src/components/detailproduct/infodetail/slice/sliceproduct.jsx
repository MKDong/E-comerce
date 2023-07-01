import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "./sliceproduct.scss";
export default function SliceProduct({ getArr }) {
  const Prev = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} color="#fff" className="fa-2xl" />
      </div>
    );
  };
  const Next = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon
          icon={faChevronRight}
          color="#fff"
          className="fa-2xl"
        />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 311000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };
  console.log(getArr);
  return (
    <div className="Sliceproductdetail">
      <div>CÓ THỂ BẠN THÍCH</div>
      <Slider {...settings}>
        {getArr.map((item) => {
          let Price = parseInt(item.attributes.price);
          return (
            <>
              {" "}
              <div>
                <img
                  className="w-full h-full object-cover"
                  src={`https://backoffice.nodemy.vn${item.attributes?.image?.data[0].attributes?.url}`}
                  alt=""
                />
                <div className="">
                  <p>{item?.attributes?.name}</p>
                  <span>
                    {" "}
                    {Price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
