import React, { useEffect, useState } from 'react';
import { TagsOutlined, LikeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import imgDemo from '../../assets/images/bg-home.png'
import Temp from '../../utils/temp';
import useWindowSize from '../../hook/use-window-size';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from 'antd';
import IcFb from '../../assets/icon/ic-fb';
import IcTiktok from '../../assets/icon/ic-tiktok';
import IcInsta from '../../assets/icon/ic-ins';
import Footer from '../Footer/Footer';

const BlogDetailPage = () => {
    const id = useParams();
    const [blogDetail, setBlogDetail] = useState([]);
    const [bgBlackHeight, setbgBlackHeight] = useState(3000);
    console.log(blogDetail);
    const { width, height } = useWindowSize();
    const navigate = useNavigate();
    function handlebooking() {
        navigate('/booking-album');
    }

    useEffect(() => {
        setBlogDetail(Temp.blogList[0]);
    }, [id])


    return (
        <>
            <div style={{ height: `${bgBlackHeight}px`, width: width }} class="h-full flex items-center justify-center w-full h-screen object-cover flex-shrink-0 z-10 bg-black ">
                <div class='absolute top-64 flex flex-col justify-start  items-start w-3/4'>
                    <h1 class='text-6xl  text-white' >{blogDetail?.title}</h1>
                    <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
                    <span class='mt-3 text-base text-btnprimary' >{blogDetail?.date}</span>

                    {/* mainContent */}
                    <div class="w-full mt-20 flex flex-row gap-10 text-white">
                        <div class='basis-2/3 flex flex-col justify-center items-center gap-4'>
                            <img src={blogDetail?.bgTop} class='max-h-96 ' alt='imgaeTop' />
                            <span class=''>
                                Ngày nay, Fujifilm mang xu hướng xem phim trở lại. Họ có thể chụp JPEG bằng nhiều
                                bộ lọc tích hợp khác nhau. Máy ảnh Canon có làm được điều tương tự không?
                            </span>
                            <img src={blogDetail?.bgTop} class='max-h-96 ' alt='imgaeTop' />
                            <span>
                                Câu trả lời là có. Bạn có thể làm điều đó từ lâu nhưng không phải ai cũng biết. Canon cung cấp cho bạn
                                “Picture Style Editor” với nhiều công cụ để xây dựng kiểu dáng Phim của riêng bạn để chụp JPEG.
                                Nhưng nó khá khó sử dụng nên chúng tôi đã làm điều đó cho bạn với bộ sưu tập các kiểu dáng phim
                            </span>
                            <img src={imgDemo} class='max-h-96 ' alt='imgaeTop' />

                            <span>
                                Bạn có thể chụp các ảnh có màu phim JPEG như trên bằng các kiểu ảnh phim 1, 2, 3 của chúng tôi.
                                Hiện đang được giảm giá nếu bạn mua combo “Gói kiểu dáng hình ảnh giống như phim” – $99
                                (bạn tiết kiệm được $57)
                            </span>
                            <img src={imgDemo} class='max-h-96 ' alt='imgaeTop' />
                            <span>
                                Bạn có thể chụp các ảnh có màu phim JPEG như trên bằng các kiểu ảnh phim 1, 2, 3 của chúng tôi.
                                Hiện đang được giảm giá nếu bạn mua combo “Gói kiểu dáng hình ảnh giống như phim” – $99
                                (bạn tiết kiệm được $57)
                            </span>

                            {/* booking */}
                            <div class='flex justify-start items-start w-full'>
                                <button onClick={handlebooking} class="bg-btnprimary mt-20 text-white hover:bg-white hover:text-btnprimary font-bold py-2 px-4 rounded-full">
                                    Booking
                                </button>
                            </div>


                            {/* tag + cmt */}
                            <div class='text-white mt-10 grid grid-col-2 divide-y-2 w-full'>
                                <div class='h-14 w-10 flex flex-row items-center justify-center'> <TagsOutlined class='mx-2' />Tag</div>
                                <div class='my-4 py-5 flex items-center justify-between'>
                                    <button class='border-none p-1 text-white bg-btnprimary flex items-center justify-center gap-2'>
                                        <LikeOutlined />
                                        <span>
                                            Thích
                                        </span>
                                    </button>
                                    <div class='flex items-center h-10 justify-center '>
                                        <button class='border-none p-1 text-white bg-transparent flex items-center justify-center gap-2'>
                                            <LeftOutlined />
                                            <span>
                                                Bài viết trước
                                            </span>
                                        </button>
                                        <div class='bg-transparent w-1 h-1/2 border-l-2 ml-2 border-white' />
                                        <button class='border-none p-1 text-white bg-transparent flex items-center justify-center gap-2'>
                                            <span>
                                                Bài viết sau
                                            </span>
                                            <RightOutlined />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='basis-1/3'>
                            {/* search */}
                            <div class='my-5 mx-2'>
                                <h1 class='text-3xl font-bold text-white' >{'Tìm Kiếm'}</h1>
                                <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
                                <Input placeholder='Nhập và nhấn enter ' />
                            </div>
                            {/* follow */}
                            <div class='my-5 mx-2'>
                                <h1 class='text-3xl font-bold text-white' >{'Theo dõi'}</h1>
                                <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='flex justify-center items-center'>
                                    <IcFb size={30} />
                                    <IcInsta size={30} />
                                    <IcTiktok size={30} />
                                </div>
                            </div>
                            {/* blog */}
                            <div class='my-5 mx-2'>
                                <h1 class='text-3xl font-bold text-white' >{'Tìm Kiếm'}</h1>
                                <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='flex flex-col mt-3 justify-start items-start'>
                                    <buton class=' px-7 py-1 text-2xl  w-full border-none border-b-2 border-white  bg-zinc-900'>Tin mới</buton>
                                    <buton class=' px-7 py-1 text-2xl  w-full border-none border-b-2 border-white  bg-zinc-900'>Ảnh chụp</buton>
                                    <buton class=' px-7 py-1 text-2xl  w-full border-none border-b-2 border-white  bg-zinc-900'>Hướng dẫn</buton>
                                </div>
                            </div>
                            {/* category */}
                            <div class='my-5 mx-2'>
                                <h1 class='text-3xl font-bold text-white' >{'Danh mục '}</h1>
                                <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='flex flex-col mt-3 justify-start items-start'>
                                    <buton class='px-7 py-1 text-2xl  w-full border-none border-b-2 border-white  bg-zinc-900'>Danh mục 1</buton>
                                    <buton class='px-7 py-1 text-2xl  w-full border-none border-b-2 border-white  bg-zinc-900'>Danh mục 2</buton>
                                    <buton class='px-7 py-1 text-2xl  w-full border-none border-b-2 border-white  bg-zinc-900'>Danh mục 3</buton>
                                    <buton class='px-7 py-1 text-2xl  w-full border-none border-b-2 border-white  bg-zinc-900'>Danh mục 4</buton>
                                    <buton class='px-7 py-1 text-2xl  w-full border-none border-b-2 border-white  bg-zinc-900'>Danh mục 5</buton>
                                </div>
                            </div>

                            <div class='my-5 mx-2'>
                                <h1 class='text-3xl font-bold text-white' >{'Tags '}</h1>
                                <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='mt-3 flex flex-col justify-start items-start'>
                                    <div class='flex flex-wrap px-2 py-4 text-2xl  w-full border-none bg-zinc-900'>
                                        <a class='w-48 m-1 p-2 bg-gray-800' >black-white</a>
                                        <a class='w-48 m-1 p-2 bg-gray-800'  >canon</a>
                                        <a class='w-48 m-1 p-2 bg-gray-800'  >canon-eos-m</a>
                                        <a class='w-48 m-1 p-2 bg-gray-800'  >canon-eos-750d</a>
                                        <a class='w-48 m-1 p-2 bg-gray-800'  >canon-eos-m</a>
                                        <a class='w-48 m-1 p-2 bg-gray-800'  >canon-eos-m</a>
                                        <a class='w-48 m-1 p-2 bg-gray-800'  >canon-eos-m</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetailPage;