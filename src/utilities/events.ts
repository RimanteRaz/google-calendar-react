import { uuid } from "./uuid";

export const generateEvent = (title: string, date: string, startTime: string, endTime: string) => {
  const startDate = new Date(date + " " + startTime);
  const endDate = new Date(date + " " + endTime);

  const newEvent: Event = {
    id: uuid(),
    title: title,
    startDate: startDate,
    endDate: endDate,
  };

  return newEvent;
};

export interface Event {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
}
