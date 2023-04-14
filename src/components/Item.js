/* eslint-disable jsx-a11y/alt-text */
import React, { memo, useState } from 'react';
import icons from '../utils/icons';
const images = [
    'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/13010033-f14b-42d6-b68e-89d7ca7d58e0_1678515051.jpg',
    'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/16ade855-af1d-4ee5-b3a7-e86aa5df1288_1678515098.jpg',
    'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/c626c684-d832-49a8-a573-358a9b22090e_1678515030.jpg',
    'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/50f24ad5-bc4e-4997-8b5b-d5adf24afb3d_1678515041.jpg',
];
let { AiFillStar, AiFillHeart, AiOutlineHeart, BsFillBookmarkStarFill } = icons;

const Item = () => {
    const [isHoverHeart, setIsHoverHeart] = useState(false);
    return (
        <div className="w-full flex items-start border-orange-700 border-t p-4 cursor-pointer">
            <div className="w-[42%] h-[240px] flex ">
                <div className="w-full flex gap-[2px] items-start flex-wrap relative">
                    <img src={images[0]} alt="preview" className="w-[140px] h-[120px] object-cover" />
                    <img src={images[1]} alt="preview" className="w-[140px] h-[120px] object-cover" />
                    <img src={images[2]} alt="preview" className="w-[140px] h-[120px] object-cover" />
                    <img src={images[3]} alt="preview" className="w-[140px] h-[120px] object-cover" />
                    <span className="bg-overplay30 text-white rounded-md absolute px-2 py-1 left-2 bottom-2 hover:bg-overplay70">
                        4 ảnh
                    </span>
                    <span
                        onMouseEnter={() => setIsHoverHeart(true)}
                        onMouseLeave={() => setIsHoverHeart(false)}
                        className=" text-white  absolute  right-5 bottom-2 "
                    >
                        {isHoverHeart ? <AiFillHeart color='red' size={26} /> : <AiOutlineHeart size={26} />}
                    </span>
                </div>
            </div>
            <div className="w-[58%] pl-2">
                <div className="flex justify-between">
                    <div className="w-full flex gap-1">
                        <span className=" text-red-600 font-medium">
                            <AiFillStar className="start-item" size={20} color="yellow" />
                            <AiFillStar className="start-item" size={20} color="yellow" />
                            <AiFillStar className="start-item" size={20} color="yellow" />
                            <AiFillStar className="start-item" size={20} color="yellow" />
                            <AiFillStar className="start-item" size={20} color="yellow" />
                            PHÒNG TRỌ SLEEPBOX GÒ VẤP PHẠM VĂN ĐỒNG GIÁ 1,8TR 0792686899
                        </span>
                    </div>
                    <div className="w-[10%] flex justify-end px-1">
                        <BsFillBookmarkStarFill size={24} color="orange" />
                    </div>
                </div>
                <div className="my-2 flex items-center justify-around">
                    <span>1.85 triệu/tháng</span>
                    <span>125m²</span>
                    <span>Quận Gò Vấp, Hồ Chí Minh</span>
                </div>
                <p className="text-gray-500">
                    Địa chỉ gần Emart Gò Vấp, chợ Gò Vấp Lê Quang Định, DH Công Nghiệp. Sang Vimcom chỉ mất 5 phút, đến
                    Sân Bay chỉ mất 10 phút Di chuyển sang Phú Nhuận,…
                </p>
                <div className="flex items-center my-3 justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
                            className="w-[30px] h-[30px] object-cover rounded-full"
                        />
                        <p>Tuệ thu</p>
                    </div>
                    <div className="px-3 flex items-center gap-2">
                        <button type="button" className="bg-blue-700 text-white px-4 py-1 rounded-md">
                            Gọi 3243523535
                        </button>
                        <button
                            type="button"
                            className="text-blue-700 border px-4 py-1 rounded-md border-blue-700 bg-white"
                        >
                            Nhắn zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Item);
