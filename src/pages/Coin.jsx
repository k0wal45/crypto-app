import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Helmet } from 'react-helmet';

const Coin = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setCoin(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);


  useEffect(() => {
    console.log(coin)
    if (coin !== '') {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [coin])

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const plusOrMinus = (number) => {
    if (number < 0) {
      return <span className='text-error'>{number}</span>
    } 
      return <span className='text-success'>{number}</span>
    
  }
  
  if(!loading) {
    return (
    <main className='
    flex flex-col items-center justify-center lg:flex-row gap-8 p-4 min-w-screen max-w-screen min-h-screen pt-32 lg:pt-4 z-10
    bg-gradient-to-t from-blue-800 from-1% via-primary via-20% to-primary to-90% text-white dotted-bg
    '>
        <Helmet >
          <title>{coin.name} - CryptoNight</title>
        </Helmet>
      {/* <img src={coin.image} alt={`${coin.name} Logo`} className='h-72'/> */}
      <section className="flex flex-col gap-4 max-w-lg">
        <h1 className='text-8xl font-montserrat-bold text-center lg:text-start'>{coin.name}</h1>
        <div className='flex flex-wrap gap-4 p-2 border-b-2 border-blue-700 text-center items-center justify-center lg:justify-start'>
          {/* <p className='text-2xl font-montserrat'>Current Price: ${coin.market_data.current_price.usd > 0 ? numberWithCommas(coin.market_data.current_price.usd.toFixed(2)) : coin.market_data.current_price.usd.toFixed(5)}</p> */}
          <p className='text-2xl font-montserrat'>Rank: #{coin.coingecko_rank}</p>
        </div>
        <div className='flex flex-wrap gap-4 p-2 border-b-2 border-blue-700 text-center items-center justify-center lg:justify-start'>
          <p className='text-2xl font-montserrat'>Max Suply: {coin.market_data.max_supply}</p>
          <p className='text-2xl font-montserrat'>Current Suply: {coin.market_data.circulating_supply}</p>
        </div>

        <div className='flex flex-wrap gap-4 p-2 border-b-2 border-blue-700 text-center items-center justify-center lg:justify-start'>
        <p className='text-2xl font-montserrat'>24h Change: {plusOrMinus(coin.market_data.market_cap_change_percentage_24h)}</p>
        <p className='text-2xl font-montserrat'>7d Change: {plusOrMinus(coin.market_data.price_change_percentage_7d)}</p>
        <p className='text-2xl font-montserrat'>60d Change: {plusOrMinus(coin.market_data.price_change_percentage_60d)}</p>
        <p className='text-2xl font-montserrat'>1 year Change: {plusOrMinus(coin.market_data.price_change_percentage_1y)}</p>
        </div>
        <div className='w-[90vw] lg:w-auto lg:h-48 overflow-scroll text-2xl p-4 text-justify link-format' dangerouslySetInnerHTML={{ __html: coin.description ? coin.description.en : "" }}>
        </div>
      </section>
    </main>
  )} else {
    return (
      <section className="
        min-h-screen pt-24 lg:pt-0
        bg-gradient-to-t from-blue-900 from-1% via-primary via-20% to-primary to-90% 
        flex flex-col lg:flex-row gap-8 justify-center items-center
      ">
        <Helmet >
          <title>Coin not found - CryptoNight</title>
        </Helmet>
        <Spinner />
      </section>
    ) 
  }

}

export default Coin
