import {Contact, Featured, Hero, Services} from '../components'

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)]   poppins-regular '>
      <Hero />
      <div className='bg-[#FFFBE9]'>
        <Featured />
      </div>
      <div className='bg-[#E3CAA5]'>
        <Services />
      </div>
      <Contact />
    </main>
  )
}

export default Home