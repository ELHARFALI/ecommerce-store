import {Featured, Hero} from '../components'

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)]   poppins-regular '>
      <Hero />
      <div className='bg-[#FFFBE9]'>
        <Featured />
      </div>
    </main>
  )
}

export default Home