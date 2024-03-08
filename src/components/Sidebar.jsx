import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaTimes, FaShoppingCart } from 'react-icons/fa'
import { navLinks } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/products/productsSlice'

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <aside
      className={`
      lg:hidden bg-[#E3CAA5] p-6
        ${isSidebarOpen ? 'fixed inset-0 transition-all ease-in-out duration-200 translate-x-0 ' : 'fixed inset-0 transition-all ease-in-out duration-200 translate-x-[-100%]'}
      `}
    >
      <div className='flex justify-between items-center mb-10'>
        <Link to='/' className='text-3xl text-[#393E46]  poppins-bold' onClick={toggle}>
          ShopHere
        </Link>
        <button type="button" className='text-[#393E46]' onClick={toggle}>
          <FaTimes size={28} />
        </button>
      </div>
      <ul className='grid gapy-4'>
        {navLinks.map((link) => {
          const { id, title, path } = link
          return (
            <li  key={id} className='mb-1'>
              <NavLink to={path} className='block pl-2 rounded-lg py-2 transition ease-in-out duration-150 hover:pl-4 hover:bg-[#eee] text-lg font-medium' onClick={toggle}>
                {title}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <div className='mt-20 flex justify-center items-center'>
        <Link to='/cart' className='flex justify-center items-center text-lg font-medium text-[#393E46] relative' onClick={toggle}>
            <FaShoppingCart size={30} />
            <span className='bg-[#00ADB5] w-6 h-6 flex justify-center items-center rounded-full absolute top-[-8px] right-[-15px] text-white'>3</span>
          </Link>
      </div>
    </aside>
  )
}

export default Sidebar