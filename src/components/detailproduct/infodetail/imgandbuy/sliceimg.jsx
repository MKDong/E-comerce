/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

export default function Sliceimg({ getArr }) {
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

  const settings1 = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={`https://backoffice.nodemy.vn${getArr[i].attributes?.image?.data[0].attributes?.url}`}
          />
        </a>
      );
    },
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 311000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };
  return (
    <div className="Sliceproduct">
      <Slider {...settings1}>
        {getArr.map((item) => (
          <div key={item.id}>
            <img
              className="w-full h-full object-cover"
              src={`https://backoffice.nodemy.vn${item.attributes?.image?.data[0].attributes?.url}`}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
