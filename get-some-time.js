function firstDayWeek(weekNumber, year) {
  const jan1 = new Date(`${year}-01-01`);
  const jan1Day = jan1.getDay(); // 0 (Sun) to 6 (Sat)

  // Calculate the offset from Jan 1 to the first Monday
  const offset = jan1Day === 0 ? 1 : 8 - jan1Day;

  // Calculate the first Monday of the year
  const firstMonday = new Date(jan1);
  firstMonday.setDate(jan1.getDate() + offset - (weekNumber === 1 ? 0 : 7));

  // Calculate the start date of the requested week
  const weekStart = new Date(firstMonday);
  weekStart.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);

  // If the week start is before Jan 1, return Jan 1
  if (weekStart < jan1) {
    return formatDate(jan1);
  }

  return formatDate(weekStart);
}

// Helper function to format date as dd-mm-yyyy
function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}
