import { Link, useLocation } from "react-router-dom";
import '../header/Header.scss'

export default function Breadcrumbs(){
    const location = useLocation()
    let currentLink = ''
    const crumbs = location.pathname.split('/')
    .filter((link)=>{
       return link !== ''
    })
    .map((link)=>{
        currentLink += `${link}`
        return <>
            <div className="crumb">

                <Link to={currentLink}>{link}</Link>
            </div>
        </>

    })

    return <>
        <div className="bread">
            {crumbs}           
        </div>
    </>
}