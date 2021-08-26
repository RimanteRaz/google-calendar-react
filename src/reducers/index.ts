import { combineReducers } from "redux";
import { date } from "./date";
import { eventCreate } from "./event-create";
import { eventPreview } from "./event-preview";
import { events } from "./events";

export const rootReducer = combineReducers({
  date,
  eventCreate,
  events,
  eventPreview,
});
