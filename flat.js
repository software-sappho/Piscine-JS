function flat(array) {
  let result = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      result = result.concat(flat(item)); // recursively flatten
    } else {
      result.push(item); // push non-array value directly
    }
  }

  return result;
}
