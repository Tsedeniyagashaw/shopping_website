import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function HeaderTop() {
  return (
    <div className='border-b border-t border-gray-200 hidden sm:block px-16'>
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className=" flex sm-hidden gap-1">
            <div className="header_top__icon_wrapper">
              <BsFacebook />
              
            </div>

             <div className="header_top__icon_wrapper">
              <BsTwitter />
              
            </div>

             <div className="header_top__icon_wrapper">
              <BsInstagram />
              
            </div>

             <div className="header_top__icon_wrapper">
              <BsLinkedin />
              
            </div>
          </div>

         <div className='text-gray-500 text-[15px]'>
  <b>Shop Smarter, Live Better</b>  Discover the Latest Trends Today!
</div>
<div className="flex gap-4">
  <select className='text-gray-500 text-[12px] w-[70px]' name="currency" id="currency">
   <option value="ETB$">ETB</option>  
   <option value="USD$">USD</option>
    <option value="EUR$">EUR</option>
   
  </select>

    <select className='text-gray-500 text-[12px] w-[70px]' name="language" id="language">
   <option value="English">English</option>  
   <option value="Amharic">Amharic</option>
   
   
  </select>
</div>


        </div>
      </div>
    </div>
  )
}

export default HeaderTop
