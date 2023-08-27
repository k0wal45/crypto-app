import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner';
import CoinItem from '../sub/CoinItem';

const Coins = () => {
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
        setData(json);
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

  if(!loading) {
    return (
    <section className="max-w-screen p-4 flex flex-wrap justify-center items-center bg-primary">
      <CoinItem 
        data={data[0]}
      />
      <div class="divider lg:divider-horizontal"></div> 
      <CoinItem 
        data={data[1]}
      />
      <div class="divider lg:divider-horizontal"></div> 
      <CoinItem 
        data={data[2]}
      />
      <div class="divider lg:divider-horizontal"></div> 
      <CoinItem 
        data={data[3]}
      />
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

export default Coins
