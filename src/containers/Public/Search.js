import React from 'react'
import { Button, SearchItem } from '../../components'
import icons from '../../utils/icons';
const {BsChevronRight,HiLocationMarker,GiMoneyStack,BiArea,GiFamilyHouse,BsSearch} = icons
const Search = () => {
  return (
    <div className='py-2 px-2 gap-2 bg-[#666666] rounded-md flex-col lg:flex-row flex items-center justify-around w-4/5 max-w-[1100px] ' >
        <SearchItem
            fontWeight
            IconBefore={<GiFamilyHouse  />}
            text={'Phòng trọ, nhà trọ'}
        />
        <SearchItem
            IconAfter={<BsChevronRight className='text-[#c5c5c5]' />}
            text={'Toàn quốc'}
            IconBefore={<HiLocationMarker className='text-[#c5c5c5]' />}
        />
        <SearchItem
            IconAfter={<BsChevronRight className='text-[#c5c5c5]' />}
            IconBefore={<GiMoneyStack className='text-[#c5c5c5]' />}
            text={'Chọn giá'}
        />
        <SearchItem
            IconAfter={<BsChevronRight className='text-[#c5c5c5]' />}
            IconBefore={<BiArea className='text-[#c5c5c5]' />}

            text={'Chọn diện tích'}
        />
        <button
            type='button'
            className='outline-none py-2 px-4 w-[180px] bg-secondary2 rounded-md text-white font-medium flex items-center justify-center gap-1'
        ><BsSearch/> Tìm kiếm</button>
    </div>
  )
}

export default Search