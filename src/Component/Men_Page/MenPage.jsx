import React, { useState,useEffect } from 'react';
import { useData } from '../../Context/ContextApi';
import { CiSearch } from "react-icons/ci";
import Card from '../Card';

const MenPage = () => {
  const { data, loading } = useData();
  const [product, setProduct] = useState("men's clothing");
  const [input, setInput] = useState('');
  const [deb,setDeb] = useState('')
  
  useEffect(()=>{
   const debData = setTimeout(()=>{
    setDeb(input)
   },1000)

   return ()=>{clearTimeout(debData)}
  },[input])

  const filteredData = () => {
    return data.filter((e) => (
      e.category === product && e.title.toLowerCase().includes(deb.toLowerCase())
    ));
  };

  return (
    <div className="">
      <div className="top flex p-2 items-center justify-between bg-yellow-400">
        <span className="text-lg ml-8 font-semibold font-[cursive]">Welcome to Men's Sections</span>
        <div className="search relative mr-8 flex items-center">
          <input
            className="border border-gray-300 rounded-sm py-2 px-4 pr-10 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Here"
            onChange={(e) => setInput(e.target.value)}
          />
          <CiSearch className="absolute right-3 text-gray-500" />
        </div>
      </div>
      <div className="desc p-2 ml-8 mr-8">
        <h2 className="text-2xl font-bold mb-2">Men's Clothing</h2>
        <span className="text-gray-700">
          Explore our vast collection of clothing for men at Beyoung, where you will find Plain, <span className='text-yellow-400'>
          Printed, & Oversized T-shirts, along with trendy Cargo Pants, Joggers, and more</span>. No matter what your style is, you will find something on our online shopping website for men. Enhance your wardrobe with us, where quality is blended with affordability in clothing for men. Shop your faves now at Beyoung's online clothing store for men.
          <br /><br />
          Discover our exclusive range of <span className='text-yellow-400'> quality T shirts for men </span>, designed for ultimate comfort and style.
        </span>
      </div>
      <h2 className='text-center font-extrabold text-yellow-300 mt-4 mb-4'>OUR PRODUCTS</h2>
      <div className='flex flex-wrap justify-start ml-8 gap-8'>
        {loading ? (
          <>Loading...</>
        ) : (
          filteredData().map((product) => (
            <li className='list-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4' key={product.id}>
              <Card product={product} />
            </li>
          ))
        )}
      </div>
    </div>
  );
};

export default MenPage;
