import { DAYS_IN_A_WEEK, HOURS_IN_DAY } from "./dates";

export const mapHours = <ReturnElement>(callback: Callback<ReturnElement>): ReturnElement[] => {
  const hoursInDay = [...Array(HOURS_IN_DAY)];
  return hoursInDay.map(callback);
};

export const mapDaysInWeek = <ReturnElement>(
  callback: Callback<ReturnElement>
): ReturnElement[] => {
  const daysInWeek = [...Array(DAYS_IN_A_WEEK)];
  return daysInWeek.map(callback);
};

type Callback<ReturnElement> = (_: undefined, index: number) => ReturnElement;
