import { FETCH_CART, POST_CART } from "../type/cart";
import { fetchCart, postCart } from ".";

export const fetchCartData = async (dispatch) => {
  const response = await fetchCart();
  dispatch({
    type: FETCH_CART,
    payload: response,
  });
};

export const postCartData = async (dispatch, name, image) => {
  const response = await postCart(name, image);

  dispatch({ type: POST_CART, payload: response });
};
