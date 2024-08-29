import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // If the item is already in the cart, increase the quantity
        state.cart[itemIndex].quantity += 1;
      } else {
        // If the item is not in the cart, add it with quantity 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((_, index) => index !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      if (quantity > 0) {
        state.cart[index].quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
