import axios from "axios";

export default axios.create({
  baseURL: "https://paragon-training-api.herokuapp.com/",
});
