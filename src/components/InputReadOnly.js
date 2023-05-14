import React from 'react';

const InputReadOnly = ({ label, value,flex,editPhone }) => {
    return (
        <div className= {`${flex ? 'flex items-start': 'flex flex-col'} w-full flex-wrap`}>
            <label className={` ${flex ? 'w-1/4 pt-3':''} font-medium`} htmlFor="exactly-address">
                {label}
            </label>
            <div className={`${flex ? 'w-3/4':'w-full'}`}>
                <input
                    value={value || ''}
                    type="text"
                    id="exactly-address"
                    className={` border border-gray-300 rounded-md bg-gray-200 p-2 outline-none w-[100%]`}
                    readOnly
                />
                
                {editPhone && <small className='text-orange-400 cursor-pointer'>Đổi số điện thoại</small>}
            </div>
        </div>
    );
};

export default InputReadOnly;
