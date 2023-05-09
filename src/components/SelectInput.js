import React, { memo } from 'react';

const SelectInput = ({ label, options, value, setValue, type, reset, defaultValue, name, invalidFields ,setInvalidFields}) => {
    console.log('check option in', invalidFields);
    const handleErrorText = () => {
        
        let nameInvalid  = invalidFields?.find(item => item.name === name)
        let addressInvalid = invalidFields?.find(item => item.name === 'address')
        return nameInvalid ? `${nameInvalid ? nameInvalid?.message : ''}` : `${addressInvalid ? addressInvalid?.message : ''}`
    }
    
    return (
        <div className="flex flex-col gap-2 py-4 w-1/4">
            <label className="font-medium" htmlFor="select-address">
                {label}
            </label>
            <select
                id="select-address "
                onChange={(e) =>
                    !name ? setValue(e.target.value) : setValue((prev) => ({ ...prev, [name]: e.target.value }))
                }
                onFocus={(e) => setInvalidFields([])}
                value={reset ? '' : value}
                className="outline-none border border-gray-300 w-full py-1"
            >
                <option value={''}>{`--Chọn ${defaultValue || label}--`}</option>
                {options?.map((item, index) => {
                    return (
                        <option
                            key={index}
                            value={
                                type === 'province'
                                    ? item?.province_id
                                    : item?.district_id
                                    ? item?.district_id
                                    : item?.code
                            }
                        >
                            {type === 'province'
                                ? item?.province_name
                                : item?.district_name
                                ? item?.district_name
                                : item?.value}
                        </option>
                    );
                })}
            </select>
            {invalidFields && <small className='text-red-500' >{handleErrorText() }</small>}
        </div>
    );
};

export default memo(SelectInput);
