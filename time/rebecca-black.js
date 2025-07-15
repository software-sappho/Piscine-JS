function isFriday(date) {
  return date.getDay() === 5; // 5 = Friday
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
}

function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
  const test = new Date(date);
  test.setDate(date.getDate() + 1); // move to next day
  return test.getDate() === 1; // if next day is 1st, then current is last
}
