import { Avatar, Form, Modal, Select, Space, Table, Tabs, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import Temp from '../../../utils/temp';
import Button from '../../helples/button';
import { useNavigate } from 'react-router-dom';

const ProductManage = () => {
    const columns = [
        {
            title: 'ID',
            width: 120,
            dataIndex: 'key',
            key: 'key',
            fixed: 'left',
            render: (text) => text,
        },
        {
            title: 'HÌNH ẢNH',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 120,
            height: 80,
            align: 'center',
            render: (avatar, data) => <Avatar src={avatar ?? ''} />
        },
        {
            title: 'TÊN SẢN PHẨM',
            dataIndex: 'username',
            key: 'name',
            width: 320,
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'DANH MỤC',
            dataIndex: 'phone',
            width: 130,
            key: 'number',
        },
        {
            title: 'GIÁ TIỀN',
            dataIndex: 'phone',
            align: 'right',
            width: 130,
            key: 'phone',
        },
        {
            title: 'ĐÃ BÁN',
            dataIndex: 'number',
            align: 'right',
            width: 130,
            key: 'number',
        },
        {
            title: 'SỐ LƯỢNG',
            dataIndex: 'number',
            align: 'right',
            width: 130,
            key: 'number',
        },
        {
            title: "Thao tác",
            key: "action",
            align: 'center',
            width: 320,
            render: (_, record) => (
                <Space>
                    <button type='primary'
                        onClick={() => onViewAccount(record?.id)}
                    >
                        Xem chi tiết
                    </button>
                    <Button
                        onClick={() => onDeleteFiledHandler(record?.id)}
                    >
                        Xóa
                    </Button>
                    <Button
                        onClick={() => onUpdateCategory(record)}
                    >
                        Cập nhật
                    </Button>
                </Space>
            ),
        },
    ];


    const [productList, setProductList] = useState();
    const [tab, setTab] = useState(1);
    async function fetchDataProducts(keyWord) {
        //  truyen tab + keyword vào api và trả lại  reponse chứa danh sách data tương tự như sau
        try {
            // const response = await DEMO GetProductList(tab,keyWord)
            setProductList(Temp.dataUser)
        } catch (error) {
            console.log("🚀 ~ file: ProductManage.jsx:14 ~ fetchDataUser ~ error:", error)
        }
    }
    useEffect(() => {
        fetchDataProducts(1);
    }, [])

    const items = [
        {
            key: '1',
            label: 'Tất cả',
            children:
                <Table
                    columns={columns}
                    dataSource={productList ?? []}
                    pagination={{
                        pageSize: 10,
                    }}
                />,
        },
        {
            key: '2',
            label: 'Chờ phê duyệt',
            children:
                <Table
                    columns={columns}
                    dataSource={productList ?? []}
                />,
        },
        {
            key: '3',
            label: 'Đang hoạt động',
            children:
                <Table
                    columns={columns}
                    dataSource={productList ?? []}
                />,
        },
        {
            key: '4',
            label: 'Đã bị hủy',
            children:
                <Table
                    columns={columns}
                    dataSource={productList ?? []}
                />,
        },
    ];

    function onDeleteFiledHandler(value) {
    }
    function onUpdateCategory(value) {
    }
    function onViewAccount(value) {
    }

    const onChange = (key) => {
        console.log(key);
        setTab(key);
        fetchDataProducts(key);
        // khi thay doi tab thi truyền tham số vào api và api trả lại danh sách tài khoản phù hợp điều kiện 
    };

    const [open, setOpen] = useState();
    return (
        <>
            <div class='bg-white w-full p-3  rounded-lg '>
                <Button type="primary" onClick={() => setOpen(true)}>
                    Thêm sản phẩm
                </Button>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                />
            </div>


            <Modal
                title="Tạo sản phẩm"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                {/* <Form
                    name="basic"
                    labelAlign='left'
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 19 }}
                    style={{ maxWidth: 900 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={onSubmit}
                >
                    <Form.Item label="Player" >{pgt.firstName} {pgt?.user_name}</Form.Item>
                    <Form.Item label="Ngày" name='dateBooking'
                        rules={[
                            { required: true, message: 'Bắt buộc chọn ngày' },
                            { validator: checkDateBooking },]}
                    >
                        <DatePicker
                            placeholder="Chọn ngày"
                            mode='date'
                            onChange={(e) => setDateBooking(e)}
                            value={dateBooking}
                            style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item label="Thời gian" name="timefrom"
                    // rules={[{ required: true, message: 'Bắt buộc chọn giờ' }]}
                    >
                        <Space.Compact block >
                            <TimePicker.RangePicker
                                format='HH:mm'
                                placeholder={['Bắt đầu', 'Kết thúc']}
                                onChange={(e) => setRangeTimeBooking(e)} />
                        </Space.Compact>
                        {errorMessage !== '' && <span style={{ color: 'red' }}> {errorMessage}</span>}
                    </Form.Item>

                    <Form.Item label="Tổng tiền">
                        <Input
                            style={{ width: '100%', textAlign: 'right', }}
                            value={priceTotalShow}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Ghi chú"
                        name="mota"
                    >
                        <TextArea
                            rows={2}
                            placeholder="Nhập lời nhắn"
                            onChange={(e) => setNote(e.target.value)}
                            value={note}
                        />
                        <div style={{ display: 'flex', gap: 20, float: 'right', marginTop: 20 }}>
                            <Button type="link" htmlType="button" onClick={onCloseModal}>
                                Hủy
                            </Button>
                            <Button type="primary" htmlType="submit" disabled={((errorMessage || errorDate) ? true : false)}>
                                Submit
                            </Button>
                        </div>
                    </Form.Item>

                </Form> */}
            </Modal>
        </>
    );
};

export default ProductManage;