import React, { useState, useEffect,memo } from 'react';
import icons from '../utils/icons';
import Button from './Button';
import { getNumbersArea, getNumbersPrice } from '../utils/common/getNumber';

const { GrLinkPrevious } = icons;

const Modal = ({ content, setIsShowModal, name, handleSubmit,arrMinMax ,queries,defaultText}) => {
    const [persent1, setPersent1] = useState(name === 'price' && arrMinMax?.priceArr
    ? arrMinMax?.priceArr[0]
    : name === 'area' && arrMinMax?.areaArr ? arrMinMax?.areaArr[0] : 0);
    const [persent2, setPersent2] = useState(name === 'price' && arrMinMax?.priceArr
    ? arrMinMax?.priceArr[1]
    : name === 'area' && arrMinMax?.areaArr ? arrMinMax?.areaArr[1] : 100);
    const [activedEl, setActivedEl] = useState('');
    useEffect(() => {
        const activedTrackEl = document.getElementById('track-active');
        if (activedTrackEl) {
            if (persent2 <= persent1) {
                activedTrackEl.style.left = `${persent2}%`;
                activedTrackEl.style.right = `${100 - persent1}%`;
            } else {
                activedTrackEl.style.left = `${persent1}%`;
                activedTrackEl.style.right = `${100 - persent2}%`;
            }
        }
    }, [persent1, persent2]);
    
    const convertto100 = (percent) => {
        let target = name === 'price' ? 15 : name === 'area' ? 90 : 1;
        return Math.floor((percent / target) * 100);
    };
    const handleBeforeSubmit = (e) => {
        let min = persent1 <= persent2 ? +persent1 : +persent2
        let max = persent1 <= persent2 ? +persent2 : +persent1
        let arrMinMax = [convert100toTarget(min), convert100toTarget(max)]
        // const gaps = name === 'price'
        //     ? getCodes(arrMinMax, content)
        //     : name === 'area' ? getCodesArea(arrMinMax, content) : []
        handleSubmit(e, {
            [`${name}Number`]: arrMinMax,
            [name]: `Từ ${convert100toTarget(min)} - ${convert100toTarget(max)} ${name === 'price' ? 'triệu' : 'm2'}`
        }, {
            [`${name}Arr`]: [+min, +max]
        })
    }
    
    const handleActive = (code, value) => {
        setActivedEl(code);
        let arrMaxMin = name === 'price' ? getNumbersPrice(value) : getNumbersArea(value);
        if (arrMaxMin.length === 1) {
            if (arrMaxMin[0] === 1) {
                setPersent1(0);
                setPersent2(convertto100(1));
            }
            if (arrMaxMin[0] === 20) {
                setPersent1(0);
                setPersent2(convertto100(20));
            }
            if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
                setPersent1(100);
                setPersent2(100);
            }
        }
        if (arrMaxMin.length === 2) {
            setPersent1(convertto100(arrMaxMin[0]));
            setPersent2(convertto100(arrMaxMin[1]));
        }
    };
    const convert100toTarget = (percent) => {
        return name === 'price'
            ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
            : name === 'area'
            ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
            : 0;
    };
    let handleClickTrack = (e, value) => {
        const stackEl = document.getElementById('track');
        const stackRect = stackEl.getBoundingClientRect();

        let percent = value ? value : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
        if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
            setPersent1(percent);
        } else {
            setPersent2(percent);
        }
    };
    return (
        <div
            onClick={(e) => {
                setIsShowModal(false);
            }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-overplay70 z-20 flex items-center justify-center "
        >
            <div
                onClick={(e) => {
                    e.stopPropagation(); // bo anh huong tu cha
                    setIsShowModal(true);
                }}
                className="w-1/3 bg-white rounded-md overflow-hidden"
            >
                <div className="h-[45px] flex items-center p-4 border-b border-gray-200 ">
                    <span
                        onClick={(e) => {
                            e.stopPropagation(); // bo anh huong tu cha
                            setIsShowModal(false);
                        }}
                        className="cursor-pointer "
                    >
                        <GrLinkPrevious size={24} />
                    </span>
                </div>
                {(name === 'category' || name === 'province') && (
                    <div className="p-4 flex flex-col ">
                        <span
                                    
                                    className="py-2 flex gap-2 items-center border-b border-gray-200 border-dashed"
                                >
                                    <input type="radio" checked={!queries[`${name}Code`] ? true : false} name={name} id={'default'} value={defaultText || ''} onClick={(e) => handleSubmit(e,{[name]:defaultText ,[`${name}Code`]:null })} />
                                    <label htmlFor={'default'}>{defaultText}</label>
                                </span>
                        {content?.map((item) => {
                            return (
                                <span
                                    key={item.code}
                                    className="py-2 flex gap-2 items-center border-b border-gray-200 border-dashed"
                                >
                                    <input type="radio" checked={item.code === queries[`${name}Code`] ? true : false} name={name} id={item.code} value={item.code} onClick={(e) => handleSubmit(e,{[name]:item.value ,[`${name}Code`]:item.code })} />
                                    <label htmlFor={item.code}>{item.value}</label>
                                </span>
                            );
                        })}
                    </div>
                )}
                {(name === 'price' || name === 'area') && (
                    <div className="p-12 flex flex-col items-center justify-center gap-4 ">
                        <div className="text-lg text-orange-600 font-semibold">
                            {persent1 === 100 && persent2 === 100
                                ? `Trên ${convert100toTarget(persent1)} ${name === 'price' ? 'triệu' : 'm2'} +`
                                : `Từ ${
                                      persent1 <= persent2 ? convert100toTarget(persent1) : convert100toTarget(persent2)
                                  } - ${
                                      persent2 >= persent1 ? convert100toTarget(persent2) : convert100toTarget(persent1)
                                  } ${name === 'price' ? 'triệu' : 'm2'}`}
                        </div>
                        <div className=" relative flex flex-col items-center w-full justify-center">
                            <div
                                onClick={handleClickTrack}
                                id="track"
                                className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full"
                            ></div>
                            <div
                                onClick={handleClickTrack}
                                id="track-active"
                                className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"
                            ></div>
                            <input
                                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                                onChange={(e) => {
                                    setPersent1(+e.target.value);
                                    activedEl && setActivedEl('');
                                }}
                                min={0}
                                value={persent1}
                                step={1}
                                max={100}
                                type="range"
                            />
                            <input
                                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                                onChange={(e) => {
                                    setPersent2(+e.target.value);
                                    activedEl && setActivedEl('');
                                }}
                                min={0}
                                value={persent2}
                                step={1}
                                max={100}
                                type="range"
                            />
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <span
                                className="ml-[8px] cursor-pointer "
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClickTrack(e, 0);
                                }}
                            >
                                0
                            </span>
                            <span
                                className="mr-[-14px] cursor-pointer "
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClickTrack(e, 100);
                                }}
                            >
                                {name ==='price' ? '15 triệu+':'90m+' }
                            </span>
                        </div>

                        <div className="flex gap-3 flex-wrap items-center w-full">
                            <h4 className="w-full text-xl font-semibold ">Chọn nhanh</h4>
                            {content?.map((item) => {
                                return (
                                    <button
                                        onClick={() => handleActive(item.code, item.value)}
                                        key={item.code}
                                        className={`px-4 bg-gray-200 rounded-md py-1 text-black font-medium cursor-pointer  ${
                                            item.code === activedEl ? 'bg-secondary2 text-white' : ''
                                        }`}
                                    >
                                        {item.value}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
                {(name === 'price' || name === 'area') &&<button
                    onClick={handleBeforeSubmit}
                    className="w-full text-center text-white bg-secondary2 font-medium relative bottom-0 py-2 uppercase "
                >
                    Áp dụng
                </button>}
            </div>
        </div>
    );
};

export default memo(Modal);
