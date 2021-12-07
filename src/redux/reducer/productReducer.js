import { FETCH_PRODUCTS } from "../type/product";

const INIT_STATE = [];

const productReducer = (products = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      products = INIT_STATE;
      return [...products, ...action.payload];
    default:
      return products;
  }
};

export default productReducer;
