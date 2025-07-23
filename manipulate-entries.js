// helpers
function reduceEntries(obj, callback, initial) {
  return Object.entries(obj).reduce((acc, [k, v]) => callback(acc, [k, v]), initial);
}

function filterEntries(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => callback([k, v]))
  );
}

function mapEntries(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => callback([k, v]))
  );
}



// main functions
function totalCalories(cart) {
  const total = reduceEntries(cart, (acc, [item, grams]) => {
    const nutrition = nutritionDB[item];
    const calPerGram = nutrition.calories / 100;
    return acc + calPerGram * grams;
  }, 0);
  
  return +total.toFixed(1); // fix floating-point error here
}


function lowCarbs(cart) {
  return filterEntries(cart, ([item, grams]) => {
    const nutrition = nutritionDB[item];
    const totalCarbs = nutrition.carbs * grams / 100;
    return totalCarbs < 50;
  });
}

function cartTotal(cart) {
  return mapEntries(cart, ([item, grams]) => {
    const nutrition = nutritionDB[item];
    const scaled = {};
    for (const key in nutrition) {
      scaled[key] = +(nutrition[key] * grams / 100).toFixed(2);
    }
    return [item, scaled];
  });
}
