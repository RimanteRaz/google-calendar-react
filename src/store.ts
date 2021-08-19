import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dateReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(dateReducer, composeWithDevTools(applyMiddleware(thunk)));

export type State = {
  selectedDay: Date;
};
