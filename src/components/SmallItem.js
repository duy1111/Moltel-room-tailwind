import React from 'react'
import moment from 'moment'
import 'moment/locale/vi'
const SmallItem = ({title, price,image, createdAt}) => {
  const formatTime = (createdAt) => {
    moment.locale('vn')
    return moment(createdAt).fromNow()
  }
  return (
    <div className='w-full flex items-center gap-3 border-b border-gray-200 pb-2' >
        <img 
            src={image ? image[0] : ''}
            alt=''
            className='w-[65px] h-[65px] object-cover rounded-md flex-none'
        />
        <div className='flex flex-col flex-auto justify-between w-full' >
            <h4 className='text-blue-600 font-semibold text-base' >{title && (title?.length > 40) ?  `${title?.slice(0,40)}...`:  `${title}`}</h4>
            <div className='flex items-center justify-between w-full'>
                <span className='font-medium text-green-500 ' >{price}</span>
                <span className='text-gray-300' >{formatTime(createdAt)}</span>
            </div>
        </div>
    </div>
  )
}

export default SmallItem