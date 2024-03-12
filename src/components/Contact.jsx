import React from 'react'

const Contact = () => {
  return (
    <section className='main-container py-8 xl:pb-14 xl:py-32 px-4 2xl:px-0 grid lg:grid-cols-2 gap-6'>
      <div>
        <h1 className='text-2xl font-semibold mb-2 lg:mb-4 lg:text-3xl xl:text-4xl'>
          If you want some help
        </h1>
        <h3 className='text-xl font-medium lg:text-2xl mb-4'>
          Tell us 
        </h3>
        <p className='text text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error numquam nobis architecto, explicabo commodi?
        </p>
      </div>
      <form>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-lg">Your Email</span>
          </label>
            <input type="text" placeholder="Email..." className="input input-bordered w-full " />
        </div>
        <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Ask here</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" placeholder="Type here..."></textarea>
        </div>
        <button type="submit" className='w-full flex justify-center mt-6 py-2 text-lg text-white font-medium bg-[#AD8B73] rounded-lg transition-all ease-in-out duration-150 hover:bg-[#E3CAA5]'>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact