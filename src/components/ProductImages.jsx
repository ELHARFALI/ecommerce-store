import { useState } from "react"

const ProductImages = ({ images = [{url: ''}] }) => {
    
    const [mainImage, setMainImage] = useState(images[0])

  return (
      <div className='w-full max-w-[650px] mx-auto'>
          <img src={mainImage.url} alt="main image" className="block w-full object-cover h-[300px] lg:h-[450px] rounded-lg" />
          <div className="grid grid-cols-5 gap-2 mt-2 ">
              {images.map((image, index) => {
                  return (
                      <img src={image.url} key={index} alt={image.filename} onClick={() => setMainImage(images[index])} className={`h-[75px] w-full object-cover rounded-lg hover:cursor-pointer opacity-80 ${image.url === mainImage.url ? 'border-2 border-[#795744] opacity-100' : 'null'}`} />
                  )
              })}
          </div>
    </div>
  )
}

export default ProductImages