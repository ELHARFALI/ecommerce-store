import React, { useEffect } from 'react'
import { Filters, GridView, ListView, ProductCard, ProductsLink } from '../components'

import { FaListUl } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { toggleView } from '../features/products/productsSlice';


const Products = () => {
  const dispatch = useDispatch()
  const { products, isLoading, gridView } = useSelector((store) => store.products)
  
  

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  
  const toggle = () => {
    dispatch(toggleView())
  }

  return (
    <main className='min-h-[calc(100vh-172px)]'>
      <ProductsLink title='Products' />
      <div className=' main-container px-4 2xl:px-0 mt-8 lg:mt-10 grid  lg:grid-cols-5 xl:grid-cols-6 gap-6'>
        <Filters />
        <div className='col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-5'>
          <div className='flex flex-col items-center md:flex-row md:items-center md:justify-between pb-2 border-b-[2px] border-b-black'>
            {/* LIST */}
            <div className='flex gap-x-3 items-center'>
              <button type="button" className={`
              ${gridView ? 'bg-[#AD8B73] text-white' : 'text-[#AD8B73] bg-white border border-[#AD8B73]'}
                  p-1 rounded-md 
                `} onClick={toggle}>
                  <BsFillGridFill size={24} />
                </button>
                <button type="button" className={`
              ${!gridView ? 'bg-[#AD8B73] text-white' : 'text-[#AD8B73] bg-white border border-[#]'}
                  p-1 rounded-md 
                `} onClick={toggle}>
                  <FaListUl size={24} />
                </button>
            </div>
            <hr className='h-[1px] w-full bg-black my-2 md:hidden' />
            {/* AMOUNT */}
            <div className=''>
              <p className='text-lg font-medium'>
                <span className='text-[#AD8B73]'>{products.length}</span> Products Found
              </p>
            </div>
            <hr className='h-[1px] w-full bg-black my-2 md:hidden' />
            
            {/* SORT */}
            <div>
              <label htmlFor="sort" className='text-lg mr-2'>Sort By</label>
              <select name="sort">
                <option value="price-lowest">Price (Lowest)</option>
              </select>
            </div>
            <hr className='h-[1px] w-full bg-black my-2 md:hidden' />

          </div>
          {isLoading ? (
            <div className='w-full h-full flex justify-center items-center'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
              <div className='mt-8 lg:mt-10'>
                {gridView ? (
                  <GridView isLoading={isLoading} products={products} />
                ) : (
                    <ListView isLoading={isLoading} products={products} />
                )}
              </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Products