import { LOG_IN } from "../type/login";
import { fetchCreds } from ".";

export const postLoginData = async (dispatch, email, password) => {
  const response = await fetchCreds();
  if (email === response.email && password === response.password) {
    dispatch({ type: LOG_IN, payload: response });
  } else {
    return {
      message: "Error on Login!",
    };
  }
};
