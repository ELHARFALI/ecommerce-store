import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productsSlice'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const Featured = () => {
    const dispatch = useDispatch()
    const { products, status } = useSelector((store) => store.products)
    

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const featuredProducts = products.slice(0, 3)



  return (
      <section className='main-container py-10 lg:py-16 px-4 2xl:px-0'>
          <div className='w-full flex justify-center items-center'>
              <h1 className='text-2xl lg:text-3xl xl:text-4xl poppins-semibold px-3 pb-1 border-b-[4px] border-[#AD8B73]' >
                  Featured Products
              </h1>
          </div>
          <div className='mt-8 lg:mt-10'>
              {
                  status === 'loading' 
                      ? <div className='flex justify-center items-center'>
                          <span className="loading loading-spinner loading-lg"></span>
                      </div> : (
                          <>
                            <div className='grid lg:grid-cols-2 xl:grid-cols-3  gap-8 '>
                              {featuredProducts.map((product) => {
                                  const { id } = product
                                  return (
                                      <ProductCard key={id} {...product} />
                                  )
                              })}
                              </div>
                              <div className='mt-4 lg:mt-6 flex justify-center items-center'>
                                  <Link to='/products' className='btn'>
                                    all products
                                  </Link>
                              </div>
                          </>
                  )
              }
          </div>
    </section>
  )
}

export default Featured