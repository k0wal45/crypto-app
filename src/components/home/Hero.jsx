import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import photo from '../../assets/img/portal.png'
import { Link } from 'react-router-dom'

const Hero = ({header}) => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=2`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setData(json[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    if (data !== '') {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [data])
  
  const firstLetterUpper = (str) => {
    const result = str.charAt(0).toUpperCase() + str.slice(1)
    return result
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }



  if(!loading) {
    return (
      <section className="
          max-w-screen lg:w-auto min-h-screen p-4 pt-24 lg:pt-0 z-10
          bg-gradient-to-t from-blue-800 from-1% via-primary via-20% to-primary to-90% text-white
          dotted-bg
          flex flex-col lg:flex-row gap-8 justify-center items-center
        ">
          <div className="flex flex-col gap-8 max-w-full lg:max-w-[33%]">
            <h1 className='font-montserrat-bold text-5xl lg:text-6xl text-start'>{header}</h1>
            <img src={photo} alt="Bitcoin Portal" className='max-h-[30rem] object-contain'/>
          </div>
          <div className="flex flex-col gap-8 max-w-full lg:max-w-[33%]">
            <h2 className='font-montserrat-black text-7xl text-center'>{firstLetterUpper(data.id)}</h2>

            <div className='flex gap-4 items-center'>
              <img src={data.image} alt={`${data.name} logo`} className='w-12'/>
              <div className="flex flex-col lg:flex-row">
                <p className=" text-4xl font-montserrat">
                  {numberWithCommas(data.current_price)}$
                </p>
                <span
                      className={
                        "text-4xl font-montserrat ml-0 lg:ml-4 " +
                        (data.price_change_percentage_24h <= 0
                          ? "text-error"
                          : "text-success")
                      }
                    >
                      {data.price_change_percentage_24h + "%"}
                </span>
              </div>
            </div>

            <div className='flex flex-col gap-4 justify-start items-start bg-base-100 p-4 rounded-lg text-neutral-700'>
              <p className=" text-2xl font-montserrat">Highest Price in last 24h</p>
              <p className=" text-4xl font-montserrat">{numberWithCommas(data.high_24h)}$</p>
            </div>
            <div className='flex flex-col gap-4 justify-start items-start bg-base-100 p-4 rounded-lg text-neutral-700'>
              <p className=" text-2xl font-montserrat">Lowest Price in last 24h</p>
              <p className=" text-4xl font-montserrat">{numberWithCommas(data.low_24h)}$</p>
            </div>

            <div className="flex gap-8 items-center">
              <Link to={`/coin/${data.id}`} className="btn font-montserrat-bold">Check Coin</Link>
              <a href='#market' className="btn font-montserrat-bold">Check Market</a>
            </div>

          </div>
        </section>
      )
  } else {
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

export default Hero
