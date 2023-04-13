import React, { useCallback } from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
function Home() {
  return (
    <div className="h-screen w-screen ">
      <Header />
      <Navigation />
      <div className="lg:w-3/5 w-4/5 m-auto h-full flex items-start flex-col justify-start border border-red-500 max-w-1100">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
