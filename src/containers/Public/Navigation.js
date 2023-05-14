import React, { useEffect, useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import Item from '../../components/ItemHeader';

import { formatVietnameseToString } from '../../utils/common/formatVietnameseToString';
import * as actions from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Navigation = ({isAdmin}) => {
    let [category,setCategory] = useState([])
    const dispatch = useDispatch();
    let { categories } = useSelector((state) => state.app);
    useEffect(() => {
        dispatch(actions.getCategories());
    }, []);

    const categoryList = useMemo(() => {
        let data = categories.map((item) => {
            return { ...item, active: false };
        });
        let TC = [{ code: 'home', value: 'Trang chủ', active: true }];
        let Contact = {code: 'contact',value:'liên hệ', active:false}
        let newData = TC.concat(data);
        newData.push(Contact)
        setCategory(newData)
        return newData;
       
    }, [categories]);
    let handleClickNav = (code) => {
      const updatedMenuItems = categoryList.map((menu) => {
          if (menu.code === code) {
              return { ...menu, active: true };
          } else {
              return { ...menu, active: false };
          }
      });
      setCategory(updatedMenuItems);
  };
  

    return (
        <div className={`w-full h-[57px]  flex items-center ${isAdmin ?'justify-start':'justify-center'}  `}>
            <div className="h-max w-[1100px] flex justify-between">
                {category.map((item) => {
                    return (
                        <div onClick={() => handleClickNav(item.code)} key={item.code}>
                            <Item
                                className="h-[50px] w-[200px] flex items-center justify-center font-medium"
                                text={item.value}
                                link={`/${formatVietnameseToString(item.value)}`}
                                isActive={item.active}
                            ></Item>
                        </div>
                    );
                })}
                
            </div>
        </div>
    );
};

export default Navigation;
