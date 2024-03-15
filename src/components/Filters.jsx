import React, { useState } from 'react'

// md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3

const Filters = ({ products }) => {
  
  // categories
  const categories = products.map((item) => item.category)
  const newCategories = ['all', ...new Set(categories)]

  // companies
  const companies = products.map((item) => item.company)
  const newCompanies = ['all', ...new Set(companies)]
  
  // colors
  const colors = products.map((item) => item.colors)
  const c = [].concat(...colors)
  const newColors = ['all', ...new Set(c)]

  // companies
  const price = products.map((item) => item.price)
  const newPrice = [...new Set(price)]
  
  const smallest = Math.min(...newPrice)
  const largest = Math.max(...newPrice)

  const smallNumber = smallest / 100
  const bigNumber = largest / 100
  const [priceNumber, setPriceNumber] = useState(bigNumber)

  const handlePrice = (e) => {
    const value = e.target.value
    setPriceNumber(value)
  }

  
  return (
    <div className=' col-span-1 mt-4'>
      <div className='lg:sticky lg:top-[20px]'>
      <div className=' mb-3'>
        <input type="text" name='search' className='bg-gray-100 w-full  lg:max-w-[105%] h-[35px] rounded-lg pl-2  font-medium text-lg' placeholder='Search...' />
      </div>
      <div className='mb-3'>
        <h3 className='font-medium text-lg lg:text-xl mb-2'>
          Category
        </h3>
        <ul>
          {newCategories.map((category, index) => {
            return (
              <li key={index} className={`pb-1 `}>
                <button
                  // className={`${isActive ? 'border-b-[1px] border-black' : ''}`}
                  className='text capitalize'
                
                >
                  {category}
                </button>
                </li>
              )
          })}
        </ul>
      </div>
      <div className='mb-3'>
        <h3 className='font-medium text-lg lg:text-xl mb-1'>
          Company
        </h3>
        <select name="company" id="company" defaultValue={newCompanies[0]} className='px-2 py-1 rounded-lg'>
          {newCompanies.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            )
          })}
        </select>
        </div>
        <div className='mb-3'>
          <h3 className='font-medium text-lg lg:text-xl mb-1'>
            Colors
          </h3>
          <div className='flex gap-x-3 items-center'>
            {newColors.map((c, index) => {
              return (
                <button key={index} style={{background: c}} className={c !== 'all' ? 'h-4 w-4 rounded-full' : 'capitalize text pb-1'}>
                  {c === 'all' && c}
                </button>
              )
            })}
          </div>
        </div>
        <div className='mb-3'>
          <h3 className='font-medium text-lg lg:text-xl mb-2'>
            Price
          </h3>
          <div className="flex flex-col ">
            <label htmlFor="price">${priceNumber}</label>
            <input type="range" defaultValue={bigNumber} value={priceNumber} onChange={handlePrice} min={smallNumber} max={bigNumber} step={100} />
          </div>
        </div>
        <div className='mb-3 flex justify-between items-center'>
          <h3 className='my-4'>
            Free Shipping
          </h3>
          <input type="checkbox" name="shipping"  />
        </div>
        <div>
          <button type='button' className='py-2 px-6 capitalize bg-red-600 text-white rounded-lg text-lg font-medium transition-all ease-in-out duration-150 hover:bg-red-500'> 
              clear filters
            </button>
        </div>
      </div>
    </div>
  )
}

export default Filters