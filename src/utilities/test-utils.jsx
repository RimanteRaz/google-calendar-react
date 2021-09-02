import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";

const render = (
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: rootReducer, middleware: [thunk], preloadedState }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{chidlren}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
