import React, { useEffect, useState } from 'react';
import { Address, Button, Loading, Overview } from '../../components';
import icons from '../../utils/icons';
import { apiUploadImages } from '../../services/post';
import { getCodes, getCodesArea } from '../../utils/common/getCodes';
import { useSelector,useDispatch } from 'react-redux';
import { apiCreatePosts, apiUpdatePost } from '../../services/post';
import Swal from 'sweetalert2';
import { validate } from '../../utils/common/validateFields';
import * as actions from '../../store/actions'
const { AiFillCamera, ImBin } = icons;
const CreatePost = ({ isEdit,setIsEdit }) => {
    const dispatch = useDispatch()
    const { prices, areas, categories, provinces } = useSelector((state) => state.app);

    const { dataEdit } = useSelector((state) => state.post);
    const [invalidFields, setInvalidFields] = useState([]);
    const [payload, setPayload] = useState(() => {
        const initData = {
            categoryCode: dataEdit?.categoryCode || '',
            title: dataEdit?.title || '',

            priceNumber: dataEdit?.priceNumber * 1000000 || 0,
            areaNumber: dataEdit?.areaNumber || 0,
            images: isEdit ? JSON.parse(dataEdit?.images?.image) : '',
            address: dataEdit?.address || '',
            priceCode: dataEdit?.priceCode || '',
            areaCode: dataEdit?.areaCode || '',
            description:  isEdit ?  JSON.parse(dataEdit?.description) : '',
            target: isEdit ? dataEdit?.overviews?.target : 'Tất cả',
            province: dataEdit?.province || '',
            label: dataEdit?.label || '',
        };

        return initData;
    });
    const resetPayload = () => {
        setPayload({
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
            label: '',
        });
    }
    let handleSubmit = async () => {
        let priceCodeArr = getCodes(+payload?.priceNumber / Math.pow(10, 6), prices, 1, 15);
        let areaCodeArr = getCodesArea(+payload?.areaNumber, areas, 20, 100);
        let priceCode = priceCodeArr[priceCodeArr?.length - 1]?.code;
        let areaCode = areaCodeArr[priceCodeArr?.length - 1]?.code;

        let finalPayload = {
            ...payload,
            priceCode: priceCode,
            areaCode: areaCode,
            category: `${categories?.find((item) => item.code === payload?.categoryCode)?.value}`,
            priceNumber: +payload.priceNumber / Math.pow(10, 6),
            target: payload.target || 'Tất cả',
            label: `${categories?.find((item) => item.code === payload?.categoryCode)?.value} ${
                payload?.address?.split(',')[0]
            }`,
        };
        const result = validate(finalPayload, setInvalidFields);
        if (result === 0) {
            if (isEdit) {
                finalPayload.postId = dataEdit?.id;
                finalPayload.attributesId = dataEdit?.attributesId;
                finalPayload.overviewId = dataEdit?.overviewId;
                finalPayload.imagesId = dataEdit?.imagesId;
                let response = await apiUpdatePost(finalPayload);
                if (response && response.data?.err === 0) {
                    dispatch(actions.resetPostsData())
                    setIsEdit(false)
                    Swal.fire('Thành công', 'Update succeed', 'success').then(() => {
                        resetPayload()
                    });
                } else {
                    Swal.fire('Oops !', 'Có lỗi gì rồi đấy', 'error');
                }
            } else {
                let response = await apiCreatePosts(finalPayload);

                if (response && response.data?.err === 0) {
                    Swal.fire('Thành công', 'Đã thêm bài đăng mới', 'success');

                    resetPayload()
                } else if (response && response.data?.err !== 0) {

                    Swal.fire('Oops !', 'Có lỗi gì rồi đấy', 'error');
                }
            }
        }
    };
    const [preview, setPreview] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
    let handleFile = async (e) => {
        setIsLoading(true);
        e.stopPropagation();
        let files = e.target.files;
        let images = [];
        let formData = new FormData();
        for (let i of files) {
            formData.append('file', i);
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME);
            let response = await apiUploadImages(formData);
            if (response.status === 200) {
                images = [...images, response.data?.secure_url];
            }
        }
        setIsLoading(false);
        setPreview((prev) => [...prev, ...images]);
        setPayload((prev) => ({ ...prev, images: [...prev.images, ...images] }));
    };
    useEffect(() => {
        if (dataEdit && dataEdit?.images?.image) {
            let images = JSON.parse(dataEdit?.images?.image);
            images && setPreview(images);
        }
    }, [dataEdit]);
    let handleDeleteImage = (image) => {
        setPreview((prev) => prev?.filter((item) => item !== image));
        setPayload((prev) => ({
            ...prev,
            image: prev?.images?.filter((item) => item !== image),
        }));
    };
    return (
        <div className="px-6 ">
            <h1 className="text-3xl font-medium py-4 border-b border-gray-200">
                {isEdit ? 'Chỉnh sửa tin đăng' : 'Đăng tin mới'}
            </h1>
            <div className="flex w-full py-4">
                <div className="w-2/3  flex flex-col gap-8">
                    <Address
                        payload={payload}
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        setPayload={setPayload}
                    />
                    <Overview
                        payload={payload}
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        setPayload={setPayload}
                    />
                    <div>
                        <h2 className="font-semibold text-xl py-4">Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className="w-full">
                            <label
                                className="w-full flex items-center justify-center my-4 border-gray-400 border-2 rounded-md h-[200px] border-dashed"
                                htmlFor="file"
                                onFocus={(e) => setInvalidFields([])}
                            >
                                {isLoading === true ? <Loading /> : <AiFillCamera size={30} />}
                            </label>
                            {isLoading === false ? (
                                <input multiple type="file" id="file" hidden onChange={handleFile} />
                            ) : (
                                ''
                            )}
                            <small className="text-red-500 block w-full">{`${
                                invalidFields?.find((item) => item.name === 'images')?.message || ''
                            }`}</small>
                        </div>
                        <div className="w-full">
                            <h3 className="font-medium py-4 ">Ảnh đã chọn</h3>
                            <div className="flex gap-4 items-center">
                                {preview && preview.length > 0 && preview?.map((item, index) => {
                                    return (
                                        <div key={index} className="relative w-1/3 h-full">
                                            <img src={item} className=" object-cover rounded-md" alt="preview" />
                                            <span
                                                onClick={() => handleDeleteImage(item)}
                                                title="xóa"
                                                className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-200 rounded-full"
                                            >
                                                <ImBin size={20} />
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <Button
                            onClick={handleSubmit}
                            text={isEdit ? 'cập nhật' : 'tạo mới'}
                            bgColor={'bg-red-500'}
                            textColor={'white'}
                        />
                    </div>
                </div>
                <div className="w-1/3 flex-none">GG map </div>
            </div>
        </div>
    );
};

export default CreatePost;
