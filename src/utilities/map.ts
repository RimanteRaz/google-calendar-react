import { DAYS_IN_A_WEEK, HOURS_IN_DAY } from "./dates";

export const mapHours = <T, R>(callback: Callback<T, R>, value?: T): R[] => {
  const hoursInDay = [...Array(HOURS_IN_DAY)];
  if (value) {
    hoursInDay.fill(value);
  }
  return hoursInDay.map(callback);
};

export const mapDaysInWeek = <T, R>(callback: Callback<T, R>, value?: T): R[] => {
  const daysInWeek = [...Array(DAYS_IN_A_WEEK)];
  if (value) {
    daysInWeek.fill(value);
  }
  return daysInWeek.map(callback);
};

type Callback<Value, Return> = (_: Value, index: number) => Return;
