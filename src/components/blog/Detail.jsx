import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { FacebookOutlined, TwitterOutlined, MailOutlined, PictureOutlined, GoogleOutlined } from '@ant-design/icons';
// import phoon from '../assets/phoon.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
    // bai viet chi tiet
    const [count, setCount] = useState({});
    const urlParams = new URLSearchParams(window.location.search);
    const queryValue = urlParams.get('id');
    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await axios.get(
                    `https://backoffice.nodemy.vn/api/blogs/?populate=*&filters[id][$eq]=${queryValue}`,
                );
                // console.log(response.data.data[0].attributes);
                setCount(response.data.data[0].attributes);
            } catch (error) {
                console.log(error);
            }
        };
        getBlog();
    }, []);

    const text = String(count.content).replaceAll('/uploads', 'https://backoffice.nodemy.vn/uploads');
    // console.log('text', text);

    // bai viet lien quan
    const [arr, setArr] = useState([]);
    useEffect(() => {
        axios.get('https://backoffice.nodemy.vn/api/blogs?populate=*').then((res) => {
            setArr(res?.data?.data);
            // console.log(res.data.data);
        });
    }, []);
    // Carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    // san pham moi
    const [newSp, setNewSp] = useState([]);
    useEffect(() => {
        axios.get(`https://backoffice.nodemy.vn/api/products?populate=*`).then((res) => {
            console.log(res?.data?.data);
            setNewSp(res?.data?.data);
        });
    }, []);

    return (
        <>
            <div className="Detail-chitiet">
                {/* bai viet */}
                <div className="posts">
                    <div className="title">
                        <p>TIN CÔNG NGHỆ, TIN KHUYẾN MẠI, TIN TỨC</p>
                        <h2>Chuyên gia chia sẻ 4 cách phân biệt Ai Phôn hàng hiệu thật và giả</h2>
                        <p>STED ON 23/06/2023 BY ADMIN</p>
                    </div>
                    <div className="content">
                        <ReactMarkdown>{text}</ReactMarkdown>
                    </div>
                    <div className="logo">
                        <div className="frame">
                            <a href="http://" target="_blank" rel="noopener noreferrer" className="logo-link">
                                <FacebookOutlined />
                            </a>
                        </div>
                        <div className="frame">
                            <a href="http://" target="_blank" rel="noopener noreferrer" className="logo-link">
                                <TwitterOutlined />
                            </a>
                        </div>
                        <div className="frame">
                            <a href="http://" target="_blank" rel="noopener noreferrer" className="logo-link">
                                <MailOutlined />
                            </a>
                        </div>
                        <div className="frame">
                            <a href="http://" target="_blank" rel="noopener noreferrer" className="logo-link">
                                <PictureOutlined />
                            </a>
                        </div>
                        <div className="frame">
                            <a href="http://" target="_blank" rel="noopener noreferrer" className="logo-link">
                                <GoogleOutlined />
                            </a>
                        </div>
                    </div>
                    {/* bai viet lien quan */}
                    <div className="Related-posts">
                        <p>Bài viết liên quan</p>
                        <div className="carousel">
                            <Link to={`/`} className="link-carousel">
                                <Slider {...settings}>
                                    {arr.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                <div className="img-carousel">
                                                    <img
                                                        alt="example"
                                                        src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
                                                    />
                                                    <p>{item.attributes.title}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* san pham moi */}
                <div className="new-products">
                    <h3>SẢN PHẨM MỚI</h3>
                    {newSp.map((item) => {
                        return (
                            <div key={item.id}>
                               <Link to={`/`} className='link-newproduct'>
                               <div className="img-content">
                                    <div className="new-img">
                                        <img
                                            className="img-api"
                                            alt="example"
                                            src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data[0]?.attributes?.url}`}
                                        />
                                    </div>
                                    <div className="new-content">
                                        <p className="name">{item.attributes.name}</p>
                                        <p className="oldPrice">{item.attributes.oldPrice}.vnđ</p>
                                        <p className="newPrice">{item.attributes.price}.vnđ</p>
                                    </div>
                                </div>
                               </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
