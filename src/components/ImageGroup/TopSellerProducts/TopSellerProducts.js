import React, { useEffect, useState } from 'react';

import './style.scss'
import CardTopSeller from '../../Card/CardTopSeller/CardTopSeller';
import Temp from '../../../utils/temp';


const TopSellerProducts = (data) => {
    const [tabActive, setActiveTab] = useState(0);
    const [listProduct, setList] = useState(Temp.listTopSellerProducts);
    function hanleActiveTab(num) {
        setActiveTab(num);
    }
    useEffect(() => {
        if (tabActive != 0) {
            const newList = Temp.listTopSellerProducts.filter((item) => item.type === tabActive);
            setList(newList);
        }
        else{
           setList(Temp.listTopSellerProducts);
        }
    },[tabActive])
    return (
        <div className='mainContainerTopSeller'>
            <div className='menuTopSeller'>
                <button className='linkCategory' onClick={()=> hanleActiveTab(0)} >
                    All
                    {tabActive === 0 && <div className='activeTab' />}
                </button>
                <button className='linkCategory' onClick={() => hanleActiveTab(1)} >
                    CANNON PICTURE STYLES
                    {tabActive === 1 && <div className='activeTab' />}
                </button>
                <button className='linkCategory' onClick={() => hanleActiveTab(2)} >
                    SONY PICTURE PROFILES
                    {tabActive === 2 && <div className='activeTab' />}
                </button>
                <button className='linkCategory' onClick={() => hanleActiveTab(3)} >
                    CAPTURE ONE STYLES
                    {tabActive === 3 && <div className='activeTab' />}
                </button>
                <button className='linkCategory' onClick={() => hanleActiveTab(4)} >
                    FREEBIES
                    {tabActive === 4 && <div className='activeTab' />}
                </button>
            </div>

            <div className='tableTopSeller'>
                {listProduct?.map((item) => (
                    <CardTopSeller
                        image={item?.image}
                        title={item.name}
                        type={item.type}
                        typeName={item.typeName}
                        price={item?.price}
                        salePrice={item?.salePrice}
                    />
                ))}
                {listProduct?.length == 0 && <span style={{fontSize: 40}}>Không tìm thấy sản phẩm</span> 
                }
            </div>
        </div>
    );
};

export default TopSellerProducts;