const orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

function dogYears(planet, age) {
  const earthYears = age / 31557600;
  const planetYears = earthYears / orbitalPeriods[planet];
  const dogYears = planetYears * 7;
  return Number(dogYears.toFixed(2));
}
