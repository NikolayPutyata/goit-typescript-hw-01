enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

const isWeekend = (day: string): boolean => {
  const lowerDay = day.toLowerCase();
  return lowerDay === DayOfWeek.Saturday.toLowerCase() || lowerDay === DayOfWeek.Sunday.toLowerCase();
};
