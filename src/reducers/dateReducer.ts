import { PayloadAction } from "@reduxjs/toolkit";
import { CHANGE_DATE } from "../actions";

const initialState = { selectedDay: new Date() };

export const dateReducer = (state = initialState, action: PayloadAction<Date>) => {
  if (action.type === CHANGE_DATE) {
    return { ...state, selectedDay: action.payload };
  }

  return state;
};
