import React, { memo } from 'react';
import Slider from 'react-slick';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
const SliderCustom = ({ images }) => {
    return (
        <div className="w-4/5">
            <Slider {...settings}>
                <div className="bg-black w-full h-[320px] flex justify-center">
                    <img
                        src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/29/10_1680062125.jpg"
                        alt=""
                        className=" h-[320px] m-auto object-contain"
                    />
                    
                </div>
                <div className="bg-black w-full h-[320px] flex justify-center">
                    <img
                        src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/29/10_1680062125.jpg"
                        alt=""
                        className=" h-[320px] m-auto object-contain"
                    />
                    
                </div>
                <div className="bg-black w-full h-[320px] flex justify-center">
                    <img
                        src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/29/10_1680062125.jpg"
                        alt=""
                        className=" h-[320px] m-auto object-contain"
                    />
                    
                </div>
                <div className="bg-black w-full h-[320px] flex justify-center">
                    <img
                        src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/29/10_1680062125.jpg"
                        alt=""
                        className=" h-[320px] m-auto object-contain"
                    />
                    
                </div>
            </Slider>
        </div>
    );
};

export default memo(SliderCustom);
