import React from 'react'
import ProductCard from './ProductCard'

const GridView = ({isLoading, products}) => {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
      {products.map((product) => {
        return (
            <ProductCard key={product.id} {...product} />
          )
        })}
    </div>
  )
}

export default GridView