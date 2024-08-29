import React, { useState, useEffect } from 'react';
import { useData } from '../Context/ContextApi';
import { useDispatch } from 'react-redux';
import {addToCart} from'../Redux/Reducers/cartSlice'

const Carousel = () => {
    const { data, loading } = useData();
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoplayInterval = 3000;
    const dispatch = useDispatch();
    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.min(data.length, 3));
        }, autoplayInterval);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [data]);

    if (loading) return <div>Loading...</div>;


    const slicedData = data.slice(0, 3);

    return (
        <div className="overflow-hidden relative w-full h-3/5">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slicedData.map((e) => (
                    <div key={e.id} className="w-full flex-shrink-0 h-3/5">
                        <section className="text-gray-600 body-font h-2/4">
                            <div className="container mx-auto flex px-2 py-4 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                  
                                <h6 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-400">
                                        {e.category}
                                    </h6> <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                                        {e.title}
                                    </h1>
                                    <p className="mb-8 leading-relaxed">
                                        {e.description}
                                    </p>
                                    <div className="flex justify-center">
                                        <span className="inline-flex text-white  bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                           ${e.price} Only
                                        </span>
                                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                         onClick={()=>dispatch(addToCart(e))}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-auto">
                                    <img className="object-fit object-contain rounded w-full h-80" alt={e.title} src={e.image} />
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
            
           
        </div>
    );
};

export default Carousel;
