import React, { memo } from 'react';

const SearchItem = ({ IconBefore, IconAfter, text,color,fontWeight }) => {
    return (
        <div className=" border  w-full px-[4px] py-2 bg-white border-t-white text-gray-500 flex justify-between items-center text-sm rounded-md">
            <div className='flex items-center gap-1 w-full' >
                {IconBefore}
                <span className={`${fontWeight && 'font-medium text-black'} w-full overflow-hidden text-ellipsis whitespace-nowrap`} >{text}</span>
            </div>
            {IconAfter}
        </div>
    );
};

export default memo(SearchItem);
