import React from 'react';
import anonAvatar from '../../assets/anon-avatar.jpg';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { menuSidebar } from '../../utils/menuSidebar';
const activeStyle = ''
const notActiveStyle = ''
const Sidebar = () => {
    const { currentData } = useSelector((state) => state.user);
    return (
        <div className="w-[256px] flex-none  gap-4 p-4">
            <div className="flex items-center  gap-4">
                <img src={anonAvatar} alt="avatar" className="w-[40px] h-[40px] rounded-full object-cover" />
                <div className="flex flex-col justify-center">
                    <span className="font-semibold">{currentData?.name}</span>
                    <small>{currentData?.phone}</small>
                </div>
            </div>
            <div className='mt-4'>
                {menuSidebar.map((item) => {
                    return (
                        <NavLink
                            className="hover:hover:text-red-500 py-2 text-black border-b border-gray-300 flex gap-2 items-center justify-start"
                            to={item?.path}
                            key={item.id}
                        >
                            {item.icon} {item.text}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
