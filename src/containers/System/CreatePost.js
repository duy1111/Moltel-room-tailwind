import React, { useState } from 'react';
import { Address, Button, Loading, Overview } from '../../components';
import icons from '../../utils/icons';
import { apiUploadImages } from '../../services/post';
import { getCodes,getCodesArea } from '../../utils/common/getCodes';
import { useSelector } from 'react-redux';
const { AiFillCamera,ImBin } = icons;
const CreatePost = () => {
    const {prices,areas} = useSelector(state => state.app)
    const [payload, setPayload] = useState({
        categoryCode: '',
        title: '',

        priceNumber: 0,
        areaNumber: 0,
        images: '',
        address: '',
        priceCode: '',
        areaCode: '',
        description: '',
        target: '',
        province: '',
    });
    let handleSubmit = () => {
        let priceCodeArr = getCodes([+payload.priceNumber,+payload.priceNumber],prices)
        let priceCode = priceCodeArr[priceCodeArr.length -1]?.code
        console.log('submit',payload)
    }
    const [preview, setPreview] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    let handleFile = async (e) => {
        setIsLoading(true)
        e.stopPropagation();
        let files = e.target.files;
        let images = [];
        let formData = new FormData();
        for (let i of files) {
            formData.append('file', i);
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME);
            let response = await apiUploadImages(formData);
            console.log('chekc res', response);
            if (response.status === 200) images = [...images, response.data?.secure_url];
        }
        setIsLoading(false)
        setPreview((prev) => [...prev, ...images]);
        setPayload((prev) => ({ ...prev, images: [...prev.images, ...images] }));
    };
    let handleDeleteImage = (image) => {
        setPreview((prev) => prev?.filter(item => item !== image));
        setPayload((prev) => ({
            ...prev,
            image : prev?.images?.filter(item => item !== image)
        }));
    }
    console.log('check payload', payload);
    return (
        <div className="px-6 ">
            <h1 className="text-3xl font-medium py-4 border border-gray-200">Đăng tin mới</h1>
            <div className="flex w-full py-4">
                <div className="w-2/3  flex flex-col gap-8">
                    <Address payload={payload} setPayload={setPayload} />
                    <Overview payload={payload} setPayload={setPayload} />
                    <div>
                        <h2 className="font-semibold text-xl py-4">Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className="w-full">
                            <label
                                className="w-full flex items-center justify-center my-4 border-gray-400 border-2 rounded-md h-[200px] border-dashed"
                                htmlFor="file"
                            >
                                {isLoading === true ? <Loading/> : <AiFillCamera size={30} />}
                            </label>
                            {isLoading === false ?<input multiple  type="file" id="file" hidden onChange={handleFile} />:''}
                        </div>
                        <div className="w-full">
                            <h3 className="font-medium py-4 ">Ảnh đã chọn</h3>
                            <div className="flex gap-4 items-center">
                                {preview?.map((item, index) => {
                                    return (
                                        <div key={index} className='relative w-1/3 h-full'>
                                            <img
                                                
                                                src={item}
                                                className=" object-cover rounded-md"
                                                alt="preview"
                                            />
                                            <span onClick={() => handleDeleteImage(item)} title='xóa' className='absolute top-0 right-0 p-2 cursor-pointer bg-gray-200 rounded-full' ><ImBin size={20} /></span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <Button onClick={handleSubmit} text={'tạo mới'} bgColor={'bg-red-500'} textColor={'white'} />
                    </div>
                </div>
                <div className="w-1/3 flex-none">GG map </div>
            </div>
        </div>
    );
};

export default CreatePost;
