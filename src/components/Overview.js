import React from 'react';
import SelectInput from './SelectInput';
import { useSelector } from 'react-redux';
import InputReadOnly from './InputReadOnly';
import { InputFormV2 } from '.';
import { menuObject } from '../utils/menuManage';
const Overview = ({ payload, setPayload, setInvalidFields, invalidFields }) => {
    const { categories } = useSelector((state) => state.app);
    const { currentData } = useSelector((state) => state.user);

    return (
        <div>
            <h2>Thông tin mô tả</h2>
            <div className="w-full flex flex-col gap-4">
                <SelectInput
                    value={payload.categoryCode}
                    name={'categoryCode'}
                    setValue={setPayload}
                    options={categories}
                    label={'Loại chuyên mục'}
                    setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields}
                />
                <InputFormV2
                    value={payload.title}
                    setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields}
                    name={'title'}
                    setValue={setPayload}
                    label={'Tiêu đề'}
                />

                <div className="flex flex-col w-full">
                    <label htmlFor="description">Nội dung mô tả</label>
                    <textarea
                        className="border border-gray-200 outline-none p-1"
                        name=""
                        onChange={(e) => setPayload((prev) => ({ ...prev, description: e.target.value }))}
                        value={payload.description}
                        id=""
                        cols={'30'}
                        rows={'10'}
                onFocus={(e) => setInvalidFields([])}

                    />
                            <small className='text-red-500 block w-full' >{`${invalidFields?.find(item => item.name === 'description')?.message || '' }`}</small>

                </div>
                <InputReadOnly label={'Thông tin liên hệ'} value={currentData.name} />
                <InputReadOnly label={'Điện thoại'} value={currentData.phone} />
                <InputFormV2
                    value={payload.priceNumber}
                    label={'Giá cho thuê'}
                    small={'Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000'}
                    unit={'đồng'}
                    setValue={setPayload}
                    name={'priceNumber'}
                    setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields}
                />
                <InputFormV2
                    value={payload.areaNumber}
                    name={'areaNumber'}
                    setValue={setPayload}
                    label={'Diện tích'}
                    unit={'m²'}
                    setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields}
                />
                <SelectInput
                    defaultValue={'Tất cả'}
                    options={menuObject}
                    label={'Đối tượng cho thuê'}
                    value={payload.target}
                    name={'target'}
                    setValue={setPayload}
                    setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields}
                />
            </div>
        </div>
    );
};

export default Overview;
