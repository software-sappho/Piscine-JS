function countLeapYears(date) {
  const year = date.getFullYear();
  
  // Formula:
  // Leap years = (div by 4) - (div by 100) + (div by 400)
  const leapYears = Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);

  return leapYears;
}
