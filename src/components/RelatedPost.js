import React, { useEffect } from 'react';
import { SmallItem } from './index';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../store/actions'

const RelatedPost = () => {
    const dispatch = useDispatch();
    let { newPost } = useSelector((state) => state.post);
    useEffect(() => {
        
        dispatch(actions.getNewPost())
    
    },[])
    console.log(newPost);
    return (
        <div className="w-full bg-white rounded-md shadow-md p-4 border flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4">Tin mới đăng</h3>
            <div className="w-full flex flex-col gap-2">
                {newPost?.length > 0 && newPost.map((item,index) => {
                    return(
                        <SmallItem key={item.id} image={JSON.parse(item?.images?.image)} price={item?.attributes?.price} createdAt={item?.createdAt} title={item.title} />
                    )
                }) }
                
                
            </div>
        </div>
    );
};

export default RelatedPost;
