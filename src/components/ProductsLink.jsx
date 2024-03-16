import React from 'react'
import { Link } from 'react-router-dom'

const ProductsLink = ({title, secondTitle}) => {
  return (
      <div className='bg-[#E3CAA5] py-8 lg:py-10'>
          <div className=' main-container px-4 2xl:px-0'>
              <Link to='/' className='text-xl md:text-2xl lg:text-3xl  font-semibold'>
                Home
              </Link>
        <span className='mx-2 text-xl md:text-2xl lg:text-3xl  font-semibold'>/</span>
        {secondTitle && (
          <>
            <Link to='/products' className='text-xl md:text-2xl lg:text-3xl  font-semibold capitalize'>
                {secondTitle}
              </Link>
              <span className='mx-2 text-xl md:text-2xl lg:text-3xl  font-semibold'>/</span>
          </>
            )}
              <span className='text-xl md:text-2xl lg:text-3xl  font-semibold text-[#AD8B73] capitalize'>
                  {title}
              </span>
          </div>
    </div>
  )
}

export default ProductsLink