import { useSelector } from "react-redux";
import { getStartOfSelectedWeek } from "../../../selectors";
import { getHourKey } from "../../../utilities/dates";
import { mapDaysInWeek, mapHours } from "../../../utilities/map";
import styles from "./EventGrid.module.scss";

export const EventGrid = () => {
  const firstDayOfWeek = useSelector(getStartOfSelectedWeek);

  const generateEventGridCol = (columnDate: Date, hourIndex: number) => {
    const key = getHourKey(columnDate, hourIndex);
    return <div key={key} className={styles.timeSlot}></div>;
  };

  const generateEventGrid = (startDate: Date, weekIndex: number) => {
    const columnDate = new Date(startDate);
    columnDate.setDate(columnDate.getDate() + weekIndex);
    return mapHours(generateEventGridCol, columnDate);
  };

  const eventGrid = mapDaysInWeek(generateEventGrid, firstDayOfWeek);

  return <div className={styles.eventGrid}>{eventGrid}</div>;
};
