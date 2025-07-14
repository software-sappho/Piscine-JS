function firstDayWeek(week, year) {
  if (week < 1 || week > 53) return;

  const jan1 = new Date(year + "-01-01");
  const jan1Day = jan1.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat

  // Calculate how many days to add to get the first Monday on or after Jan 1
  // If Jan 1 is Monday (1), daysToAdd = 0
  // If Jan 1 is Sunday (0), daysToAdd = 1
  // Otherwise: daysToAdd = (8 - jan1Day) % 7
  const daysToAdd = (8 - jan1Day) % 7;

  // Calculate the date of the first Monday of week 1
  let firstMonday = new Date(jan1);
  firstMonday.setDate(jan1.getDate() + daysToAdd);

  // Calculate the Monday of the requested week (week-1) weeks after the first Monday
  let targetDate = new Date(firstMonday);
  targetDate.setDate(firstMonday.getDate() + (week - 1) * 7);

  // If targetDate is before Jan 1 (previous year), return Jan 1
  if (targetDate < jan1) targetDate = jan1;

  // Format date as dd-mm-yyyy
  const dd = String(targetDate.getDate()).padStart(2, '0');
  const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
  const yyyy = targetDate.getFullYear();

  return `${dd}-${mm}-${yyyy}`;
}
