import { ActionTypes } from "../Constants/Action-types"
const intialState = {
  products: [],
};

export const ProductReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  // console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

const initialLikedState = {
  likedProducts: [], // Array to store liked products
};

export const LikedProductReducer = (state = initialLikedState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LIKED_PRODUCT:
      return {
        ...state,
        likedProducts: [...state.likedProducts, payload],
      };
    case ActionTypes.REMOVE_LIKED_PRODUCT:
      return {
        ...state,
        likedProducts: state.likedProducts.filter((product) => product.id !== payload.id),
      };
    default:
      return state;
  }
};