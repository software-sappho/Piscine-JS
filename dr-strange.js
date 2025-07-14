const epoch = new Date('0001-01-01');

const week=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
]

function addWeek(date){

    const diff = date - epoch;
    const daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
    const index = daysPassed % 14;
    return week[index];
}

function timeTravel(object){

    const { date, hour, minute, second } = object;


    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);

    return date;

}