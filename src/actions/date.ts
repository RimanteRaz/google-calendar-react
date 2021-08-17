import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { State } from "../store";
import { getDayAWeekAgo, getDayAWeekLater } from "../utilities/dates";

export const CHANGE_DATE = "CHANGE_DATE";

export const changeDate = (date: Date) => ({ type: CHANGE_DATE, payload: date });

export const nextWeek = (): ThunkAction<void, State, null, AnyAction> => (dispatch, getState) => {
  const state = getState();
  const newDate = getDayAWeekLater(state.selectedDay);
  dispatch(changeDate(newDate));
};

export const previousWeek =
  (): ThunkAction<void, State, null, AnyAction> => (dispatch, getState) => {
    const state = getState();
    const newDate = getDayAWeekAgo(state.selectedDay);
    dispatch(changeDate(newDate));
  };

export const today = (): ThunkAction<void, State, null, AnyAction> => dispatch => {
  dispatch(changeDate(new Date()));
};
