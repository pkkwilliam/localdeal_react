import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};
const middleWare = [thunk];
export const store = createStore(reducers, applyMiddleware(...middleWare));
