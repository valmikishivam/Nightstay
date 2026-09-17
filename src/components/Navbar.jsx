import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  
 
  return (
   <header className='p-2 md:p-4 flex justify-between items-center flex-col sm:flex-row shadow-lg shadow-gray-200'>
    <h2 className=' text-2xl text-amber-500 self-start'><Link to='/'>Nightstay</Link></h2>
    <nav className='flex items-center justify-center  gap-x-3 md:gap-x-5 p-2 sm:p-0'>
      <NavLink to='/' className={({isActive})=>isActive?'border-b-2 border-b-amber-500 rounded-lg p-1 capitalize ':'capitalize text-amber-500 hover:border-b-2 border-b-amber-500 ease-in-out duration-150 '}>home</NavLink>
      <NavLink to='/rooms' className={({isActive})=>isActive?'border-b-2 border-b-amber-500 rounded-lg p-1 capitalize ':'capitalize text-amber-500 hover:border-b-2 border-b-amber-500 ease-in-out duration-150 '}>rooms</NavLink>
      <NavLink to='/contact' className={({isActive})=>isActive?'border-b-2 border-b-amber-500 rounded-lg p-1 capitalize ':'capitalize text-amber-500 hover:border-b-2 border-b-amber-500 ease-in-out duration-150 '}>contact</NavLink>
      <NavLink to='/about' className={({isActive})=>isActive?'border-b-2 border-b-amber-500 rounded-lg p-1 capitalize ':'capitalize text-amber-500 hover:border-b-2 border-b-amber-500 ease-in-out duration-150 '}>aboutus</NavLink>
    </nav>
   </header>
  )
}

export default Navbar