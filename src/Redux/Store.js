import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./Reducers/cartSlice";
import likeSlice from "./Reducers/LikeSlice"; 

// Combine reducers
const rootReducer = combineReducers({
    cart: cartReducer,      // Access this via state.cart in components
    likeSlice: likeSlice,   // Access this via state.likeSlice in components
});

// Configure the store with the combined reducer
const store = configureStore({
    reducer: rootReducer,  // Use the combined reducer
});

export default store;
