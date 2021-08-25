import { SAVE_EVENT } from "../actions/events";
import { PayloadAction } from "../types";
import { Event } from "../utilities/events";

export const events = (events = [], action: PayloadAction<Event>) => {
  switch (action.type) {
    case SAVE_EVENT:
      return [...events, action.payload];
    default:
      return events;
  }
};
