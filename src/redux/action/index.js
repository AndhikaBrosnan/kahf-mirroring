import apiBackend from "../../api/apiBackend";
import { credential } from "../../api/dummyCreds";

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

export const postCart = async (name, image) => {
  let newCart = {
    name,
    image,
  };

  try {
    const response = await apiBackend.post("cart", newCart);
    return response.data;
  } catch (err) {
    return {
      message: "Error on Post Cart",
    };
  }
};

export const fetchCreds = () => {
  const response = credential;
  return response;
};
