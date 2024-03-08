import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-bcg.jpeg'
import heroImg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <section className='main-container grid lg:grid-cols-2 gap-x-6 place-content-center h-[calc(100vh-80px)] px-4 2xl:px-0'>
      <div className='h-full flex flex-col justify-center'>
        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2'>
          Design Your Home Here
        </h1>
        <h3 className='text-xl lg:text-2xl xl:text-3xl font-medium mb-4'>
          Easy, and right now!
        </h3>
        <p className='lg:text-lg mb-8 text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellat quod ut quis minima nihil veritatis tenetur, sint, voluptate ea magni corrupti cupiditate veniam. Dolores, quis!
        </p>
        <div>
          <Link to='/products' className='btn'>
            shop now
          </Link>
        </div>
      </div>
      <div className='w-full h-full hidden lg:flex justify-center items-center relative '>
        <img src={heroImg} alt="main hero image" className='h-[550px] w-[440px] rounded-lg relative' />
        <img src={heroImg2} alt="second hero image" className='h-[200px] w-[300px] object-contain absolute  bottom-0 left-[-20px] rounded-lg' />
      </div>
    </section>
  )
}

export default Hero