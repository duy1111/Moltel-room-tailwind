import React, { memo, useEffect ,useState} from 'react'
import { apiGetPublicProvince,apiGetPublicDistrict } from '../services/app';
import SelectInput from './SelectInput';
import InputReadOnly from './InputReadOnly';

const Address = ({payload,setPayload,invalidFields,setInvalidFields}) => {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [reset, setReset] = useState(false)
    useEffect(() => {
        const fetchPublicProvince = async () => {
            let res = await apiGetPublicProvince()
     
            if(res && res.status  === 200){
                await setProvinces(res?.data?.results)

            }
        }
        fetchPublicProvince()
    },[])

    useEffect(() => {
        setDistrict('')
        let fetchPublicDistrict = async () => {
            let res = await apiGetPublicDistrict(province)
            if(res && res.status  === 200){
                await setDistricts(res?.data?.results)

            }
        }
        province && fetchPublicDistrict()
        province ? setReset(false) : setReset(true)
    },[province])
    useEffect(() => {
        setPayload(prev => ({
            ...prev,
            address: `${district ? `${districts.find((item) => item.district_id === district)?.district_name}, ` : ''}${province ? `${provinces.find((item) => item.province_id === province)?.province_name}`: ''}`,
            province: province ? provinces?.find(item => item.province_id === province)?.province_name : ''
        }))
    },[province,district])
   
    return (
        <div>
            <h2 className="font-semibold text-xl ">Địa chỉ cho thuê</h2>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <SelectInput setInvalidFields={setInvalidFields} invalidFields={invalidFields} type={'province'} value={province} setValue={setProvince} options={provinces} label={'Tỉnh/Thành phố'} />
                    <SelectInput setInvalidFields={setInvalidFields} invalidFields={invalidFields}  reset={reset} value={district} setValue={setDistrict}   options={districts} label={'Quận/Huyện'} />
                </div>

                <InputReadOnly label={'Địa chỉ chính xác'} value={`${district ? `${districts.find((item) => item.district_id === district)?.district_name}, ` : ''} ${province ? `${provinces.find((item) => item.province_id === province)?.province_name}`: ''}`} />
            </div>
        </div>
    );
};

export default memo(Address);
