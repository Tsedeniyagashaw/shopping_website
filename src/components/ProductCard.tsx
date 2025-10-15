import Image from 'next/image';
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, rating, price }) => {

  const generateRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      );
    }
    return <div className="flex gap-1 text-[20px] text-yellow-500">{stars}</div>;
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl w-full max-w-[300px] h-[420px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
    
      <div className="w-full h-[220px] relative overflow-hidden rounded-t-xl bg-gray-50 flex justify-center items-center">
        <Image
          className="object-contain"
          src={img}
          alt={title}
          fill
        />
      </div>
      <div className="flex flex-col justify-between flex-1 py-4 space-y-2">
        <h2 className="text-green-900 font-semibold uppercase text-sm">{title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2">{desc}</p>
        {generateRating(rating)}
        <div className="font-bold flex gap-4 items-center">
          ${price}
          <del className="text-gray-500 font-normal">${parseInt(price) + 50}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
