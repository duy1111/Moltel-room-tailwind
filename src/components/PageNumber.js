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
        let params = []
        paramsSearch.append('page', +text)
        for (let entry of entries) {
            params.push(entry);
        }
        let searchParamsObject = {}
        params?.forEach(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0] && item !== 'page')) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
            }
        })
        return searchParamsObject
          
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
