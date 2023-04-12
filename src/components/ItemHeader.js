import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function Item({ text ,isActive =false  ,link}) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const borderStyle = isHover ? "w-full" : "w-0";

  return (
    <NavLink to={link}>
      <div className="relative">
        <div
          href="#"
          className="text-gray-600 hover:text-gray-900   hover:border-b-1 hover:border-bg-[#E03C31]  transition-all duration-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </div>
        <div
          className={`absolute left-0 bottom-0 h-1 bg-[#E03C31] ${borderStyle}  transition-all duration-500`}
        ></div>
        {isActive &&
          <div
          className={`absolute left-0 bottom-0 h-1 bg-[#E03C31] ${borderStyle} w-full  transition-all duration-500`}

          >
          </div>
        }
        

        
      </div>
    </NavLink>
  );
}

export default Item;
