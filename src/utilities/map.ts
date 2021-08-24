import { DAYS_IN_A_WEEK, HOURS_IN_DAY } from "./dates";

export const mapHours = <ReturnValue>(callback: Callback<ReturnValue>): ReturnValue[] => {
  const hoursInDay = [...Array(HOURS_IN_DAY)];
  return hoursInDay.map((_, index) => callback(index));
};

export const mapDaysInWeek = <ReturnValue>(callback: Callback<ReturnValue>): ReturnValue[] => {
  const daysInWeek = [...Array(DAYS_IN_A_WEEK)];
  return daysInWeek.map((_, index) => callback(index));
};

type Callback<ReturnValue> = (index: number) => ReturnValue;
