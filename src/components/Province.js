import React from 'react'
import { ProvinceButton } from '../components';
import { location } from '../utils/constant';

const Province = ({location}) => {
  return (
    <div className="flex items-center justify-center gap-5 py-5 shadow-md">
                {location &&
                    location.map((item, index) => {
                        return <ProvinceButton key={index} name={item.name} image={item.image} />;
                    })}
            </div>
  )
}

export default Province