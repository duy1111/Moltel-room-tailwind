import React from 'react';
import Search from './Search';
import { text, location } from '../../utils/constant';
import { Province } from '../../components';
import List from './List';
const HomePage = () => {
    return (
        <div className=" w-full flex flex-col gap-4 shadow-md ">
            
            <div>
                <h1 className="text-[28px] font-bold ">{text.HOME_TITLE}</h1>
                <p className="text-sm text-gray-700">{text.HOME_DESCRIPTION}</p>
            </div>
            <Province
              location={location}
            />
            <div className='flex w-full gap-4' >
              <div className='bg-white shadow-md w-2/3'><List/></div>
              <div className='w-1/3 border border-green-600 '>
                Sidebar
              </div>
            </div>
        </div>
    );
};

export default HomePage;
