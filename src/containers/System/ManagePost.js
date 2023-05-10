import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { Contact, UpdatePost } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

const ManagePost = () => {
    let dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const { postOfCurrent } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(actions.getPostsAdmin());
    }, []);

    console.log('ddddd', postOfCurrent);
    return (
        <div className="p-6">
            <div className="flex justify-between border-b border-gray-300 items-center">
                <h1 className="text-3xl font-semibold py-4 uppercase ">Chỉnh sửa tin đăng</h1>
                <div className="gap-1 flex">
                    <select className="border outline-none border-gray-300 px-2" name="" id="">
                        <option>Lọc theo loại vip</option>
                    </select>
                    <select className="border outline-none border-gray-300 px-2" name="" id="">
                        <option>Lọc theo trạng thái</option>
                    </select>
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
                                                mã tin
                                            </th>
                                            <th scope="col" className="border-r px-4 py-4 dark:border-neutral-500">
                                                Ảnh đại diện
                                            </th>
                                            <th scope="col" className="border-r px-4 py-4 dark:border-neutral-500">
                                                Tiêu đề
                                            </th>
                                            <th scope="col" className="px-2 py-4 border-r dark:border-neutral-500">
                                                Giá
                                            </th>
                                            <th scope="col" className="px-4 py-4 border-r dark:border-neutral-500">
                                                Ngày bắt đầu
                                            </th>
                                            <th scope="col" className="px-4 py-4 border-r dark:border-neutral-500">
                                                Ngày hết hạn
                                            </th>
                                            <th scope="col" className="px-4 py-4 border-r dark:border-neutral-500">
                                                Trạng thái
                                            </th>
                                            <th scope="col" className="px-4 py-4 border-r dark:border-neutral-500">
                                                actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {postOfCurrent && postOfCurrent?.length ? (
                                            postOfCurrent?.map((item, index) => {
                                                let dataDay = item?.overviews?.expire?.split(' ')[3];
                                                let dataExpire = dataDay.split('/');
                                                let dayExpire = `${dataExpire[1]}/${dataExpire[0]}/${dataExpire[2]}`;
                                                console.log('dayExpire', dayExpire);
                                                return (
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {item?.attributes?.hashtag}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 flex items-center justify-center">
                                                            <img
                                                                src={JSON.parse(item?.images?.image)[0]}
                                                                alt="avatar-post"
                                                                className="w-10 h-10 object-cover rounded-full"
                                                            />
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                            {item?.title}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">
                                                            {item?.attributes?.price}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">
                                                            {item?.overviews?.created}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">
                                                            {item?.overviews?.expire}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">
                                                            {new Date(dayExpire).getTime() > new Date().getTime()
                                                                ? 'Hoạt động'
                                                                : 'Hết hạn'}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">
                                                            <button
                                                                onClick={() => {
                                                                    console.log('check item ne',item)
                                                                    setIsEdit(true);
                                                                    dispatch(actions.getPostsData(item))
                                                                }}
                                                                className="outline-none mr-2"
                                                            >
                                                                Sửa
                                                            </button>
                                                            <button className="outline-none">Xóa</button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap  px-6 py-4 font-medium  " colSpan="2">
                                                    3dgdsdfshgfdhfdhfshdffffff
                                                </td>
                                            </tr>
                                        )}
                                        {}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Contact />
                </div>
            </div>
            {isEdit ? <UpdatePost  setIsEdit={setIsEdit} /> : <></>}
        </div>
    );
};

export default ManagePost;
