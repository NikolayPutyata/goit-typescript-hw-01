enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: string): boolean => {
    if (day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
        return false;
    } else {
        return true;
    }
}
