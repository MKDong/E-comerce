import "./Header.scss"
import {  List } from 'antd';
import {  SearchOutlined  } from '@ant-design/icons';
import { useEffect, useState } from "react";
import axios from 'axios'
import 'tippy.js/dist/tippy.css';
import Tippy, { tippy } from '@tippyjs/react/headless';

export default function InputSearch(){
    const [inputValue,setInputvalue]=useState('')
    const [search,setSearch] = useState([])

     function handleSearch(e){
        setInputvalue(e.target.value)
       
    }
    function handleCancel(){
        setSearch([])
    }
    // Debounce search
    useEffect(()=>{
        const inputSearch = setTimeout(()=>{
            if(inputValue !== ''){
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://backoffice.nodemy.vn/api/products?populate=*&pagination[page]=1&pagination[pageSize]=5&filters[name][$contains]=${inputValue}`,
                  };
                  
                  axios.request(config)
                  .then((response) => {
                    setSearch(response?.data?.data)
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                  
            }else{
                setSearch([])
            }
        },1000);

        return(()=>{
            clearTimeout(inputSearch)
        })
    },[inputValue])


    return <>
                    <Tippy
                        interactive={true}
                        visible={search.length === 0 ? false : true}
                        placement="bottom-start"
                        render={attrs => (
                        <div className="box result" tabIndex="-1" {...attrs}>
                            {
                                       
                                <List 
                                itemLayout="horizontal"
                                dataSource={search}
                                renderItem={(item) => (
                                <List.Item className="ant-list-item-meta">
                                    <List.Item.Meta
                                    avatar={<img src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data[0].attributes?.formats?.thumbnail?.url}`} style={{width: '100px',height:'100px'}}></img>}
                                    title={<a href="#">{item?.attributes?.name}</a>}
                                    description={<p style={{color:'red'}}>{item?.attributes?.price} VNĐ</p>}
                                />
                                </List.Item>
                                )}
                                />
                                    
                            }
                        </div>
                        )}
                    >
                        <div className="search">
                            <input type="search" className="ipSearch" onChange={handleSearch} onBlur={handleCancel} value={inputValue} placeholder="Vui lòng điền tên sản phẩm"/> <button className="btnSearch"><SearchOutlined /> </button>
                        </div>
                    </Tippy>

    </>
}