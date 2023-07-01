import "./Profile.css"
import { useSelector } from "react-redux";
import { Button, Modal } from 'antd';
import userBlank from '/user.jpg'
import { useState } from "react";
import Avatar from 'react-avatar-edit'

export default function Profile(){
    const user = useSelector(state => state.user.value)
    //format date
    const oldDate = user?.createdAt
    const date = new Date(oldDate)
    const newDate = `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    //change avatar
    const [imgCrop, setImgCrop] = useState(false)
    const [storeImg, setStoreImg] = useState([])
    const onCrop = (view)=>{
        setImgCrop(view)
    }
    const onClose = ()=>{
        setImgCrop(null)
    }
    const saveImg = ()=>{
        setStoreImg([...storeImg,{imgCrop}])
    }
    console.log(storeImg);
    const imgProfile = storeImg.map((item)=>{
        return item.imgCrop
    })
    return <>
       <div className="row ">
            <div className="col-12 col-md-5  bg-dark ">
                <img src={imgProfile.length ? imgProfile : userBlank} alt="" className="avatar" onClick={showModal} />
                <Button className="bg-success btn" type="primary" onClick={showModal}>Cập nhật ảnh đại diện</Button> <br />
                <Button className="bg-success btn" type="primary">Đổi mật khẩu</Button>
                <Modal title="Cập nhật ảnh đại diện" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Avatar
                        width={'100%'}
                        height={350}
                        onCrop={onCrop}
                        onClose={onClose}
                    />
                        <Button className="bg-success mt-4 w-100" type="primary" onClick={saveImg}>Lưu</Button>
                </Modal>
            </div>
            <div className="col-12 col-md-7  info">
                <div className="line">
                    <label>Tên người dùng</label>
                    <h1> {user?.username}</h1>
                </div>
                <div className="line">
                    <label>Email</label>
                    <h1> {user?.email}</h1>
                </div>
                <div className="line">
                    <label>Ngày tham gia</label>
                    <h1> {newDate}</h1>
                </div>

            </div>
       </div>
    </>
}