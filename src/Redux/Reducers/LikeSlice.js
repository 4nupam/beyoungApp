import { createSlice } from "@reduxjs/toolkit";

const initialLikedState = {
  likedProducts: [], // Array to hold liked products
};

const likeSlice = createSlice({
  name: "likeSlice",
  initialState: initialLikedState,
  reducers: {
    LikedProduct(state, action) {
      state.likedProducts.push(action.payload);
    },
    disLikedProduct(state, action) {
      state.likedProducts = state.likedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { LikedProduct, disLikedProduct } = likeSlice.actions;

export default likeSlice.reducer;
