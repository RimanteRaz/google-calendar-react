import { EventsAction, SAVE_EVENT, SAVE_EVENTS, DELETE_EVENT } from "../actions";
import { Event } from "../utilities/events";

export const events = (events: Event[] = [], action: EventsAction) => {
  switch (action.type) {
    case SAVE_EVENT:
      return [...events, action.payload];
    case SAVE_EVENTS:
      return [...events, ...action.payload];
    case DELETE_EVENT:
      return events.filter(event => event.id !== action.payload);
    default:
      return events;
  }
};
