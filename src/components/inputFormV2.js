import React from 'react'

const inputFormV2 = ({ label, unit, value, setValue, name, small,invalidFields,setInvalidFields ,flex}) => {
  const handleErrorText = () => {
        
    let nameInvalid  = invalidFields?.find(item => item.name === name)
    let addressInvalid = invalidFields?.find(item => item.name === 'address')
    return nameInvalid ? `${nameInvalid ? nameInvalid?.message : ''}` : `${addressInvalid ? addressInvalid?.message : ''}`
}
  return (
    <div className={` gap-2 w-full`}>
            <div className={`${flex ? 'flex items-center': 'flex flex-col'}`}>
              <label className='w-1/4' htmlFor="title">{label}</label>
              <div className={`${flex ? 'w-3/4':'w-full'} relative`}>
                  <input
                      onFocus={(e) => setInvalidFields && setInvalidFields([])}
                      type="text"
                      id=" title"
                      className={`${unit ? 'rounded-md' : 'rounded-md'} overflow-hidden w-full outline-none border flex-auto border-gray-300 p-2`}
                      value={value}
                      onChange={(e) => setValue(prev => ({ ...prev, [name]: e.target.value }))}
                  />
                  {unit && <span className='p-2 border flex-none w-16 flex items-center justify-center  bg-gray-200 absolute right-0 top-0 rounded-r-md '>{unit}</span>}
              </div>
            </div>
            {small && <small className='opacity-70 '>{small}</small>}
            <small className='text-red-500 block w-full' >{handleErrorText() }</small>

        </div>
  )
}

export default inputFormV2