export const getFirstAndLastDayOfWeek = (): [number, number] => {
  // the current date object
  const date = new Date();

  // the day of the month
  const dayOfMonth = date.getDate();

  // the index of the day of the week
  const dayOfWeekIndex = date.getDay();

  const first = dayOfMonth - dayOfWeekIndex;
  const last = first + 6;

  return [first, last];
};

export const getLastDayOfMonthDate = (): number => {
  // get date object
  const date = new Date();

  // gets next months first day... but then pulls back a day with the zero
  const lastDayDateObj = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const lastDayDate = lastDayDateObj.getDate();

  return lastDayDate;
};

export const getLastDayOfLastMonthDate = (): number => {
  // get date obj
  const date = new Date();

  // The date of the last day of last month
  const lastDayOfLastMonthObj = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  );

  // grab the date of that last day.
  const lastDayDateOfLastMonth = lastDayOfLastMonthObj.getDate();

  return lastDayDateOfLastMonth;
};

export const getDayOfTheWeek = () => {
  // get date obj
  const date = new Date();

  // The index of the day in the week
  const indexOfDayInWeek = date.getDay();

  return indexOfDayInWeek;
};
