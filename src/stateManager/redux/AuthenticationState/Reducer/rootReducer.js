import { combineReducers } from "redux";
import { SignUpReducer, SignInReducer, SignOutReducer } from "../authReducer";

import {
  categoryReducer,
  category_delete_Reducer,
  create_category_Reducer,
} from "../category/categoryReducer";

import { productReducer ,create_productReducer ,delete_productReducer} from "../product/productReducer";

export const rootReducer = combineReducers({
  signup: SignUpReducer,
  signin: SignInReducer,
  signout: SignOutReducer,
  category: categoryReducer,
  deleteCategory: category_delete_Reducer,
  createCategory: create_category_Reducer,
  product: productReducer,
  createProduct : create_productReducer,
  deleteProduct : delete_productReducer
});
