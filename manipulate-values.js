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
  const values = Object.values(obj);

  let accumulator;
  let startIndex;

  // If initialValue is passed, start from it; else start from first value
  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = values[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < values.length; i++) {
    accumulator = callback(accumulator, values[i]);
  }
  return accumulator;
}