Absolutely — here's a **simple and clear** explanation of **dot notation** vs **bracket notation** in JavaScript:

---

## 🟠 Dot Notation: `object.key`

### ✅ Works when:

* The **property name is fixed**
* It's a **valid variable name** (no spaces, starts with a letter, etc.)

### Example:

```js
const obj = {
  name: "Alex",
};

console.log(obj.name); // "Alex"
```

This means: “Give me the `name` property of `obj`.”

---

## 🟡 Bracket Notation: `object["key"]` or `object[key]`

### ✅ Works when:

* You have the **key as a string** or a **variable**
* The key might have **spaces**, **numbers first**, or **special characters**
* You need to **compute the key at runtime**

### Example:

```js
const obj = {
  name: "Alex",
};

console.log(obj["name"]); // "Alex"

const key = "name";
console.log(obj[key]); // also "Alex"
```

Now the key can come from a variable — super useful!

---

## 🔥 Key Difference

### Dot notation:

```js
obj.key; // looks for property literally called "key"
```

### Bracket notation:

```js
obj[key]; // uses the **value of the variable** key
```

---

### 💡 When to use each

| Use case                            | Use dot? | Use bracket? |
| ----------------------------------- | -------- | ------------ |
| Static key like `name`              | ✅ Yes    | ✅ Yes        |
| Dynamic key in a variable           | ❌ No     | ✅ Yes        |
| Key has space or special characters | ❌ No     | ✅ Yes        |

---

### 🧪 Example:

```js
const person = {
  "first name": "Riley",
  age: 22
};

person["first name"]; // ✅ "Riley"
person.age;           // ✅ 22

const key = "age";
person[key];          // ✅ 22

person.key;           // ❌ undefined (no property named "key")
```

---















```js
const circular = {
    'circular': circular,
}
```

❌ **Throws a `ReferenceError`**, because `circular` is being used **before it's defined** — which JavaScript doesn't allow during object initialization.

---

### ✅ Correct Way to Make a Circular Reference

You need to **first declare the object**, and **then assign the circular reference**:

```js
const circular = {};
circular.circular = circular;
```

Now `circular.circular.circular.circular...` will always point back to `circular` — infinitely. This is how you correctly create **self-referencing (circular)** structures in JavaScript.

---

### Why It Matters

Circular references can cause issues with:

* `JSON.stringify()` (will throw a `TypeError`)
* Deep copying
* Some serialization processes

Let me know if you’re using this for something specific and need help with that!


🔧 What does .slice(1) mean?
js
Copy
Edit
str.slice(1)
This returns a copy of the string from index 1 to the end (i.e. it skips the first character).

Example:
js
Copy
Edit
const str = "hello";
console.log(str.slice(1)); // "ello"
So if you want to capitalize only the first letter and lowercase the rest:

js
Copy
Edit
capitalize("hELLO")
➡ You want:

h → uppercase = H

ELLO → lowercase = ello

So: "H" + "ello" = "Hello"

exercises to read:
change
circular
declerations
dog-years
last first kiss
mutability





Absolutely — let’s walk through your code step by step and match it directly to the exercise instructions ✅.

---

## 🧪 Exercise Checklist Breakdown

### ✅ Part 1: `addWeek(date)`

> “Create a new function named `addWeek`, that takes a Date as an argument. Your function should return the weekday as a string, according to our new 14-day week format. The epoch of our new 14-day week is 0001-01-01, and that was a Monday.”

### 🧠 What your code does:

```js
const epoch = new Date('0001-01-01');
```

* ✅ Correctly sets the starting point (epoch), which is `Monday`.

```js
const week = [ /* ... 14-day array ... */ ];
```

* ✅ Matches the 14-day week format with `"secondMonday"` to `"secondSunday"`.

```js
function addWeek(date){
    const diff = date - epoch;
    const daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
    const index = daysPassed % 14;
    return week[index];
}
```

* ✅ Takes a `Date` as argument.
* ✅ Computes how many **full days** have passed since epoch.
* ✅ Uses `% 14` to find correct position in the custom week.
* ✅ Returns the **correct weekday string** from the new format.

📌 **Matches the example outputs**:

* `addWeek(new Date('0001-01-01'))` → `Monday`
* `addWeek(new Date('0001-01-08'))` → `secondMonday`

✅ **✅ This part is 100% correct and matches the spec.**

---

### ✅ Part 2: `timeTravel(object)`

> “Create a new function named `timeTravel`, that takes an object as an argument, and returns a Date. Use the information from the object to modify the time of the Date before returning it.”

### 🧠 What your code does:

```js
function timeTravel(object){
    const { date, hour, minute, second } = object;

    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);

    return date;
}
```

* ✅ Accepts an `object` with keys `date`, `hour`, `minute`, `second`.
* ✅ Modifies the `.date` object **in place** to set the new time.
* ✅ Returns the modified `Date`.

📌 **Matches the expected output**:

```js
timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
}).toString()
// Expected: Fri May 29 2020 21:22:22 ...
```

✅ **✅ This part is also 100% correct.**

---

## 🧾 Final Verdict

| Requirement                                              | Your Code |
| -------------------------------------------------------- | --------- |
| `addWeek(date)` returns new weekday based on 14-day week | ✅ Correct |
| Uses epoch `0001-01-01` as Monday                        | ✅ Correct |
| Calculates days passed accurately                        | ✅ Correct |
| `timeTravel(object)` modifies time of a Date             | ✅ Correct |
| Accepts and uses object fields properly                  | ✅ Correct |
| Returns a valid updated `Date`                           | ✅ Correct |

---

## 💯 Summary

Your code **fully satisfies the assignment requirements**. It's clean, efficient, and logically correct.

🚀 You’ve taken a real-world concept (time and dates), used core JS tools (`Date`, math, objects), and applied them successfully.

If you’d like, I can show you some bonus things you could try next — like adding error checking, or formatting output — but **as far as the original exercise goes, you're done and nailed it.** 🎉











Absolutely! Let’s walk through the code piece by piece and clarify what everything means, especially the trickier parts like `NaN`, `new Date()`, and how your `isValid`, `isFuture`, and `isPast` functions work.

---

## 1. `function isValid(date)`

### What it does:

Checks if the input `date` is a valid date representation — either as a Date object or as a number representing a timestamp.

### Breakdown:

```js
if (date instanceof Date) {
  return !isNaN(date);
}
```

* **`date instanceof Date`**
  Checks if `date` is an actual JavaScript Date object, like one created with `new Date()`.

  * Example: `new Date()` → true
  * Example: `"2024-01-01"` → false

* **`isNaN(date)`**

  * `NaN` means "Not a Number".
  * When JavaScript tries to interpret a Date, if it’s invalid (like `new Date("nonsense")`), its internal value becomes `NaN`.
  * `!isNaN(date)` means “date is NOT NaN” → so it’s a **valid date**.

---

```js
else if (typeof date === "number") {
  return !isNaN(new Date(date));
}
```

* If `date` is a **number** (for example, a timestamp from `Date.now()`),
* The function tries to create a Date object with that number: `new Date(date)`.
* Then checks if that new Date is valid (`!isNaN(...)`).

---

```js
else {
  return false;
}
```

* If `date` is neither a Date object nor a number, it’s **not valid**.

---

### Summary:

* If you give it a proper Date object, it checks if it’s valid.
* If you give it a timestamp number, it creates a Date and checks validity.
* Anything else → invalid.

---

## 2. `function isFuture(date)`

```js
return isValid(date) && date > new Date();
```

### What it does:

* Calls `isValid(date)` to make sure `date` is a valid date.
* Compares `date` to `new Date()` (which is **current time**).
* Returns `true` if the date is **valid and later than right now** (i.e., in the future).

---

## 3. `function isPast(date)`

```js
return isValid(date) && date < new Date();
```

### What it does:

* Checks if `date` is valid.
* Compares if `date` is **earlier than now**.
* Returns `true` if the date is **valid and before the current time** (i.e., in the past).

---

## 🔎 What is `new Date()`?

* This creates a new Date object representing the **current date and time**.
* For example, if you run `new Date()` right now, you get an object that holds "2025-07-14T...".
* You can also create dates from strings or numbers:

  * `new Date('2024-01-01')`
  * `new Date(1689379200000)` (timestamp in milliseconds)

---

## 🔎 What is `NaN`?

* **`NaN` means “Not a Number.”**

* It’s a special value in JavaScript used to represent an invalid or undefined numerical result.

* For example:

  * `parseInt("hello")` → `NaN`
  * `0 / 0` → `NaN`

* `isNaN(value)` is a function that returns `true` if `value` is `NaN`.

* So `!isNaN(date)` means: the date is **not** invalid.

---

## Summary in simple terms:

| Function   | What it checks                            | What it returns                 |
| ---------- | ----------------------------------------- | ------------------------------- |
| `isValid`  | Is this a valid Date object or timestamp? | `true` if valid, else `false`   |
| `isFuture` | Is this date valid AND after right now?   | `true` if date is in the future |
| `isPast`   | Is this date valid AND before right now?  | `true` if date is in the past   |

---

If you want, I can also give you example inputs and outputs to make this clearer! Would that help?
