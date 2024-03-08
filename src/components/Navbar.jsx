import React from 'react'
import { navLinks } from '../utils/constants'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/products/productsSlice';

const Navbar = () => {
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <nav className='h-20 main-container px-4 2xl:px-0 flex justify-between items-center shadow-sm shadow-gray-100'>
      <h1 className='text-3xl text-[#393E46] lg:text-4xl poppins-bold'>ShopHere</h1>
      <ul className='hidden lg:flex gap-x-4'>
        {navLinks.map((link) => {
          const { id, title, path } = link
          return (
            <li key={id} className='text-lg font-medium text-[#393E46]'>
              <NavLink to={path} className='px-4 py-2 transition-all ease-in-out duration-150 hover:bg-[#EEEEEE] rounded-md'>
                {title}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <div className='hidden lg:block'>
        <Link to='/cart' className='flex justify-center items-center text-lg font-medium text-[#393E46] relative'>
            <FaShoppingCart size={30} />
            <span className='bg-[#00ADB5] w-6 h-6 flex justify-center items-center rounded-full absolute top-[-8px] right-[-15px] text-white'>3</span>
          </Link>
      </div>
      <div className="lg:hidden">
        <button type='button' onClick={toggle}>
          <FaBars size={28} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar