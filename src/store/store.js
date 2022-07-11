import { createStore, applyMiddleware, compose } from "redux";
// thunk e o middleware para funções asincronas
import thunk from "redux-thunk";
// import logger from "redux-logger";
//
import reducers from "./reducers/index";
//
const composeEnhancers =
  window.__REDUX_DEVETOOLS_EXTENCION_COMPOSE__ || compose;
//
const middlewares = [thunk];
//
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
