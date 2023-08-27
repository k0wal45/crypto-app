import photo1 from '../assets/img/portfel.png'
import photo2 from '../assets/img/karta.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row w-full bg-neutral-300 justify-center items-center p-4 py-12 gap-8'>
      <img src={photo1} className='w-72' alt="Wallet" />
      <div className="flex flex-col justify-center items-center gap-4">
        <h6 className="text-4xl font-montserrat-bold text-center">More Abpout Crypto on our Socials</h6>
        <div className="flex gap-4">
          <FaFacebook className='text-5xl text-neutral-700 hover:text-primary'/>
          <FaLinkedin className='text-5xl text-neutral-700 hover:text-primary'/>
          <FaInstagramSquare className='text-5xl text-neutral-700 hover:text-primary'/>
          <FaTwitter className='text-5xl text-neutral-700 hover:text-primary'/>
        </div>
      </div>
      <img src={photo2} className='w-72' alt="Credit Card" />
    </footer>
  )
}

export default Footer
