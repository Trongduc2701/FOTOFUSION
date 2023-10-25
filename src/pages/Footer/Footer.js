import React from 'react';
import './Footer.scss'

import Followed from '../../assets/images/followed.png';
import Fbavatar from '../../assets/images/fb-avatar.png';
import LatestImage from '../../assets/images/latestImage.png';
import Rectangle68 from '../../assets/images/Rectangle68.png';
import IcLogo from '../../assets/logo/IcLogo';
import IcLocationFT from '../../assets/icon/ic-locationFT';
import IcMailFT from '../../assets/icon/ic-mailFT';
import IcContactFT from '../../assets/icon/ic-conteactFT';
const Footer = () => {
    return (
       <>
        <div className="Footer" >
          <div className="Content">
            <div className="Header">
                <div  className='headerItem'>
                  <div className='headerLogo'>
                        <IcLogo />
                        <span>FutoFusion</span>
                  </div>
                </div>
                
              <div className='headerFollow'>
                  <div className='headerInfo'>
                      <IcContactFT />
                      <div className='contentFT' >
                        <span className='textContent'>Liên hệ</span>
                        <span className='textContentValue'>+84 569 896 654</span>
                      </div>
                  </div>
                
                <div className='headerItem'>
                  <div className='headerInfo'>
                      <IcMailFT />
                      <div className='contentFT' >
                        <span className='textContent'>Gửi thư về</span>
                        <span className='textContentValue'>fotofusion@gmail.com</span>
                      </div>
                  </div>
                </div>
              
                <div className='headerItem'>
                  <div className='headerInfo'>
                      <IcLocationFT />
                      <div className='contentFT' >
                        <span className='textContent'>Địa chỉ</span>
                        <span className='textContentValue'>254-Nguyen Van Linh  Hai Chau-Da Nang</span>
                      </div>
                  </div>
                </div>
              </div>
              
           
            </div>
            <div className="mainFooter">
              <div className="partLeft">
                <span >The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</span>
                <img src={LatestImage} style={{marginLeft: '-10px'}} alt='latestImage'/>
              </div>
              <div className="partRight">
                <span>Fanpage Facebook</span>
                <div className='fanpageForm'>
                  <div className='textForm'>
                    <span className='name'>FotoFusion 
                    </span>
                    <span className='follower'>33K follower</span>
                  </div>
                  <img className='Fbavatar'  src={Fbavatar} alt='latestImage' />
                  <img src={Rectangle68} alt='latestImage' />
                  <img className='Followed' src={Followed} alt='Followed' />
                </div>
              </div>
            </div>
          </div>
        </div>
       </>
    );
};

export default Footer;