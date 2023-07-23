import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import { Link } from 'react-router-dom';
export default function New() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        axios.get('https://backoffice.nodemy.vn/api/blogs?populate=*').then((res) => {
            setArr(res?.data?.data);
        });
    }, []);

    return (
        <>
            <div className="row" style={{ justifyContent: 'space-between' }}>
                {arr.map((item) => {
                    return (
                        <div key={item.id} className="globall ">
                            <div className="picture">
                                <img
                                    alt="example"
                                    src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
                                />
                            </div>
                            <div className="blog">
                                <h3>Sản Phẩm Công Nghệ Trực Thuộc Tại Nodemy.VN </h3>
                                <div className="blog-text">
                                    <Link className="link" to={`/blogs/${item.attributes.slug}?id=${item.id}`}>
                                        12/06/2023
                                        <Meta title={item?.attributes?.title} />
                                        <Meta description="www.Nodemy.com" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
