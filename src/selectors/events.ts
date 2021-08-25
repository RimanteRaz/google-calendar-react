import { State } from "../store";
import { isSameHour } from "../utilities/dates";
import { Event, isEventInTimeRange } from "../utilities/events";

export const getEvents = (state: State) => state.events;

export const getEventsOfThisHour = (date: Date) => (state: State) => {
  return state.events.filter((event: Event) => isSameHour(event.startDate, date));
};

export const getOverlapingEvents = (startDate: Date, endDate: Date) => (state: State) => {
  const startHour = startDate.getHours();
  const endHour = endDate.getHours();

  const overlapingEvents = [];

  for (let hour = startHour - 1; hour <= startHour + 2 && hour <= endHour; ++hour) {
    const date = new Date(startDate);
    date.setHours(hour, 0, 0);

    const currentHourEvents = state.events.filter((event: Event) =>
      isSameHour(event.startDate, date)
    );
    overlapingEvents.push(...currentHourEvents);
  }

  return overlapingEvents.filter(event => isEventInTimeRange(event, startDate, endDate));
};
