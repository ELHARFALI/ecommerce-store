import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'


const servicesItems = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

const Services = () => {
  return (
    <section className='px-4 2xl:px-0 py-10 lg:py-16 main-container'>
      <div className='my-2 grid gap-6 lg:grid-cols-3 mb-4'>
        <div className='lg:col-span-1'>
          <h1 className='text-2xl lg:text-3xl poppins-semibold'>
            Custom Furniture <br /> Built Only For You
            </h1>
        </div>
        <div className='lg:col-span-2'>
          <p className='md:text-lg text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse non nisi eos nesciunt atque ab laboriosam repudiandae tempora, excepturi, temporibus saepe perferendis aperiam dolore culpa. Obcaecati id molestiae numquam?
          </p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {servicesItems.map((service) => {
          const { id, icon, title, text } = service
          return (
            <div key={id} className='px-4 py-10 rounded-lg flex flex-col items-center justify-center text-center bg-[#AD8B73] xl:relative xl:bottom-[-130px]'>
              <span className='block text-[50px] p-4 rounded-full bg-[#FFFBE9] text-center'>
                {icon}
              </span>
              <h3 className='text-white mt-3'>
                {title}
              </h3>
              <p className='text-white mt-3'>
                {text}
              </p>
            </div>
          )
          })}
      </div>
    </section>
  )
}

export default Services