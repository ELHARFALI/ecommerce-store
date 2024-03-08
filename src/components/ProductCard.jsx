import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({image, name, price, id}) => {
  return (
    <Link to={`/products/${id}`} className=' transition ease-in-out duration-150 hover:scale-105'>
      <img src={image} alt={name} className='object-cover w-full h-[225px] rounded-lg mb-2' />
      <div className='flex justify-between items-center text-lg px-1'>
        <h3 className='capitalize font-medium'>
          {name}
        </h3>
        <p>
          ${price/100}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard