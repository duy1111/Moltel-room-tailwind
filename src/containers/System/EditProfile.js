import React from 'react';
import { InputReadOnly } from '../../components';

const EditProfile = () => {
    return (
        <div className="px-6 ">
            <h1 className="text-3xl font-medium py-4 border-b border-gray-200">Cập nhật thông tin cá nhân</h1>
            <div className='flex flex-col justify-center w-full items-center py-10 gap-4' >
                <div className='w-4/5'><InputReadOnly flex label={'Mã thành viên'} value={'ddddddddddd'} /></div>
                <div className='w-4/5'><InputReadOnly flex label={'Mã thành viên'} value={'ddddddddddd'} /></div>
            </div>
        </div>
    );
};

export default EditProfile;
