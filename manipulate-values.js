function filterValues(obj, condition){
    const result = {};

    for (const [key, value] of Object.entries(obj)){
        if(condition(value)){
            result[key]=value;
        }
    }

    return result;
}

function mapValues(obj, condition){
    const result = {};

    for (const [key, value] of Object.entries(obj)){
        result[key] = condition(value)
    }
    return result;
}

function reduceValues(obj, callback, initialValue) {
  const values = Object.values(obj);
  
  // If no initialValue was passed
  let accumulator = initialValue !== undefined ? initialValue : values[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < values.length; i++) {
    accumulator = callback(accumulator, values[i]);
  }

  return accumulator;
}