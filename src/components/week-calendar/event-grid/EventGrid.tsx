import { useSelector } from "react-redux";
import { getStartOfSelectedWeek } from "../../../selectors";
import { getHourKey } from "../../../utilities/dates";
import { mapDaysInWeek, mapHours } from "../../../utilities/map";
import styles from "./EventGrid.module.scss";

export const EventGrid = () => {
  const firstDayOfWeek = useSelector(getStartOfSelectedWeek);

  const generateEventGrid = (_: undefined, weekIndex: number) => {
    const columnDate = new Date(firstDayOfWeek);
    columnDate.setDate(columnDate.getDate() + weekIndex);

    const generateEventGridCol = (_: undefined, hourIndex: number) => {
      const key = getHourKey(columnDate, hourIndex);
      return <div key={key} className={styles.timeSlot} onClick={() => console.log(key)}></div>;
    };

    return mapHours(generateEventGridCol);
  };

  const eventGrid = mapDaysInWeek(generateEventGrid);

  return <div className={styles.eventGrid}>{eventGrid}</div>;
};
