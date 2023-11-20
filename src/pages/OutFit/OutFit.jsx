import React, { useState } from 'react';
import OutFitBg from '../../assets/images/outfit.png'
import useWindowSize from '../../hook/use-window-size';
const OutFit = () => {
    const { width, height } = useWindowSize();
    const [bgBlackHeight, setbgBlackHeight] = useState(4000);
    return (
        <div style={{ height: bgBlackHeight ,  width: width }} class="flex items-center flex-col justify-start w-full h-screen object-cover flex-shrink-0 z-10 bg-black ">
            <img  style={{ width: width }}  class=' ' src={OutFitBg}/>
            <span class='absolute top-[60vh] text-7xl text-blue-500 font-Montserrat w-16 text-justify'>Lựa chọn trang phục</span>
        </div>
    );
};

export default OutFit;