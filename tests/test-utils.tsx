import { configureStore, Store } from "@reduxjs/toolkit";
import { ReactChild } from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "../src/reducers";
import { State } from "../src/store";

export const templateState = {
  date: { selectedDay: new Date("2021-09-01") },
  eventCreateModal: { isOpen: false },
  events: [],
  eventPreview: { isOpen: false, eventDisplayed: null },
};

const getMockStore = (state: State) => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    preloadedState: state,
  });
};

export const wrapInAProvider = (component: ReactChild, state?: State) => {
  const mockStore = getMockStore(state || templateState);
  return <Provider store={mockStore}>{component}</Provider>;
};
