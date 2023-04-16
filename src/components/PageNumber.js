import React, { memo } from 'react';
import { createSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
let notActive = 'px-3 py-2 bg-white hover:bg-gray-300 hover:text-white rounded-md ';
let active = 'px-3 py-2 bg-secondary2 text-white rounded-md hover:opacity-70 cursor-pointer';
const PageNumber = ({ icon, currentPage, text, setCurrentPage, type }) => {
    const navigate = useNavigate();

    let handleChangePage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text);

            navigate({
                pathname: '/',
                search: createSearchParams({
                    page: text,
                }).toString(),
            });
        }
    };

    return (
        <div className={+text === +currentPage ? active : `${notActive} ${text==='...'?'cursor-text':'cursor-pointer'}`} onClick={handleChangePage}>
            {icon ? icon : text}
        </div>
    );
};

export default memo(PageNumber);
