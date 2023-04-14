import React ,{memo}from 'react'

const ProvinceButton = ({name,image}) => {
  return (
    <div className=' shadow-md hover:shadow-xl rounded-md cursor-pointer text-red-700  hover:text-orange-600' >
        <img
            src={image}
            alt='name'
            className='w-[190px] h-[110px] object-cover rounded-t-md'
        />
        <div className=' p-2 font-semibold flex items-center justify-center '>{name}</div>
    </div>
  )
}

export default memo(ProvinceButton)