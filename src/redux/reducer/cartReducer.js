import { FETCH_CART } from "../type/cart";

const INIT_STATE = [];

const cartReducer = (cart = INIT_STATE, action) => {
  switch (action.payload) {
    case FETCH_CART:
      return [...cart, ...action.payload];
    default:
      return cart;
  }
};

export default cartReducer;
