import React, { memo } from 'react';
import { text } from '../utils/dataIntro';
import icons from '../utils/icons';
import Button from './Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '../utils/common/formatVietnameseToString';
const { AiFillStar } = icons;
let star = [1, 2, 3, 4, 5];
const Intro = () => {
    // let renderCategories = async(categories) => {
    //     let arr;
    //     if(categories?.length > 0){
    //         arr = await categories.map((item,index) => {
    //             return(
    //                 <span key={index} className='text-blue-600 hover:text-orange-500 text-base' >{item.value}</span>
    //             )
    //         })
    //     }
    //     return arr;
    // }
    const { categories } = useSelector((state) => state.app);
    return (
        <div className="border flex flex-col items-center justify-center gap-3  w-[1200px] shadow-md bg-white rounded-lg p-4">
            <h3 className="font-semibold text-lg ">{text.title}</h3>
            <p className="font-normal text-gray-800 text-center text-base">
              
                {text.description}
                {categories?.length > 0 && categories.map((item,index) =>{
                    return(
                        <Link key={index} to={formatVietnameseToString(item?.value)} className='text-blue-600 hover:text-orange-500 text-base cursor-pointer' >{item?.value}, </Link>
                    )
                })}{text.description2}
            </p>
            <div className="flex items-center w-full justify-around">
                {text.statistic.map((item, index) => {
                    return (
                        <div className="flex flex-col justify-center items-center " key={index}>
                            <h4 className="font-semibold text-lg">{item.name}</h4>
                            <p className="text-gray-700">{item.value}</p>
                        </div>
                    );
                })}
            </div>
            <h3 className="font-semibold text-lg py-2">{text.price}</h3>
            <div className="flex items-center gap-1 justify-center">
                {star.map((item, index) => {
                    return (
                        <span key={index}>
                            <AiFillStar size={24} color={'yellow'} />
                        </span>
                    );
                })}
            </div>
            <p className="text-gray-600 italic text-center"> {text.comment}</p>
            <span className="text-gray-700">{text.author}</span>
            <h3 className="font-bold text-lg py-2">{text.question}</h3>
            <p className="text-gray-700">{text.awswer}</p>
            <Button text={'Đăng tin ngay'} bgColor={'bg-secondary2'} textColor={'text-white'} />
            <div className="h-[80px]"></div>
        </div>
    );
};

export default memo(Intro);
