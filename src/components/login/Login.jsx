// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Form, Input, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setlogin1 } from '../../redux/userSlice';
export default function Login(){
    const userDispatch = useDispatch()
    const nav = useNavigate()
    const [login,setLogin]=useState(false)
    const loginval=useDispatch()  
    
    const onFinish = (values) => {
        console.log('Success:', values);
        loginval(setlogin1(login))
        setLogin(true)
        let data = JSON.stringify({
            ...values
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://backoffice.nodemy.vn/api/auth/local',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            localStorage.setItem('user',JSON.stringify(response.data));
            setTimeout(()=>{
              message.success(
                <div style={{fontSize:'25px', color:'green',display:'inline-block'}}>
                    Đăng nhập thành công !
                </div> 
              )
              userDispatch(setUser(response?.data?.user))
              nav('/')
            },2000)
           
          })
          .catch((error) => {
            console.log(error);
            message.error(
              <div style={{fontSize:'25px', color:'red',display:'inline-block'}}>
                  Sai thông tin đăng nhập!
              </div>  
            )
          });
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return<>
         <Form  
                className='loginForm'
                name="loginForm"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                style={{ 
                    width:700,
                    fontSize:'25px',
                    padding:30,
                    marginBottom:100
                 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >   
                <Typography><h1 style={{color: '#fff',textAlign:'center'}}>Đăng nhập</h1></Typography>
                <Form.Item
                      wrapperCol={{span:24}}
                      name="identifier"
                      rules={[
                          { required: true, message: 'Tên đăng nhập không được để trống !' },
                          { type:'email', message:'Email không hợp lệ'},
                      ]}
                      hasFeedback
                >
                <Input placeholder='Email đăng nhập' prefix={<UserOutlined />} style={{padding:'20px', fontSize:'25px', width:'100%'}}/>
                </Form.Item>

                <Form.Item
                        wrapperCol={{span:24}}
                        name="password"
                        rules={[
                            { required: true, message: 'Mật khẩu không được để trống !' },
                            {min: 6, message: 'Tối thiểu 6 kí tự !'}
                          
                          ]}
                          hasFeedback
                >
                <Input.Password placeholder='Mật khẩu' prefix={<LockOutlined />} style={{padding:'20px', fontSize:'25px'}}/>
                </Form.Item>

                <Form.Item   wrapperCol={{span:24}}>
                <Button style={{backgroundColor:'rgb(176, 135, 59)', height:'80px', fontSize:'25px', color:'#fff'}} htmlType="submit" block>
                    Login
                </Button>
                </Form.Item>
        </Form>
    </>
}