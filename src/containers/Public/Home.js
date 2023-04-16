import React, { useCallback } from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Search from "./Search";
function Home() {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-5">
      <div>
        <Header />
        <Navigation />
      </div>
      <Search  />
      <div className="lg:w-4/5 w-3/5 max-w-1100 m-auto h-full flex items-start flex-col justify-start  max-w-1200">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
