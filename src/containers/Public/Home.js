import React, { useCallback, useEffect } from 'react';
import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Search from './Search';
import { Intro, Contact } from '../../components';
import { useDispatch,useSelector } from 'react-redux';
import * as actions from '../../store/actions';

function Home() {
    let dispatch = useDispatch();
    
    const {currentData} = useSelector(state => state.user)
    useEffect(() => {
        dispatch(actions.getPrices());
        dispatch(actions.getArea());
        dispatch(actions.getProvince());

    }, []);
    
    console.log(currentData)
    return (
        <div className="w-full flex justify-center flex-col items-center gap-5">
            <div>
                <Header />
                <div className='shadow-md w-full border-b-2 '><Navigation /></div>
            </div>
            <Search />
            <div className="lg:w-4/5 w-3/5 max-w-1100 m-auto h-full flex items-start flex-col justify-start  max-w-1200">
                <Outlet />
            </div>
            <Intro />
            <Contact />
        </div>
    );
}

export default Home;
