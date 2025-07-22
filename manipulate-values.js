function filterValues(obj, condition){
    const result = {};

    for (const [key, value] of Object.entries(obj)){
        if(condition(value)){
            result[key]=value;
        }
    }

    return result;
}

function mapValues(obj, modifier){
    const result = {};

    for (const [key, value] of Object.entries(obj)){
        result[key] = modifier(value)
    }
    return result;
}

function reduceValues(obj, callback, initialValue) {
  // Extract all the values from the object into an array
  // Example: {a: 1, b: 2} => [1, 2]
  const values = Object.values(obj);

  // Declare accumulator variable to hold the running result of reduction
  let accumulator;
  // Index to know where to start looping through the values array
  let startIndex;

  // Check if an initial value for the accumulator was provided
  // If yes, use that as the starting value and start from the first value (index 0)
  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    // If no initialValue was passed,
    // start accumulator with the first value in the values array
    // and start looping from the second value (index 1)
    accumulator = values[0];
    startIndex = 1;
  }

  // Loop through the values starting from startIndex until the end of the array
  for (let i = startIndex; i < values.length; i++) {
    // On each iteration, update the accumulator by calling the callback function
    // callback takes the current accumulator and the current value and returns a new accumulator
    accumulator = callback(accumulator, values[i]);
  }

  // After processing all values, return the final accumulated result
  return accumulator;
}
