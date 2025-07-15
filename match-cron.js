function matchCron(cronString, date) {
  const [min, hour, day, month, weekday] = cronString.split(' ');

  const dateParts = {
    minute: date.getMinutes(),
    hour: date.getHours(),
    day: date.getDate(),
    month: date.getMonth() + 1, // getMonth() is 0-based
    weekday: date.getDay() === 0 ? 7 : date.getDay() // Convert Sunday (0) to 7
  };

  const cronParts = {
    minute: min,
    hour: hour,
    day: day,
    month: month,
    weekday: weekday
  };

  for (const key in cronParts) {
    const value = cronParts[key];
    if (value === '*') continue;
    if (parseInt(value, 10) !== dateParts[key]) return false;
  }

  return true;
}
