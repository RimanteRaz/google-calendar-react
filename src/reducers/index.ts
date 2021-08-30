import { combineReducers } from "redux";
import { date } from "./date";
import { eventCreateModal } from "./event-create";
import { eventPreview } from "./event-preview";
import { events } from "./events";

export const rootReducer = combineReducers({
  date,
  eventCreateModal,
  events,
  eventPreview,
});
