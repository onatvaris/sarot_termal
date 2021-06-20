import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers";

const middleware = applyMiddleware(thunk)

export const store = createStore(rootReducer, middleware)