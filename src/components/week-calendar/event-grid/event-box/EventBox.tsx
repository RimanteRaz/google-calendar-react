import { useSelector } from "react-redux";
import { getOverlapingEvents } from "../../../../selectors";
import {
  get12HourTime,
  MILISECONDS_IN_SECOND,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE,
} from "../../../../utilities/dates";
import { Event, sortEvents, TIME_SLOT_HEIGHT } from "../../../../utilities/events";
import styles from "./EventBox.module.scss";

export const EventBox = ({ event }: EventBoxProps) => {
  const overlapingEvents = useSelector(getOverlapingEvents(event.startDate, event.endDate));

  const timeLabel = getLabel(event.startDate, event.endDate);
  const height = calEventBoxHeight(event.startDate, event.endDate);
  const top = calEventTop(event.startDate);
  const { width, leftOffset } = calEventWidth(event, overlapingEvents);

  return (
    <div
      className={styles.event}
      style={{ height: height, top: top, width: width, left: leftOffset }}
    >
      <div className={styles.title}>{event.title}</div>
      <div className={styles.time}>{timeLabel}</div>
    </div>
  );
};

type EventBoxProps = {
  event: Event;
};

const getLabel = (startDate: Date, endDate: Date) => {
  const startTimeLabel = get12HourTime(startDate);
  const endTimeLabel = get12HourTime(endDate);
  return `${startTimeLabel} – ${endTimeLabel}`;
};

const calEventBoxHeight = (startDate: Date, endDate: Date) => {
  const diffInMiliSeconds = endDate.getTime() - startDate.getTime();
  const diffInMinutes = diffInMiliSeconds / (MILISECONDS_IN_SECOND * SECONDS_IN_MINUTE);
  let height = Math.floor((TIME_SLOT_HEIGHT * diffInMinutes) / MINUTES_IN_HOUR);
  height = Math.max(height, 20);
  return `${height}px`;
};

const calEventTop = (startDate: Date) => {
  const startMinutes = startDate.getMinutes();
  const top = Math.floor((TIME_SLOT_HEIGHT * startMinutes) / MINUTES_IN_HOUR);
  return `${top}px`;
};

const calEventWidth = (event: Event, overlapingEvents: Event[]) => {
  overlapingEvents.sort(sortEvents);

  const width = parseInt((100 / overlapingEvents.length).toFixed(2));
  const position = overlapingEvents.indexOf(event);
  const leftOffset = position * width;

  return { width: `${width}%`, leftOffset: `${leftOffset}%` };
};
