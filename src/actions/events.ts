import { ThunkAction } from "redux-thunk";
import { State } from "../store";
import { PayloadAction } from "../types";
import { api } from "../utilities/api";
import { deserializeEvents, Event } from "../utilities/events";

export const SAVE_EVENTS = "SAVE_EVENTS";

export const saveEventsToState = (events: Event[]) => ({ type: SAVE_EVENTS, payload: events });

type EventThunkAction = ThunkAction<void, State, null, PayloadAction<Event[]>>;

export const saveEvent =
  (event: Event): EventThunkAction =>
  dispatch => {
    api.saveEvent(event);
    dispatch(saveEventsToState([event]));
  };

export const fetchEvents = (): EventThunkAction => async dispatch => {
  const serializedEvents = await api.getEvents();
  const events = deserializeEvents(serializedEvents);
  dispatch(saveEventsToState(events));
};
