import React, { useState } from "react";
import { useData } from "../../Context/ContextApi";
import Pop from '../Pop';


const NewDrop = () => {
  const { data, loading } = useData();

  const [filt, setFilt] = useState("men's clothing");
  const [pop, setPop] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  const filterdata = () => {
    return data.filter((e) => e.category === filt);
  };

  const popup = (item) => {
    setSelectedItem(item);
    setPop(true);
  };

  const closePopup = () => {
    setPop(false);
    setSelectedItem(null);
  };

  return (
    <div className="mt-4 mb-4 relative">
      <div className="heading flex flex-col items-center gap-2 mb-8 mt-8">
        <span className="text-3xl font-bold">New Drop</span>
        <span className="text-xl text-gray-500 font-semibold">
          Must Have Trendzzz
        </span>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFilt("men's clothing")}
          className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition ${
            filt === "men's clothing"
              ? "bg-blue-600 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Men's
        </button>
        <button
          onClick={() => setFilt("women's clothing")}
          className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition ${
            filt === "women's clothing"
              ? "bg-pink-600 text-white"
              : "bg-pink-500 text-white hover:bg-pink-600"
          }`}
        >
          Women's
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filterdata().map((item) => {
          const previousPrice = Math.floor(item.price * 1.5);
          const discountPercentage = Math.round(
            ((previousPrice - item.price) / previousPrice) * 100
          );

          return (
            <div
              key={item.id}
              className="flex flex-col h-96 w-full bg-white shadow-md rounded-lg cursor-pointer overflow-hidden hover:shadow-lg transition"
              onClick={() => popup(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-2/3 w-full object-fit object-contain"
              />
              <div className="below_part flex flex-col justify-between p-4 h-1/3">
                <span className="text-xl font-semibold">{item.title}</span>
                <span className="text-gray-500">{item.category}</span>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-green-600">
                    Now: ${item.price} Only
                  </span>
                  <span> Earlier:  <del className="text-gray-400 ml-2"> ${previousPrice}</del></span>
                  <h4 className="text-red-500 font-medium">
                    SALE: {discountPercentage}% Off
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {pop && <Pop item={selectedItem} className="w-full h-1/2" onClose={closePopup} />}
    </div>
  );
};

export default NewDrop;
