import { combineReducers } from "redux";
import { date } from "./date-reducer";
import { eventModal } from "./event-modal-reducer";

export const rootReducer = combineReducers({
  date,
  eventModal,
});
