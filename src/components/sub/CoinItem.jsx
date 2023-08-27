import React from 'react'
import { Link } from 'react-router-dom'

const CoinItem = ({data}) => {
  return (
    <Link to={`/coin/${data.id}`} className="flex gap-4 items-center justify-center text-white">
      <img src={data.image} alt={`${data.name} logo`} className='w-12'/>
      <p className="text-3xl font-montserrat-bold">{data.name}</p>
      <p className="text-3xl font-montserrat-light">|</p>
      <p className="text-3xl font-montserrat">{data.symbol.toUpperCase()}</p>
    </Link>
  )
}

export default CoinItem
