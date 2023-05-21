import React, { useEffect,useState } from 'react';
import anonAvatar from '../../assets/anon-avatar.jpg';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { menuSidebar } from '../../utils/menuSidebar';
import icons from '../../utils/icons';
import { useDispatch } from 'react-redux';
import { blobToBase64 } from '../../utils/common/toBase64';

import * as actions from '../../store/actions';

const { BiLogOut,GrUserManager } = icons;
const activeStyle =
    'hover:bg-gray-200 py-2 text-black  flex gap-2 items-center justify-start font-bold bg-gray-200 border-l border-red-500 p-4';
const notActiveStyle =
    'hover:bg-gray-200 py-2 text-black  flex gap-2 items-center justify-start border-l border-transparent p-4 cursor-pointer';
const Sidebar = () => {
    
    const dispatch = useDispatch();
    const { currentData } = useSelector((state) => state.user);
    
    let menuManageUser = {
        id:5,
        text:'Quản lý người dùng',
        icon: <GrUserManager/>,
        path:'/he-thong/quan-ly-nguoi-dung',
    }
    
    
    

    return (
        <div className="w-[256px] flex-none  gap-4 ">
            <div className="flex items-center p-4  gap-4">
                <img src={currentData?.avatar ?  blobToBase64(currentData?.avatar):anonAvatar} alt="avatar" className="w-[40px] h-[40px] rounded-full object-cover " />
                <div className="flex flex-col justify-center">
                    <span className="font-semibold">{currentData?.name}</span>
                    <small>{currentData?.phone}</small>
                </div>
            </div>
            <div className="mt-4">
                {menuSidebar.map((item) => {
                    return (
                        <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
                            to={item?.path}
                            key={item.id}
                        >
                            {item.icon} {item.text}
                        </NavLink>
                    );
                })}
                <NavLink
                            className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
                            to={menuManageUser?.path}
                            key={menuManageUser.id}
                        >
                            {menuManageUser.icon} {menuManageUser.text}
                        </NavLink>
                <span
                    onClick={() => {
                        dispatch(actions.logout());
                    }}
                    className="hover:bg-gray-200 py-2 text-black  flex gap-2 items-center justify-start border-l border-transparent p-4"
                >
                    <BiLogOut />
                    Thoát
                </span>
            </div>
        </div>
    );
};

export default Sidebar;
