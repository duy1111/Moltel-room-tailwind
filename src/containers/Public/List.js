import React, { useEffect, useRef,memo } from 'react';
import { ButtonV2, Item } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/post';
import { useSearchParams } from 'react-router-dom';
import { check } from 'prettier';
const List = ({categoryCode}) => {
    let dispatch = useDispatch();
    let [searchParams] = useSearchParams()
    const { posts } = useSelector((state) => state.post);
    const listRef = useRef()
    

    console.log(categoryCode)
    useEffect(() => {
        let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamsObject = {
            
        }
        params?.forEach(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0])) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
            }
        })
        if (categoryCode) searchParamsObject.categoryCode = categoryCode
        console.log('check ',searchParamsObject)
        dispatch(actions.getPostsLimit(searchParamsObject))
      
        listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [searchParams,categoryCode]);
    
    return (
        <div ref={listRef} className="flex flex-col gap-3 bg-white shadow-md  ">
            <div className="flex justify-between items-center px-4">
                <div className="text-2xl font-semibold ">Danh sách tin đăng</div>
                <span>Friday, April 14, 2023 (GMT+7)</span>
            </div>
            <div className="text-md font-medium px-4 flex gap-3">
                <span>Sắp xếp: </span>
                <ButtonV2 text={'Mặc định'} />
                <ButtonV2 text={'Mới nhất'} />
                <ButtonV2 text={'Có video'} />
            </div>
            <div className="w-full">
                {posts?.length > 0 &&
                    posts.map((item,index) => {
                        return <Item 
                          key={item?.id} 
                          address={item?.address}
                          attributes={item?.attributes}
                          description={JSON.parse(item?.description)}
                          images={JSON.parse(item?.images?.image)}
                          star={+item?.star}
                          title={item?.title}
                          user={item?.user}
                          id={item?.id}                        
                        />;
                    })}
                
            </div>
            
        </div>
    );
};

export default memo(List);
