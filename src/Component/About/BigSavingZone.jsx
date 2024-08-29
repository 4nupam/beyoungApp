import React, { useState, useEffect } from 'react';
import { useData } from '../../Context/ContextApi';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Reducers/cartSlice';

const BigSavingZone = () => {
  const { data, loading } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to update the number of cards based on screen size
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) { // Small screens
        setCardsToShow(1);
      } else if (width < 768) { // Medium screens
        setCardsToShow(2);
      } else if (width < 1024) { // Large screens
        setCardsToShow(3);
      } else { // Extra large screens
        setCardsToShow(4);
      }
    };

    // Update on mount and whenever the window resizes
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  if (loading) return <div>Loading...</div>;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - cardsToShow;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + cardsToShow;
      return newIndex >= data.length ? prevIndex : newIndex;
    });
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <div className="heading flex flex-col items-center gap-2 mb-4">
        <span className="text-3xl font-bold">Big Saving Zone</span>
        <span className="text-xl text-gray-500 font-semibold">Everyday Casuals</span>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrevious}
          className={`absolute left-2 md:left-4 z-10 px-3 py-2 bg-gray-200 shadow-md rounded-full text-gray-800 transition ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
          }`}
          disabled={currentIndex === 0}
        >
          <FaAnglesLeft size={20} />
        </button>
        <div className="flex w-full justify-around overflow-hidden mt-8 px-2">
          {data.slice(currentIndex, currentIndex + cardsToShow).map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 h-80 md:w-64 md:h-96 mx-2 p-3 bg-white shadow-md rounded-md overflow-hidden relative"
            >
              <div
                className="w-full h-full bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-80 p-2 text-yellow-300 text-sm font-bold rounded-md">
                  <span className="block text-lg md:text-xl font-semibold">{item.title}</span>
                  <span className="block text-xs md:text-sm text-white">
                    Choose Two at <br />
                    <button onClick={()=>dispatch(addToCart(item))} className='font-bold hover:bg-slate-100 p-1 rounded-sm hover:text-green-500 bg-green-500 text-white mt-2 md:mt-6'>
                      BUY AT ${Math.floor(item.price > 100 ? item.price * 3 - 100 : item.price * 3 - 10)} Only
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`absolute right-2 md:right-4 z-10 px-3 py-2 bg-gray-200 shadow-md rounded-full text-gray-800 transition ${
            currentIndex + cardsToShow >= data.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
          }`}
          disabled={currentIndex + cardsToShow >= data.length}
        >
          <FaAnglesRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BigSavingZone;
