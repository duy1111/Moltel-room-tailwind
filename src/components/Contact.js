import React from 'react';
import image from '../assets/support-bg.jpg'
import { text } from '../utils/dataContact';
import Button from './Button';
const Contact = () => {
  return (
    <div className='w-[1200px] flex flex-col justify-center items-center gap-4 border-[#e8eefc] border-8 border-dashed mb-8' >
        <div className=' h-[150px] w-full flex justify-center mt-11' >
            <img src={image} alt="logo" className='h-full w-[440px] object-container' />
        </div>
        
        <p className='text-blue-600 text-base font-semibold mt-4' >Liên hệ với chúng tôi nếu bạn cần hỗ trợ:</p>
        
        <div className='flex items-center justify-around w-full ' >
            {text?.contact?.map((item,index) => {
                return (
                    <div key={index} className='flex flex-col items-center justify-center gap-4' >
                        <h4 className='text-lg font-semibold text-orange-600' >{item.title}</h4>
                        <div className='text-2xl font-bold text-blue-700' >{item.phone}</div>
                        <div className='text-2xl font-bold text-blue-700' >{item.zalo}</div>
                     </div>
                )
            })}
            
            
        </div>
        <div className='h-[1px]' ></div>
        <Button 
            text={'Gửi liên hệ'}
            bgColor={'bg-secondary2'}
            textColor={'text-white'}
        />
        <div className='h-[10px]' ></div>
        
    </div>
  )
}

export default Contact