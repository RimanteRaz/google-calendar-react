import { useSelector } from "react-redux";
import { getEventsOfThisHour } from "../../../../selectors";
import { getDateWithDiffHour, isSameDay } from "../../../../utilities/dates";
import { Event } from "../../../../utilities/events";
import { EventBox } from "../event-box";
import styles from "./TimeSlot.module.scss";

export const TimeSlot = ({ date, hour }: TimeSlotProps) => {
  const timeSlotDate = getDateWithDiffHour(date, hour);

  const events = useSelector(getEventsOfThisHour(timeSlotDate));

  return (
    <div className={styles.timeSlot}>
      {events.map((event: Event) => (
        <EventBox key={event.id} event={event} dataTestid={`event-${event.id}`} />
      ))}
    </div>
  );
};

type TimeSlotProps = {
  date: Date;
  hour: number;
};
