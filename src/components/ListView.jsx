import React from 'react'
import { Link } from 'react-router-dom'

const ListView = ({ isLoading, products }) => {
  

  return (
    products.map((product) => {
      const {id, image, name, price, description} = product
      return (
        <div className='grid md:grid-cols-2 mb-8 lg:grid-cols-3 transition-all ease-in-out duration-150 hover:bg-[#FFFBE9] pb-2 lg:pb-0 rounded-lg '>
      <div className='col-span-1'>
        <img src={image} alt={name} className='rounded-lg h-[250px] w-full object-cover' />
      </div>
      <div className='flex flex-col justify-center lg:col-span-2 ml-4'>
            <h3 className='text-xl lg:text-2xl font-semibold mb-2'>{name}</h3>
            <p className='text-lg text-[#AD8B73] font-medium '>${price/100}</p>
            <p className='text lg:text-lg mb-4'>{description.slice(0, 110)}...</p>
            <div>
            <Link to={`/products/${id}`} className='px-4 py-1 rounded-lg text-white transition-all ease-in-out duration-150 bg-[#AD8B73] text-lg font-medium'  >
              Details
            </Link>
            </div>
      </div>
    </div>
      )
    })
  )
}

export default ListView