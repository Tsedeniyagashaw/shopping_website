
import React from 'react'
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide:React.FC<propsType> = ({img,title, mainTitle, price}) => {
  return (
    <div className='outline-none border-none relative'>
      <div className="absolute left-[30px] md:left-[70px] max-w-[505px] top-[50%] -translate-y-[50%] space-y-z lg:space-y-4  sm-bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
          <h3 className='text-green-600 text-[30px] font-bold '>{title}</h3>
        <h2 className='text-gray-900 text-[26px] md:text-[30px] lg:text-[44px] leading[1.2]'>{mainTitle}</h2>
  
      <h3 className='text-[24px] text-gray-600'>
        starting at{" "}
        <b className="text-[26px]">{price}</b>.00
      </h3>
      <button className="bg-green-900 cursor-pointer hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center">
   Shop now
</button>




      
    </div>   
    <Image 
     className='w-[100%] h-[50px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom' 
    src={img}
    alt='banner'
    width={2000}
    height={2000}
    />
     </div>

  )
}

export default Slide
