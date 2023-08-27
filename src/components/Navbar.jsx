import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar bg-blue-700 text-white fixed p-4 z-50 max-w-screen shadow-lg ">

        <div class="dropdown navbar-start inline-block lg:hidden">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 border-2 border-blue-900 bg-primary rounded-lg w-52">
            <li className='text-xl font-montserrat-bold'>
              <Link to='/'> 
                Home
              </Link>
            </li>
            <li className='text-xl font-montserrat-bold'>
              <a href="#market">
                Market State
              </a>
            </li>
            <li className='text-xl font-montserrat-bold'>
              <Link to='/source'> 
                Sources
              </Link>
            </li>
          </ul>
        </div>

        <Link to='/' class=" text-3xl navbar-end lg:navbar-start font-montserrat-bold">CryptoNight</Link>

      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          
          <li className='text-xl font-montserrat-bold'>
            <Link to='/'> 
              Home
            </Link>
          </li>
          <li className='text-xl font-montserrat-bold'>
            <a href="#market">
              Market State
            </a>
          </li>
          <li className='text-xl font-montserrat-bold'>
            <Link to='/source'> 
              Sources
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar