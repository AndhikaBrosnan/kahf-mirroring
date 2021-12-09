import { LOG_IN } from "../type/login";

const INIT_STATE = {};

const loginReducer = (login = INIT_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      login = action.payload;
      return login;
    default:
      return login;
  }
};

export default loginReducer;
