function flat(array) {
  let result = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      result = result.concat(item); // only flatten one level
    } else {
      result.push(item);
    }
  }

  return result;
}
