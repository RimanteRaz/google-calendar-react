import { configureStore, Store } from "@reduxjs/toolkit";
import { screen, fireEvent } from "@testing-library/react";
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

const getMockStore = (state?: Partial<State>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    preloadedState: { ...templateState, ...state },
  });
};

export const wrapInAProvider = (children: ReactChild, state?: Partial<State>) => {
  const mockStore = getMockStore(state);
  return <Provider store={mockStore}>{children}</Provider>;
};

export const changeInputValue = (id: string, newValue: string) => {
  fireEvent.input(screen.getByTestId(id), { target: { value: newValue } });
};
