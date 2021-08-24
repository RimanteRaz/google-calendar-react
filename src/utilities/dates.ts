export const DAYS_IN_A_WEEK = 7;
export const HOURS_IN_DAY = 24;

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
