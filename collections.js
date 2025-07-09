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

// Object to Array (just values)
const objToArr = obj => Object.values(obj);

// Object to Map
const objToMap = obj => new Map(Object.entries(obj));

// Array to Object (as indexed keys)
const arrToObj = arr => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
};

// String to Object (as indexed characters)
const strToObj = str => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[i] = str[i];
  }
  return obj;
};

// Enhanced typeof
function superTypeOf(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'Array';
  if (value instanceof Map) return 'Map';
  if (value instanceof Set) return 'Set';
  if (typeof value === 'object') return 'Object';
  
  const t = typeof value;
  return t.charAt(0).toUpperCase() + t.slice(1); // Capitalize 'string' -> 'String'
}

