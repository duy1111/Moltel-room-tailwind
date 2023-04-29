import React from 'react'
import SelectInput from './SelectInput'
import { useSelector } from 'react-redux'
const Overview = () => {
const {categories} = useSelector(state => state.app)

  return (
    <div>
        <h2>Thông tin mô tả</h2>
        <div className='w-full flex flex-col gap-4'>
            <SelectInput options={categories} label={'Loại chuyên mục'}  />
            <div>
                <label htmlFor='title' >Tiêu đề</label>
                <input type='text' id='title' className='w-full rounded-md outline-none border border-gray-200 p-2' />
            </div>
            <div className='flex flex-col w-full'> 
                <label htmlFor='description' >Nội dung mô tả</label>
                <textarea className='border border-gray-200 outline-none p-1' name='' id='' cols={"30"} rows={"10"} />
            </div>
        </div>
    </div>
  )
}

export default Overview