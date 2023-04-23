import React,{useState} from 'react'
import { Button, SearchItem, Modal } from '../../components'
import icons from '../../utils/icons';
import { useSelector } from 'react-redux';
const {BsChevronRight,HiLocationMarker,GiMoneyStack,BiArea,GiFamilyHouse,BsSearch} = icons
const Search = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [content, setContent] = useState('')
    const [name, setName] = useState('')
    const {provinces,prices,areas,categories} = useSelector(state => state.app)
    let handleShowModal = (content,name) => {
        setContent(content)
        setIsShowModal(true)
        setName(name)
    }
  return (
    <>
        <div className='py-2 px-2 gap-2 bg-[#666666] rounded-md flex-col lg:flex-row flex items-center justify-around w-4/5 max-w-[1100px] ' >
            <span onClick={() =>handleShowModal(categories,'category')} className='flex-1 cursor-pointer' >
                <SearchItem
                    fontWeight
                    IconBefore={<GiFamilyHouse  />}
                    text={'Phòng trọ, nhà trọ'}
                />
            </span>
            <span onClick={() =>handleShowModal(provinces,'province')} className='flex-1 cursor-pointer' >
                <SearchItem
                    IconAfter={<BsChevronRight className='text-[#c5c5c5]' />}
                    text={'Toàn quốc'}
                    IconBefore={<HiLocationMarker className='text-[#c5c5c5]' />}
                />
            </span>
            <span onClick={() =>handleShowModal(prices,'price')} className='flex-1 cursor-pointer' >
                <SearchItem
                    IconAfter={<BsChevronRight className='text-[#c5c5c5]' />}
                    IconBefore={<GiMoneyStack className='text-[#c5c5c5]' />}
                    text={'Chọn giá'}
                />
            </span>
            <span onClick={() =>handleShowModal(areas,'area')} className='flex-1 cursor-pointer' >
                <SearchItem
                    IconAfter={<BsChevronRight className='text-[#c5c5c5]' />}
                    IconBefore={<BiArea className='text-[#c5c5c5]' />}
        
                    text={'Chọn diện tích'}
                />
            </span>
            <button
                type='button'
                className=' outline-none py-2 px-4 w-[180px] bg-secondary2 rounded-md text-white font-medium flex items-center justify-center gap-1'
            ><BsSearch/> Tìm kiếm</button>
        </div>
        {isShowModal && <Modal name={name} content={content} setIsShowModal={setIsShowModal}  />}
        
    </>
  )
}

export default Search