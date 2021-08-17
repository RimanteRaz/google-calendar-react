import { AnyAction } from "redux";
import { CHANGE_DATE } from "./actions";

const initialState = { selectedDay: new Date() };

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_DATE:
      return Object.assign({}, state, { selectedDay: action.payload });

    default:
      return state;
  }
};
