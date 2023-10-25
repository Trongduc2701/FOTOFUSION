import React, { useState } from 'react';
import useWindowSize from '../../hook/use-window-size';
import ForgotLeft from '../../assets/images/forgot-left.png'
import ForgotRight from '../../assets/images/forgot-right.png'
import { useNavigate } from 'react-router-dom';
const ChangePassWord = () => {
    const { _, height } = useWindowSize();
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');
    const [newPassword, setnewPassword] = useState('');
                        
    const navigator = useNavigate();
    function onSubmit() {
        navigator('/login')
    }
    return (
        <div className='mainFogotPW' style={{ height: height }}>
            <img className='ForgotLeft'  style={{ height: height}} src={ForgotLeft} alt={'loginbg'} />
            <img className='ForgotRight'  style={{ height: height}} src={ForgotRight} alt={'loginbg'} />
            
            <div className='formForgot'>
                <h3>Thay đổi mật khẩu</h3>
                <div 
                    style={{ maxWidth: 365 }}
                    className='loginForm'
                        >
                        <span>Email</span>
                        <input
                        className='inputEmail'
                        type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='fotofusion@gmail.com'
                        />
                        

                    
                    
                        <div className='inputCodeChange'>
                            <span > Mật khẩu cũ</span>
                            <div className='passwordInput'>
                                <input 
                                    type={ 'password'}
                                    value={password}
                                
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                    </div>
                    
                        <div className='inputCodeChange'>
                            <span > Mật khẩu mới</span>
                            <div className='passwordInput'>
                                <input 
                                    type={ 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                     
                        <button className='btnSubmit' onClick={onSubmit}   type="button">CHANGE</button>

                       <svg xmlns="http://www.w3.org/2000/svg" width="360" height="2" viewBox="0 0 480 2" fill="none">
                        <path d="M0 1H480" stroke="#C8D3F9" stroke-width="2"/>
                        </svg>
                    </div>
            </div>
        </div>
    );
};

export default ChangePassWord;