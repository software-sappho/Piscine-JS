function format(date, formatStr) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsFull = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];
  const monthsShort = monthsFull.map(m => m.slice(0, 3));
  const eras = ["AD", "BC"]; // We'll just support Gregorian AD/BC
  const erasFull = ["Anno Domini", "Before Christ"];

  const replacements = {
    yyyy: String(date.getFullYear()).padStart(4, '0'),
    y: String(date.getFullYear()),
    GGGG: date.getFullYear() >= 1 ? erasFull[0] : erasFull[1],
    G: date.getFullYear() >= 1 ? eras[0] : eras[1],
    MMMM: monthsFull[date.getMonth()],
    MMM: monthsShort[date.getMonth()],
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    M: String(date.getMonth() + 1),
    dd: String(date.getDate()).padStart(2, '0'),
    d: String(date.getDate()),
    EEEE: weekdays[date.getDay()],
    E: weekdays[date.getDay()].slice(0, 3),
    hh: String(((date.getHours() % 12) || 12)).padStart(2, '0'),
    h: String(((date.getHours() % 12) || 12)),
    HH: String(date.getHours()).padStart(2, '0'),
    H: String(date.getHours()),
    mm: String(date.getMinutes()).padStart(2, '0'),
    m: String(date.getMinutes()),
    ss: String(date.getSeconds()).padStart(2, '0'),
    s: String(date.getSeconds()),
    a: date.getHours() < 12 ? 'AM' : 'PM'
  };

  // Match tokens or preserve literals in brackets or angle brackets
  return formatStr.replace(/\[(.*?)\]|<(.*?)>|yyyy|GGGG|hh|HH|mm|ss|MMM+|dd|EEEE|G|y|M+|d|E|h|H|m|s|a/g, match => {
    if (match.startsWith('[') || match.startsWith('<')) {
      return match.slice(1, -1); // Remove brackets or angle brackets
    }
    return replacements[match] || match;
  });
}
