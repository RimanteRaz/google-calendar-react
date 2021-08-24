import { PayloadAction } from "../types";
import { ThunkAction } from "redux-thunk";
import { State } from "../store";
import { getDayAWeekAgo, getDayAWeekLater } from "../utilities/dates";

export const CHANGE_DATE = "CHANGE_DATE";

export const changeDate = (date: Date) => ({ type: CHANGE_DATE, payload: date });

type DateThunkAction = ThunkAction<void, State, null, PayloadAction<Date>>;

export const nextWeek = (): DateThunkAction => (dispatch, getState) => {
  const state = getState();
  const newDate = getDayAWeekLater(state.date.selectedDay);
  dispatch(changeDate(newDate));
};

export const previousWeek = (): DateThunkAction => (dispatch, getState) => {
  const state = getState();
  const newDate = getDayAWeekAgo(state.date.selectedDay);
  dispatch(changeDate(newDate));
};

export const today = (): DateThunkAction => dispatch => {
  dispatch(changeDate(new Date()));
};
