import React from "react";
import { useNavigate } from "react-router";
import { CiLock } from "react-icons/ci";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../Redux/Reducers/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increaseQuantity = (index) => {
    const newQuantity = cart[index].quantity + 1;
    dispatch(updateQuantity({ index, quantity: newQuantity }));
  };

  const decreaseQuantity = (index) => {
    const newQuantity = cart[index].quantity - 1;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ index, quantity: newQuantity }));
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deleteProduct = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <div className="banner rounded-sm mt-4 bg-black flex items-center justify-center gap-4 text-yellow-300 p-3">
        <CiLock /> We are 100% Safe
      </div>
      {cart.length>0?<ul>
        {cart.map((item, index) => (
          <li key={index} className="list-none">
            <div className="cart_product mt-4 p-2 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center gap-4">
              <img
                src={item.image}
                alt="Product"
                className="w-24 h-24 object-fit object-contain"
              />
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
                <span className="font-semibold text-gray-800">
                  {item.title}
                </span>
                <span className="text-gray-600">{item.category}</span>
                <span className="font-semibold text-gray-800">
                  ${item.price}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                </div>
              </div>
              <MdCancel
                className="text-red-600 text-xl cursor-pointer"
                onClick={() => deleteProduct(index)}
              />
            </div>
          </li>
        ))}
      </ul> : <div className="flex items-center justify-center object-fit object-contain">

        <img src="https://www.beyoung.in/desktop/images/checkout/EMPTY%20CARTORDER%20PAGE..png" alt="" />
      </div> }

      <div className="total_Price mt-4 p-4 border border-gray-200 rounded-lg flex justify-between items-center">
        <span className="font-semibold text-gray-800">
          Total Price: ${totalPrice.toFixed(2)}
        </span>
        <button className="font-bold text-gray-800 p-3 bg-green-500 rounded-lg">
          Continue to Pay
        </button>
      </div>

      <button
        className="text-yellow-300 flex items-center gap-2 justify-center mt-4 mb-4 p-3 bg-black rounded-lg"
        onClick={() => navigate("/")}
      >
        Continue To Shopping <FaAngleDoubleRight className="mt-1" />
      </button>
    </div>
  );
};

export default Cart;
