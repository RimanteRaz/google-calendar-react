import { ThunkAction } from "redux-thunk";
import { State } from "../store";
import { PayloadAction } from "../types";
import { api } from "../utilities/api";
import { deserializeEvents, Event } from "../utilities/events";

export const SAVE_EVENT = "SAVE_EVENT";
export const SAVE_EVENTS = "SAVE_EVENTS";
export const DELETE_EVENT = "DELETE_EVENT";

export const saveEventToState = (event: Event) => ({ type: SAVE_EVENT, payload: event });
export const saveEventsToState = (events: Event[]) => ({ type: SAVE_EVENTS, payload: events });
export const deleteEventFromState = (eventID: string) => ({ type: DELETE_EVENT, payload: eventID });

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

export const deleteEvent =
  (eventID: string): ThunkAction<void, State, null, PayloadAction<string>> =>
  dispatch => {
    api.deleteEvent(eventID);
    dispatch(deleteEventFromState(eventID));
  };

type SaveEventToState = {
  type: typeof SAVE_EVENT;
  payload: Event;
};

type SaveEventsToState = {
  type: typeof SAVE_EVENTS;
  payload: Event[];
};

type DeleteEventFromState = {
  type: typeof DELETE_EVENT;
  payload: string;
};

export type EventsAction = SaveEventToState | SaveEventsToState | DeleteEventFromState;
