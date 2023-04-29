import React, {} from 'react'
import { Address, Overview } from '../../components'

const CreatePost = () => {
    

  return (
    <div className='px-6 ' >
        <h1 className='text-3xl font-medium py-4 border border-gray-200' >Đăng tin mới</h1>
        <div className='flex w-full py-4'>
            <div className='w-2/3  flex flex-col gap-8'>
                <Address  />
                <Overview/>
            </div>
            <div className='w-1/3 flex-none'>GG map </div>
        </div>
        
    </div>
  )
}

export default CreatePost