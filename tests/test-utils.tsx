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

export const mockStore = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  preloadedState: templateState,
});

const getMockStore = (state: State) => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    preloadedState: state,
  });
};

export const wrapInAProvider = (children: ReactChild, state?: State) => {
  const mockStore = state ? getMockStore(state) : getMockStore(templateState);
  return <Provider store={mockStore}>{children}</Provider>;
};
