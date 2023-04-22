import React, { memo } from 'react';
import icons from '../utils/icons';
import { formatVietnameseToString } from '../utils/common/formatVietnameseToString';
import { Link } from 'react-router-dom';
import * as action from '../store/actions'
import { createSearchParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
let { BsChevronRight } = icons;
let ItemSidebar = ({ title, content,isDouble,type }) => {
    const navigate = useNavigate();
    let location = useLocation()
    

    let dispatch = useDispatch()
    let formatContent = () => {
        let oddNumber = content?.filter((item,index) => index %2 !==0)
        let evenNumber = content?.filter((item,index) => index %2 ===0)
        const formatedContent = oddNumber.map((item,index) =>  {
            return {
                right:item,
                left: evenNumber?.find((item2,index2) => index2 === index)
            }
        })
        return formatedContent
    }
    let handleFilterPost = (code) => {

        navigate({
            pathname: location?.pathname,
            search: createSearchParams({
                [type]: code,
            }).toString(),
        });
    }
    return (
        <div className="w-full rounded-md p-4 bg-white shadow-md">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {!isDouble && <div className='flex flex-col gap-3'>
                {content?.length > 0 &&
                    content.map((item) => {
                        return (
                            <Link to={`${formatVietnameseToString(item.value)}`} key={item.code} className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600 border-b border-gray-300 border-dashed">
                                <BsChevronRight size={10} color={'#ccc'} />
                                <p>{item.value}</p>
                            </Link>
                        );
                    })}
            </div>}
            {isDouble && <div className='flex flex-col gap-3'>
                {content?.length > 0 &&
                        formatContent(content).map((item,index) => {
                            return (
                                <div
                                    key={index}
                                    className=" "
                                >
                                    <div className='flex items-center justify-around cursor-pointer ' >
                                        <div onClick={() => handleFilterPost(item.left.code)} className='flex flex-1 items-center  gap-2 text-sm hover:text-red-600 border-b border-gray-300 border-dashed' >
                                            <BsChevronRight size={10} color={'#ccc'} />
                                            <p>{item.left.value}</p>
                                        </div>
                                        <div onClick={() => handleFilterPost(item.right.code)} className='flex flex-1 items-center  gap-2 text-sm hover:text-red-600 border-b border-gray-300 border-dashed' >
                                            <BsChevronRight size={10} color={'#ccc'} />
                                            <p>{item.right.value}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
            </div>}
            
        </div>
    );
};

export default memo(ItemSidebar);
