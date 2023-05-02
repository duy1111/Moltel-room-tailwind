import React from 'react';

const InputReadOnly = ({ label, value }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="font-medium" htmlFor="exactly-address">
                {label}
            </label>
            <input
                value={value || ''}
                type="text"
                id="exactly-address"
                className="border border-gray-300 rounded-md bg-gray-200 p-2 w-full outline-none"
                readOnly
            />
        </div>
    );
};

export default InputReadOnly;
