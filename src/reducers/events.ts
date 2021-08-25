import { SAVE_EVENTS } from "../actions/events";
import { PayloadAction } from "../types";
import { Event } from "../utilities/events";

export const events = (events = [], action: PayloadAction<Event[]>) => {
  switch (action.type) {
    case SAVE_EVENTS:
      return [...events, ...action.payload];
    default:
      return events;
  }
};
