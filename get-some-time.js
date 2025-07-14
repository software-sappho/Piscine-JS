function firstDayWeek(week, year) {
  if (week < 1 || week > 53) return;

  const jan1 = new Date(year + "-01-01");

  if (week === 1) {
    // Week 1 always starts on Jan 1 (even if not Monday)
    const dd = String(jan1.getDate()).padStart(2, '0');
    const mm = String(jan1.getMonth() + 1).padStart(2, '0');
    const yyyy = jan1.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }

  // For weeks after 1:
  const jan1Day = jan1.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
  const daysToAdd = (8 - jan1Day) % 7; // days to next Monday on or after Jan 1

  let firstMonday = new Date(jan1);
  firstMonday.setDate(jan1.getDate() + daysToAdd);

  // Calculate Monday of the requested week (week-2 weeks after the first Monday)
  let targetDate = new Date(firstMonday);
  targetDate.setDate(firstMonday.getDate() + (week - 2) * 7);

  // If targetDate is before Jan 1 (should not happen here), reset to Jan 1
  if (targetDate < jan1) targetDate = jan1;

  // Format date as dd-mm-yyyy
  const dd = String(targetDate.getDate()).padStart(2, '0');
  const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
  const yyyy = targetDate.getFullYear();

  return `${dd}-${mm}-${yyyy}`;
}
