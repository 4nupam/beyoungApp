import React, { useState } from "react";
import { useData } from "../../Context/ContextApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Reducers/cartSlice";

const Electronics = () => {
  const { data, loading } = useData();
  const [filter, setFilter] = useState("jewelery");
  const dispatch = useDispatch();

  const filteredData = () => {
    return data.filter((e) => e.category === filter);
  };

  return (
    <>
      <div className="flex m-8 items-center justify-between">
        <h4 className="text-3xl w-full font-bold text-gray-800  text-center">
          Other Sections
        </h4>
        <select
          className="bg-white border cursor-pointer border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-indigo-500"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="jewelery">Jewellery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 rounded-sm py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {loading ? (
              <div className="text-center w-full py-10">
                <span className="text-lg text-gray-500">Loading...</span>
              </div>
            ) : (
              filteredData().map((item) => (
                <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={item.title}
                      className="object-fit object-contain w-full h-full block"
                      src={item.image}
                    />
                  </a>
                  <div className="flex flex-col mb-1">
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category || "CATEGORY"}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title || "Default Title"}
                      </h2>
                    </div>
                    <span>
                      <p
                        className="mt-1 text-green-400 font-bold
                     bg-slate-200 p-2 text-center rounded-md cursor-pointer
                      hover:bg-green-400 hover:text-slate-100"
                      onClick={()=>dispatch(addToCart(item))}
                      >
                        BUY AT ${item.price} Only
                      </p>
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Electronics;
