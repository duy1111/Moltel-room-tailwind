import React, { useEffect, useState } from 'react';
import Search from './Search';
import { text, location } from '../../utils/constant';
import { Province } from '../../components';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import ItemSidebar from '../../components/ItemSidebar';
import * as actions from '../../store/actions';
import RelatedPost from '../../components/RelatedPost';
import { useLocation } from 'react-router-dom';

import { formatVietnameseToString } from '../../utils/common/formatVietnameseToString';
const RentalApartment = () => {
    let dispatch = useDispatch();
    let { prices, areas, categories } = useSelector((state) => state.app);
    let locationPath = useLocation();
    let [categoryCurrent,setCategoryCurrent] = useState('')
    let [categoryCode,setCategoryCode] = useState('none')
    console.log(categoryCode)
    useEffect(() => {
      let category = categories?.find(item => `/${formatVietnameseToString(item.value)}` === locationPath.pathname)

        if (category) {
          setCategoryCurrent(category)
          setCategoryCode(category.code)
        }
    }, [locationPath]);
   
    return (
        <div className=" w-full flex flex-col gap-4 ">
            <div>
                <h1 className="text-[28px] font-bold ">{categoryCurrent?.header}</h1>
                <p className="text-sm text-gray-700">{categoryCurrent?.subHeader}</p>
            </div>
            <Province location={location} />
            <div className="flex w-full gap-4">
                <div className="w-2/3">
                    <List categoryCode={categoryCode} />
                    <Pagination />
                </div>
                <div className="w-1/3  flex flex-col gap-4 justify-start items-center ">
                    <ItemSidebar type={'priceCode'} isDouble={true} content={prices} title={'Xem giá'} />
                    <ItemSidebar type={'areaCode'} isDouble={true} content={areas} title={'Xem theo diện tích'} />

                    <RelatedPost />
                </div>
            </div>
        </div>
    );
};

export default RentalApartment;
