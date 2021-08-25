import { uuid } from "./uuid";

export const TIME_SLOT_HEIGHT = 40;

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

export const deserializeEvents = (serializedEvents: SerializedEvent[]) => {
  return serializedEvents.map(event => {
    return {
      id: event.id,
      title: event.title,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
    };
  });
};

export const isEventInTimeRange = (event: Event, refStartDate: Date, refEndDate: Date) => {
  const eventStartTime = event.startDate.getTime();
  const eventEndTime = event.endDate.getTime();

  const refStartTime = refStartDate.getTime();
  const refEndTime = refEndDate.getTime();

  const isOutOfRange = eventStartTime > refEndTime || eventEndTime < refStartTime;

  return !isOutOfRange;
};

export const sortEvents = (previous: Event, current: Event) => {
  const prevEventStartTime = previous.startDate.getTime();
  const curEventStartTime = current.startDate.getTime();
  if (prevEventStartTime < curEventStartTime) {
    return -1;
  }
  if (prevEventStartTime === curEventStartTime) {
    return 0;
  }
  return 1;
};

export interface Event {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
}

export interface SerializedEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
}
