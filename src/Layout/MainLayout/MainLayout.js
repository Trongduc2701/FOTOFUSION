import React from 'react';
import styles from './Layout.module.scss';
import Header from './../../pages/Header/Header';
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Footer from '../../pages/Footer/Footer';
const MainLayout = ({ children }) => {
    return (
        <div className={styles.mainContainer} >
            <Header />
            {children}
            <BackTop/>
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;