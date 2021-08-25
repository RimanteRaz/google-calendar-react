import { SAVE_EVENTS } from "../actions";
import { PayloadAction } from "../types";
import { Event } from "../utilities/events";

export const events = (events: Event[] = [], action: PayloadAction<Event[]>) => {
  switch (action.type) {
    case SAVE_EVENTS:
      return [...events, ...action.payload];
    default:
      return events;
  }
};
