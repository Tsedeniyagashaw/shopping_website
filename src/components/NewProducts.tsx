import React from 'react'
import ProductCard from './ProductCard'

const products = [  
  {
    img: "/Group 65.png",
    title: "Classic White T-Shirt",
    desc: "Soft cotton tee with a relaxed fit — perfect for everyday wear.",
    rating: 4,
    price: "25.00"
  },
  {
    img: "/Group 67.png",
    title: "Graphic Street Tee",
    desc: "Trendy oversized t-shirt featuring bold street art print.",
    rating: 3,
    price: "30.00"
  },
  {
    img: "/Group 68.png",
    title: "SportFit Training Shirt",
    desc: "Breathable and quick-dry fabric ideal for gym or outdoor workouts.",
    rating: 4,
    price: "35.00"
  },
  {
    img: "/image (1).png",
    title: "Slim Fit Jogger Pants",
    desc: "Lightweight stretch joggers designed for comfort and style.",
    rating: 5,
    price: "45.00"
  },
  {
    img: "/image (2).png",
    title: "Urban Windbreaker Jacket",
    desc: "Stylish wind-resistant jacket perfect for cool weather.",
    rating: 4,
    price: "60.00"
  },
  {
    img: "/image (3).png",
    title: "Denim Casual Coat",
    desc: "Classic denim jacket with modern detailing and durable stitching.",
    rating: 3,
    price: "70.00"
  },
  {
    img: "/image (4).png",
    title: "Puffer Winter Coat",
    desc: "Warm insulated coat for cold days, with a sleek modern fit.",
    rating: 4,
    price: "95.00"
  },
 
  {
    img: "/Rectangle 12.png",
    title: "Slim Fit Chino Pants",
    desc: "Tailored chinos with stretch comfort — perfect for everyday wear or casual outings.",
    rating: 5,
    price: "49.00",
  },
  {
    img: "/image (6).png",
    title: "Winter Wool Coat",
    desc: "A stylish and warm coat crafted from premium wool for cold-weather comfort.",
    rating: 4,
    price: "89.00",
  },
  {
    img: "/Rectangle 13.png",
    title: "Classic White T-Shirt",
    desc: "Soft cotton tee with a relaxed fit — essential for every wardrobe.",
    rating: 5,
    price: "25.00",
  },
  {
    img: "/Rectangle 18.png",
    title: "Graphic Street Tee",
    desc: "Trendy printed T-shirt made from breathable fabric with a modern fit.",
    rating: 4,
    price: "29.00",
  },
  {
    img: "/Rectangle 20.png",
    title: "Denim Jacket",
    desc: "Iconic denim jacket designed with durable stitching and a timeless style.",
    rating: 5,
    price: "65.00",
  },
  {
    img: "/Rectangle 21.png",
    title: "Leather Biker Jacket",
    desc: "Premium faux-leather jacket with metal zip detailing for a bold street look.",
    rating: 3,
    price: "75.00",
  },
  {
    img: "/Rectangle 22.png",
    title: "Women's Summer Shorts",
    desc: "Lightweight cotton shorts with a relaxed fit — ideal for warm sunny days.",
    rating: 4,
    price: "32.00",
  },
  {
    img: "/Rectangle 49.png",
    title: "Women's Sport Shorts",
    desc: "Breathable athletic shorts with stretch fabric for comfort during workouts.",
    rating: 5,
    price: "38.00",
  },
  {
    img: "/image 12.png",
    title: "Women's Casual Shorts",
    desc: "Everyday shorts made from soft fabric — simple, stylish, and comfortable.",
    rating: 2,
    price: "28.00",
  },
];



const NewProducts = () => {  
  return (
    <div className="w-full px-25">
      <div className="container pt-16">
        <h2 className="font-semibold text-3xl pb-6 text-gray-800 text-center sm:text-left">
          New Products
        </h2>
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-8 
          place-items-center sm:place-items-start
        ">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts
