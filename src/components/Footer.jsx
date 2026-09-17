import React from 'react'

const Footer = () => {
  return (
   <footer className='p-2 bg-white border-t border-t-gray-500 text-amber-500 flex justify-between items-center flex-col sm:flex-row'>
    <h2 className='text-xl sm:text-2xl font-bold self-start'>Nightstay</h2>
    <p >copyright @{new Date().getFullYear()} all rights reserved</p>
   </footer>
  )
}

export default Footer