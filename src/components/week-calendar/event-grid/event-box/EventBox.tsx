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
  const height = calculateEventBoxHeight(event.startDate, event.endDate);
  const top = calculateEventTop(event.startDate);
  const width = calculateEventWidth(overlapingEvents);
  const left = calculateEventLeft(event, overlapingEvents);

  return (
    <div className={styles.event} style={{ height: height, top: top, width: width, left: left }}>
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

const calculateEventBoxHeight = (startDate: Date, endDate: Date) => {
  const diffInMiliSeconds = endDate.getTime() - startDate.getTime();
  const diffInMinutes = diffInMiliSeconds / (MILISECONDS_IN_SECOND * SECONDS_IN_MINUTE);
  let height = Math.floor((TIME_SLOT_HEIGHT * diffInMinutes) / MINUTES_IN_HOUR);
  height = Math.max(height, 20);
  return `${height}px`;
};

const calculateEventTop = (startDate: Date) => {
  const startMinutes = startDate.getMinutes();
  const top = Math.floor((TIME_SLOT_HEIGHT * startMinutes) / MINUTES_IN_HOUR);
  return `${top}px`;
};

const calculateEventWidth = (overlapingEvents: Event[]) => {
  const width = parseInt((100 / overlapingEvents.length).toFixed(2));
  return `${width}%`;
};

const calculateEventLeft = (event: Event, overlapingEvents: Event[]) => {
  overlapingEvents.sort(sortEvents);
  const position = overlapingEvents.indexOf(event);
  const width = parseInt((100 / overlapingEvents.length).toFixed(2));
  const left = position * width;
  return `${left}%`;
};
