import React from 'react';
import BookingBG from '../../assets/images/booking-bg.png'
import FormBookingBG from '../../assets/images/formbooking-bg.png'

import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  TimePicker,
} from 'antd';
import Footer from '../Footer/Footer';
import TextArea from 'antd/es/input/TextArea';

const BookingAlbum = () => {
    document.title = 'Booking';

    function handleChange(value) {
         console.log(`selected ${value}`);
    }
    return (
        <div className='bookingContainer'>
            <img src={BookingBG} />
            <span className='title'>Đặt  Chụp Hình Online</span>
            <div className='partBookingContainer'>
            
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                className='formBooking'
                style={{ width: '100%',  minHeight: '900px', backgroundImage: `url(${FormBookingBG})` , backgroundSize: 'cover'  }}
            >   
                <span className='titleForm'>Thông tin Album đăng ký</span>
                <div className='mainForm'>
                    <Form.Item label="Tên HK">
                         <Input style={{ marginLeft: 40}} placeholder='Nhập họ và tên'/>
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input style={{ marginLeft: 40}}  placeholder='fofofusion@gamil.com'/>
                    </Form.Item>
                    <Form.Item label="Số điện thoại">
                        <Input style={{ marginLeft: 40}}  placeholder='+84'/>
                        </Form.Item>
                    <Form.Item label="Ngày chụp">
                        <DatePicker style={{ marginLeft: 40}}  placeholder='Chọn ngày chụp'  />
                    </Form.Item>
                    <Form.Item label="Thời gian">
                         <TimePicker.RangePicker  style={{ marginLeft: 40}} />
                    </Form.Item>

                    <Form.Item label="Ngày thử">
                        <DatePicker style={{ marginLeft: 40  }} placeholder='Chọn ngày thử' />
                    </Form.Item>

                    <Form.Item label="Ghi chú">
                        <TextArea placeholder='Bạn mong muốn điều gí ?'  style={{ marginLeft: 40}}  />     
                    </Form.Item>  
                        
                    <Form.Item  style={{ width: '100%'}} >
                        <Button className='btnSubmit' type="primary" htmlType="submit">
                             Tiếp tục
                        </Button>
                    </Form.Item>
                </div>
            </Form>
            </div>
            <Footer/>
        </div>
    );
};

export default BookingAlbum;