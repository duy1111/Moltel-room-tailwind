import React from 'react';

const InputReadOnly = ({ label, value,flex }) => {
    return (
        <div className= {`${flex ? 'flex items-center': 'flex flex-col'} gap-2 w-full`}>
            <label className={` ${flex ? 'w-1/4':''} font-medium`} htmlFor="exactly-address">
                {label}
            </label>
            <input
                value={value || ''}
                type="text"
                id="exactly-address"
                className={` ${flex ? 'w-3/4':'w-full'} border border-gray-300 rounded-md bg-gray-200 p-2 outline-none`}
                readOnly
            />
        </div>
    );
};

export default InputReadOnly;
