import React, { useEffect } from 'react'
import { ProductImages, ProductsLink, Reviews } from '../components'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../features/singleProduct/singleProductSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'

const SingleProduct = () => {
  const { id } = useParams()
  
  const dispatch = useDispatch()
  const { isLoading, single_product } = useSelector((store) => store.singleProduct)
  
  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [])

  // console.log(single_product);
  const { images, name, price, description, stock, id:sku, reviews, stars, company, category, colors } = single_product
  
  console.log(single_product);

  if (isLoading) {
    return (
      <main className='min-h-[calc(100vh-156px)] lg:min-h-[calc(100vh-172px)] flex justify-center items-center'>
            <div className="main-container px-4 2xl:px-0 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
           </div>
      </main>
    )
  }


  return (
    <main className='min-h-[calc(100vh-156px)] lg:min-h-[calc(100vh-172px)]'>
        <ProductsLink secondTitle='Products' title={name} />
      <div className="main-container px-4 2xl:px-0 py-10 lg:py-16">
        <div className='mb-6'>
          <Link to='/products' className='btn'>
            back to products
          </Link>
        </div>
        <div className='grid lg:grid-cols-2 gap-8'>
          <ProductImages images={images} />
          <div>
            <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl poppins-bold capitalize mb-2'>{name}</h1>
            <Reviews />
            <h3 className='text-lg lg:text-xl xl:text-2xl poppins-medium text-[#AD8B73] mb-2'>
              ${price/100}
            </h3>
            <p className='text lg:text-lg mb-3'>
              {description}
            </p>
            <div className='pb-4 border-b-[1px] border-black'>
              <div className='flex items-center mb-2  '>
                <h3 className='text-lg lg:text-xl poppins-medium '>
                  Available: 
                </h3>
                <span className='ml-10 text'>
                  {stock > 0 ? 'In Stock' : 'Out Of Stock'}
                </span>
              </div>
              <div className='flex items-center mb-2  '>
                <h3 className='text-lg lg:text-xl poppins-medium'>
                  SKU: 
                </h3>
                <span className='ml-[94px] text'>
                  {sku}
                </span>
              </div>
              <div className='flex items-center   '>
                <h3 className='text-lg lg:text-xl poppins-medium'>
                  Brand: 
                </h3>
                <span className='ml-[72px] text capitalize'>
                  {company}
                </span>
              </div>
            </div>
            <div className='flex items-center mb-8 gap-x-4 mt-4 '>
                <h3 className='text-lg lg:text-xl poppins-medium '>
                  Colors: 
                </h3>
                <div className='flex items-center gap-x-1'>
                  {colors?.map((color, index) => {
                    return (
                      <button key={index} style={{background: color}} className='h-5 lg:h-6 w-5 lg:w-6 rounded-full'>
                    </button>
                    )
                  })}
                </div>
              </div>
              <div className='flex items-center mt-4'>
                <button type='button' className='w-[40px] h-[40px] lg:w-[50px] flex justify-center items-center text-lg lg:text-xl rounded-lg transition-all ease-in-out duration-150 bg-[#FFFBE9] hover:bg-[#E3CAA5]'>
                <FaMinus />
                </button>
                <h2 className='w-[40px] h-[40px] lg:w-[50px] flex justify-center items-center text-3xl lg:text-4xl font-semibold'>1</h2>
                <button type='button' className='w-[40px] h-[40px] lg:w-[50px] flex justify-center items-center text-lg lg:text-xl rounded-lg transition-all ease-in-out duration-150 bg-[#FFFBE9] hover:bg-[#E3CAA5]'>
                  <FaPlus />
                </button>
            </div>
            <div className='mt-8'>
              <button type="button" className='btn'>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct