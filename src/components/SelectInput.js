import React,{memo} from 'react'

const SelectInput = ({label,options,value,setValue,type,reset,defaultValue,name}) => {
    console.log('check option',options)
   
  return (
    
    <div className='flex flex-col gap-2 py-4 w-1/4' >
        <label className='font-medium' htmlFor='select-address' >{label}</label>
        <select id='select-address ' onChange={(e) => !name ? setValue(e.target.value) : setValue(prev => ({...prev, [name]: e.target.value}))} value={reset ?'': value} className='outline-none border border-gray-300 w-full py-1' >
            <option value={""} >{`--Chọn ${defaultValue || label}--`}</option>
            {options?.map((item,index) => {
                return(
                    <option key={index} value={type ==='province' ? item?.province_id : item?.district_id ? item?.district_id  : item?.code}  >{type ==='province' ? item?.province_name : item?.district_name ? item?.district_name  : item?.value}</option>
                )
            } )}
        </select>
    </div>
  )
}

export default memo(SelectInput)