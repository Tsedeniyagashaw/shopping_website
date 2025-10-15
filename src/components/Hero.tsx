"use client";
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/Frame 1.png",
     title: "Sales Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$20"
    },
    {
      id: 1,
      img: "/bannr.png",
      title: "Exclusive Offer",
mainTitle: "LUXURY BEAUTY ESSENTIALS",

      price: "$22"
    },
    {
      id: 2,
      img: "/nike-just-do-it.jpg.png",
      title: "Hot Sale",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20"
    }
  ];

  return (
    <div className="container pt-6 lg:pt-0">
     <Slider {...settings}>
      {slideData.map((item) => 
      <Slide 
      key={item.id}
      img={item.img}
      title={item.title}
      mainTitle={item.mainTitle}
      price={item.price}
      />
      )}
     </Slider>
    </div>
  );
}

export default Hero;
