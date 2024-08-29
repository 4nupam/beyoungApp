import { combineReducers } from "redux";
import { ProductReducer, selectedProductsReducer,LikedProductReducer } from "./ProductReducer";

const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductsReducer,
  likeSlice: LikedProductReducer,
});
export default reducers;