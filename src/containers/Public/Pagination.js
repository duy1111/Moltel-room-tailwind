import React,{useEffect, useState} from 'react'
import { PageNumber } from '../../components'
import { useSelector } from 'react-redux'
import icons from '../../utils/icons'
import { check } from 'prettier'
let {TbPlayerTrackNextFilled,TbPlayerTrackPrevFilled} = icons
const Pagination = ({number,length}) => {
    const {count} = useSelector(state => state.post)
    const [arrPage, setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(number)
    const [isHideEnd,setIsHideEnd] = useState(false)
    const [isHideStart,setIsHideStart] = useState(false)
    useEffect(() => {
        let maxPage = Math.floor(count/length);
        console.log('maxPage',maxPage)
        let start,end;
        let check = currentPage === maxPage
        if(+currentPage === 1){
            start = 1
            end = start + 3 > maxPage ? maxPage : start + 3
        }
        else if(+currentPage === maxPage){
            end = maxPage;
            start = end - 3 < 1 ? 1 : end-3

        }

        else{
            start = (currentPage - 2)  < 1 ? (currentPage-1 <1? 1:currentPage-1 ) : (currentPage -2)
            end = (currentPage + 1)  > maxPage ? maxPage : (currentPage +1)
        }
        // let end = (currentPage + 1)  > 1 ? maxPage : (currentPage +1)
        // let start = (currentPage - 1)  < maxPage ? maxPage : (currentPage -1)
        let temp = []
        for(let i = start ;i<=end;i++){
            temp.push(i)
        }
        if(currentPage + 1 >= maxPage){
            setIsHideEnd(true)
        }
        else{
            setIsHideEnd(false)
        }
        if(currentPage - 3 <= 1){
            setIsHideStart(true)
        }
        else{
            setIsHideStart(false)
        }
        setArrPage(temp)
    },[count,length,currentPage])
    console.log('check arr page',arrPage)
    // let handlePageNumber = () => {
    //     let max = Math.floor(count/length)
    //     let arrNumber = []
    //     for(let i = 1;i<= max ;i++){
    //         arrNumber.push(i)
    //     }
    //     return arrNumber.length > 4 ? arrNumber.filter(i =>  i < 5) : arrNumber
    // }
    // let arrNumber = handlePageNumber()
  return (
    <div className='flex items-center justify-center gap-2 py-5 ' >
        {!isHideStart&&<PageNumber setCurrentPage={setCurrentPage} text={'1'}  icon={<TbPlayerTrackPrevFilled/>}  />}
        {!isHideStart&&<PageNumber  text={'...'} />}
        {arrPage.length > 0 && arrPage.map(item => {
            return (
                <PageNumber key={item} text={item} currentPage={currentPage}  setCurrentPage={setCurrentPage} />
            )
        })}
        
        {!isHideEnd&&<PageNumber  text={'...'} />}
        {!isHideEnd&&<PageNumber  icon={<TbPlayerTrackNextFilled/>} setCurrentPage={setCurrentPage} type={'end'} text={Math.floor(count/length)} />}
        
        

    </div>
  )
}

export default Pagination