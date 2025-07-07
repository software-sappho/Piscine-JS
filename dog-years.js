function dogYears(planet, age){
    if (planet === "earth") {
        const dogsYearsOnEarth = age / 31557600;
        const dogYearsEarth = dogsYearsOnEarth * 7;
        return dogYearsEarth;
    }else if (planet === "mercury"){
        const earthYears = age / 31557600;
        const mercuryYears = earthYears / 0.2408467;
        const mercuryDogYears = mercuryYears * 7;
        return mercuryDogYears;

    }
    // You can add other planets later
}

console.log(dogYears("earth", 31557600));  // should print 7
