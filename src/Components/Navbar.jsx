import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import search from '../assets/search.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  const [isOpen, setiIsOpen] = useState(false)
  return (
    <div className='h-[15%] w-screen flex flex-col flex-grow md:flex-row'>
      <div className='h-[100%] md:w-[20%] w-[40%]'>
        <img src={logo} alt="" />
      </div>
      <div className='h-[100%] w-[50%] hidden md:flex justify-center items-center gap-10 text-[#1d2f37]  '>
        <p>Trending</p>
        <p>Stories</p>
        <p>Reserve</p>
        <p>Delivery</p>
      </div>

      <button onClick={() => setiIsOpen(!isOpen)} className='md:hidden  fixed right-2 '><FontAwesomeIcon icon={isOpen ? faX : faBars} /></button>
      {isOpen && (
        <div className=' md:hidden bg-[#1d2f37] flex justify-center items-center flex-col  text-white '>
          <p>Trending</p>
          <p>Stories</p>
          <p>Reserve</p>
          <p>Delivery</p>
        </div>
      )}
      <div className='hidden h-[100%] w-[30%] md:flex justify-center items-center gap-4 relative '>
        <div>

          <input className='w-[130px] h-10 rounded-full' type="text" placeholder='🔍Search' />
        </div>

        <img className='w-10' src={cart} alt="" />

      </div>


    </div>
  )
}

export default Navbar