import React, { useState } from 'react';
import { Button, InputForm, InputFormV2 } from '../../components';
import Swal from 'sweetalert2';
const Contact = () => {
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        content: '',
    });
    let handleSubmit = () => {
        Swal.fire('Thanks!', 'Phản hồi của bạn đã được chúng tôi ghi nhận!', 'success').then(() => {
            setPayload({
                name: '',
                phone: '',
                content: '',
            });
        });
    };
    return (
        <div className="w-[100%]">
            <h1 className="text-2xl font-semibold my-2 py-2 border-b border-gray-300">Liên hệ với chúng tôi</h1>
            <div className="flex justify-between  gap-2 w-[100%] items-start">
                <div className="w-1/2  rounded-3xl flex flex-col gap-4 p-4 text-white bg-gradient-to-br from-[#004be5] to-cyan-400">
                    <h4 className="font-medium ">Thông tin liên hệ</h4>
                    <div>Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa chọn PhongTro123.Com</div>
                    <div>Điện thoại: 0917 686 101</div>
                    <div>Email: cskh.phongtro123@gmail.com</div>
                    <div>Zalo: 0917 686 101</div>
                    <div>Viber: 0917 686 101</div>
                    <div>
                        Địa chỉ: LD-06.04, Toà nhà Lexington Residence, Số 67 Mai Chí Thọ, Phường An Phú, Quận 2, Tp. Hồ
                        Chí Minh.
                    </div>
                </div>
                <div className="w-1/2 border bg-white shadow-md rounded-md p-4 mb-6">
                    <h4 className="font-medium text-lg mb-4">Liên hệ trực tuyến</h4>
                    <div className="flex flex-col gap-4">
                        <InputFormV2 name={'name'} label={'Họ và Tên'} setValue={setPayload} value={payload.name} />
                        <InputFormV2
                            name={'phone'}
                            label={'Số điện thoại'}
                            setValue={setPayload}
                            value={payload.phone}
                        />
                        <div>
                            <label className="" htmlFor="content">
                                Nội dung
                            </label>
                            <textarea
                                className="outline-none border p-2 rounded-md w-full"
                                name="content"
                                onChange={(e) => setPayload((prev) => ({ ...prev, content: e.target.value }))}
                                id="content"
                                cols={'30'}
                                rows={'5'}
                                value={payload.content}
                            ></textarea>
                        </div>
                        <Button
                            onClick={handleSubmit}
                            text={'Gửi liên hệ'}
                            bgColor={'bg-blue-400'}
                            textColor={'text-white'}
                            fullWidth
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
