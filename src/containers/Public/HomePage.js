import React from 'react';
import Search from './Search';
import { text, location } from '../../utils/constant';
import { Province } from '../../components';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import List from './List';
import ItemSidebar from '../../components';
const HomePage = () => {
    const [params] = useSearchParams();
  

    const { posts } = useSelector((state) => state.post);

    return (
        <div className=" w-full flex flex-col gap-4 shadow-md ">
            <div>
                <h1 className="text-[28px] font-bold ">{text.HOME_TITLE}</h1>
                <p className="text-sm text-gray-700">{text.HOME_DESCRIPTION}</p>
            </div>
            <Province location={location} />
            <div className="flex w-full gap-4">
                <div className="w-2/3">
                    <List page={+(params.get('page') || 1)} />
                    <Pagination length={posts.length} number={+(params.get('page') || 1)} />
                </div>
                <div className="w-1/3 border border-green-600 ">
                    <ItemSidebar/>
                    <ItemSidebar/>
                    <ItemSidebar/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
