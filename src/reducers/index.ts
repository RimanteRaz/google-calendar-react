import { combineReducers } from "redux";
import { date } from "./date";
import { eventModal } from "./event-modal";
import { events } from "./events";

export const rootReducer = combineReducers({
  date,
  eventModal,
  events,
});
