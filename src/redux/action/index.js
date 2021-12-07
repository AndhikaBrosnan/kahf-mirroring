import apiBackend from "../../api/apiBackend";

export const fetchProducts = async () => {
  try {
    const response = await apiBackend.get("products");
    return response.data;
  } catch (err) {
    return {
      message: "Error on Fetch Products",
    };
  }
};

export const fetchCart = async () => {
  try {
    const response = await apiBackend.get("cart");
    return response.data;
  } catch (err) {
    return {
      message: "Error on Fetch Cart",
    };
  }
};
