import { State } from "../store";
import { getStartOfWeek } from "../utilities/dates";

export const getSelectedDay = (state: State) => state.date.selectedDay;

export const getStartOfSelectedWeek = (state: State) => getStartOfWeek(state.date.selectedDay);
