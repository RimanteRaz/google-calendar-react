import { combineReducers } from "redux";
import { date } from "./date";
import { eventModal } from "./event-modal";

export const rootReducer = combineReducers({
  date,
  eventModal,
});
