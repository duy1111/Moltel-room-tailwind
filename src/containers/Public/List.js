import React from 'react'
import { ButtonV2,Item} from '../../components'
const List = () => {
  return (
    <div className='flex flex-col gap-3 '  >
        <div className='flex justify-between items-center px-4'>
            <div className='text-2xl font-semibold ' >Danh sách tin đăng</div>
            <span>Friday, April 14, 2023 (GMT+7)</span>
        </div>
        <div className='text-md font-medium px-4 flex gap-3' ><span>Sắp xếp: </span>
            <ButtonV2 text={'Mặc định'} />
            <ButtonV2 text={'Mới nhất'} />
            <ButtonV2 text={'Có video'}  />
        </div>
        <div className='w-full' >
            <Item/>
        </div>
    </div>
  )
}

export default List