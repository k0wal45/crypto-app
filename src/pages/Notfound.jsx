import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-8 w-screen h-screen bg-primary'>
      <Helmet >
        <title>Page Not Found</title>
      </Helmet>
      <h2 className="font-montserrat-bold text-white text-4xl">Page not found</h2>
      <Link to='/' className='btn'>Return to Home Page</Link>
    </main>
  )
}

export default Notfound
