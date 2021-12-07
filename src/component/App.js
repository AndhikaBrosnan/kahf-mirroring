import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import Routes from "./route";
import reducers from "../redux/reducer";
import thunk from "redux-thunk";

const App = () => {
  return (
    <div>
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Routes />
      </Provider>
    </div>
  );
};

export default App;
