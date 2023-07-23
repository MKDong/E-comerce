import axios from "axios";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "./Baner.scss";

export default function ListImgBaner() {
  const [listbanner, setListBanner] = useState([]);
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
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };
  useEffect(() => {
    axios
      .get("https://backoffice.nodemy.vn/api/blogs?populate=*")
      .then((response) => {
        setListBanner(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-full h-full Baner-wapper">
      <Slider {...settings}>
        {listbanner.map((item, index) => {
          return (
            <div key={index}>
              <img
                className="w-full h-full object-cover"
                src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data?.attributes?.url}`}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
