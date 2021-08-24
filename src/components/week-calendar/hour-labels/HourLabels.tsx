import { getHourLabel } from "../../../utilities/dates";
import { mapHours } from "../../../utilities/map";
import styles from "./HourLabels.module.scss";

export const HourLabels = () => {
  const generateHourLabels = (hourIndex: number) => {
    const hour = hourIndex + 1;
    const hourLabel = getHourLabel(hour);
    return (
      <div key={hourIndex} className={styles.hour}>
        <span>{hourLabel}</span>
      </div>
    );
  };

  const hourLabels = mapHours(generateHourLabels);

  return <div className={styles.hourLabels}>{hourLabels}</div>;
};
