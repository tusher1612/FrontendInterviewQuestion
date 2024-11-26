# Deep Copy and Shallow Copy in JavaScript

## **Overview**

Deep copy and shallow copy are essential concepts in JavaScript when dealing with objects and arrays.

- **Shallow Copy:** Copies only the reference to the object/array. Modifications in the copied reference reflect in the original.
- **Deep Copy:** Creates a completely new copy of the object/array, breaking the reference. Changes to the copied object do not affect the original.

---

## **Deep Copy for Primitive Types**

For primitives (e.g., numbers, strings, booleans), assignment creates a deep copy:

```javascript
let x = 20;
let y = x;
y = 30; // Updating `y` does not affect `x`
console.log(x); // 20
console.log(y); // 30
```

---

## **Shallow Copy Example**

Shallow copying happens with objects and arrays:

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = arr1; // Shallow copy
arr2.push(5);
console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]
```

Here, modifying `arr2` also changes `arr1` because both point to the same memory reference.

---

## **Breaking the Connection for a Deep Copy**

### **For Arrays**

To create a deep copy of an array, use the spread operator (`...`) or similar techniques:

```javascript
function test() {
  let arr1 = [1, 2, 3, 4];
  let arr2 = [...arr1]; // Deep copy
  arr2.push(5);
  console.log(arr1); // [1, 2, 3, 4]
  console.log(arr2); // [1, 2, 3, 4, 5]
}
test();
```

---

### **For Objects**

#### **Shallow Copy**

Using `Object.assign` or the spread operator creates a shallow copy of objects:

```javascript
const user1 = {
  name: "Vasooli",
  age: 25,
  location: {
    city: "Rumbalala",
    state: "Bengaluru",
  },
};
const user2 = Object.assign({}, user1);
user2.name = "Raja"; // Modifies `user2` only
console.log(user1); // Original remains unchanged
console.log(user2); // Modified copy
```

#### **Deep Copy of Nested Objects**

To deep copy nested objects, use `JSON.parse(JSON.stringify(obj))`. However, it has **limitations** (explained below).

```javascript
const user2 = JSON.parse(JSON.stringify(user1));
user2.location.city = "Hulala";
console.log(user1.location.city); // "Rumbalala" (original is unaffected)
console.log(user2.location.city); // "Hulala"
```

---

## **When Not to Use `JSON.parse(JSON.stringify(obj)`**

The method fails for objects with:

1. **Date Objects:** Dates are serialized as strings.
2. **Special Values:** `Infinity`, `NaN`, and `undefined` are not supported.
3. **Functions:** Functions are ignored entirely.

### **Examples**

#### **Date Objects**

```javascript
function Q4_1() {
  const obj1 = { sampleDate: new Date() };
  const obj2 = JSON.parse(JSON.stringify(obj1));
  console.log(obj1.sampleDate); // Original Date object
  console.log(obj2.sampleDate); // Converted to string
}
Q4_1();
```

#### **Special Values and Functions**

```javascript
function Q4_3() {
  const obj1 = {
    myFunction: () => "Hello",
    myValue: -Infinity,
    otherValue: undefined,
    value2: NaN,
  };
  const obj2 = JSON.parse(JSON.stringify(obj1));
  console.log(obj1); // Original object
  console.log(obj2); // Functions omitted, Infinity and NaN converted to null
}
Q4_3();
```

---

## **Solutions for Reliable Deep Copy**

### 1. **Using Lodash**

Lodash's `_.cloneDeep` method provides a reliable deep copy mechanism:

```javascript
const _ = require("lodash");

const obj1 = {
  myFunction: () => "Hello",
  myValue: -Infinity,
  otherValue: undefined,
  value2: NaN,
};
const obj2 = _.cloneDeep(obj1);
console.log(obj1);
console.log(obj2);
```

---

### 2. **Manual Copying**

Manually copying objects works for simple structures but becomes cumbersome for nested objects:

```javascript
const obj1 = { name: "Vasooli", age: 25 };
const obj2 = { name: obj1.name, age: obj1.age };
console.log(obj2);
```

---

### 3. **Recursive Deep Copy Approach**

This approach works for any object, including nested structures:

```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]); // Recursive call
    }
  }
  return copy;
}

function testDeepCopy() {
  const obj1 = {
    name: "Vasooli",
    location: { city: "Rumbalala", state: "Bengaluru" },
    myFunction: () => "Hello",
    myValue: -Infinity,
    value2: NaN,
  };
  const obj2 = deepCopy(obj1);
  obj2.location.city = "Hulala";
  console.log(obj1); // Original remains unchanged
  console.log(obj2); // Deep copied object
}
testDeepCopy();
```

---

## **Conclusion**

- Use `JSON.parse(JSON.stringify(obj))` cautiously, as it fails for special values, dates, and functions.
- Prefer `Lodash` for simplicity or write a **recursive deep copy function** for more control.
- Manual copying works well for small, simple objects but is impractical for complex structures.
