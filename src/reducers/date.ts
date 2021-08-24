import { PayloadAction } from "../types";
import { CHANGE_DATE } from "../actions";

export const date = (date = { selectedDay: new Date() }, action: PayloadAction<Date>) => {
  switch (action.type) {
    case CHANGE_DATE:
      return { ...date, selectedDay: action.payload };
    default:
      return date;
  }
};
