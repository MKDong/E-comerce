import Header from "./header/Header.jsx";
import Footer from  "./footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";


export default function Layout(){
    const [x,setX]=useState(true)
    function reload(){
       setTimeout(()=>{
            setX(!x)
        },100)
    }
    return<>
        <Header reloadHeader={reload} ></Header>
            <Outlet context={[x,setX]}>
            </Outlet>
        <Footer></Footer>
    </>
        
}