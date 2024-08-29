import React from 'react';
import { addToCart } from '../Redux/Reducers/cartSlice';
import { useDispatch } from "react-redux";

const Pop = ({ item, onClose }) => {
  const dispatch = useDispatch();
  if (!item) return null;

  const previousPrice = Math.floor(item.price * 1.5);
  const discountPercentage = Math.round(((previousPrice - item.price) / previousPrice) * 100);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-10">
      <div className="bg-white p-4 rounded-lg w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img src={item.image} alt={item.title} className="h-48 w-full object-contain mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-center">{item.title}</h2>
          <p className="text-gray-500 mb-2">{item.category}</p>
          <p className="text-lg text-green-300 mb-2 bg-slate-700 p-2 cursor-pointer rounded-sm"
           onClick={ ()=> dispatch(addToCart(item))}>
            Now: ${item.price}</p>
          <p className="text-gray-400 mb-2">
            Earlier: <del>${previousPrice}</del>
          </p>
          <p className="text-red-500 font-medium mb-2">
            SALE: {discountPercentage}% Off
          </p>
          <p className="text-gray-700 mb-4 text-center">{item.description}</p>
          <p className="text-gray-700 mb-2">
            Rating: {item.rating.rate} ({item.rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pop;
