import React from 'react'

const WhatItem = ({icon,header, text}) => {
  return (
    <div className='p-5 flex justify-center items-center rounded-xl min-w-sm max-w-sm gap-8 odd:bg-primary even:bg-secondary text-white'>
      {icon}
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-2xl font-montserrat-bold">{header}</p>
        <p className="text-lg font-montserrat">{text}</p>
      </div>
    </div>
  )
}

export default WhatItem
