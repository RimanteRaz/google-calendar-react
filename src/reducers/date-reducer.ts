import { PayloadAction } from "../types";
import { CHANGE_DATE } from "../actions";

export const date = (date = { selectedDay: new Date() }, action: PayloadAction<Date>) => {
  if (action.type === CHANGE_DATE) {
    return { selectedDay: action.payload };
  }

  return date;
};
