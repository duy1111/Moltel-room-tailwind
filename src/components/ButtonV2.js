import React from 'react'

const ButtonV2 = ({text}) => {
  return (
    <button type='button' className='h-[25px] hover:bg-[#e7f0f7] rounded-md flex items-center justify-center py-2 px-4 bg-[#f1f1f1] text-black text-xs' >
        {text}
    </button>
  )
}

export default ButtonV2