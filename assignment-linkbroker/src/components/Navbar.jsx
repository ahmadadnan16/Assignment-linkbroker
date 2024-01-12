import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-11/12 flex justify-between items-center mx-auto  bg-white/30 backdrop-blur-sm px-5 py-1 md:py-2 lg:py-3 mt-7 border-2 rounded-lg  '>
      <h3 className='text-white hover:scale-125 transition-all ease-in duration-300'>Homepage</h3>
      <div className='flex gap-4 text-white'>
      <button className=' hover:scale-125 transition-all ease-in duration-300'>Login</button>
      <button className='border-2 px-3 py-1 rounded-md hover:scale-110 transition-all ease-in duration-300'>Create Account</button>

      </div>
    </nav>
  )
}

export default Navbar
