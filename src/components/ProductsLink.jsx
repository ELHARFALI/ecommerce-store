import React from 'react'
import { Link } from 'react-router-dom'

const ProductsLink = ({title}) => {
  return (
      <div className='bg-[#E3CAA5] py-8 lg:py-10'>
          <div className=' main-container px-4 2xl:px-0'>
              <Link to='/' className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>
                Home
              </Link>
              <span className='mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>/</span>
              <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#AD8B73]'>
                  {title}
              </span>
          </div>
    </div>
  )
}

export default ProductsLink