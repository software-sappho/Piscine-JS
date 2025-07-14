function isValid(date) {
  if (date instanceof Date) {
    return !isNaN(date);
  } else if (typeof date === "number") {
    return !isNaN(new Date(date));
  } else {
    return false;
  }
}

function isAfter(date1, date2){
    return date1 > date2;
}

function isBefore(date1, date2){
    return date1 < date2;
}

function isFuture(date){
    return isValid(date) && date > new Date();
}

function isPast(date){
    return isValid(date) && date < new Date();
}