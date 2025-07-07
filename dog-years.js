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
    }else if (planet === "venus"){
        const earthYears = age / 31557600;
        const mercuryYears = earthYears / 0.61519726;
        const mercuryDogYears = mercuryYears * 7;
        return mercuryDogYears;
    }else if (planet === "mars"){
        const earthYears = age / 31557600;
        const mercuryYears = earthYears / 1.8808158;
        const mercuryDogYears = mercuryYears * 7;
        return mercuryDogYears;
    }else if (planet === "jupiter"){
        const earthYears = age / 31557600;
        const mercuryYears = earthYears / 11.862615;
        const mercuryDogYears = mercuryYears * 7;
        return mercuryDogYears;
    }else if (planet === "saturn"){
        const earthYears = age / 31557600;
        const mercuryYears = earthYears / 29.447498;
        const mercuryDogYears = mercuryYears * 7;
        return mercuryDogYears;
    }else if (planet === "uranus"){
        const earthYears = age / 31557600;
        const mercuryYears = earthYears / 84.016846;
        const mercuryDogYears = mercuryYears * 7;
        return mercuryDogYears;
    }else if (planet === "neptune"){
        const earthYears = age / 31557600;
        const mercuryYears = earthYears / 164.79132;
        const mercuryDogYears = mercuryYears * 7;
        return mercuryDogYears;
    }else{
        return "unsupported planet"
    }
}