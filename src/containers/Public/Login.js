import React from "react";
import logo from '../../assets/Logo-removebg-preview.png';
import banner from '../../assets/bannerLogin.png'
import icons from '../../utils/icons';
import { Button, InputForm } from "../../components";
let {AiOutlineClose,FiUser,BiLockAlt,AiOutlineFacebook,AiFillGoogleCircle} = icons
export default function Login({}) {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-sm"
          >
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
               
                
                <div className="relative  flex w-1100  ">
                  <div className="flex flex-col w-[400px] h-[550px] bg-secondary3 rounded-l-lg">
                    <img src={logo} alt='logo' className="w-[150px] h-[150px] object-container" />
                    <img src={banner} alt='banner' className="w-[300px] h-auto object-cover" />
                  </div>
                  <div className="flex flex-col h-[100%] w-[500px] p-[32px]" >
                    <div className=" absolute flex justify-end items-center text-2xl font-semibold top-[12px] right-[212px]">
                        <AiOutlineClose/>
                    </div>
                    <div className="font-semibold text-sm mt-[48px] h-[24px]">
                        <p>Xin chào bạn</p>
                    </div>
                    <div className="mt-[4px] mb-[32px]">
                        <h2 className="font-semibold text-xl">Đăng nhập để tiếp tục</h2>
                    </div>
                    <div className="w-[100%] h-[48px] mb-4 ">
                      <InputForm className="" label={'Số điện thoại'} type={'text'} id={'phone'} Icons={FiUser} />
                    </div>
                    <div className="w-[100%] h-[48px] mb-4 ">
                      <InputForm className='py-[13px] px-[43px]' type={'password'} id={'password'} label={'Mật khẩu'} Icons={BiLockAlt} isPass={true}/>
                    </div>
                    <Button
                      text={'Đăng nhập'}
                      bgColor='bg-secondary2'
                      textColor='text-white'
                      fullWidth
                    />
                    <div className="w-[100%] h-[48px] flex justify-between items-center ">
                      <div className="flex items-center ">
                        <input type="checkbox" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' required />
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nhớ mật khẩu</label>

                      </div>
                      <div className="text-red-600 font-semibold text-xs cursor-pointer">
                        Quên mật khẩu?
                      </div>
                    </div>
                    <div className="w-[100%] h-[28px] mb-4 flex justify-between items-center relative ">
                      <div className="w-[100%] h-[1px] bg-[#ccc]" ></div>
                      <div className=" text-[#ccc] text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 bg-[#ffffff]" >Hoặc</div>

                    </div>
                    <div className="w-[100%] h-[48px] mb-4 flex gap-5 ">
                      <div className="w-[50%] h-[100%]">
                        <Button
                          text={'Facebook'}
                          bgColor='bg-[#ffffff]'
                          textColor='text-back'   
                          fullWidth   
                          border='border border-black'
                          Icons={AiOutlineFacebook}
                        />
                      </div>
                      <div className="w-[50%] h-[100%]">
                        <Button
                          text={'Google'}
                          bgColor='bg-[#ffffff]'
                          textColor='text-black'   
                          fullWidth    
                          border='border border-black'
                          Icons={AiFillGoogleCircle}
                        />
                      </div>
                      
                      
                    </div>
                    <div className="w-[100%] h-[48px] mb-4 flex gap-5 ">
                      
                      
                      
                      
                    </div>
                  </div>
                </div>
                
                
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}