import { useDispatch, useSelector } from "react-redux";
import { openPreviewModal } from "../../../../actions";
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
  const dispatch = useDispatch();

  const overlapingEvents = useSelector(getOverlapingEvents(event.startDate, event.endDate));
  const timeLabel = getLabel(event.startDate, event.endDate);
  const style = calculatePositionStyles(event, overlapingEvents);

  return (
    <div
      className={styles.event}
      style={style}
      onClick={() => {
        dispatch(openPreviewModal(event));
      }}
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

const calculateHeight = (startDate: Date, endDate: Date) => {
  const diffInMiliSeconds = endDate.getTime() - startDate.getTime();
  const diffInMinutes = diffInMiliSeconds / (MILISECONDS_IN_SECOND * SECONDS_IN_MINUTE);
  let height = Math.floor((TIME_SLOT_HEIGHT * diffInMinutes) / MINUTES_IN_HOUR);
  return Math.max(height, 20);
};

const calculateTopPosition = (startDate: Date) => {
  const startMinutes = startDate.getMinutes();
  return Math.floor((TIME_SLOT_HEIGHT * startMinutes) / MINUTES_IN_HOUR);
};

const calculateWidth = (overlapingEvents: Event[]) => {
  return parseInt((100 / overlapingEvents.length).toFixed(2));
};

const calculateLeftPosition = (event: Event, overlapingEvents: Event[], width: number) => {
  overlapingEvents.sort(sortEvents);
  const position = overlapingEvents.indexOf(event);
  return position * width;
};

const calculatePositionStyles = (event: Event, overlapingEvents: Event[]) => {
  const height = calculateHeight(event.startDate, event.endDate);
  const top = calculateTopPosition(event.startDate);
  const width = calculateWidth(overlapingEvents);
  const left = calculateLeftPosition(event, overlapingEvents, width);

  return { height: `${height}px`, top: `${top}px`, width: `${width}%`, left: `${left}%` };
};
