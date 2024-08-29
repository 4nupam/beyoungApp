import { ActionTypes } from "../Constants/Action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};

export const likedProduct = (product) => {
  return {
    type: ActionTypes.LIKED_PRODUCT,
    payload: product,
  };
};

export const removeLikedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_LIKED_PRODUCT,
    payload: product,
  };
};
