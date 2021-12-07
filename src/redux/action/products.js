import { fetchProducts } from ".";
import { FETCH_PRODUCTS } from "../type/product";

export const fetchProductsData = async (dispatch) => {
  const response = await fetchProducts();
  dispatch({ type: FETCH_PRODUCTS, payload: response });
};
