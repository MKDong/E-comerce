import "./Header.scss"
import { ShoppingCartOutlined, SearchOutlined, CloseOutlined  } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {  useState } from "react";
import InputSearch from "./InputSearch";
import Menumega from "../menuMega/Menumega";


export default function ModalLeft({setOpenbar}){
    function handleSearch(e){
        setInputvalue(e.target.value)
       
    }
    const [inputValue,setInputvalue]=useState('')
    return <>
                <div className="modalLeft">
                        <div className="barModal d-md-none d-block">
                            <InputSearch></InputSearch>
                            <Menumega></Menumega>
                        </div>
                        <div className="close">
                            <CloseOutlined onClick={()=>{setOpenbar(false)}} />
                        </div>
                        <div className="overlay" onClick={()=>{setOpenbar(false)}}> 
                        </div>
                </div>
    </>
}