enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}


const isWeekend = (day: string): boolean => {
    if (day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
        return false;
    } else {
        return true;
    }
}
