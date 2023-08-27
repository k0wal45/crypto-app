import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Market = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h&locale=en&precision=2`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    console.log(data)
    if (data !== '') {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [data])

  // useEffect(() => {
  //   const fetchData =  () => {
  //     const response = require('../../response.json')
  //     setData(response)
  //   }
  //   fetchData(); 
  // }, []);

  useEffect(() => {
    console.log(data)
    if (data !== '') {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [data])

  const buttons = [];
  for (let i = 1; i <= 10; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => {setCurrentPage(i)}}
        className={`
          rounded-full border-4 border-primary w-12 aspect-square
          ${i === currentPage ? 'bg-primary text-white' : ''}
        `}
      >
        {i}
      </button>
    );
  }

  if(!loading) {
    return (
      <section id="market" className='mx-auto flex justify-center items-center p-4 lg:py-24'>
        <div className="flex flex-col font-montserrat-bold text-xl">

          <div className="grid grid-cols-2 lg:grid-cols-4 p-4 rounded-t-lg text-white
            bg-gradient-to-r from-primary from-1% via-purple-500 via-50% to-secondary to-90%
          ">
            <p>Coin</p>
            <p className='flex items-center justify-end'>Price</p>
            <p className='lg:flex items-center justify-end hidden'>24h Change</p>
            <p className='lg:flex items-center justify-end hidden'>Market Cap</p>
          </div>

            
            {data.map((coin) => (
              <Link
                to={`/coin/${coin.id}`}
                className="grid grid-cols-2 lg:grid-cols-4 p-4 border-b-4 border-primary"
                key={coin.id}
              >
                <span className='flex justify-start items-center gap-4'>
                  <img src={coin.image} alt={coin.name} className='w-12'/>
                  <p>{coin.name}</p>
                </span>
                <p className='flex items-center justify-end'>{"$ " + coin.current_price.toFixed(2)}</p>
                <p
                  className={`hidden lg:flex items-center justify-end
                    ${(coin.price_change_percentage_24h >= 0
                      ? "text-success"
                      : "text-error")}
                    `
                  }
                >
                  {coin.price_change_percentage_24h?.toFixed(2) + " %"}
                </p>
                <p className='hidden lg:flex items-center justify-end'>{`$ ${coin.market_cap}`}</p>
              </Link>
            ))}

            <div className="mx-auto p-4 flex flex-wrap gap-8 items-center">
              <FaArrowLeft className='text-primary' onClick={() => {
                setCurrentPage((prevState) => (prevState - 1))
              }}/>
              {buttons}
              <FaArrowRight className='text-primary' onClick={() => {
                setCurrentPage((prevState) => (prevState + 1))
              }}/>
            </div>
        </div>
      </section>
  )} else {
    return (
      <section className="
        min-h-screen pt-24 lg:pt-0
        bg-gradient-to-t from-blue-900 from-1% via-primary via-20% to-primary to-90% 
        flex flex-col lg:flex-row gap-8 justify-center items-center
      ">
        <Spinner />
      </section>
    ) 
  }
}

export default Market
