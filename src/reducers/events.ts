import { Action } from "redux";
import { SAVE_EVENT, SAVE_EVENTS } from "../actions";
import { PayloadAction } from "../types";
import { Event } from "../utilities/events";

export const events = (events: Event[] = [], action: PayloadAction<Event[]>) => {
  switch (action.type) {
    case SAVE_EVENT:
      return [...events, action.payload];
    case SAVE_EVENTS:
      return [...events, ...action.payload];
    default:
      return events;
  }
};
