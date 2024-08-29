import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { CiLock } from "react-icons/ci";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { disLikedProduct } from "../../Redux/Reducers/LikeSlice";

const Liked = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const likedProducts = useSelector((state) => state.likeSlice.likedProducts);
  const handleRemove = (product) => {
    dispatch(disLikedProduct(product));
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <div className="banner bg-black flex items-center justify-center gap-4 mt-4 text-yellow-300 p-3">
        <CiLock /> We are 100% Safe
      </div>

      {likedProducts.length > 0 ? (
        likedProducts.map((product, index) => (
          <div
            key={index}
            className="liked_product mt-4 p-4 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center gap-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-fit object-contain"
            />
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
              <span className="font-semibold text-gray-800">
                {product.title}
              </span>
              <span className="text-gray-600">{product.category}</span>
              <span className="font-semibold text-gray-800">
                ${product.price}
              </span>
            </div>
            <button
              className="px-4 py-2 cursor-pointer text-2xl text-white rounded"
              onClick={() => handleRemove(product)}
            >
              <FcCancel />
            </button>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-600 mt-8">
          No liked products found.
        </div>
      )}

      <button
        className="text-yellow-300 mb-4 flex items-center gap-2 justify-center mt-4 p-3 bg-black rounded-lg"
        onClick={() => navigate("/")}
      >
        Continue To Shopping <FaAngleDoubleRight className="mt-1" />
      </button>
    </div>
  );
};

export default Liked;
