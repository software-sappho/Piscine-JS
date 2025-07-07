function dogYears(planet, age){
    if (planet === "earth") {
        const dogsYearsOnEarth = age / 31557600;
        const dogYearsEarth = dogsYearsOnEarth * 7;
        return dogYearsEarth;
    }
    // You can add other planets later
}

console.log(dogYears("earth", 31557600));  // should print 7
