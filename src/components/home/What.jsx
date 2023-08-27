import React from 'react'
import photo1 from '../../assets/img/etherum.png'
import WhatItem from '../sub/WhatItem'
import { FaBolt, FaChess, FaDollarSign, FaHome, FaLock, FaWallet } from 'react-icons/fa'

const What = () => {
  return (
    <section id="what" className='mx-auto p-4 py-12 flex flex-col items-center justify-center lg:flex-row gap-4'>
      <div className="flex flex-col gap-8 justify-center items-center">
        <WhatItem 
          icon={<FaWallet className='text-6xl text-white'/>}
          header='Connect your wallet'
          text='Safety and easier acces to trading'
        />
        <WhatItem 
          icon={<FaChess className='text-6xl text-white'/>}
          header='Manage your future'
          text='Make your self wealthy'
        />
        <WhatItem 
          icon={<FaDollarSign className='text-6xl text-white'/>}
          header='Side hustle'
          text='Good secondary job or hobby'
        />
      </div>
      <img src={photo1} alt="" className='w-[30rem]' />
      <div className="flex flex-col gap-8 justify-center items-center">
        <WhatItem 
          icon={<FaBolt className='text-6xl text-white'/>}
          header='Quick and Fast'
          text='Fast transactions and fresh statistics'
        />
        <WhatItem 
          icon={<FaHome className='text-6xl text-white'/>}
          header='Access from home'
          text='Do not leave your home and trade'
        />
        <WhatItem 
          icon={<FaLock className='text-6xl text-white'/>}
          header='Safety first'
          text='Safe transactions and data security' 
        />
      </div>
    </section>
  )
}

export default What
