import React, { useState, useCallback, useEffect } from 'react';
import { Button, SearchItem, Modal } from '../../components';
import icons from '../../utils/icons';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { path } from '../../utils/constant';
import * as actions from '../../store/actions'
const { BsChevronRight, HiLocationMarker, GiMoneyStack, BiArea, GiFamilyHouse, BsSearch } = icons;
const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isShowModal, setIsShowModal] = useState(false);
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [queries, setQueries] = useState({});
    const [arrMinMax, setArrMinMax] = useState({});
    const [defaultText, setDefaultText] = useState('')
    const { provinces, prices, areas, categories } = useSelector((state) => state.app);
    useEffect(() => {
        if (!location?.pathname.includes(path.SEARCH)) {
            setArrMinMax({});
            setQueries({});
        }
    }, [location]);
    let handleShowModal = (content, name,defaultText) => {
        setContent(content);
        setIsShowModal(true);
        setName(name);
        setDefaultText(defaultText)
    };
    const handleSubmit = useCallback(
        (e, query, arrMaxMin) => {
            e.stopPropagation();
            setQueries((prev) => ({ ...prev, ...query }));
            setIsShowModal(false);
            arrMaxMin && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));

        },
        [isShowModal, queries],
    );
    
    const handleSearch = () => {
        const queryCodes = Object.entries(queries).filter(item => item[0].includes('Number') || item[0].includes('Code')).filter(item => item[1])
        let queryCodesObj = {}
        queryCodes.forEach(item => { queryCodesObj[item[0]] = item[1] })
        const queryText = Object.entries(queries).filter(item => !item[0].includes('Code') || !item[0].includes('Number'))
        let queryTextObj = {}
        queryText.forEach(item => { queryTextObj[item[0]] = item[1] })
        let titleSearch = `${queryTextObj.category
            ? queryTextObj.category
            : 'Cho thuê tất cả'} ${queryTextObj.province
                ? `tỉnh ${queryTextObj.province}`
                : ''} ${queryTextObj.price
                    ? `giá ${queryTextObj.price}`
                    : ''} ${queryTextObj.area
                        ? `diện tích ${queryTextObj.area}` : ''} `
        console.log(queryTextObj)
        navigate({
            pathname: path.SEARCH,
            search: createSearchParams(queryCodesObj).toString(),
        }, { state: { titleSearch } })

    }
    return (
        <>
            <div className="py-2 px-2 gap-2 bg-[#666666] rounded-md flex-col lg:flex-row flex items-center justify-around w-4/5 max-w-[1100px] ">
                <span onClick={() => handleShowModal(categories, 'category','Tìm tất cả')} className="flex-1 cursor-pointer">
                    <SearchItem
                        fontWeight
                        IconBefore={<GiFamilyHouse />}
                        text={queries?.category}
                        defaultText={'Phòng trọ, nhà trọ'}
                    />
                </span>
                <span onClick={() => handleShowModal(provinces, 'province','Toàn quốc')} className="flex-1 cursor-pointer">
                    <SearchItem
                        IconAfter={<BsChevronRight className="text-[#c5c5c5]" />}
                        text={queries?.province}
                        defaultText={'Toàn quốc'}
                        IconBefore={<HiLocationMarker className="text-[#c5c5c5]" />}
                    />
                </span>
                <span onClick={() => handleShowModal(prices, 'price', 'Chọn giá')} className="flex-1 cursor-pointer">
                    <SearchItem
                        IconAfter={<BsChevronRight className="text-[#c5c5c5]" />}
                        IconBefore={<GiMoneyStack className="text-[#c5c5c5]" />}
                        text={queries?.price}
                        defaultText={'Chọn giá'}
                    />
                </span>
                <span onClick={() => handleShowModal(areas, 'area' ,'Chọn diện tích')} className="flex-1 cursor-pointer">
                    <SearchItem
                        IconAfter={<BsChevronRight className="text-[#c5c5c5]" />}
                        IconBefore={<BiArea className="text-[#c5c5c5]" />}
                        text={queries?.area}
                        defaultText={'Chọn diện tích'}
                    />
                </span>
                <button
                    type="button"
                    className=" outline-none py-2 px-4 w-[180px] bg-secondary2 rounded-md text-white font-medium flex items-center justify-center gap-1"
                    onClick={handleSearch}
                >
                    <BsSearch /> Tìm kiếm
                </button>
            </div>
            {isShowModal && (
                <Modal
                    arrMinMax={arrMinMax}
                    handleSubmit={handleSubmit}
                    name={name}
                    content={content}
                    setIsShowModal={setIsShowModal}
                    queries={queries}
                    defaultText={defaultText}
                />
            )}
        </>
    );
};

export default Search;
