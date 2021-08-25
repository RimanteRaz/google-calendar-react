import { useSelector } from "react-redux";
import { getEventsOfThisHour } from "../../../../selectors";
import { getDateWithDiffHour } from "../../../../utilities/dates";
import { EventBox } from "../event-box";
import styles from "./TimeSlot.module.scss";

export const TimeSlot = ({ date, hour }: TimeSlotProps) => {
  const timeSlotDate = getDateWithDiffHour(date, hour);

  const events = useSelector(getEventsOfThisHour(timeSlotDate));

  return (
    <div className={styles.timeSlot}>
      {events.map(event => (
        <EventBox key={event.id} event={event} />
      ))}
    </div>
  );
};

type TimeSlotProps = {
  date: Date;
  hour: number;
};
