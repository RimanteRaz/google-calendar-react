export const DAYS_IN_A_WEEK = 7;
export const HOURS_IN_DAY = 24;
export const MINUTES_IN_HOUR = 60;
export const SECONDS_IN_MINUTE = 60;
export const MILISECONDS_IN_SECOND = 1000;

export const getStartOfWeek = (today: Date) => {
  const date = new Date(today.toString());
  const pastSunday = date.setDate(date.getDate() - date.getDay());
  return new Date(pastSunday);
};

const getEndOfWeek = (today: Date) => {
  const date = new Date(today.toString());
  const futureSaturday = date.setDate(date.getDate() + 6 - date.getDay());
  return new Date(futureSaturday);
};

const getShortMonthName = (date: Date) => {
  const monthShort = new Intl.DateTimeFormat("en-GB", { month: "short" });
  return monthShort.format(date);
};

export const getMonthName = (date: Date) => {
  const monthLong = new Intl.DateTimeFormat("en-GB", { month: "long" });
  return monthLong.format(date);
};

export const getMonthAndYear = (date: Date) => {
  const startOfWeek = getStartOfWeek(date);
  const endOfWeek = getEndOfWeek(date);

  const startMonth = startOfWeek.getMonth();
  const endMonth = endOfWeek.getMonth();

  const startYear = startOfWeek.getFullYear();
  const endYear = endOfWeek.getFullYear();

  const startMonthShort = getShortMonthName(startOfWeek);
  const endMonthShort = getShortMonthName(endOfWeek);

  if (startYear < endYear) {
    return `${startMonthShort} ${startYear} - ${endMonthShort} ${endYear}`;
  } else if (startMonth < endMonth) {
    return `${startMonthShort} - ${endMonthShort} ${startYear}`;
  } else {
    const startMonthLong = getMonthName(startOfWeek);
    return `${startMonthLong} ${startYear}`;
  }
};

export const getDayAWeekLater = (date: Date) => {
  const weekLater = new Date(date);
  weekLater.setDate(date.getDate() + DAYS_IN_A_WEEK);
  return new Date(weekLater);
};

export const getDayAWeekAgo = (date: Date) => {
  const weekAgo = new Date(date);
  weekAgo.setDate(date.getDate() - DAYS_IN_A_WEEK);
  return new Date(weekAgo);
};

export const isToday = (date: Date) => {
  const today = new Date();
  return isSameDay(today, date);
};

export const isSameDay = (firstDate: Date, secondDate: Date) => {
  const firstDateStart = new Date(firstDate.toString()).setHours(0, 0, 0, 0);
  const secondDateStart = new Date(secondDate.toString()).setHours(0, 0, 0, 0);
  return firstDateStart === secondDateStart;
};

export const isSameHour = (firstDate: Date, secondDate: Date) => {
  return isSameDay(firstDate, secondDate) && firstDate.getHours() === secondDate.getHours();
};

export const incrementMonth = (date: Date) => {
  const newDate = new Date(date.toString());
  newDate.setMonth(date.getMonth() + 1);
  return newDate;
};

export const decrementMonth = (date: Date) => {
  const newDate = new Date(date.toString());
  newDate.setMonth(date.getMonth() - 1);
  return newDate;
};

export const getWeekdayLabel = (date: Date) => {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
  };
  const dateText = new Intl.DateTimeFormat("en-GB", dateFormatOptions).format(date);
  return dateText.toUpperCase();
};

export const getHourLabel = (hours: number) => {
  if (hours === 24) {
    return "";
  }
  const date = new Date();
  date.setHours(hours);
  const timeFormatOptions: Intl.DateTimeFormatOptions = {
    hour12: true,
    hour: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", timeFormatOptions).format(date).toUpperCase();
};

export const getHourKey = (date: Date, hour: number) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${hour}`;
};

export const isEndGreaterThanStart = (startTime: string, endTime: string) => {
  const [startHours, startMinutes] = startTime.split(":");
  const [endHours, endMinutes] = endTime.split(":");
  if (startHours > endHours || (startHours === endHours && startMinutes >= endMinutes)) {
    return false;
  }
  return true;
};

export const get12HourTime = (date: Date) => {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  };
  const timeLabel = new Intl.DateTimeFormat("en-GB", dateFormatOptions).format(date);
  return timeLabel.replace(" ", "");
};

export const getDateWithDiffHour = (date: Date, hour: number) => {
  const newDate = new Date(date);
  newDate.setHours(hour, 0, 0);
  return newDate;
};
