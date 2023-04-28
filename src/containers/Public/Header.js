import React, { useState } from 'react';

import logo from '../../assets/Logo.png';
import { Button, User } from '../../components';
import * as actions from '../../store/actions/auth';
import Item from '../../components/ItemHeader';
import icons from '../../utils/icons';
import { useNavigate, Link } from 'react-router-dom';
import { useCallback } from 'react';
import { path } from '../../utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import { menuManage } from '../../utils/menuManage';

const { AiOutlineHeart, BiLogOut } = icons;
function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } });
    }, []);

    const [isShowMenu, setIsShowMenu] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    let handleLogout = () => {
        dispatch(actions.logout);
        setIsShowMenu(false);
    };
    return (
        <div>
            <div className="w-screen h-1200 flex items-center justify-between border border-gray-300">
                <div className="flex items-center gap-3">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="w-[70px] h-[70px] object-container" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <Item text="Nhà bán đất" />
                        <Item text="Nhà đất cho thuê" />
                        <Item text="Dự án" />
                        <Item text="Tin tức" />
                        <Item text="Wiki BĐS" />
                        <Item text="Phân tích đánh giá" />
                        <Item text="Danh bạ" />
                    </div>
                </div>
                <div className="flex items-center gap-1 ">
                    <Button Icons={AiOutlineHeart} bgColor="bg-[#fff]" />
                    {!isLoggedIn ? (
                        <>
                            <Button
                                text={'Đăng nhập'}
                                textColor="text"
                                bgColor="bg-[#fff]"
                                onClick={() => goLogin(false)}
                            />
                            <Button
                                text={'Đăng ký'}
                                textColor="text"
                                bgColor="bg-[#fff]"
                                onClick={() => goLogin(true)}
                            />
                        </>
                    ) : (
                        <div className="flex items-center gap-1 relative">
                            <User setIsShowMenu={setIsShowMenu} />

                            {isShowMenu && (
                                <div className="absolute border top-full w-[220px] shadow-md rounded-md p-4 z-50 bg-white  left-0 flex flex-col  ">
                                    {menuManage.map((item) => {
                                        return (
                                            <Link
                                                className="hover:hover:text-red-500 py-2 text-black border-b border-gray-300 flex gap-2 items-center justify-start"
                                                to={item?.path}
                                                key={item.id}
                                            >
                                                {item.icon} {item.text}
                                            </Link>
                                        );
                                    })}
                                    <button
                                        className="cursor-pointer py-2 hover:text-red-500 flex items-center gap-2"
                                        onClick={() => {
                                          console.log('hahaha')
                                          setIsShowMenu(false)
                                          dispatch(actions.logout())
                                      }}
                                    >
                                        <BiLogOut /> Đăng xuất
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <Button text={'Đăng tin'} textColor="text" bgColor="bg-[#fff]" />
                </div>
            </div>
        </div>
    );
}

export default Header;
