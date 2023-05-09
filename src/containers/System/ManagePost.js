import React from 'react';
import Button from '../../components/Button';
import { Contact } from '../../components';
const ManagePost = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between border-b border-gray-300 items-center">
                <h1 className="text-3xl font-semibold py-4 uppercase ">Đăng tin mới</h1>
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
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                                    <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="border-r px-4 py-4 dark:border-neutral-500">
                                                mã tin
                                            </th>
                                            <th scope="col" class="border-r px-4 py-4 dark:border-neutral-500">
                                                Ảnh đại diện
                                            </th>
                                            <th scope="col" class="border-r px-4 py-4 dark:border-neutral-500">
                                                Tiêu đề
                                            </th>
                                            <th scope="col" class="px-2 py-4 border-r dark:border-neutral-500">
                                                Giá
                                            </th>
                                            <th scope="col" class="px-4 py-4 border-r dark:border-neutral-500">
                                                Ngày bắt đầu
                                            </th>
                                            <th scope="col" class="px-4 py-4 border-r dark:border-neutral-500">
                                                Ngày hết hạn
                                            </th>
                                            <th scope="col" class="px-4 py-4 border-r dark:border-neutral-500">
                                                Trạng thái
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                1
                                            </td>
                                            <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                Mark
                                            </td>
                                            <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                Otto
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">@mdo</td>
                                            <td class="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">@mdo</td>
                                            <td class="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">@mdo</td>
                                            <td class="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">@mdo</td>
                                        </tr>
                                        
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap  px-6 py-4 font-medium  " colspan="2">
                                                3dgdsdfshgfdhfdhfshdffffff
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <Contact/>
                </div>
            </div>
        </div>
    );
};

export default ManagePost;
