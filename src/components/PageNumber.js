import React, { memo } from 'react';
import { createSearchParams, useSearchParams,useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
let notActive = 'px-3 py-2 bg-white hover:bg-gray-300 hover:text-white rounded-md ';
let active = 'px-3 py-2 bg-secondary2 text-white rounded-md hover:opacity-70 cursor-pointer';
const PageNumber = ({ icon, currentPage, text, setCurrentPage, type }) => {
    const navigate = useNavigate();
    let [paramsSearch]= useSearchParams()
   
    let location = useLocation()
    let entries = paramsSearch.entries()
    let append = (entries) => {
        let params = {};
        for (let entry of entries) {
            params[entry[0]] = entry[1];
        }
        console.log(params)
        params["page"] = +text;
        return params;
          
    }
   

    let handleChangePage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text);

            navigate({
                pathname: location.pathname ,
                search: createSearchParams(append(entries)).toString(),
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
