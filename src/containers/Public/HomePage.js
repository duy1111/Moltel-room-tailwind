import React,{useEffect} from 'react';
import Search from './Search';
import { text, location } from '../../utils/constant';
import { Province } from '../../components';
import Pagination from './Pagination';
import { useSelector,useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import List from './List';
import ItemSidebar from '../../components/ItemSidebar';
import * as actions from '../../store/actions'
const HomePage = () => {
    let dispatch = useDispatch()
    const [params] = useSearchParams();
    let {categories,prices,areas} = useSelector((state) => state.app)
    
    const { posts } = useSelector((state) => state.post);
    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getArea())
    },[])
   
    return (
        <div className=" w-full flex flex-col gap-4 ">
            <div>
                <h1 className="text-[28px] font-bold ">{text.HOME_TITLE}</h1>
                <p className="text-sm text-gray-700">{text.HOME_DESCRIPTION}</p>
            </div>
            <Province location={location} />
            <div className="flex w-full gap-4">
                <div className="w-2/3">
                    <List page={+(params.get('page') || 1)} />
                    <Pagination length={posts?.length} number={+(params.get('page') || 1)} />
                </div>
                <div className="w-1/3  flex flex-col gap-4 justify-start items-center ">
                    <ItemSidebar content={categories} title={'Danh sách cho thuê'} />
                    <ItemSidebar isDouble={true} content={prices} title={'Xem giá'}  />
                    <ItemSidebar isDouble={true} content={areas} title={'Xem theo diện tích'} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
