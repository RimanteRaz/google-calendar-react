import { NEXT_WEEK, PREVIOUS_WEEK, TODAY } from "./actions";
import { getDayAWeekLater, getDayAWeekAgo } from "./utilities/dates";

const initialState = { selectedDay: new Date() };

export const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case NEXT_WEEK:
      return Object.assign({}, state, { selectedDay: getDayAWeekLater(state.selectedDay) });

    case PREVIOUS_WEEK:
      return Object.assign({}, state, { selectedDay: getDayAWeekAgo(state.selectedDay) });

    case TODAY:
      return Object.assign({}, state, { selectedDay: new Date() });

    default:
      return state;
  }
};

export type State = ReturnType<typeof reducer>;
