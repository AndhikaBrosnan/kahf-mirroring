import { FETCH_CART, POST_CART } from "../type/cart";

const INIT_STATE = [];

const cartReducer = (carts = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_CART:
      carts = INIT_STATE;
      return [...carts, ...action.payload];
    case POST_CART:
      carts = [...carts, action.payload];
      return carts;
    default:
      return carts;
  }
};

export default cartReducer;
