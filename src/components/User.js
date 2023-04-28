import React from 'react'
import { useSelector } from "react-redux";
import anonAvatar from "../assets/anon-avatar.jpg"
const User = ({setIsShowMenu}) => {
  const {currentData} = useSelector(state => state.user)

  return (
    <div className='flex items-center justify-center gap-2 cursor-pointer '  onClick={() => setIsShowMenu(prev => !prev)} >
        <img src={anonAvatar} className='h-[40px] w-[40px] rounded-full object-cover' alt='avatar' />
        <div>
            <span className='font-semibold text-gray-600 text-sm' >{currentData?.name}</span>
           
        </div>
    </div>
  )
}

export default User