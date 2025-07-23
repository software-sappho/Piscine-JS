Absolutely! Let’s break down this rewritten code **step-by-step**, so you get how each part works — no assumptions, super clear.

---

### 1. **`defaultCurry`**

```js
function defaultCurry(obj1) {
  return function(obj2) {
    var res = {};
    for (var key in obj1) {
      res[key] = obj1[key];
    }
    for (var key in obj2) {
      res[key] = obj2[key];
    }
    return res;
  };
}
```

* This function **returns another function** (that’s the "curry" part).
* First, you call it with one object `obj1`.
* It returns a new function expecting another object `obj2`.
* When you call the returned function with `obj2`, it **merges** the two objects.
* It copies all keys/values from `obj1` to a new object `res`.
* Then it copies all keys/values from `obj2` to `res`, **overwriting** keys that were in `obj1`.
* Finally, it returns this merged object.

**Example:**

```js
var mergeWith = defaultCurry({a: 1, b: 2});
var result = mergeWith({b: 3, c: 4});
// result is {a: 1, b: 3, c: 4}
```

---

### 2. **`mapCurry`**

```js
function mapCurry(func) {
  return function(obj) {
    var res = {};
    for (var key in obj) {
      var entry = [key, obj[key]];
      var result = func(entry);
      var newKey = result[0];
      var newValue = result[1];
      res[newKey] = newValue;
    }
    return res;
  };
}
```

* This function returns another function that takes an object.
* The inner function loops over every key/value in the object.
* It turns each key/value pair into an array `[key, value]` called `entry`.
* It passes this `entry` to `func` — your custom function.
* Your function must return a **new entry array** `[newKey, newValue]`.
* These new entries build a **new object** `res`.
* This is like `.map` but for objects instead of arrays.

**Example:**

```js
var addSuffix = mapCurry(function([k, v]) {
  return [k + "_new", v];
});
var newObj = addSuffix({x: 10, y: 20});
// newObj is {x_new: 10, y_new: 20}
```

---

### 3. **`reduceCurry`**

```js
function reduceCurry(func) {
  return function(obj, val) {
    if (val === undefined) val = 0;
    var entries = Object.entries(obj);
    var rebuilt = Object.fromEntries(entries);
    for (var key in rebuilt) {
      var entry = [key, rebuilt[key]];
      val = func(val, entry);
    }
    return val;
  };
}
```

* Returns a function that **reduces an object to a single value**.
* The inner function takes an object and an optional starting value `val` (default `0`).
* It gets entries `[key, value]` from the object.
* It rebuilds the object (just to be safe, could skip this step).
* It loops through the object keys.
* For each entry, it calls your reduce function `func` passing:

  * The current accumulated value `val`
  * The current entry `[key, value]`
* Updates `val` with the result.
* Returns the final `val`.

**Example:**

```js
var sumValues = reduceCurry(function(acc, [k, v]) {
  return acc + v;
});
var total = sumValues({a: 1, b: 2, c: 3});
// total is 6
```

---

### 4. **`filterCurry`**

```js
function filterCurry(func) {
  return function(obj) {
    var res = {};
    for (var key in obj) {
      var entry = [key, obj[key]];
      if (func(entry)) {
        res[key] = obj[key];
      }
    }
    return res;
  };
}
```

* Returns a function that **filters the entries of an object**.
* The inner function loops over the object’s keys.
* For each entry `[key, value]`, it calls your filter function `func`.
* If `func` returns `true`, the entry is kept in the new object `res`.
* Otherwise, it’s ignored.
* Returns the filtered object.

**Example:**

```js
var keepStrings = filterCurry(function([k, v]) {
  return typeof v === 'string';
});
var filtered = keepStrings({a: 'hello', b: 5, c: 'world'});
// filtered is {a: 'hello', c: 'world'}
```

---

### 5. **`reduceScore`**

```js
function reduceScore(personnel, val) {
  var onlyForceUsers = filterCurry(function(entry) {
    var value = entry[1];
    return value.isForceUser;
  })(personnel);

  return reduceCurry(function(acc, entry) {
    var value = entry[1];
    return acc + value.pilotingScore + value.shootingScore;
  })(onlyForceUsers, val);
}
```

* This function takes a `personnel` object and an optional `val`.
* First, it **filters** to keep only force users (those where `isForceUser` is true).
* Then, it **reduces** over those force users to sum their `pilotingScore` + `shootingScore`.
* Returns the total score sum.

---

### 6. **`filterForce`**

```js
var filterForce = filterCurry(function(entry) {
  var value = entry[1];
  return value.isForceUser && value.shootingScore >= 80;
});
```

* Uses `filterCurry` to create a function that keeps only force users with shooting score >= 80.

---

### 7. **`mapAverage`**

```js
var mapAverage = mapCurry(function(entry) {
  var key = entry[0];
  var value = entry[1];
  var averageScore = (value.pilotingScore + value.shootingScore) / 2;

  var newValue = {};
  for (var prop in value) {
    newValue[prop] = value[prop];
  }
  newValue.averageScore = averageScore;

  return [key, newValue];
});
```

* Uses `mapCurry` to add a new property `averageScore` to each person.
* Creates a copy of each person's object with the new `averageScore`.
* Returns a new object with these updated entries.

---

# **Summary**

* The outer functions like `defaultCurry`, `mapCurry`, etc. are **higher-order functions** — they return new functions that do stuff with objects.
* The inner functions take objects and loop through keys with `for...in`.
* They use your provided callback (`func`) on entries `[key, value]`.
* They build new objects or accumulate values as needed.

---


