import Image from 'next/image'
import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <div className="w-full py-16 px-0">
      <h2 className="font-semibold text-3xl pb-8 px-5 text-gray-800">
        Testimonials
      </h2>
      <div className="flex gap-6 w-full">
    
        <div className="w-[300px] border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition duration-300 shrink-0">
          <Image
            className="rounded-full mb-3"
            src="/jane.jfif"
            width={90}
            height={90}
            alt="Jane Doe"
          />
          <h3 className="text-gray-800 font-bold text-xl">Jane Doe</h3>
          <p className="text-gray-500 mb-2 text-sm">CEO & Founder of Cosmetics</p>

        <FaQuoteRight className='text-[70px] m-10 text-gray-500' />

          <p className="text-green-700 max-w-[220px] text-sm">
            “Quality products and 100% warranty.”
          </p>
        </div>

        <div
          className="flex-1 h-[500px] rounded-2xl flex justify-center items-center relative overflow-hidden"
          style={{
            backgroundImage: "url('/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-md">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md mb-3 text-sm font-medium">
              25% Discount
            </button>
            <h2 className="font-extrabold text-3xl text-gray-900 mb-2">
              Summer Collection
            </h2>
            <p className="text-gray-600 text-lg">
              Starting @ $20 <b className="text-gray-800">Shop Now</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
