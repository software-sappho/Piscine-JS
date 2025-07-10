function flat(array, depth = 1) {
  let result = [];

  for (let item of array) {
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(flat(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}
