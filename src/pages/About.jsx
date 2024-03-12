import img from '../assets/hero-bcg.jpeg'

const About = () => {
  return (
    <main className='min-h-[calc(100vh-156px)] lg:min-h-[calc(100vh-172px)] main-container py-10 lg:py-20 px-4 2xl:px-0 lg:flex lg:justify-center lg:items-center'>
      <div className='grid lg:grid-cols-2 gap-6'>
        <div className='flex justify-center items-center h-full w-full'>
          <img src={img} alt="heroImg" className='w-full h-[500px] max-w-[450px] object-cover rounded-lg' />
        </div>
        <div className='flex flex-col justify-center '>
          <h1 className='text-4xl lg:text-5xl xl:text-6xl poppins-semibold px-3 pb-2'>Our Story</h1>
          <div className='mb-4 lg:mb-6 h-[6px] lg:h-2 w-[80px] md:w-[100px] lg:w-[120px] rounded bg-[#AD8B73]' />
          <p className='text-lg text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, debitis nulla optio, voluptatem, provident nam dolor delectus veniam harum nobis tempora illum architecto hic? Itaque laudantium beatae aut sint voluptatibus impedit deserunt! Distinctio, esse cum alias optio molestias perferendis quas est delectus nemo vitae? Saepe dolor quia sapiente illo dolores.
          </p>
        </div>
      </div>

    </main>
  )
}

export default About