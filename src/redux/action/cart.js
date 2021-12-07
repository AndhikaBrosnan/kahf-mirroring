import { FETCH_CART } from "../type/cart";
import { fetchCart } from ".";

export const fetchCartData = async (dispatch) => {
  const response = await fetchCart();
  dispatch({
    type: FETCH_CART,
    payload: response,
  });
};
