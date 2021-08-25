import { ThunkAction } from "redux-thunk";
import { State } from "../store";
import { PayloadAction } from "../types";
import { api } from "../utilities/api";
import { Event } from "../utilities/events";

export const SAVE_EVENT = "SAVE_EVENT";

export const saveEventToState = (event: Event) => ({ type: SAVE_EVENT, payload: event });

type EventThunkAction = ThunkAction<void, State, null, PayloadAction<Event>>;

export const saveEvent =
  (event: Event): EventThunkAction =>
  dispatch => {
    api.saveEvent(event);

    dispatch(saveEventToState(event));
  };
