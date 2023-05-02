import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Search from './Search';
import { Intro, Contact } from '../../components';
import { useSelector } from 'react-redux';


function Home() {
  
    
    const {currentData} = useSelector(state => state.user)
    
    
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
