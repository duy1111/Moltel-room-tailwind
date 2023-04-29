import React, { useEffect ,useState} from 'react'
import { apiGetPublicProvince,apiGetPublicDistrict } from '../services/app';
import SelectInput from './SelectInput';

const Address = () => {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [province, setProvince] = useState()
    const [district, setDistrict] = useState()
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
        setDistrict(null)
        let fetchPublicDistrict = async () => {
            let res = await apiGetPublicDistrict(province)
            if(res && res.status  === 200){
                await setDistricts(res?.data?.results)

            }
        }
        province && fetchPublicDistrict()
        province ? setReset(false) : setReset(true)
    },[province])
    console.log('check res pro',province)
    console.log('check res dis',district)
    return (
        <div>
            <h2 className="font-semibold text-xl ">Địa chỉ cho thuê</h2>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <SelectInput type={'province'} value={province} setValue={setProvince} options={provinces} label={'Tỉnh/Thành phố'} />
                    <SelectInput reset={reset} value={district} setValue={setDistrict}   options={districts} label={'Quận/Huyện'} />
                </div>

                <div className='flex flex-col gap-2 w-full'>
                    <label className='font-medium' htmlFor='exactly-address' >Địa chỉ chính xác</label>
                    <input

                        value={`${district ? `${districts.find((item) => item.district_id === district)?.district_name}, ` : ''} ${province ? `${provinces.find((item) => item.province_id === province)?.province_name}`: ''}`}
                        type="text"
                        id='exactly-address'
                        className="border border-gray-300 rounded-md bg-gray-200 p-2 w-full outline-none"
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default Address;
