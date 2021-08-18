const DAYS_IN_A_WEEK = 7;

const getStartOfWeek = (today: Date) => {
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

const getMonthName = (date: Date) => {
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
