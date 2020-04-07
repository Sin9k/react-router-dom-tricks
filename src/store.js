import { applyMiddleware, compose, createStore } from "redux";

import reducer from "./reducer";

export default () => {
  const middlewares = applyMiddleware();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancers(middlewares));

  return { store };
};
