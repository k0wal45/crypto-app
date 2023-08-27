import { Helmet } from "react-helmet";
import Coins from "../components/home/Coins";
import Hero from "../components/home/Hero";
import Market from "../components/home/Market";
import What from "../components/home/What";

const Home = () => {

  return (
    <main className='flex flex-col justify-center'>
      <Helmet >
        <title>CryptoNight - Home</title>
      </Helmet>
      <Hero 
        header='Know more about crypto with us'
      />
      <Coins />
      <Market />
      <What />
    </main>
  )
}

export default Home
