import { ThunkAction } from "redux-thunk";
import { State } from "../store";
import { PayloadAction } from "../types";
import { api } from "../utilities/api";
import { deserializeEvents, Event } from "../utilities/events";

export const SAVE_EVENT = "SAVE_EVENT";
export const SAVE_EVENTS = "SAVE_EVENTS";

export const saveEventToState = (event: Event) => ({ type: SAVE_EVENT, payload: event });
export const saveEventsToState = (events: Event[]) => ({ type: SAVE_EVENTS, payload: events });

export const saveEvent =
  (event: Event): ThunkAction<void, State, null, PayloadAction<Event>> =>
  dispatch => {
    api.saveEvent(event);
    dispatch(saveEventToState(event));
  };

export const fetchEvents =
  (): ThunkAction<void, State, null, PayloadAction<Event[]>> => async dispatch => {
    const serializedEvents = await api.getEvents();
    const events = deserializeEvents(serializedEvents);
    dispatch(saveEventsToState(events));
  };

type SaveEvent = {
  type: typeof SAVE_EVENT;
  payload: Event;
};

type SaveEvents = {
  type: typeof SAVE_EVENTS;
  payload: Event[];
};

export type EventsAction = SaveEvent | SaveEvents;
