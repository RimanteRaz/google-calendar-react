import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dateReducer } from "./reducers";

export const store = createStore(dateReducer, applyMiddleware(thunk));

export type State = {
  selectedDay: Date;
};
