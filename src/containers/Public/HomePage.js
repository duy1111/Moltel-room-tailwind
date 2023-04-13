import React from 'react'
import Search from './Search'
import { text } from '../../utils/constant'
import { ProvinceButton } from '../../components'
const HomePage = () => {
  return (
    <div className=' w-full flex flex-col gap-4 shadow-md '>
        <Search/>
        <div>
          <h1 className='text-[28px] font-bold '>{text.HOME_TITLE}</h1>
          <p className='text-sm text-gray-700' >{text.HOME_DESCRIPTION}</p>
        </div>
        <div className='flex items-center justify-center gap-5 py-5 shadow-md' >
          <ProvinceButton/>
          <ProvinceButton/>
          <ProvinceButton/>
        </div>
    </div>
  )
}

export default HomePage