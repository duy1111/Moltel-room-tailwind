import React, { useEffect } from 'react';
import Search from './Search';
import { text, location } from '../../utils/constant';
import { Province } from '../../components';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import ItemSidebar from '../../components/ItemSidebar';
import * as actions from '../../store/actions';

import RelatedPost from '../../components/RelatedPost';
const HomePage = () => {
    let { categories, prices, areas } = useSelector((state) => state.app);
    const {count} = useSelector(state => state.post)

    return (
        <div className=" w-full flex flex-col gap-4 ">
            <div>
                <h1 className="text-[28px] font-bold ">{text.HOME_TITLE}</h1>
                <p className="text-sm text-gray-700">{text.HOME_DESCRIPTION}</p>
            </div>
            <Province location={location} />
            <div className="flex w-full gap-4">
                <div className="w-2/3">
                    <List />
                    <Pagination count={count} />
                </div>
                <div className="w-1/3  flex flex-col gap-4 justify-start items-center ">
                    <ItemSidebar content={categories} title={'Danh sách cho thuê'} />
                    <ItemSidebar type={'priceCode'} isDouble={true} content={prices} title={'Xem giá'} />
                    <ItemSidebar type={'areaCode'} isDouble={true} content={areas} title={'Xem theo diện tích'} />

                    <RelatedPost />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
