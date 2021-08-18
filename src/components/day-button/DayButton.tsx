import { useSelector } from "react-redux";
import { State } from "../../store";
import { isToday, isSameDay } from "../../utilities/dates";

export const DayButton = ({ elementDate }: Props) => {
  const classList = getDayButtonClasses(elementDate);
  console.log(classList);
  return <button>{elementDate.getDate()}</button>;
};

type Props = {
  elementDate: Date;
};

const getDayButtonClasses = (elementDate: Date) => {
  const classList = [];
  const selectedDay = useSelector((state: State) => state.selectedDay);
  const calendarMonth = selectedDay.getMonth();

  if (calendarMonth !== elementDate.getMonth()) {
    classList.push("other-month");
  }

  if (isToday(elementDate)) {
    classList.push("current-day");
  }

  if (selectedDay && isSameDay(elementDate, selectedDay)) {
    classList.push("selected-day");
  }

  return classList;
};
