// Array to Set
const arrToSet = arr => new Set(arr);

// Array to String
const arrToStr = arr => arr.join('');

// Set to Array
const setToArr = set => [...set];

// Set to String
const setToStr = set => [...set].join('');

// String to Array
const strToArr = str => str.split('');

// String to Set
const strToSet = str => new Set(str);

// Map to Object
const mapToObj = map => {
  const obj = {};
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
};

// Object to Array (key-value pairs)
const objToArr = obj => Object.values(obj);

// Object to Map
const objToMap = obj => new Map(Object.entries(obj));

// Array to Object (assumes array of [key, value] pairs)
const arrToObj = arr => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
};

// String to Object (parses JSON string)
const strToObj = str => {
  try {
    return JSON.parse(str);
  } catch {
    return null;  // Return null if string is not valid JSON
  }
};

// Enhanced typeof that recognizes Map, Set, Array, and null
function superTypeOf(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  if (value instanceof Map) return 'map';
  if (value instanceof Set) return 'set';
  if (typeof value === 'object') return 'object';
  return typeof value;
}
