import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
function Home() {
    return ( 
    <div className="h-screen w-screen ">
        <Header/>
        <Navigation/>
        <div className="w-1100 m-auto h-full flex items-center flex-col justify-start border border-red-500" >
            <Outlet/>
        </div>
    </div>
    
    );
}

export default Home; 