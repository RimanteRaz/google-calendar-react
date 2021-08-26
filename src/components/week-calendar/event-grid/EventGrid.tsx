import { useSelector } from "react-redux";
import { getStartOfSelectedWeek } from "../../../selectors";
import { getHourKey } from "../../../utilities/dates";
import { mapDaysInWeek, mapHours } from "../../../utilities/map";
import styles from "./EventGrid.module.scss";
import { TimeSlot } from "./time-slot";

export const EventGrid = () => {
  const firstDayOfWeek = useSelector(getStartOfSelectedWeek);

  const generateEventGrid = (weekIndex: number) => {
    const columnDate = new Date(firstDayOfWeek);
    columnDate.setDate(columnDate.getDate() + weekIndex);

    const generateEventGridCol = (hourIndex: number) => {
      const key = getHourKey(columnDate, hourIndex);
      return <TimeSlot key={key} date={columnDate} hour={hourIndex} />;
    };

    return mapHours(generateEventGridCol);
  };

  const eventGrid = mapDaysInWeek(generateEventGrid);

  return <div className={styles.eventGrid}>{eventGrid}</div>;
};
