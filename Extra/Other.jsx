import React from 'react'

function Other({imgLink, usName, fuName, bioState}) {
  return (
    <div className='w-full flex justify-center rounded-lg gap-4 p-2 bg-slate-900 mt-4 border border-gray-400  '>
      <div className="leftPart flex-col items-center justify-center">
        <img src={imgLink} alt="img" className='rounded-lg w-[60px] h-[60px] mx-auto rounded-full' />
        <h4 className='text-center text-amber-300 text-[14px] mt-2'>@{usName}</h4>
      </div>
      <div className="rightPart flex-col flex-1 justify-left text-white">
        <h2>{fuName}</h2>
        <p>{bioState}</p>
      </div>
    </div>
  )
}

export default Other
