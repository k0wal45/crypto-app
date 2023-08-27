import React from 'react'
import { Helmet } from 'react-helmet'

const Source = () => {
  return (
    <main className='w-screen min-h-screen flex flex-col justify-center items-center bg-primary text-white gap-4'>
      <Helmet >
        <title>Sources - CryptoNight</title>
      </Helmet>
      <h2 className="text-5xl font-montserrat-bold">Sources</h2>
      <ul className='text-2xl font-montserrat text-center'>
        <li>Tech Stack: <a href="https://tailwindcss.com/">Talwind CSS</a>, <a href="https://react.dev/">React JS</a></li>
        <li>Pictures: Freepik</li>
        <li>API: <a href="https://www.coingecko.com/">CoinGecko</a></li>
      </ul>
    </main>
  )
}

export default Source
