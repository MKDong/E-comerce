import Link from 'antd/es/typography/Link'
import './Footer.scss'
import Logo from '/logo.png'

import { FacebookOutlined,TwitterOutlined, MailOutlined, GooglePlusOutlined, InstagramOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function Footer(){

    return <>
        <div className="footer">
            <div className='mainFooter row'>
                <div className='col-12 col-md 3'>
                    <img src={Logo} alt="" />
                </div>
                <div className='col-12 col-md 3'>
                    <h2 className='title'>HỖ TRỢ KHÁCH HÀNG</h2>
                    <h3><Link to='#'>Trang chủ</Link></h3>
                    <h3><Link to='#'>Laptop thường</Link></h3>
                    <h3><Link to='#'>Laptop gaming</Link></h3>
                </div>
                <div className='col-12 col-md 3'>
                    <h2 className='title'>KẾT NỐI VỚI CHÚNG TÔI</h2>
                    <div className='icon'>
                        <FacebookOutlined />
                    </div>
                    <div className='icon'>
                        <TwitterOutlined />
                    </div>
                    <div className='icon'>
                        <MailOutlined />
                    </div>
                    <div className='icon'>
                        <GooglePlusOutlined />  
                    </div>
                    <div className='icon'>
                        <InstagramOutlined />
                    </div> 
                    <h2 className='title'>HỆ THỐNG CỬA HÀNG</h2>  
                    <p>214 Nguyễn Xiển, Hà Nội</p>              
                </div>
                <div className='col-12 col-md 3'>
                    <h2 className='title'>ĐẶT HÀNG ONLINE</h2>
                        <p>"Giao hàng tận nơi"</p>
                        <p><CheckCircleOutlined /> Đổi mới trong vòng 15 ngày nếu sản phẩm bị lỗi do nhà sản xuất</p>
                        <p><CheckCircleOutlined /> Thanh toán trực tiếp hoặc ATM, VISA, MASTER CARD</p>

                </div>
            </div>
        </div>
    </>
}