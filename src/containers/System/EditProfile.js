import React, { useState, useEffect } from 'react';
import { InputReadOnly, InputFormV2, Button } from '../../components';
import anonAvatar from '../../assets/anon-avatar.jpg';
import { useSelector } from 'react-redux';
import { apiUpdateUser } from '../../services/user';
import { validate } from '../../utils/common/validateFields';
import { fileToBase64, blobToBase64 } from '../../utils/common/toBase64';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
import Swal from 'sweetalert2';
const EditProfile = ({isEdit, setIsEdit,dataUser}) => {
    let dispatch = useDispatch();
    const { currentData } = useSelector((state) => state.user);
    const [invalidFields, setInvalidFields] = useState([]);
    
    const [payload, setPayload] = useState({
        name: isEdit ? dataUser?.name : currentData?.name || '',
        avatar: isEdit ? dataUser?.avatar : currentData?.avatar ? blobToBase64(currentData?.avatar) : '',
        fbUrl: isEdit ? dataUser?.fbUrl : currentData?.fbUrl || '',
        email: isEdit ? dataUser?.email : currentData?.email || '',
        zalo: isEdit ? dataUser?.zalo : currentData?.zalo || '',
    });
   
    let handleSubmit = async () => {
        if (isEdit) {
            payload.id = dataUser.id
            let response = await apiUpdateUser(payload);
            if (response && response.data?.err === 0) {
                dispatch(actions.getCurrentUser());
                Swal.fire('Thành công', 'Đã update ', 'success');
            } else if (response && response.data?.err !== 0) {
                Swal.fire('Oops !', 'Có lỗi gì rồi đấy', 'error');
            }
        } else {
            let response = await apiUpdateUser(payload);

            if (response && response.data?.err === 0) {
                dispatch(actions.getCurrentUser());
                Swal.fire('Thành công', 'Đã update ', 'success');
            } else if (response && response.data?.err !== 0) {
                Swal.fire('Oops !', 'Có lỗi gì rồi đấy', 'error');
            }
        }
    };
    let handleUploadFile = async (e) => {
        const imageBase64 = await fileToBase64(e.target.files[0]);
        setPayload((prev) => ({
            ...prev,
            avatar: imageBase64,
        }));
    };
    return (
        <div className="px-6 ">
            <h1 className="text-3xl font-medium py-4 border-b border-gray-200">Cập nhật thông tin cá nhân</h1>
            <div className="flex flex-col justify-center w-full items-center py-10 gap-4">
                <div className="w-4/5">
                    <InputReadOnly value={isEdit ? dataUser?.id :currentData?.id || ''} flex label={'Mã thành viên'} />
                </div>
                <div className="w-4/5">
                    <InputReadOnly value={isEdit ? dataUser?.phone : currentData?.phone || ''} editPhone flex label={'Số điện thoại'} />
                </div>
                <div className="w-4/5">
                    <InputFormV2
                        name={'name'}
                        flex
                        label={'Tên hiển thị'}
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        setValue={setPayload}
                        value={payload.name || ''}
                    />
                </div>
                <div className="w-4/5">
                    <InputFormV2
                        name={'email'}
                        flex
                        label={'Email'}
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        setValue={setPayload}
                        value={payload.email || ''}
                    />
                </div>
                <div className="w-4/5">
                    <InputFormV2
                        flex
                        name={'zalo'}
                        label={'Số Zalo'}
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        setValue={setPayload}
                        value={payload.zalo || ''}
                    />
                </div>
                <div className="w-4/5">
                    <InputFormV2
                        flex
                        label={'Facebook'}
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        setValue={setPayload}
                        value={payload.fbUrl || ''}
                        name={'fbUrl'}
                    />
                </div>
                <div className="w-4/5 flex items-center mt-2">
                    <label className="w-1/4" htmlFor="password">
                        Mật khẩu
                    </label>
                    <small className="w-3/4 text-orange-400 cursor-pointer">Đổi mật khẩu</small>
                </div>
                <div className="w-4/5 flex mt-2">
                    <label htmlFor="avatar" className="w-1/4">
                        Ảnh đại diện
                    </label>
                    <div>
                        <img
                            src={payload.avatar || anonAvatar}
                            alt="avatar"
                            className="h-20 w-20 rounded-full object-cover "
                        />
                        <input
                            type="file"
                            onChange={(e) => handleUploadFile(e)}
                            className="appearance-none my-4"
                            id="avatar"
                        />
                    </div>
                </div>
                <div className="w-4/5 flex justify-center items-center mt-6">
                    <Button onClick={handleSubmit} text={'Cập nhật'} bgColor={'bg-red-500'} textColor={'text-white'} />
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
