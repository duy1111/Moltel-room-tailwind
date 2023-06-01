import React, { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
import { Contact, UpdatePost } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import Swal from 'sweetalert2';
import Pagination from '../Public/Pagination';
import { useSearchParams } from 'react-router-dom';
import anonAvatar from '../../assets/anon-avatar.jpg'
import { apiDeleteUser } from '../../services/user';
import { blobToBase64 } from '../../utils/common/toBase64';
import UpdateUser from './EditUser';
import Loading from '../../components';
const ManagePost = () => {
    let dispatch = useDispatch();

    let [searchParams] = useSearchParams()

    const { users,count } = useSelector((state) => state.user);
    const [isEdit, setIsEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dataUser, setDataUser] = useState({})
    useEffect(() => {
        dispatch(actions.getUserLimit())
    },[])
    useEffect(() => {
        console.log('check search',searchParams)
        let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamsObject = {
            
        }

        params?.forEach(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0])) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
            }
        })
        
       
        dispatch(actions.getUserLimit(searchParamsObject))
      
        
    }, [searchParams]);
    const [allUser, setAllUser] = useState([])
    useEffect(()=> {
        setAllUser(users)
    },[users])
    let handleDeleteUser = async(id) => {
        console.log(id)
        let response = await apiDeleteUser(id)
        if (response && response?.data?.err === 0) {
            dispatch(actions.getUserLimit())
            Swal.fire('Thành công', 'Xóa người dùng thành công', 'success');

            
        } else if (response && response?.data?.err !== 0) {

            Swal.fire('Oops !', 'Có lỗi gì rồi đấy', 'error');
        }
    }
    let handleLoading = () => {
        setIsLoading(prev => !prev)
    }
    let handleEditUser = (item) => {
        console.log(isEdit)
        setDataUser(item)
        
    }
    
    
    return (
        <div className="p-6">
            <div className="flex justify-between border-b border-gray-300 items-center">
                <h1 className="text-3xl font-semibold py-4 uppercase ">Quản lý người dùng</h1>
                <div className="gap-1 flex">
                    
                    <Button text={'Đăng tin mới'} bgColor={'bg-red-500'} textColor={'text-white'} />
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="border-r px-4 py-4 dark:border-neutral-500">
                                                tên
                                            </th>
                                            <th scope="col" className="border-r px-4 py-4 dark:border-neutral-500">
                                                Ảnh đại diện
                                            </th>
                                            <th scope="col" className="border-r px-4 py-4 dark:border-neutral-500">
                                                Số điện thoại
                                            </th>
                                            <th scope="col" className="px-2 py-4 border-r dark:border-neutral-500">
                                                Zalo
                                            </th>
                                            <th scope="col" className="px-4 py-4 border-r dark:border-neutral-500">
                                                Role
                                            </th>
                                            
                                            <th scope="col" className="px-4 py-4 border-r dark:border-neutral-500">
                                                actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allUser && allUser?.length ? (
                                            allUser?.map((item, index) => {
                                                
                                                return (
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {item?.name}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 flex items-center justify-center">
                                                            <img
                                                                src={item?.avatar ? blobToBase64(item?.avatar) : anonAvatar}
                                                                alt="avatar-post"
                                                                className="w-10 h-10 object-cover rounded-full"
                                                            />
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            {item?.phone}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">
                                                            {item?.zalo ? item?.zalo : ''}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">
                                                            {item?.role}
                                                        </td>
                                                        
                                                        <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">
                                                            <button
                                                                // onClick={() => handleUpdateUser(item)}
                                                                onClick={() => {
                                                                    setIsEdit(true)
                                                                    handleEditUser(item)
                                                                } }
                                                                className="outline-none mr-2"
                                                            >
                                                                Sửa
                                                            </button>
                                                            <button 
                                                            onClick={() => handleDeleteUser(item.id)}
                                                            className="outline-none">Xóa</button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap  px-6 py-4 font-medium  " colSpan="2">
                                                    chưa có dữ liệu
                                                </td>
                                            </tr>
                                        )}
                                        {}
                                    </tbody>
                                </table>
                                <Pagination count={count} />
                            </div>
                        </div>
                    </div>
                    <Contact />
                    {isEdit && <UpdateUser setIsEdit={setIsEdit} dataUser={dataUser} />}
                </div>
            </div>

        </div>
    );
};

export default ManagePost;
