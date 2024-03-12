import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center py-6 lg:py-8 px-4 lg:px-2 xl:px-0 bg-[#222831] text-white' >
      <div className='text-lg'>
        &copy; {new Date().getFullYear()} <span className='text-[#AD8B73]'>ShopHere</span> All rights reserved
      </div>
      
    </footer>
  )
}

export default Footer