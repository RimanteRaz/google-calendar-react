import { PayloadAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { State } from "./store";
import { getDayAWeekAgo, getDayAWeekLater } from "./utilities/dates";

export const CHANGE_DATE = "CHANGE_DATE";

export const changeDate = (date: Date) => ({ type: CHANGE_DATE, payload: date });

type Thunk = ThunkAction<void, State, null, PayloadAction<Date>>;

export const nextWeek = (): Thunk => (dispatch, getState) => {
  const state = getState();
  const newDate = getDayAWeekLater(state.selectedDay);
  dispatch(changeDate(newDate));
};

export const previousWeek = (): Thunk => (dispatch, getState) => {
  const state = getState();
  const newDate = getDayAWeekAgo(state.selectedDay);
  dispatch(changeDate(newDate));
};

export const today = (): Thunk => dispatch => {
  dispatch(changeDate(new Date()));
};
