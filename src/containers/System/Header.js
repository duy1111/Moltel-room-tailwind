import React from 'react'
import { Navigation } from '../Public'
const Header = () => {
  return (
    <div className='w-full flex shadow-md border-b-2 ' >
        <div className='flex justify-center items-center font-bold bg-white text-black w-[256px] flex-none' >Logo</div>
        <div className='flex-auto '><Navigation isAdmin={true} /></div>
    </div>
  )
}

export default Header