import { EventsAction, SAVE_EVENT, SAVE_EVENTS } from "../actions";
import { Event } from "../utilities/events";

export const events = (events: Event[] = [], action: EventsAction) => {
  switch (action.type) {
    case SAVE_EVENT:
      return [...events, action.payload];
    case SAVE_EVENTS:
      return [...events, ...action.payload];
    default:
      return events;
  }
};
